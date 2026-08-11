INDGEOAI V4 — alignment/cache fix

Why this version:
The live screenshot showed that the browser was using an older cached stylesheet:
the HTML loaded, but newer classes such as .logo-img and the navigation grid were
not receiving the intended layout rules.

Fixes:
- Renamed CSS to indgeoai-v4.css
- Renamed JS to indgeoai-v4.js
- Added ?v=4 cache-busting references
- Added critical header/hero layout CSS inline as a fallback
- Hardened logo dimensions, nav alignment, responsive breakpoints, cards and grids
- Kept assets/logo.png and assets/favicon.png

Upload ALL files/folders in this package to the repository root.
It is okay to leave old styles.css/app.js in GitHub temporarily, but they are no
longer referenced. You may delete the old two files afterward.

After GitHub Pages redeploys, use Ctrl+F5 once.
