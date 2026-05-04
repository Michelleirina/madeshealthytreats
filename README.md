# Made's Healthy Treats

Static smoothie recipe website for `madeshealthytreats.com`.

## Project structure

- `index.html` — homepage with animated smoothie hero slider and all launch sections
- `recipes.html` — full filterable recipe library
- `recipe-single.html` — Green Detox Bliss recipe template with Schema.org JSON-LD
- `blog.html` — blog listing page
- `blog-post.html` — populated ginger article template
- `about.html` — About Made page
- `shared/style.css` — complete shared styling, colors, responsive layout, animations
- `shared/script.js` — navbar, mobile menu, reveal animations, recipe filtering, active nav
- `hero-slider.js` — homepage slider logic
- `admin/index.html` and `admin/config.yml` — Netlify CMS
- `assets/images/README.txt` — image filenames and DALL-E / Adobe Firefly prompts
- `sitemap.xml` — sitemap for all six public pages
- `netlify.toml` — Netlify admin redirects and publish config
- `_posts/blog` and `_posts/recipes` — CMS content folders

## How to add your logo

Rename your logo file to `logo.jpg` and place it at:

`assets/images/logo.jpg`

## How to add recipe photos

Generate the images with DALL-E or Adobe Firefly using the prompts in `assets/images/README.txt`.
Save each generated image as JPG and place it in `assets/images/`.

## How to deploy to Netlify free

1. Go to `netlify.com` and create a free account.
2. Drag and drop your entire project folder onto the Netlify dashboard.
3. Set your custom domain `madeshealthytreats.com` in Site Settings → Domain Management.

## How to use the CMS blog editor

Go to `yourdomain.com/admin`, log in with your Netlify account, click "New Blog Post", write, and publish without touching any code.

## How to replace Unsplash photos

Search each `<!-- Replace with: assets/images/ -->` comment in the HTML files. Replace the Unsplash `src` value with the matching local image path from `assets/images/README.txt`.
