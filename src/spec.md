# Specification

## Summary
**Goal:** Make the website fully functional end-to-end, update site-wide contact/WhatsApp details to the provided number, and add a new service entry.

**Planned changes:**
- Update centralized site configuration to include the WhatsApp display number (+91 9182768591), WhatsApp wa.me link (https://wa.me/919182768591) with a prefilled message query string, and a phone value usable for tel: links (e.g., tel:+919182768591).
- Add a visible click-to-call phone contact option (tel:+919182768591) where contact methods are listed (at minimum: Footer and Contact page), and ensure WhatsApp CTAs use the updated wa.me link and open in a new tab.
- Add a new Services page entry titled "Complete Business Automation System" with the same fields/structure as existing services (whatItIs, whyItMatters, businessImpact) and conversion-focused English copy.
- Verify/fix end-to-end functionality: navigation links and primary internal CTAs route correctly, and the contact form submits successfully for guest users with clear success/error feedback; backend accepts and stores submissions without requiring Internet Identity login.

**User-visible outcome:** Visitors can navigate all pages and CTAs without errors, contact the business via click-to-call or WhatsApp using the new number, see the new “Complete Business Automation System” service on the Services page, and submit the contact form successfully as a guest with clear feedback.
