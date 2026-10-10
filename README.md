# Casa Magnolias

A simple, mobile-friendly construction journal for Hank and Paty's home in San Miguel de Allende, México. No build tools or dependencies required.

## Preview locally

Open `index.html` in a browser. A basic preview works even without hosting.

## Publish to GitHub Pages

1. Sign into [github.com](https://github.com) and create a **public** repository named `casa-magnolias`.
2. Upload the contents of this folder to the repository root (`index.html` must be at the root). Commit the changes.
3. Under **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, and save.
4. GitHub will display your website URL, typically `https://YOUR-USERNAME.github.io/casa-magnolias/`. It may take a few minutes for publishing to finish.

Note: GitHub Pages sites are public. Avoid publishing your exact address, architectural security details, or photos that you don't want to share publicly.

## Add photos and construction updates

1. Add appropriately sized JPEG or WebP images to `assets/photos/` (ideally ~1600px wide, ~300KB–1MB each).
2. Open `site-data.js`, edit the `photos` list and replace a placeholder `src:''` with `src:'assets/photos/your-photo.jpg'`. Add as many photos as you like.
3. In `site-data.js`, edit or add objects to `milestones` for new progress updates.
4. Commit your changes on GitHub. Pages will update automatically.

File names should use lowercase letters, numbers, and hyphens, without spaces. Keep the `assets/photos/` folder in place.

## Customize

- Edit the introductory text in `index.html`.
- Edit colors in the `:root` CSS variables near the start of `styles.css`.
- The illustrated header is made in CSS, so no stock imagery is required.


## Diamante renderings (October 2026 update)
Four architectural concept images are included under `assets/photos/`. The exterior is used on the homepage and all four appear in the photo gallery. They are model renderings, **not photographs of the completed house**.

To update an existing GitHub Pages repository: upload `index.html`, `styles.css`, `site-data.js`, and the **four image files inside `assets/photos/`**, preserving the folder structure. You do not need to delete existing repository files. Confirm you have permission to republish the developer's renderings on a public website.
