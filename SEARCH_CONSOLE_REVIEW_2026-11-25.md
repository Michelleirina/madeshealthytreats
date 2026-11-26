# Search Console review — November 25, 2026

Branch: `fix-legacy-home-redirects`, based on main commit `8d6378ce6e3f96734a4195565d07d92c0136e440`.

## Proposed routing change

Only `netlify.toml` routing is changed. No pages were removed or recipe content edited.

| URL | Live before | Prepared local behavior |
| --- | --- | --- |
| `/home/` | 404 | 301 to `/` |
| `/home//` | 404 | 301 to `/` |
| `/home` | Not live-tested in this batch | 301 to `/` (matching homepage alias) |

The homepage destination returned HTTP 200 during this audit. These new redirects require a Netlify preview to verify hosting behavior. Local checks validate configuration, not Netlify execution.

## Live screenshot checks

23 URLs checked with GET requests and redirects followed: 3 return 404; 20 reach HTTP 200. No redirect loops encountered. This initial batch covered the 10 visible redirect examples and 10 visible alternate examples. The later full alternate export is covered below; two redirect examples remain unseen.

| Requested URL | Final status | Redirect status chain | Final URL | Declared canonical |
| --- | --- | --- | --- | --- |
| https://madeshealthytreats.com/home/ | 404 | None | — |  |
| https://madeshealthytreats.com/home// | 404 | None | — |  |
| https://madeshealthytreats.com/all- | 404 | None | — |  |
| https://madeshealthytreats.com/?elementor_library=default-kit | 200 | None | https://madeshealthytreats.com/?elementor_library=default-kit | https://madeshealthytreats.com/ |
| https://madeshealthytreats.com/?cat=-1 | 200 | None | https://madeshealthytreats.com/?cat=-1 | https://madeshealthytreats.com/ |
| https://madeshealthytreats.com/?attachment_id=978 | 200 | None | https://madeshealthytreats.com/?attachment_id=978 | https://madeshealthytreats.com/ |
| https://madeshealthytreats.com/recipe-tropical-power | 200 | None | https://madeshealthytreats.com/recipe-tropical-power | https://madeshealthytreats.com/recipe-tropical-power |
| https://madeshealthytreats.com/recipes | 200 | None | https://madeshealthytreats.com/recipes | https://madeshealthytreats.com/recipes |
| https://madeshealthytreats.com/blog-ginger | 200 | None | https://madeshealthytreats.com/blog-ginger | https://madeshealthytreats.com/blog-ginger |
| https://madeshealthytreats.com/blog-post | 200 | 301 | https://madeshealthytreats.com/blog-ginger | https://madeshealthytreats.com/blog-ginger |
| https://madeshealthytreats.com/recipe-watermelon-mint | 200 | None | https://madeshealthytreats.com/recipe-watermelon-mint | https://madeshealthytreats.com/recipe-watermelon-mint |
| https://madeshealthytreats.com/blog-probiotics | 200 | None | https://madeshealthytreats.com/blog-probiotics | https://madeshealthytreats.com/blog-probiotics |
| https://madeshealthytreats.com/coming-soon | 200 | 301 | https://madeshealthytreats.com/teas | https://madeshealthytreats.com/teas |
| https://madeshealthytreats.com/recipe-pineapple-turmeric-juice.html | 200 | 301 | https://madeshealthytreats.com/recipe-pineapple-turmeric-juice | https://madeshealthytreats.com/recipe-pineapple-turmeric-juice |
| https://madeshealthytreats.com/recipe-golden-glow.html | 200 | 301 | https://madeshealthytreats.com/recipe-golden-glow | https://madeshealthytreats.com/recipe-golden-glow |
| https://madeshealthytreats.com/recipe-celery-detox-juice.html | 200 | 301 | https://madeshealthytreats.com/recipe-celery-detox-juice | https://madeshealthytreats.com/recipe-celery-detox-juice |
| https://madeshealthytreats.com/blog-best-morning-juice.html | 200 | 301 | https://madeshealthytreats.com/blog-best-morning-juice | https://madeshealthytreats.com/blog-best-morning-juice |
| https://madeshealthytreats.com/blog-smoothie-mistakes.html | 200 | 301 | https://madeshealthytreats.com/blog-smoothie-mistakes | https://madeshealthytreats.com/blog-smoothie-mistakes |
| https://madeshealthytreats.com/blog-smoothie-meal-replacement | 200 | 301 | https://madeshealthytreats.com/blog-high-protein-smoothie | https://madeshealthytreats.com/blog-high-protein-smoothie |
| https://madeshealthytreats.com/recipe-acv-detox-shot.html | 200 | 301 | https://madeshealthytreats.com/recipe-acv-detox-shot | https://madeshealthytreats.com/recipe-acv-detox-shot |
| http://madeshealthytreats.com/ | 200 | 301 | https://madeshealthytreats.com/ | https://madeshealthytreats.com/ |
| http://www.madeshealthytreats.com/ | 200 | 301 → 301 | https://madeshealthytreats.com/ | https://madeshealthytreats.com/ |
| https://www.madeshealthytreats.com/ | 200 | 301 | https://madeshealthytreats.com/ | https://madeshealthytreats.com/ |

## Interpretation and remaining work

- All 10 visible redirect examples reach working destinations. HTTP/www variants and old HTML URLs are intentional redirects. Keep these redirects.
- The three legacy query-string homepage URLs declare the homepage canonical.
- `/recipe-tropical-power`, `/recipes`, `/blog-ginger`, `/recipe-watermelon-mint`, and `/blog-probiotics` currently return HTTP 200 and declare their own clean URLs as canonical. The screenshot records September crawls; current Google-selected canonicals have not been verified with URL Inspection.
- `/blog-post` redirects to `/blog-ginger`; `/coming-soon` redirects to `/teas`. Both destinations return HTTP 200.
- `/all-` remains 404. No matching page or link was found in the current repository. Its intended destination cannot be confirmed; no speculative redirect was added. A 404 can be appropriate where there is no replacement.
- The later CSV export identifies the sole “Duplicate, Google chose different canonical” example as `/recipe-beet-performance-shot.html`, last crawled August 30, 2026. A live GET follows one 301 redirect to `/recipe-beet-performance-shot`, which returns HTTP 200, declares that same clean URL as canonical, has no meta or HTTP header noindex directive, and appears in the sitemap. No further code change is indicated by this live check. The export does not show Google's selected canonical, so that selection still requires URL Inspection; it cannot be inferred from the current HTML.

## Local verification

- Netlify TOML parses successfully.
- Exactly three homepage alias rules added, all forced permanent 301 redirects.
- All previous redirect rules unchanged; the root retains its existing internal 200 rewrite to `/index.html`.
- All 56 sitemap URLs use clean paths, have local HTML sources, and match their source canonical tags.
- `git diff --check` passed.

## Google guidance

Source: [Google Search Console — Page indexing report](https://support.google.com/webmasters/answer/7440203?hl=en), consulted November 25, 2026. Intentional duplicates and redirects need not be indexed; URL Inspection is the appropriate check for an individual page’s current Google index status.

This review is included with the homepage redirect pull request. Production deployment, indexing requests, and Search Console validation are not part of this change.

## Full alternate-canonical export follow-up

`Metadata(4).csv` identifies “Alternate page with proper canonical tag”; `Table(3).csv` contains all 18 examples. Its first 10 match the screenshot examples already checked. All eight remaining URLs have now been live-tested:

| Requested path | Current behavior | Final URL in sitemap |
| --- | --- | --- |
| `/recipe-berry-probiotic` | 200, self-canonical | Yes |
| `/recipe-citrus-immunity` | 200, self-canonical | Yes |
| `/recipe-matcha-lean` | 200, self-canonical | Yes |
| `/recipe-carrot-ginger-juice` | 200, self-canonical | Yes |
| `/recipe-ginger-immunity-shot` | 200, self-canonical | Yes |
| `/blog-celery-juice` | 200, self-canonical | Yes |
| `/blog-smoothie-vs-juicing` | 200, self-canonical | Yes |
| `/blog-juices-good-for-liver` | 301 to `/blog-do-juice-cleanses-work`, then 200 with self-canonical | Yes |

No noindex directives or redirect loops were found in these eight checks. Across all 18 examples: 12 direct content pages currently declare themselves canonical; three legacy content aliases redirect to working pages; three homepage query variants declare the homepage canonical. The export history ends November 15, with 18 affected URLs. These live checks do not verify Google’s current selected canonical or index status. No additional website edits were needed for this group.
