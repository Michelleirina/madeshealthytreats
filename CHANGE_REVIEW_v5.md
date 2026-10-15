# Change review v5

Branch: `repair-content-review`. Local edits only; no push, deploy, or file deletion.

## About wording

| Before | After |
| --- | --- |
| if you reading this can relate | if you can relate |
| how I handle preparation notes and ingredient facts | how I handle recipes and ingredient facts |

## Recipe nutrient closing paragraphs

All 27 active recipe pages now use this standalone line:

> Nutrient figures are per 100 g of the USDA reference ingredient, not per serving.

Removed the previous generic closing explanation and product-label advice. Kept the specific dairy-yogurt, packaged-pulp, ground-turmeric, spearmint, straining/dilution, and tea-infusion cautions as a separate paragraph where applicable. Ingredient nutrient amounts and source links were not changed.

| Recipe file | Specific cautions retained |
| --- | --- |
| `recipe-acv-detox-shot.html` | Straining and dilution change this diluted apple cider vinegar lemon drink, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. |
| `recipe-beet-energy-juice.html` | Straining and dilution change this beet apple carrot juice, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. |
| `recipe-beet-performance-shot.html` | Straining and dilution change this beet apple ginger sips, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. |
| `recipe-berry-probiotic.html` | None applicable in the previous closing paragraph. |
| `recipe-carrot-ginger-juice.html` | Straining and dilution change this carrot orange ginger juice, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. |
| `recipe-celery-detox-juice.html` | Straining and dilution change this celery cucumber lemon juice, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. |
| `recipe-chamomile-lemon-tea.html` | For this chamomile flower & lemon tea, nutrients in whole leaves, ginger, or fruit are not measured nutrient totals for the strained infusion. |
| `recipe-citrus-immunity.html` | None applicable in the previous closing paragraph. |
| `recipe-cucumber-mint-juice.html` | Straining and dilution change this cucumber apple mint juice, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. Spearmint is the USDA reference variety in this cucumber apple mint juice; other mint varieties can differ. |
| `recipe-fresh-mint-tea.html` | For this fresh mint tea, nutrients in whole leaves, ginger, or fruit are not measured nutrient totals for the strained infusion. Spearmint is the USDA reference variety in this fresh mint tea; other mint varieties can differ. |
| `recipe-ginger-immunity-shot.html` | Straining and dilution change this lemon ginger sips, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. |
| `recipe-golden-glow.html` | None applicable in the previous closing paragraph. |
| `recipe-green-detox.html` | None applicable in the previous closing paragraph. |
| `recipe-guava-strawberry-smoothie.html` | The yogurt entry for guava strawberry smoothie describes whole-milk dairy yogurt, not a plant-based alternative. The guava record describes raw fruit; seedless commercial pulp can have a different composition. |
| `recipe-hibiscus-ginger-tea.html` | For this hibiscus & ginger tea, nutrients in whole leaves, ginger, or fruit are not measured nutrient totals for the strained infusion. |
| `recipe-mango-passion-fruit-smoothie.html` | The yogurt entry for mango passion fruit smoothie describes whole-milk dairy yogurt, not a plant-based alternative. |
| `recipe-matcha-lean.html` | None applicable in the previous closing paragraph. |
| `recipe-papaya-lime-smoothie.html` | The yogurt entry for papaya lime smoothie without banana describes whole-milk dairy yogurt, not a plant-based alternative. |
| `recipe-peanut-butter-banana.html` | None applicable in the previous closing paragraph. |
| `recipe-pineapple-turmeric-juice.html` | Straining and dilution change this pineapple ginger turmeric drink, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. The turmeric numbers for pineapple ginger turmeric drink refer to ground turmeric, and a small spice measure is far less than 100 g. |
| `recipe-pumpkin-oat-smoothie.html` | The yogurt entry for pumpkin oat smoothie without banana describes whole-milk dairy yogurt, not a plant-based alternative. |
| `recipe-purple-rain.html` | None applicable in the previous closing paragraph. |
| `recipe-tamarind-ginger-cooler.html` | Straining and dilution change this tamarind ginger cooler, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. |
| `recipe-tropical-power.html` | None applicable in the previous closing paragraph. |
| `recipe-turmeric-golden-shot.html` | Straining and dilution change this turmeric lemon sips, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. The turmeric numbers for turmeric lemon sips refer to ground turmeric, and a small spice measure is far less than 100 g. |
| `recipe-watermelon-mint.html` | None applicable in the previous closing paragraph. |
| `recipe-wheatgrass-energy-shot.html` | Straining and dilution change this cucumber mint green sips, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. Spearmint is the USDA reference variety in this cucumber mint green sips; other mint varieties can differ. |

## Verification

- Exactly 27 active recipe fact sections use the requested line.
- Every specific caution from the previous closing paragraphs remains.
- Nutrient bullets, numeric amounts, source links, ingredients, instructions, and Recipe structured data are unchanged by v5.
- Only About and the 27 recipe HTML files were edited in this revision, plus this new review file. Other site pages and sitemap exclusions were not changed.

## Final tea caution

Chamomile, fresh mint, and hibiscus tea now use the same requested caution: “Nutrients in the herbs, flowers, spices, or fruit are not measured nutrient totals for the strained infusion.” Any separate mint-variety caution remains.
