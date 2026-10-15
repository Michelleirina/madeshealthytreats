# Change review v4

Branch: `repair-content-review`. All edits are local. No push, deployment, or file deletion. This review supersedes the v3 review for the changes below.

## Completed requests

1. Removed the honey and sugar carbohydrate fact bullets. Each remaining ingredient entry has its top one or two selected nutrients, exact USDA amounts per 100 g, and a direct record link. Each recipe's factual prose is different from every other recipe page. These remain ingredient-reference figures, not measured drink totals.
2. Added practical, recipe-specific content to the nine rewritten posts and rewrote best-morning-juice and smoothie-vs-juicing in the same friendly format: choosing and preparing ingredients, swaps, common mistakes, storage, and a short FAQ. The nine expanded posts each received more than 300 additional words; the two rewritten guides each exceed 600 words.
3. Changed only the time badge to **5–30 Minutes — Check each recipe for its prep time**. All 27 active recipes' listed total times fall within that range. Restored **Real Ingredients Only — No powders, no shortcuts** exactly as it stood before the earlier badge edit, following the latest instruction to leave it alone.
4. Listed every repository HTML page absent from the sitemap: 11 pages including coming-soon and the legacy redirect pages. These excluded files remain untouched in this revision.

The existing full About text and founder-photo explanation are retained below for review. They are earlier work, not new edits in this revision. Previously requested recipe bylines remain unchanged.

Ingredients, measurements, preparation steps, and Recipe structured-data instructions remain unchanged. Existing photos and graphic assets remain unchanged. No health promises, personal experiences, ratings, or serving-level nutrition totals were invented.

## Nutrient selection and numeric basis

Source: the [official USDA SR Legacy archive](https://fdc.nal.usda.gov/fdc-datasets/FoodData_Central_sr_legacy_food_json_2018-04.zip) retrieved October 12, 2026. The archive is a historical food-composition reference. The numbers shown are per 100 g of the named reference food, not measurements of a homemade drink or a current branded product.

To make “top” reproducible, selection uses the two highest positive contributions relative to the [FDA adult/age-4+ Daily Values](https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels) among the vitamins, minerals, protein, and fiber fields listed in `sources/recipe-nutrients-v4.json`. Ranking formula: USDA amount per 100 g divided by its FDA Daily Value, using matching units. Water, energy, sugars, total carbohydrate, fats, sodium, and individual amino acids are outside this selection. This is a declared selection method, not a claim that the nutrients are the two largest compounds by mass or the most important for a person's health. The source amount and unit are displayed without a recipe-serving calculation.

Honey and sugar remain in ingredient lists where the recipes call for them; only their nutrient bullets were removed. The chamomile tea, hibiscus tea, and vinegar-lemon drink consequently have one referenced ingredient in their fact section rather than padding the section with claims about flowers, sweeteners, or an unmeasured infusion. Each referenced ingredient has two nutrient amounts.

Whole-fruit records can differ from seedless packaged pulp. Dairy-yogurt values do not apply to all plant-based substitutes. Spearmint is the named mint reference. Ground turmeric values are not fresh-root measurements. Straining, dilution, and steeping affect a drink; a small slice or spoonful is far less than 100 g. Recipe-specific cautions remain beside the figures.

## Recipe fact sections: full current text


### recipe-acv-detox-shot.html

- **Lemon juice:** For each 100 g, the USDA reference for lemon juice lists 38.7 mg vitamin C and 20 mcg folate (DFE). [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).

The diluted apple cider vinegar lemon drink figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this diluted apple cider vinegar lemon drink, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts.

### recipe-beet-energy-juice.html

- **Beet:** A 100 g reference portion of beet supplies 109 mcg folate (DFE) and 0.329 mg manganese. [USDA: Beets, raw](https://fdc.nal.usda.gov/food-details/169145/nutrients).
- **Apple with its skin:** A 100 g reference portion of apple with its skin supplies 2.4 g fiber and 4.6 mg vitamin C. [USDA: Apples, raw, with skin (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/171688/nutrients).
- **Carrot:** A 100 g reference portion of carrot supplies 835 mcg vitamin A (RAE) and 13.2 mcg vitamin K. [USDA: Carrots, raw](https://fdc.nal.usda.gov/food-details/170393/nutrients).

The beet apple carrot juice figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this beet apple carrot juice, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts.

### recipe-beet-performance-shot.html

- **Beet:** In the USDA entry for beet, 100 g has 109 mcg folate (DFE) and 0.329 mg manganese. [USDA: Beets, raw](https://fdc.nal.usda.gov/food-details/169145/nutrients).
- **Apple with its skin:** In the USDA entry for apple with its skin, 100 g has 2.4 g fiber and 4.6 mg vitamin C. [USDA: Apples, raw, with skin (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/171688/nutrients).
- **Lemon juice:** In the USDA entry for lemon juice, 100 g has 38.7 mg vitamin C and 20 mcg folate (DFE). [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).

The beet apple ginger sips figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this beet apple ginger sips, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts.

### recipe-berry-probiotic.html

- **Strawberries:** The record for strawberries reports 58.8 mg vitamin C and 0.386 mg manganese in a 100 g portion. [USDA: Strawberries, raw](https://fdc.nal.usda.gov/food-details/167762/nutrients).
- **Ground flaxseed:** The record for ground flaxseed reports 1.64 mg thiamin (B1) and 1.22 mg copper in a 100 g portion. [USDA: Seeds, flaxseed](https://fdc.nal.usda.gov/food-details/169414/nutrients).
- **Rolled oats:** The record for rolled oats reports 4.92 mg manganese and 0.626 mg copper in a 100 g portion. [USDA: Oats (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/169705/nutrients).

The berry kefir smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making berry kefir smoothie, use packaged-food labels for product-specific values and substitutions.

### recipe-carrot-ginger-juice.html

- **Carrot:** USDA measures 835 mcg vitamin A (RAE) and 13.2 mcg vitamin K per 100 g of reference carrot. [USDA: Carrots, raw](https://fdc.nal.usda.gov/food-details/170393/nutrients).
- **Orange:** USDA measures 53.2 mg vitamin C and 2.4 g fiber per 100 g of reference orange. [USDA: Oranges, raw, all commercial varieties](https://fdc.nal.usda.gov/food-details/169097/nutrients).
- **Fresh ginger:** USDA measures 0.226 mg copper and 43 mg magnesium per 100 g of reference fresh ginger. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).

The carrot orange ginger juice figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this carrot orange ginger juice, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts.

### recipe-celery-detox-juice.html

- **Celery:** Two nutrients listed for reference celery are 29.3 mcg vitamin K and 36 mcg folate (DFE), measured per 100 g. [USDA: Celery, raw](https://fdc.nal.usda.gov/food-details/169988/nutrients).
- **Cucumber:** Two nutrients listed for reference cucumber are 16.4 mcg vitamin K and 0.259 mg pantothenic acid (B5), measured per 100 g. [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients).
- **Lemon juice:** Two nutrients listed for reference lemon juice are 38.7 mg vitamin C and 20 mcg folate (DFE), measured per 100 g. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).

The celery cucumber lemon juice figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this celery cucumber lemon juice, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts.

### recipe-chamomile-lemon-tea.html

- **Lemon:** For reference lemon, the amounts in 100 g are 53 mg vitamin C and 2.8 g fiber. [USDA: Lemons, raw, without peel](https://fdc.nal.usda.gov/food-details/167746/nutrients).

The chamomile flower & lemon tea figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. For this chamomile flower & lemon tea, nutrients in whole leaves, ginger, or fruit are not measured nutrient totals for the strained infusion.

### recipe-citrus-immunity.html

- **Orange:** The USDA composition figures for orange include 53.2 mg vitamin C and 2.4 g fiber per 100 g. [USDA: Oranges, raw, all commercial varieties](https://fdc.nal.usda.gov/food-details/169097/nutrients).
- **Lemon juice:** The USDA composition figures for lemon juice include 38.7 mg vitamin C and 20 mcg folate (DFE) per 100 g. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).
- **Fresh ginger:** The USDA composition figures for fresh ginger include 0.226 mg copper and 43 mg magnesium per 100 g. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).

The orange lemon ginger drink figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making orange lemon ginger drink, use packaged-food labels for product-specific values and substitutions.

### recipe-cucumber-mint-juice.html

- **Cucumber:** Using a 100 g basis, reference cucumber provides 16.4 mcg vitamin K and 0.259 mg pantothenic acid (B5). [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients).
- **Apple with its skin:** Using a 100 g basis, reference apple with its skin provides 2.4 g fiber and 4.6 mg vitamin C. [USDA: Apples, raw, with skin (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/171688/nutrients).
- **Fresh mint leaves:** Using a 100 g basis, reference fresh mint leaves provides 11.9 mg iron and 1.12 mg manganese. [USDA: Spearmint, fresh](https://fdc.nal.usda.gov/food-details/173475/nutrients).

The cucumber apple mint juice figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this cucumber apple mint juice, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. Spearmint is the USDA reference variety in this cucumber apple mint juice; other mint varieties can differ.

### recipe-fresh-mint-tea.html

- **Fresh mint leaves:** USDA lists 11.9 mg iron and 1.12 mg manganese for 100 g of the food used as the fresh mint leaves reference. [USDA: Spearmint, fresh](https://fdc.nal.usda.gov/food-details/173475/nutrients).
- **Optional lemon:** USDA lists 53 mg vitamin C and 2.8 g fiber for 100 g of the food used as the optional lemon reference. [USDA: Lemons, raw, without peel](https://fdc.nal.usda.gov/food-details/167746/nutrients).

The fresh mint tea figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. For this fresh mint tea, nutrients in whole leaves, ginger, or fruit are not measured nutrient totals for the strained infusion. Spearmint is the USDA reference variety in this fresh mint tea; other mint varieties can differ.

### recipe-ginger-immunity-shot.html

- **Fresh ginger:** The 100 g USDA figures for fresh ginger show 0.226 mg copper and 43 mg magnesium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).
- **Lemon juice:** The 100 g USDA figures for lemon juice show 38.7 mg vitamin C and 20 mcg folate (DFE). [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).

The lemon ginger sips figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this lemon ginger sips, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts.

### recipe-golden-glow.html

- **Papaya:** For a reference weight of 100 g, papaya has 60.9 mg vitamin C and 37 mcg folate (DFE). [USDA: Papayas, raw](https://fdc.nal.usda.gov/food-details/169926/nutrients).
- **Carrot:** For a reference weight of 100 g, carrot has 835 mcg vitamin A (RAE) and 13.2 mcg vitamin K. [USDA: Carrots, raw](https://fdc.nal.usda.gov/food-details/170393/nutrients).
- **Orange:** For a reference weight of 100 g, orange has 53.2 mg vitamin C and 2.4 g fiber. [USDA: Oranges, raw, all commercial varieties](https://fdc.nal.usda.gov/food-details/169097/nutrients).

The papaya carrot orange smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making papaya carrot orange smoothie, use packaged-food labels for product-specific values and substitutions.

### recipe-green-detox.html

- **Spinach:** The database lists 483 mcg vitamin K and 469 mcg vitamin A (RAE) in each 100 g of reference spinach. [USDA: Spinach, raw](https://fdc.nal.usda.gov/food-details/168462/nutrients).
- **Banana:** The database lists 0.367 mg vitamin B6 and 0.27 mg manganese in each 100 g of reference banana. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients).
- **Cucumber:** The database lists 16.4 mcg vitamin K and 0.259 mg pantothenic acid (B5) in each 100 g of reference cucumber. [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients).

The spinach cucumber banana smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making spinach cucumber banana smoothie, use packaged-food labels for product-specific values and substitutions.

### recipe-guava-strawberry-smoothie.html

- **Guava:** A 100 g amount of reference guava is recorded with 228 mg vitamin C and 0.23 mg copper. [USDA: Guavas, common, raw](https://fdc.nal.usda.gov/food-details/173044/nutrients).
- **Strawberries:** A 100 g amount of reference strawberries is recorded with 58.8 mg vitamin C and 0.386 mg manganese. [USDA: Strawberries, raw](https://fdc.nal.usda.gov/food-details/167762/nutrients).
- **Plain dairy yogurt:** A 100 g amount of reference plain dairy yogurt is recorded with 0.37 mcg vitamin B12 and 0.142 mg riboflavin (B2). [USDA: Yogurt, plain, whole milk](https://fdc.nal.usda.gov/food-details/171284/nutrients).

The guava strawberry smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making guava strawberry smoothie, use packaged-food labels for product-specific values and substitutions. The yogurt entry for guava strawberry smoothie describes whole-milk dairy yogurt, not a plant-based alternative. The guava record describes raw fruit; seedless commercial pulp can have a different composition.

### recipe-hibiscus-ginger-tea.html

- **Fresh ginger:** In a 100 g sample basis, the fresh ginger entry reports 0.226 mg copper and 43 mg magnesium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).

The hibiscus & ginger tea figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. For this hibiscus & ginger tea, nutrients in whole leaves, ginger, or fruit are not measured nutrient totals for the strained infusion.

### recipe-mango-passion-fruit-smoothie.html

- **Mango:** The USDA food record assigns 36.4 mg vitamin C and 0.111 mg copper to 100 g of reference mango. [USDA: Mangos, raw](https://fdc.nal.usda.gov/food-details/169910/nutrients).
- **Plain dairy yogurt:** The USDA food record assigns 0.37 mcg vitamin B12 and 0.142 mg riboflavin (B2) to 100 g of reference plain dairy yogurt. [USDA: Yogurt, plain, whole milk](https://fdc.nal.usda.gov/food-details/171284/nutrients).

The mango passion fruit smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making mango passion fruit smoothie, use packaged-food labels for product-specific values and substitutions. The yogurt entry for mango passion fruit smoothie describes whole-milk dairy yogurt, not a plant-based alternative.

### recipe-matcha-lean.html

- **Banana:** Reference banana, measured on a 100 g basis, contains 0.367 mg vitamin B6 and 0.27 mg manganese. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients).
- **Chia seeds:** Reference chia seeds, measured on a 100 g basis, contains 34.4 g fiber and 2.72 mg manganese. [USDA: Seeds, chia seeds, dried](https://fdc.nal.usda.gov/food-details/170554/nutrients).

The matcha banana chia smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making matcha banana chia smoothie, use packaged-food labels for product-specific values and substitutions.

### recipe-papaya-lime-smoothie.html

- **Papaya:** Looking at 100 g of reference papaya, USDA records 60.9 mg vitamin C and 37 mcg folate (DFE). [USDA: Papayas, raw](https://fdc.nal.usda.gov/food-details/169926/nutrients).
- **Plain dairy yogurt:** Looking at 100 g of reference plain dairy yogurt, USDA records 0.37 mcg vitamin B12 and 0.142 mg riboflavin (B2). [USDA: Yogurt, plain, whole milk](https://fdc.nal.usda.gov/food-details/171284/nutrients).
- **Lime:** Looking at 100 g of reference lime, USDA records 29.1 mg vitamin C and 2.8 g fiber. [USDA: Limes, raw](https://fdc.nal.usda.gov/food-details/168155/nutrients).

The papaya lime smoothie without banana figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making papaya lime smoothie without banana, use packaged-food labels for product-specific values and substitutions. The yogurt entry for papaya lime smoothie without banana describes whole-milk dairy yogurt, not a plant-based alternative.

### recipe-peanut-butter-banana.html

- **Peanut butter:** On the USDA 100 g reference basis, peanut butter includes 1.66 mg manganese and 9.1 mg vitamin E (alpha-tocopherol). [USDA: Peanut butter, smooth style, without salt](https://fdc.nal.usda.gov/food-details/172470/nutrients).
- **Banana:** On the USDA 100 g reference basis, banana includes 0.367 mg vitamin B6 and 0.27 mg manganese. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients).
- **Rolled oats:** On the USDA 100 g reference basis, rolled oats includes 4.92 mg manganese and 0.626 mg copper. [USDA: Oats (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/169705/nutrients).

The peanut butter banana cacao smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making peanut butter banana cacao smoothie, use packaged-food labels for product-specific values and substitutions.

### recipe-pineapple-turmeric-juice.html

- **Pineapple:** In the reference data, 100 g of pineapple contributes 47.8 mg vitamin C and 0.927 mg manganese. [USDA: Pineapple, raw, all varieties](https://fdc.nal.usda.gov/food-details/169124/nutrients).
- **Ground turmeric, if used:** In the reference data, 100 g of ground turmeric, if used contributes 19.8 mg manganese and 55 mg iron. [USDA: Spices, turmeric, ground](https://fdc.nal.usda.gov/food-details/172231/nutrients).
- **Fresh ginger:** In the reference data, 100 g of fresh ginger contributes 0.226 mg copper and 43 mg magnesium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).
- **Lemon juice:** In the reference data, 100 g of lemon juice contributes 38.7 mg vitamin C and 20 mcg folate (DFE). [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).

The pineapple ginger turmeric drink figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this pineapple ginger turmeric drink, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. The turmeric numbers for pineapple ginger turmeric drink refer to ground turmeric, and a small spice measure is far less than 100 g.

### recipe-pumpkin-oat-smoothie.html

- **Cooked pumpkin:** The listed amounts for reference cooked pumpkin are 288 mcg vitamin A (RAE) and 0.091 mg copper for 100 g. [USDA: Pumpkin, cooked, boiled, drained, without salt](https://fdc.nal.usda.gov/food-details/168449/nutrients).
- **Rolled oats:** The listed amounts for reference rolled oats are 4.92 mg manganese and 0.626 mg copper for 100 g. [USDA: Oats (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/169705/nutrients).
- **Plain dairy yogurt:** The listed amounts for reference plain dairy yogurt are 0.37 mcg vitamin B12 and 0.142 mg riboflavin (B2) for 100 g. [USDA: Yogurt, plain, whole milk](https://fdc.nal.usda.gov/food-details/171284/nutrients).

The pumpkin oat smoothie without banana figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making pumpkin oat smoothie without banana, use packaged-food labels for product-specific values and substitutions. The yogurt entry for pumpkin oat smoothie without banana describes whole-milk dairy yogurt, not a plant-based alternative.

### recipe-purple-rain.html

- **Blackberries:** The source entry for blackberries gives 0.646 mg manganese and 21 mg vitamin C on a 100 g basis. [USDA: Blackberries, raw](https://fdc.nal.usda.gov/food-details/173946/nutrients).
- **Ground flaxseed:** The source entry for ground flaxseed gives 1.64 mg thiamin (B1) and 1.22 mg copper on a 100 g basis. [USDA: Seeds, flaxseed](https://fdc.nal.usda.gov/food-details/169414/nutrients).

The acai blackberry kefir smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making acai blackberry kefir smoothie, use packaged-food labels for product-specific values and substitutions.

### recipe-tamarind-ginger-cooler.html

- **Tamarind:** USDA reports 0.428 mg thiamin (B1) and 92 mg magnesium when the reference quantity of tamarind is 100 g. [USDA: Tamarinds, raw](https://fdc.nal.usda.gov/food-details/167763/nutrients).
- **Fresh ginger:** USDA reports 0.226 mg copper and 43 mg magnesium when the reference quantity of fresh ginger is 100 g. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).

The tamarind ginger cooler figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this tamarind ginger cooler, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts.

### recipe-tropical-power.html

- **Mango:** For the mango database entry, a 100 g quantity contains 36.4 mg vitamin C and 0.111 mg copper. [USDA: Mangos, raw](https://fdc.nal.usda.gov/food-details/169910/nutrients).
- **Pineapple:** For the pineapple database entry, a 100 g quantity contains 47.8 mg vitamin C and 0.927 mg manganese. [USDA: Pineapple, raw, all varieties](https://fdc.nal.usda.gov/food-details/169124/nutrients).
- **Banana:** For the banana database entry, a 100 g quantity contains 0.367 mg vitamin B6 and 0.27 mg manganese. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients).

The mango pineapple banana smoothie figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making mango pineapple banana smoothie, use packaged-food labels for product-specific values and substitutions.

### recipe-turmeric-golden-shot.html

- **Ground turmeric:** Among the nutrients in 100 g of reference ground turmeric, USDA lists 19.8 mg manganese and 55 mg iron. [USDA: Spices, turmeric, ground](https://fdc.nal.usda.gov/food-details/172231/nutrients).
- **Lemon juice:** Among the nutrients in 100 g of reference lemon juice, USDA lists 38.7 mg vitamin C and 20 mcg folate (DFE). [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).

The turmeric lemon sips figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this turmeric lemon sips, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. The turmeric numbers for turmeric lemon sips refer to ground turmeric, and a small spice measure is far less than 100 g.

### recipe-watermelon-mint.html

- **Watermelon:** The USDA reference describes 100 g of watermelon with 8.1 mg vitamin C and 0.042 mg copper. [USDA: Watermelon, raw](https://fdc.nal.usda.gov/food-details/167765/nutrients).
- **Chia seeds:** The USDA reference describes 100 g of chia seeds with 34.4 g fiber and 2.72 mg manganese. [USDA: Seeds, chia seeds, dried](https://fdc.nal.usda.gov/food-details/170554/nutrients).
- **Coconut water:** The USDA reference describes 100 g of coconut water with 0.142 mg manganese and 25 mg magnesium. [USDA: Nuts, coconut water (liquid from coconuts)](https://fdc.nal.usda.gov/food-details/170174/nutrients).

The watermelon mint cooler figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. When making watermelon mint cooler, use packaged-food labels for product-specific values and substitutions.

### recipe-wheatgrass-energy-shot.html

- **Cucumber:** In 100 g of the USDA reference food for cucumber, the listed amounts are 16.4 mcg vitamin K and 0.259 mg pantothenic acid (B5). [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients).
- **Fresh mint leaves:** In 100 g of the USDA reference food for fresh mint leaves, the listed amounts are 11.9 mg iron and 1.12 mg manganese. [USDA: Spearmint, fresh](https://fdc.nal.usda.gov/food-details/173475/nutrients).
- **Lemon juice:** In 100 g of the USDA reference food for lemon juice, the listed amounts are 38.7 mg vitamin C and 20 mcg folate (DFE). [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).

The cucumber mint green sips figures describe 100 g of each USDA reference ingredient, not a recipe serving; the amount in your glass depends on the quantities used. Straining and dilution change this cucumber mint green sips, so fiber or minerals listed for raw ingredients cannot be assumed to remain in the same amounts. Spearmint is the USDA reference variety in this cucumber mint green sips; other mint varieties can differ.

## Practical article expansion: word counts

Counts are for the article body, excluding site header, related cards, and footer.

| File | Before v4 | After v4 | Net increase |
| --- | ---: | ---: | ---: |
| `blog-superfoods.html` | 177 | 523 | +346 |
| `blog-ginger.html` | 171 | 547 | +376 |
| `blog-probiotics.html` | 173 | 517 | +344 |
| `blog-beet-juice-benefits.html` | 185 | 540 | +355 |
| `blog-wellness-shot-benefits.html` | 151 | 491 | +340 |
| `blog-celery-juice.html` | 195 | 546 | +351 |
| `blog-30-days-green-smoothie.html` | 207 | 555 | +348 |
| `blog-fat-burning-smoothie.html` | 175 | 522 | +347 |
| `blog-do-juice-cleanses-work.html` | 188 | 534 | +346 |
| `blog-best-morning-juice.html` | 361 | 639 | +278 |
| `blog-smoothie-vs-juicing.html` | 445 | 633 | +188 |

The nine additions are deliberately practical: choosing a manageable ingredient form, preparing for the blender, changing one ingredient at a time, recognizing dilution and straining changes, handling leftovers, and answering short recipe-specific questions. They do not add invented tasting or testing stories.

## The two rewritten guides: before and after


### blog-best-morning-juice.html

**Before opening:**

> The best morning juice is one you like, can prepare safely, and can fit alongside breakfast. You do not need a different bottle for immunity, skin, or metabolism. Start with taste and use the ingredients already in your kitchen.

**Current full article:**

A morning juice can start with produce you already have and a method your equipment can handle. Choose the ingredients and portion you want rather than looking for a separate drink for skin, immunity, or metabolism.


### What the ingredients contribute

- **Carrot:** USDA lists 835 mcg vitamin A (RAE) and 13.2 mcg vitamin K per 100 g of the reference ingredient. [USDA: Carrots, raw](https://fdc.nal.usda.gov/food-details/170393/nutrients).
- **Orange:** USDA lists 53.2 mg vitamin C and 2.4 g fiber per 100 g of the reference ingredient. [USDA: Oranges, raw, all commercial varieties](https://fdc.nal.usda.gov/food-details/169097/nutrients).
- **Fresh ginger:** USDA lists 0.226 mg copper and 43 mg magnesium per 100 g of the reference ingredient. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).

These figures describe 100 g of each ingredient, not a glass of juice. The weight used, straining, and added water change the finished drink. A small slice of ginger is far less than the 100 g reference amount.


### Choose one of three starting directions

For a citrus-and-vegetable combination, start with the [carrot ginger juice recipe](/recipe-carrot-ginger-juice). It uses carrots, orange, ginger, lemon, turmeric, and water. Check that you have the required ingredient forms before starting; a bottled orange drink is not the same as a peeled orange.

For a cucumber-based option, use [cucumber apple mint juice](/recipe-cucumber-mint-juice). Wash the cucumber and apple, core the apple, and measure the mint leaves. If you use a packaged coconut water, read its ingredients and storage directions.

For a beet combination, choose the [beet apple carrot recipe](/recipe-beet-energy-juice). Beet is firm, so cut it small and check your blender's instructions before processing it raw. These are different recipes, not interchangeable ingredient lists.


### Prepare before you blend

Wash produce under running water, remove citrus peel and hard seeds, and cut pieces to suit the machine. Measure the water rather than pouring until the jar looks full. Add liquid first for a conventional blender, following the manufacturer's instructions if using a personal blender with a different loading order. Stop the blades before scraping or moving ingredients.

A fine sieve over a wide bowl lets you strain in small batches. Press gently and transfer the liquid to a glass afterward. If you enjoy a thicker blended drink, skip the sieve. Keep the pulp decision separate from the amount of water: straining a very diluted mixture will not restore the original ingredient proportion.


### Make a substitution with a plan

Plain water can replace coconut water in a trial, but the reference nutrient figures for coconut water no longer apply. Lemon and lime are different citrus ingredients; begin with the written quantity and adjust a small sample. Replacing whole apple with apple juice changes both liquid and solids. Do not add the full recipe water automatically after making that swap.


### Common mistakes during morning preparation

Loading whole hard vegetables, adding a large chunk of ginger without measuring, and pressing pulp directly over a narrow glass make preparation more difficult. Prepare smaller pieces and use a bowl for straining. If time is limited, choose a simpler recipe rather than trying to force an unsuitable batch through the blender. A juice's preparation time also includes washing, cutting, and cleanup.


### Storage and breakfast planning

Make a manageable portion and cover leftovers promptly. [FoodSafety.gov recommends](https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety) refrigerating perishable food within two hours, or one hour above 90°F, and keeping the refrigerator at 40°F or below. Follow any opened ingredient's storage instructions.

Decide what else you want with breakfast. A glass of juice and a smoothie containing yogurt, oats, or nut butter have different ingredient lists; neither name explains the whole meal. Choose the recipe for its preparation and ingredients rather than a requirement to drink it on an empty stomach.


### Short FAQ

**Do I need a juicer?** No. The blender juice guide explains blending and straining.

**Can I cut the ingredients ahead?** Yes, with clean equipment and covered refrigerated storage. Keep the measured recipe quantities together and add the specified liquid when blending.

**Which recipe is quickest?** Check its listed time and ingredient form. Firm vegetables, thawing, and straining can add preparation work.


### blog-smoothie-vs-juicing.html

**Before opening:**

> Choose a smoothie when you want a thicker blended drink. Choose juice when you prefer a lighter sip with less pulp. You can make either in a blender, although a juice-style drink requires straining. The better choice starts with what you enjoy and what role the drink has in your meal.

**Current full article:**

The practical difference between a smoothie and juice is what happens to the edible material. A smoothie keeps the ingredients blended together. A juicer or a sieve separates liquid from some of the solids. Choose the method for the texture and preparation you want.


### Compare ingredients before comparing labels

- **Spinach:** USDA lists 483 mcg vitamin K and 469 mcg vitamin A (RAE) per 100 g of the reference ingredient. [USDA: Spinach, raw](https://fdc.nal.usda.gov/food-details/168462/nutrients).
- **Banana:** USDA lists 0.367 mg vitamin B6 and 0.27 mg manganese per 100 g of the reference ingredient. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients).
- **Cucumber:** USDA lists 16.4 mcg vitamin K and 0.259 mg pantothenic acid (B5) per 100 g of the reference ingredient. [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients).

The reference amounts are per 100 g of each ingredient. They are not a calculation for a smoothie, and they cannot be copied onto a glass of strained juice. A different ingredient weight, removed pulp, or extra liquid changes the comparison.


### Choose produce for your equipment

Soft fruit, leafy greens, yogurt, and enough liquid are straightforward components of many blender recipes. Firm carrots and raw beet need smaller pieces and equipment designed to handle them. A juicer has its own preparation requirements, including chute size and unsuitable ingredients. Read those instructions rather than assuming that anything edible can go through either machine unchanged.


### Prepare one small comparison

Use a cucumber-and-apple blender recipe as written. Wash the produce, core the apple, cut the pieces, and measure the liquid. Blend according to the machine's instructions, then split a small portion into two bowls. Keep one portion as blended and strain the other through a fine sieve. This lets you compare the effect of removing pulp without changing all the ingredients at once.

Stop the machine before scraping. Strain over a bowl rather than pressing a full sieve above a small glass. Do not keep adding water merely to make the strained portion match a particular volume; that changes dilution as well as texture.


### Substitutions that change the result

Yogurt, banana, oats, and nut butter are usually used in a blended drink rather than passed through a juicer. Replacing yogurt with water changes the base, not just its thickness. Replacing whole fruit with bottled juice introduces a processed liquid and changes the amount of solid material. Check the new product's label instead of using the raw-food entry as if nothing changed.

A plant-based yogurt can provide a different creamy base, but its nutrient profile depends on the product. If you want a banana-free blend, start with a recipe written that way instead of removing banana and expecting the original liquid balance to remain suitable.


### Common mistakes when comparing the two

A tall smoothie and a small juice may use very different amounts of produce. Comparing photographs does not give an equal portion or equal ingredient weight. Likewise, the fiber in a whole apple is not the measured fiber in juice made from it. Straining removes some of the material; keeping pulp retains more of what went into the blender.

The [USDA MyPlate fruit guide](https://www.myplate.gov/eat-healthy/fruits) distinguishes whole-fruit choices from juice. That guidance does not calculate your particular recipe. If you need a nutrient estimate, record the actual ingredients, weights, final yield, and method.


### Cleanup and storage

Allow time to wash the sieve, bag, or juicer parts as well as the blender jar. Rinse caught pulp before it dries, following the equipment's cleaning directions. Transfer leftovers to a covered container and refrigerate promptly; adding citrus does not make an untreated drink shelf-stable. [FoodSafety.gov's storage guidance](https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety) applies to perishable preparations.


### Short FAQ

**Can a blender make juice?** It can make a juice-style drink when you blend suitable produce with liquid and strain it. The blender method explains the steps.

**Must smoothies include yogurt?** No. Use a recipe with a base and ingredient balance that suit your needs.

**Is one method always quicker?** No. Ingredient preparation, batch size, straining, and equipment cleanup all affect the work involved.


## Full About text

The text below is the full visible main content of the local About page, including its opening and closing call to action.


## Welcome to Madeshealthytreats.

My colorful kitchen scrapbook of smoothies, drinks, juices, teas, and tonics.


### How my little kitchen scrapbook began

I'm Made, the person behind Madeshealthytreats. I started this as a blog to share my recipes around 2021, if I remember correctly. I shared a couple of recipes, but it wasn't quite what I hoped it would be.

I kept finding myself wanting more color. Vibrant colors do something to my eyes and my spirit. They make me feel relaxed and overjoyed. I'm not sure if you reading this can relate, but seeing those colors makes me feel good.

Bright yellow, pink, peach, baby blue, lemon, light purple, green, burgundy, and turquoise. I love bright versions of those colors, and I wanted that feeling to be part of this website.


### A colorful place for my recipes

So I thought: why not make a one-stop scrapbook of smoothies, drinks, juices, teas, and tonics? Fruits, greens, and vegetables already bring so much color to what we make. I wanted a place to keep and share those recipes that feels colorful, inviting, and full of the joy I feel when I see them.

That's how we got here today. Madeshealthytreats is my little kitchen scrapbook, and I'm happy to share it with you.


### What I share here

Browse my [smoothies](/recipes), [juices and drinks](/juices), and [herbal teas](/teas). My [recipe standards](/editorial) explain how I handle preparation notes and ingredient facts. If something needs correcting, [send me the page and the detail to check](/contact).


### Find something good to make

Pick an ingredient you already have and start there.

Explore recipes →


## What the founder-photo image is

In the original main checkout, `about.html` contained an image with CSS class `founder-photo` and source `assets/images/Logo.png`. I inspected that actual file: it shows a turquoise chef's hat, green Madeshealthytreats lettering, and the tagline “HEALTHY EATING MADE EASY” on a white background. It is a logo graphic, not a photograph of the founder.

That old founder-photo element was removed during the earlier local About rewrite. The current About page has no founder-photo element and no personal portrait. Its only image is the header logo at `assets/images/madeshealthytreats-logo.webp`. Both logo asset files still exist. No About text or image file was changed for v4.

## Every HTML page absent from the sitemap: read-only inventory

The inventory compares all repository HTML files, including `admin/index.html`, against the 56 clean URLs in `sitemap.xml`. It lists the source files even if Netlify redirects them. A suggestive filename is distinguished from an actual visible health claim. None of these files was edited for v4.

| Source page | Status and destination | Health claims in the actual page |
| --- | --- | --- |
| `admin/index.html` | CMS document served through the `/admin` and `/admin/*` rewrites; omitted from the public recipe sitemap. | CMS entry page; no recipe or health-claim content in its static HTML. |
| `blog-detox-juice.html` | Moved-page stub; HTML refresh to `blog-do-juice-cleanses-work.html`; Netlify also has a 301 for the legacy route. | No positive health claim in the stub. The filename says detox; title names evidence on cleanses. Body only says the guide moved. |
| `blog-green-smoothie-every-day.html` | Moved-page stub; HTML refresh to `blog-30-days-green-smoothie.html`; Netlify also has a 301 for the legacy route. | No benefit promise in the stub. Current title is a practical green-smoothie guide. |
| `blog-juices-good-for-liver.html` | Moved-page stub; HTML refresh to `blog-do-juice-cleanses-work.html`; Netlify also has a 301 for the legacy route. | No liver-benefit claim in the stub. The health implication is in the legacy filename, not the current body. |
| `blog-morning-vs-evening.html` | Moved-page stub; HTML refresh to `blog-30-days-green-smoothie.html`; Netlify also has a 301 for the legacy route. | No timing-related health claim. Current title is a practical green-smoothie guide and body is a moved notice. |
| `blog-post.html` | Moved-page stub; HTML refresh to `blog-ginger.html`; Netlify also has a 301 for the legacy route. | Moved-guide stub; no health promise. |
| `blog-smoothie-a-day-weight-loss.html` | Moved-page stub; HTML refresh to `blog-fat-burning-smoothie.html`; Netlify also has a 301 for the legacy route. | No weight-loss promise in the stub. The legacy filename suggests a result; the current title concerns ingredients and portions. |
| `blog-smoothie-meal-replacement.html` | Moved-page stub; HTML refresh to `blog-high-protein-smoothie.html`; Netlify also has a 301 for the legacy route. | No health outcome in the stub. The destination title says “5 Protein Smoothies Without Powder”; the source body only announces the move. |
| `coming-soon.html` | Old shop placeholder; Netlify redirects `/coming-soon` and `.html` to `/teas`. | Calls the planned products “healthy treats” but makes no specific health-outcome promise. Its metadata references a green-detox image filename; this is not visible proof of a detox effect. |
| `recipe-single.html` | Moved-page stub; HTML refresh to `recipe-green-detox.html`; Netlify also has a 301 for the legacy route. | Moved-guide stub; no health promise. Destination slug retains green-detox, while the active recipe uses an ingredient-based title. |
| `saved.html` | Saved-recipes utility page; no redirect; omitted from the sitemap. | Browser-local saved-recipes page; no specific health-outcome promise in its static HTML. Saved titles are populated from the user’s browser storage. |

These are all 11 excluded HTML pages, not just the eight named in the request. Their listing does not claim that a legacy filename alone is a published health promise. Existing redirect configuration and HTML refresh wording are reported as found, not repaired in v4.

## Verification and limits

- Correct local branch; no push or deploy; no deleted files.
- All 27 active recipes use the requested testing phrase; original ingredient lists, steps, and Recipe structured-data instructions are preserved.
- Every selected nutrient amount and unit matches its source record. No honey or sugar fact bullet remains. Ingredient fact sentences and recipe-specific cautions were checked: no identical factual prose sentence is reused on another recipe page.
- The 11 articles have preparation, substitution, mistake, storage, and FAQ material; nine show more than 300 added words.
- The 11 sitemap-excluded HTML files are unchanged from the v4 starting point, and the About page is unchanged for this revision.
- Internal page links resolve; JSON parses; JavaScript syntax and whitespace checks pass.
- No full browser visual test or live Netlify routing test is claimed. These edits are local content changes; final deployment still has not happened.
