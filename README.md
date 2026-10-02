# Naveedullah Jabarkhail — Portfolio Website

Personal portfolio website for Naveedullah Jabarkhail — Network Engineer & IT Professional.
Built with HTML, CSS and JavaScript (Bootstrap 5 based template).

## Pages

| File | Description |
| --- | --- |
| `index.html` | Home page |
| `about.html` | About me |
| `resume.html` | Resume / CV |
| `services.html` | Services |
| `portfolio.html` | Portfolio projects |
| `portfolio-details.html` | Project detail view |
| `contact.html` | Contact page |

## Structure

```
.
├── *.html                      # Site pages
├── main.css                    # Global styles + color variables
├── main.js                     # Global scripts
├── bootstrap.min.css           # Vendor: Bootstrap 5
├── bootstrap.bundle.min.js     # Vendor: Bootstrap 5 JS
├── bootstrap-icons.css         # Vendor: Bootstrap Icons
├── bootstrap-icons.woff/.woff2 # Vendor: icon font files
├── aos.css / aos.js            # Vendor: scroll animations
├── swiper-bundle.min.css/js    # Vendor: sliders
├── glightbox.min.css/js        # Vendor: lightbox
├── purecounter_vanilla.js      # Vendor: number counters
├── noframework.waypoints.js    # Vendor: scroll triggers
├── imagesloaded.pkgd.min.js    # Vendor: image loading helper
├── isotope.pkgd.min.js         # Vendor: portfolio filtering
├── validate.js                 # Vendor: form validation
└── *.png / *.jpg               # Favicons, profile photo and project images
```

## Theme

Black headings with a green accent (`#34b7a7`), consistent across all pages.
Change the palette in one place via the `--accent-color` variable in `main.css`.

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying on GitHub Pages

1. Push these files to a repository (root of the branch, not a subfolder).
2. Go to **Settings → Pages**.
3. Set **Source** to `Deploy from a branch`, choose `main` and `/ (root)`.
4. Save — the site will be available at `https://<username>.github.io/<repo>/`.
