# Specification

## Summary
**Goal:** Make Contact form submissions automatically open a WhatsApp chat after success, and also trigger an automated server-side WhatsApp notification to the owner/operator without relying on the visitor pressing “Send”.

**Planned changes:**
- Update the Contact page success flow to attempt opening the WhatsApp deep link (new tab/window) immediately after a successful submission, using the existing `formatContactFormMessage(...)` output and `siteConfig.whatsapp.contactFormNumber`, while keeping the existing post-success WhatsApp button as a fallback if the popup is blocked.
- Add a backend step on contact submission creation to call a configurable external WhatsApp messaging provider over HTTPS to send the same formatted contact details automatically to the configured owner/operator number.
- Store per-submission WhatsApp notification observability metadata (attempted/succeeded/failed, timestamps, and short status/error string) and expose it only to admins when retrieving submissions; show an English notice in the UI if automated notification fails while still storing the submission.

**User-visible outcome:** After submitting the contact form, the site attempts to open a prefilled WhatsApp chat automatically, while the system also tries to send the message to the owner/operator automatically in the background; if automatic notification or popup opening fails, the user still has a visible WhatsApp link/button and the submission is not lost.
