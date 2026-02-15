# Specification

## Summary
**Goal:** Update the site contact email address everywhere it is sourced from `siteConfig.contact.email` to `hello.quickbeeagency,com`.

**Planned changes:**
- Change `siteConfig.contact.email` in `frontend/src/config/site.ts` to exactly `hello.quickbeeagency,com`.
- Verify all UI locations using `siteConfig.contact.email` (including displayed email text and `mailto:` links, such as the footer and Contact page) reflect `hello.quickbeeagency,com`.

**User-visible outcome:** The footer and Contact page display `hello.quickbeeagency,com`, and clicking the email opens a mailto link to `hello.quickbeeagency,com`.
