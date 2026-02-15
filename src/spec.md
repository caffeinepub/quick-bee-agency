# Specification

## Summary
**Goal:** Improve the WhatsApp “Continue on WhatsApp” deep-link message after Contact form submission to include all client-entered details in a clear, scan-friendly format, and always send to the configured contact-form WhatsApp number.

**Planned changes:**
- Update the WhatsApp wa.me link generation to always use `siteConfig.whatsapp.contactFormNumber` (not the general site WhatsApp number).
- Expand the prefilled WhatsApp message to include labeled lines for Name, Email, Phone, and Message with line breaks for readability.
- Ensure the Phone line is always present, using a placeholder (e.g., “Not provided”) when the field is empty.

**User-visible outcome:** After successfully submitting the Contact form, clicking “Continue on WhatsApp” opens WhatsApp with a prefilled message containing all submitted contact details (including a phone placeholder if omitted) and targets the dedicated contact-form WhatsApp number.
