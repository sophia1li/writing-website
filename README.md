# sophialynnli.com

Personal writing site for Sophia Lynn Li — medical student, writer, journalist.

A single static page: HTML, CSS, a sprinkle of JS. No framework, no build step.

## Files

- `index.html` — content & structure
- `styles.css` — all styling (palette, typography, water background, animations)
- `script.js` — custom anatomical-heart cursor + gentle scroll reveals
- `assets/portrait.jpg` — drop your portrait here (square ~600×600 looks best)
- `assets/` — any other images you want to add

## Preview locally

Open `index.html` in a browser, or run a quick local server so font loading and
relative paths behave correctly:

```bash
cd /Users/sophiali/writing-website
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding your portrait

Save your photo as `assets/portrait.jpg`. The hero will pick it up automatically
(a soft slate-blue placeholder shows in the meantime).

For best results: square crop, ~600×600, face roughly centered.

## Swapping the water background for a real image

The background is generated with CSS + SVG turbulence — no image required. If
you'd like to use a real "light through water surface" photo, save it to
`assets/water.jpg` and replace the `.water-bg` block in `styles.css`:

```css
.water-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: url("assets/water.jpg") center / cover no-repeat;
}
```

You can keep the `.caustics-1`, `.caustics-2`, and `.vignette` layers — they
overlay nicely on a real photo too, or delete them for a cleaner look.

## Editing content

All copy and links live directly in `index.html`. To add a piece, copy any
existing `<li>` inside the appropriate `.works` list and edit the URL, title,
and meta line.

## Deployment

Drop the whole folder onto any static host:

- **Vercel** — `vercel deploy` from this directory
- **Netlify** — drag-and-drop the folder at app.netlify.com
- **GitHub Pages** — push to a repo, enable Pages on the main branch
- **Cloudflare Pages** — connect the repo, no build command needed

## Design notes

- Palette: cool slate blues, soft grays, icy pastels (see `:root` in `styles.css`)
- Typography: Cormorant Garamond (display) + EB Garamond (body) + Inter (meta)
- Medical motifs: anatomical-heart cursor with subtle ECG trace, heart ornament
  beside the "Selected Writing" heading, ECG line above the footer
- Background: layered radial gradients + two animated SVG-turbulence caustics
  that drift slowly to evoke light through water
