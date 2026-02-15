# Specification

## Summary
**Goal:** Send contact-form submission details to a dedicated WhatsApp number while keeping the site’s general WhatsApp chat links unchanged.

**Planned changes:**
- Update the post-submission WhatsApp CTA (with prefilled contact-form details) to open a wa.me link targeting +919181768591.
- Keep all existing “Chat on WhatsApp”/global WhatsApp links (header/footer/contact sections) targeting +919182768591.
- Centralize both WhatsApp numbers in a single frontend config source and ensure WhatsApp-related user-facing labels remain in English.

**User-visible outcome:** After submitting the contact form, users can tap a WhatsApp button that opens a prefilled message to +919181768591, while all other WhatsApp chat buttons on the site continue to open chats to +919182768591.
