# Specification

## Summary
**Goal:** Update the site branding to “Quick bee Agency” and replace the header/footer logo with the user-uploaded Quick bee logo.

**Planned changes:**
- Update `siteConfig.name` in `frontend/src/config/site.ts` to exactly “Quick bee Agency” so all UI using `siteConfig` reflects the new brand name.
- Update the HTML document title in `frontend/index.html` to include “Quick bee Agency”.
- Replace the current generated logo asset used by the header and footer with a version based on the uploaded Quick bee logo, keeping the same rendered size and ensuring it looks clean on the dark theme.

**User-visible outcome:** The site displays “Quick bee Agency” as the brand name (including the browser tab title), and the header/footer show the Quick bee logo without layout changes.
