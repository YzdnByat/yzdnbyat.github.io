# Apply the navigation, footer and glass update

1. Extract this ZIP.
2. In your yzdnbyat.github.io repository, replace index.html, contact.html, styles.css and script.js with the files from the extracted folder.
3. Commit to main with: Add floating glass navigation and a new footer.
4. Wait for GitHub Pages to finish deploying, then refresh your website. Use Ctrl+F5 if the previous design is still cached.

The assets folder is unchanged from the previous version. The complete ZIP includes it, along with your CV, Telegram QR and existing README, if you prefer to upload the whole website.

## What changed

- A fixed, translucent navigation capsule stays at the top of both pages while scrolling. Anchor links allow room below it for section headings.
- On phones, Explore opens a menu with all sections, your CV and the contact page.
- Page changes use a longer overlapping fade and a small vertical movement in browsers supporting cross-document View Transitions. The navigation stays in place. Ordinary links, browser history and downloads retain their native behavior.
- Buttons have fuller rounded edges, a brighter glass rim, inner reflections, backdrop blur and a cursor-following highlight. Footer contact tiles receive the same effect.
- Both pages have a footer with your portrait, name, background, automatic copyright year, source link, Explore links and labelled social links. The portrait is displayed from the existing Telegram image; the original QR file is preserved.
- Keyboard focus, touch input and reduced-motion preferences are supported. Browsers without backdrop blur receive a more opaque navigation surface.

## Verification

JavaScript syntax, local links and anchors, accessible link names, mobile menu interactions, pointer effects and reduced-motion gates passed checks. Browser visual inspection was unavailable in this session. The glass effect is a web interpretation inspired by Liquid Glass.
