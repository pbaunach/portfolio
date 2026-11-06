# Screen mocks

HTML/Tailwind recreations of product screenshots, rendered to PNG for the case study pages.
Folders starting with `_` are skipped by Jekyll, so nothing here is published as a page.

## Aspireship

- One HTML file per screen in `aspireship/`, named after the screenshot it replaces
  (`course-01.html` rebuilds `assets/img/aspireship-screens/Course-01.png`).
- Brand tokens live in `aspireship/brand.js` (Tailwind config) and `aspireship/brand.css`
  (the brand gradients as `.g-*` classes): purple `#4810A4`, ink `#001226`, and the seven
  brand grays. Type is Poppins. `aspireship/parts.js` holds the shared employer and admin
  sidebars.
- Photos, video frames and achievement badges are cropped from the original screenshots
  into `aspireship/img/`.
- Keep each screen's real content and structure. Restyle only; never add outcome claims.
- Brand illustrations are inline SVG line art (rocket, planet, mug) with `+`, dot and ring
  sparkles, in purple and ink on white or white on purple.

Render at 2x the original screenshot size. Pass the original's width and height in CSS px
(the default is 1363x908, which becomes 2726x1816). Each file's header comment has its
exact render command.

```bash
sh _screen-mocks/aspireship/render.sh employer-01 Employer-01-polished 1361 1025
```

The output lands next to the original as `<Name>-polished.png`, so the page can switch over
once the direction is approved.
