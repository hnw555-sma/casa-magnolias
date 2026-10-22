# Casa Magnolias — Static Website

This site is hosted on GitHub Pages with the custom domain `casamagnolias.net`.

## Files
- `index.html` — markup and photo galleries
- `css/styles.css` — styling
- `js/site.js` — timeline, renderings and carousel
- `js/gallery.js` — photo lightbox
- `js/language.js` — English / Mexican Spanish switch
- `assets/images/` — the actual image files, extracted from the previously embedded base64 photos

## Update
To add an image, put an optimized `.webp` or `.jpg` under `assets/images/`, then add a reference in the relevant gallery. **Use relative paths** such as `assets/images/my-photo.webp`.

Upload the **contents** of this ZIP to the root of the `main` branch. GitHub web upload requires dragging the directories or their contents with their folder hierarchy intact, or use GitHub Desktop to publish the whole folder. Do not upload the ZIP itself.

Keep the `CNAME` file in the repository; it points the site at `casamagnolias.net`. GitHub Pages may also recreate it from Settings → Pages → Custom domain.

## Validation
Run `python tools/validate.py` from the site root to verify every referenced image, script, and stylesheet exists.

Privacy: `noindex, nofollow` remains in the HTML but does not restrict public access.

## Version 20
- Adds a 47.5-second bilingual montage with Mexican guitar accompaniment in `assets/videos/`.
- Retains the October 22 bedroom and sala flooring photos from Version 19 in Interior Progress.
- Videos use the native HTML5 player (click to play; no autoplay).
- All files in this archive should be uploaded preserving directory structure; the `CNAME` should remain in the repository.
