# Specification

## Summary
**Goal:** Make the Contact form open WhatsApp reliably after submission without being blocked by browser popup-blockers, and improve the popup-blocked messaging logic and text.

**Planned changes:**
- Update the Contact form submit handler to create a new tab/window synchronously on the user’s submit click (before any async backend submission).
- After backend submission succeeds, navigate the already-opened tab/window to the existing generated WhatsApp deep link (using the current wa.me URL-encoded format).
- Detect when the new tab/window could not be created (popup blocked) and only then show a manual “Open WhatsApp” fallback button with the prefilled link.
- Adjust Contact page UX text for this flow to be clear English, and ensure the “browser blocked” warning is not shown for backend submission errors.

**User-visible outcome:** Submitting the Contact form opens WhatsApp in a single new tab/window more reliably; if the browser blocks it, the user sees clear English instructions and a button to open WhatsApp manually with their details prefilled.
