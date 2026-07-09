# Bhavishya0007.github.io

Personal portfolio site, served directly by GitHub Pages from `main`. No build step — plain HTML/CSS/JS.

**Live:** https://bhavishya0007.github.io/

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Structure

- `index.html` — page content and structure
- `style.css` — all styling
- `script.js` — scroll-reveal animations, skill bar fill, active-nav highlighting
- `assets/Bhavishya_Kumar_CV.pdf` — resume, linked from the "Resume" button
- `assets/projects/` — project screenshots used in the Featured Projects section

## Updating content

- **Resume:** replace `assets/Bhavishya_Kumar_CV.pdf` with a new file of the same name — no HTML changes needed.
- **Project screenshots:** drop a new image into `assets/projects/` and reference it in the relevant `<img>` tag in `index.html`.
- **Experience / education / skills / projects text:** edit directly in `index.html`.

## Deploying

Push to `main` — GitHub Pages redeploys automatically. No manual build or release step.
