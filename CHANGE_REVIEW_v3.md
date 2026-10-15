# Change review v3

Local branch: `repair-content-review`. No push, deployment, page deletion, slug change, or image edit was made for this revision. This review supersedes change-review-2.md.

## Requested changes completed

1. Removed every personal recipe-notes block and all placeholders from public HTML. Removed “my own preparation notes” and “home kitchen” from editorial. Tea, juice, and shot bylines now simply say By Made; no testing status was invented. Previously confirmed smoothie testing wording remains.
2. Added exactly one **What's in this drink** section to each of the 27 active recipes, with two to four ingredient facts. The 74 facts each link to a specific USDA FoodData Central ingredient record and was checked against its nutrient data. Each recipe has a different selection of ingredients and nutrient facts.
3. Rewrote nine benefit-style posts. Unsupported personal anecdotes and benefit implications were replaced with ingredient facts linked to USDA and, where relevant, NIH research context. No drink is promised to detox, burn fat, boost immunity, reduce inflammation, or change blood pressure.

The ingredients, measurements, preparation steps, recipe slugs, and Recipe structured-data instructions remain unchanged. No nutrition panels, ratings, test dates, or photographs were invented.

## Source method and limits

The source data came from USDA's official [SR Legacy archive](https://fdc.nal.usda.gov/fdc-datasets/FoodData_Central_sr_legacy_food_json_2018-04.zip), retrieved October 12, 2026. This is a historical food-composition reference, not a measurement of the recipes or an individual branded product. Page links point to the corresponding USDA FoodData Central records. The verified records and recipe mappings are stored in `sources/ingredient-nutrients.json` and `sources/recipe-ingredient-facts.json`.

Facts describe the listed ingredients rather than a calculated serving. Strained juice and brewed tea do not retain all nutrients from the starting ingredients. Small spice amounts contribute small quantities. Optional ingredients contribute only when used. Raw-fruit records do not guarantee the composition of every packaged pulp; dairy-yogurt records do not describe every plant-based substitute. These limits are reflected beside the facts on the relevant pages.

## Every recipe section

| Recipe file | Linked ingredient facts |
| --- | --- |
| `recipe-acv-detox-shot.html` | **Lemon juice:** Lemon juice contains vitamin C. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).; **Optional honey:** Optional honey contains carbohydrate. [USDA: Honey](https://fdc.nal.usda.gov/food-details/169640/nutrients). |
| `recipe-beet-energy-juice.html` | **Beet:** Beet contains potassium. [USDA: Beets, raw](https://fdc.nal.usda.gov/food-details/169145/nutrients).; **Apple with its skin:** Apple with its skin contains dietary fiber. [USDA: Apples, raw, with skin (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/171688/nutrients).; **Carrot:** Carrot contains vitamin A. [USDA: Carrots, raw](https://fdc.nal.usda.gov/food-details/170393/nutrients). |
| `recipe-beet-performance-shot.html` | **Beet:** Beet contains folate. [USDA: Beets, raw](https://fdc.nal.usda.gov/food-details/169145/nutrients).; **Apple with its skin:** Apple with its skin contains dietary fiber. [USDA: Apples, raw, with skin (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/171688/nutrients).; **Lemon juice:** Lemon juice contains vitamin C. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients). |
| `recipe-berry-probiotic.html` | **Strawberries:** Strawberries contain vitamin C. [USDA: Strawberries, raw](https://fdc.nal.usda.gov/food-details/167762/nutrients).; **Ground flaxseed:** Ground flaxseed contains dietary fiber. [USDA: Seeds, flaxseed](https://fdc.nal.usda.gov/food-details/169414/nutrients).; **Rolled oats:** Rolled oats contain magnesium. [USDA: Oats (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/169705/nutrients). |
| `recipe-carrot-ginger-juice.html` | **Carrot:** Carrot contains vitamin A. [USDA: Carrots, raw](https://fdc.nal.usda.gov/food-details/170393/nutrients).; **Orange:** Orange contains vitamin C. [USDA: Oranges, raw, all commercial varieties](https://fdc.nal.usda.gov/food-details/169097/nutrients).; **Fresh ginger:** Fresh ginger contains potassium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients). |
| `recipe-celery-detox-juice.html` | **Celery:** Celery contains potassium. [USDA: Celery, raw](https://fdc.nal.usda.gov/food-details/169988/nutrients).; **Cucumber:** Cucumber contains potassium. [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients).; **Lemon juice:** Lemon juice contains vitamin C. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients). |
| `recipe-chamomile-lemon-tea.html` | **Lemon:** Lemon contains vitamin C. [USDA: Lemons, raw, without peel](https://fdc.nal.usda.gov/food-details/167746/nutrients).; **Optional honey:** Optional honey contains carbohydrate. [USDA: Honey](https://fdc.nal.usda.gov/food-details/169640/nutrients). |
| `recipe-citrus-immunity.html` | **Orange:** Orange contains vitamin C. [USDA: Oranges, raw, all commercial varieties](https://fdc.nal.usda.gov/food-details/169097/nutrients).; **Lemon juice:** Lemon juice contains vitamin C. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).; **Fresh ginger:** Fresh ginger contains magnesium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients). |
| `recipe-cucumber-mint-juice.html` | **Cucumber:** Cucumber contains potassium. [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients).; **Apple with its skin:** Apple with its skin contains dietary fiber. [USDA: Apples, raw, with skin (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/171688/nutrients).; **Fresh mint leaves (spearmint reference):** Fresh mint leaves contain calcium. [USDA: Spearmint, fresh](https://fdc.nal.usda.gov/food-details/173475/nutrients). |
| `recipe-fresh-mint-tea.html` | **Fresh mint leaves (spearmint reference):** Fresh mint leaves contain calcium. [USDA: Spearmint, fresh](https://fdc.nal.usda.gov/food-details/173475/nutrients).; **Optional lemon:** Optional lemon contains vitamin C. [USDA: Lemons, raw, without peel](https://fdc.nal.usda.gov/food-details/167746/nutrients). |
| `recipe-ginger-immunity-shot.html` | **Fresh ginger:** Fresh ginger contains potassium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).; **Lemon juice:** Lemon juice contains vitamin C. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients).; **Optional honey:** Optional honey contains carbohydrate. [USDA: Honey](https://fdc.nal.usda.gov/food-details/169640/nutrients). |
| `recipe-golden-glow.html` | **Papaya:** Papaya contains folate. [USDA: Papayas, raw](https://fdc.nal.usda.gov/food-details/169926/nutrients).; **Carrot:** Carrot contains vitamin A. [USDA: Carrots, raw](https://fdc.nal.usda.gov/food-details/170393/nutrients).; **Orange:** Orange contains vitamin C. [USDA: Oranges, raw, all commercial varieties](https://fdc.nal.usda.gov/food-details/169097/nutrients). |
| `recipe-green-detox.html` | **Spinach:** Spinach contains folate. [USDA: Spinach, raw](https://fdc.nal.usda.gov/food-details/168462/nutrients).; **Banana:** Banana contains potassium. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients).; **Cucumber:** Cucumber contains potassium. [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients). |
| `recipe-guava-strawberry-smoothie.html` | **Guava:** Guava contains vitamin C. [USDA: Guavas, common, raw](https://fdc.nal.usda.gov/food-details/173044/nutrients).; **Strawberries:** Strawberries contain vitamin C. [USDA: Strawberries, raw](https://fdc.nal.usda.gov/food-details/167762/nutrients).; **Plain dairy yogurt:** Plain dairy yogurt contains protein. [USDA: Yogurt, plain, whole milk](https://fdc.nal.usda.gov/food-details/171284/nutrients). |
| `recipe-hibiscus-ginger-tea.html` | **Fresh ginger:** Fresh ginger contains potassium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).; **Optional honey:** Optional honey contains carbohydrate. [USDA: Honey](https://fdc.nal.usda.gov/food-details/169640/nutrients). |
| `recipe-mango-passion-fruit-smoothie.html` | **Mango:** Mango contains folate. [USDA: Mangos, raw](https://fdc.nal.usda.gov/food-details/169910/nutrients).; **Plain dairy yogurt:** Plain dairy yogurt contains calcium. [USDA: Yogurt, plain, whole milk](https://fdc.nal.usda.gov/food-details/171284/nutrients). |
| `recipe-matcha-lean.html` | **Banana:** Banana contains potassium. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients).; **Chia seeds:** Chia seeds contain magnesium. [USDA: Seeds, chia seeds, dried](https://fdc.nal.usda.gov/food-details/170554/nutrients). |
| `recipe-papaya-lime-smoothie.html` | **Papaya:** Papaya contains vitamin C. [USDA: Papayas, raw](https://fdc.nal.usda.gov/food-details/169926/nutrients).; **Plain dairy yogurt:** Plain dairy yogurt contains calcium. [USDA: Yogurt, plain, whole milk](https://fdc.nal.usda.gov/food-details/171284/nutrients).; **Lime:** Lime contains vitamin C. [USDA: Limes, raw](https://fdc.nal.usda.gov/food-details/168155/nutrients). |
| `recipe-peanut-butter-banana.html` | **Peanut butter:** Peanut butter contains protein. [USDA: Peanut butter, smooth style, without salt](https://fdc.nal.usda.gov/food-details/172470/nutrients).; **Banana:** Banana contains potassium. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients).; **Rolled oats:** Rolled oats contain dietary fiber. [USDA: Oats (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/169705/nutrients). |
| `recipe-pineapple-turmeric-juice.html` | **Pineapple:** Pineapple contains vitamin C. [USDA: Pineapple, raw, all varieties](https://fdc.nal.usda.gov/food-details/169124/nutrients).; **Ground turmeric, if used:** Ground turmeric, if used contains magnesium. [USDA: Spices, turmeric, ground](https://fdc.nal.usda.gov/food-details/172231/nutrients).; **Fresh ginger:** Fresh ginger contains potassium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).; **Lemon juice:** Lemon juice contains vitamin C. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients). |
| `recipe-pumpkin-oat-smoothie.html` | **Cooked pumpkin:** Cooked pumpkin contains vitamin A. [USDA: Pumpkin, cooked, boiled, drained, without salt](https://fdc.nal.usda.gov/food-details/168449/nutrients).; **Rolled oats:** Rolled oats contain dietary fiber. [USDA: Oats (Includes foods for USDA's Food Distribution Program)](https://fdc.nal.usda.gov/food-details/169705/nutrients).; **Plain dairy yogurt:** Plain dairy yogurt contains protein. [USDA: Yogurt, plain, whole milk](https://fdc.nal.usda.gov/food-details/171284/nutrients). |
| `recipe-purple-rain.html` | **Blackberries:** Blackberries contain dietary fiber. [USDA: Blackberries, raw](https://fdc.nal.usda.gov/food-details/173946/nutrients).; **Ground flaxseed:** Ground flaxseed contains magnesium. [USDA: Seeds, flaxseed](https://fdc.nal.usda.gov/food-details/169414/nutrients). |
| `recipe-tamarind-ginger-cooler.html` | **Tamarind:** Tamarind contains potassium. [USDA: Tamarinds, raw](https://fdc.nal.usda.gov/food-details/167763/nutrients).; **Fresh ginger:** Fresh ginger contains magnesium. [USDA: Ginger root, raw](https://fdc.nal.usda.gov/food-details/169231/nutrients).; **Optional sugar:** Optional sugar contains carbohydrate. [USDA: Sugars, granulated](https://fdc.nal.usda.gov/food-details/169655/nutrients). |
| `recipe-tropical-power.html` | **Mango:** Mango contains vitamin C. [USDA: Mangos, raw](https://fdc.nal.usda.gov/food-details/169910/nutrients).; **Pineapple:** Pineapple contains manganese. [USDA: Pineapple, raw, all varieties](https://fdc.nal.usda.gov/food-details/169124/nutrients).; **Banana:** Banana contains potassium. [USDA: Bananas, raw](https://fdc.nal.usda.gov/food-details/173944/nutrients). |
| `recipe-turmeric-golden-shot.html` | **Ground turmeric:** Ground turmeric contains manganese. [USDA: Spices, turmeric, ground](https://fdc.nal.usda.gov/food-details/172231/nutrients).; **Lemon juice:** Lemon juice contains vitamin C. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients). |
| `recipe-watermelon-mint.html` | **Watermelon:** Watermelon contains vitamin C. [USDA: Watermelon, raw](https://fdc.nal.usda.gov/food-details/167765/nutrients).; **Chia seeds:** Chia seeds contain dietary fiber. [USDA: Seeds, chia seeds, dried](https://fdc.nal.usda.gov/food-details/170554/nutrients).; **Coconut water:** Coconut water contains potassium. [USDA: Nuts, coconut water (liquid from coconuts)](https://fdc.nal.usda.gov/food-details/170174/nutrients). |
| `recipe-wheatgrass-energy-shot.html` | **Cucumber:** Cucumber contains potassium. [USDA: Cucumber, with peel, raw](https://fdc.nal.usda.gov/food-details/168409/nutrients).; **Fresh mint leaves (spearmint reference):** Fresh mint leaves contain folate. [USDA: Spearmint, fresh](https://fdc.nal.usda.gov/food-details/173475/nutrients).; **Lemon juice:** Lemon juice contains vitamin C. [USDA: Lemon juice, raw](https://fdc.nal.usda.gov/food-details/167747/nutrients). |

## Benefit posts: before and after

These before excerpts come from the local files immediately before this v3 revision. Some pages already rejected health promises; they now also identify the nutrients in their ingredients. The after text below is the complete revised article body for each page.

## blog-superfoods.html

**Before:**

> I used to buy every trendy smoothie powder that promised glowing skin, perfect energy, and a brand new personality by noon. Most of them ended up pushed to the back of the cabinet. Over time, I learned that the best smoothie boosters are the ones that taste good, make sense, and fit into real mornings. My favorites are simple, colorful, and easy to keep on hand.

**After:**

A smoothie ingredient can be useful without a “superfood” label. Choose it for the ingredient list, preparation, and what it contributes to your recipe.


### Ten ingredients and their nutrients

- **Chia seeds:** contains magnesium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/170554/nutrients).
- **Ground flaxseed:** contains dietary fiber. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169414/nutrients).
- **Peanut butter:** contains protein. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/172470/nutrients).
- **Oats:** contains dietary fiber. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169705/nutrients).
- **Spinach:** contains folate. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/168462/nutrients).
- **Strawberries:** contains vitamin C. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/167762/nutrients).
- **Mango:** contains vitamin C. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169910/nutrients).
- **Papaya:** contains folate. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169926/nutrients).
- **Banana:** contains potassium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/173944/nutrients).
- **Plain dairy yogurt:** contains calcium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/171284/nutrients).


### Choose a role before adding more

Choose fruit for the fruit component, yogurt for a creamy base, and oats or seeds when you want more body. Start with one extra ingredient so you can see how it changes the blend. Read labels for allergens and added ingredients.


### What these facts tell you

These USDA records describe the named foods. They do not calculate your glass or promise a skin, energy, or weight result. Brands and quantities matter, especially when using fruit pulp, plant-based yogurt, or a prepared drink.

Find measured combinations in the [smoothie collection](/recipes).


## blog-ginger.html

**Before:**

> I cannot promise that ginger will solve your whole day, but I can say it makes my mornings feel lighter. When I add it to a fiber rich smoothie, the drink feels fresher and easier to sip. It brings warmth without heaviness, which is exactly what I want before a busy day.

**After:**

Fresh ginger is an ingredient to measure, not a shortcut to a health result. This guide focuses on preparing it and understanding ingredient facts.


### What's in the ingredients

- **Fresh ginger:** contains potassium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169231/nutrients).
- **Lemon juice:** contains vitamin C. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/167747/nutrients).
- **Plain dairy yogurt:** contains calcium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/171284/nutrients).

The amount of ginger used in a smoothie is small. Its presence does not make the drink a significant source of every nutrient listed in the raw-root record.


### Prepare a small amount

Wash the ginger and slice or grate it finely. Begin with the amount in your chosen recipe. Blend, taste, and add more only if you want it. Stop the blender before scraping the sides or adding more ingredients.


### Keep research separate from your glass

[NIH's ginger overview](https://www.nccih.nih.gov/health/ginger) discusses research on ginger products and notes that many studies use supplements. That does not establish an effect for a homemade smoothie.


### Choose a measured recipe

Try the [ginger lemon drink](/recipe-ginger-immunity-shot) or [pineapple ginger turmeric drink](/recipe-pineapple-turmeric-juice). Use their ingredient quantities rather than treating a large piece of ginger as a standardized dose.


## blog-probiotics.html

**Before:**

> I did not grow up thinking about probiotics. I thought about whether breakfast tasted good and whether I could get out the door on time. When I started making smoothies every morning, I realized that kefir and yogurt made my blends creamier and more satisfying. The gut health part was a beautiful bonus, not a complicated project.

**After:**

Yogurt and kefir are fermented ingredients used in smoothies. Their labels and nutrient content matter more than a general “gut-friendly” promise.


### Ingredient facts for a creamy blend

- **Plain dairy yogurt:** contains calcium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/171284/nutrients).
- **Plain dairy yogurt:** contains protein. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/171284/nutrients).
- **Strawberries:** contains vitamin C. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/167762/nutrients).
- **Ground flaxseed:** contains dietary fiber. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169414/nutrients).

The dairy-yogurt record is not a nutrition reference for coconut kefir or every plant-based substitute. Check the product label for the ingredients you choose.


### Live cultures and probiotic claims

[NIH's probiotics fact sheet](https://ods.od.nih.gov/factsheets/Probiotics-HealthProfessional/) explains that fermented foods and products labeled probiotics do not all have established health benefits. Evidence depends on the specific microorganisms and preparation studied.


### Choose the base deliberately

Check whether a yogurt or kefir is plain or sweetened, whether it contains dairy, and what its label says about cultures. Taste the fruit blend before adding honey or syrup. Add liquid gradually if a thick yogurt stops the mixture circulating.


### One recipe to start with

The [berry kefir smoothie](/recipe-berry-probiotic) has measured ingredients and preparation steps. Its name and ingredients do not establish a digestive-health outcome.


## blog-beet-juice-benefits.html

**Before:**

> Beetroot juice has been studied for blood-pressure effects. A 2024 systematic review and meta-analysis examined randomized trials in hypertension. That is research on particular participants and interventions, not proof that this apple-and-beet recipe will produce the same outcome.

**After:**

A beet drink starts with produce and a preparation method. Its color is not evidence of a blood-pressure or exercise result.


### What's in the ingredients

- **Beet:** contains folate. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169145/nutrients).
- **Apple with its skin:** contains dietary fiber. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/171688/nutrients).
- **Carrot:** contains vitamin A. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/170393/nutrients).

These facts refer to the edible ingredients. Straining removes some solids and fiber, so an apple's fiber content is not the fiber content of strained beet-and-apple juice.


### A small blender batch

Use ½ small beet, one cored apple, ½ cup water, and a squeeze of lemon. Wash the produce, cut the firm beet into small pieces your blender can handle, and blend with the liquid. Strain if you prefer less pulp.


### Keep the nutrient facts in context

A homemade batch has no calculated nutrient total here. Produce size, peeling, straining, and dilution all change what is in a serving. The USDA records identify nutrients in foods; they do not measure a health effect of this recipe.


### Keep preparation practical

Use a washable cutting board and strain over a wide bowl to catch splashes. Rinse the blender after pouring. For a complete measured recipe, see [beet apple carrot juice](/recipe-beet-energy-juice).


## blog-wellness-shot-benefits.html

**Before:**

> The NIH ginger guidance reviews specific uses and notes possible side effects, including heartburn and irritation. Research on a defined product and condition cannot automatically be transferred to every citrus-ginger shot.

**After:**

A “wellness shot” is a small drink, often made with ginger, citrus, or turmeric. The label does not tell you its nutrient quantity or establish a health effect.


### Ingredients, rather than promises

- **Fresh ginger:** contains potassium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169231/nutrients).
- **Lemon juice:** contains vitamin C. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/167747/nutrients).
- **Ground turmeric:** contains magnesium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/172231/nutrients).

Small spoonfuls and slices contribute smaller amounts than the reference foods in a database. These are ingredient facts, not nutrition totals for a shot.


### Read the preparation and label

Check the ingredients, serving size, added sweeteners, and allergens. Homemade and bottled versions may have different proportions. Dilute a sharp blend with water rather than assuming it must be concentrated.


### What ingredient studies establish

[NIH's ginger overview](https://www.nccih.nih.gov/health/ginger) and [turmeric overview](https://www.nccih.nih.gov/health/turmeric) discuss particular products and research settings. They do not verify an effect for every homemade shot.


### Make a measured version

Use the [ginger-shot preparation guide](/blog-ginger-shots-at-home) for ingredient quantities and variations. Wash produce, use clean equipment, and refrigerate leftovers promptly.


## blog-celery-juice.html

**Before:**

> A homemade celery drink is not evidence that a detox program works. The NIH review of detox and cleanse claims describes limited, often low-quality research and warns about untreated juices and restrictive routines. If you have a digestive condition, a recipe should not replace individual medical guidance.

**After:**

Celery juice is a vegetable drink you can prepare with a blender and a sieve. Choose whether to strain it based on the texture you want.


### What's in celery and its pairings

- **Celery:** contains potassium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169988/nutrients).
- **Cucumber:** contains potassium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/168409/nutrients).
- **Lemon juice:** contains vitamin C. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/167747/nutrients).


### A small blender batch

Start with two large celery stalks, ½ cucumber, ½ cup cold water, and one teaspoon lemon juice. Wash the produce, cut the celery into short pieces, and blend with the liquid. Strain through a fine sieve if you want less pulp.

Add ½ cored apple if you want to try that variation. Yield depends on produce size and how much pulp is removed. Add water gradually if the blender struggles.


### Ingredient nutrients and juice are different measurements

The USDA records describe the named ingredients. They do not calculate the nutrients in your strained batch. Leaving the pulp retains more of the ingredient material than discarding it.


### What about cleansing claims?

[NIH's review of detoxes and cleanses](https://www.nccih.nih.gov/health/detoxes-and-cleanses-what-you-need-to-know) does not establish that this celery drink removes toxins. Nutrient facts do not turn a recipe into a treatment.

See the [celery cucumber juice recipe](/recipe-celery-detox-juice) for the full ingredient list. Cover and refrigerate leftovers promptly.


## blog-30-days-green-smoothie.html

**Before:**

> No particular result follows from drinking one smoothie daily. Your overall diet and circumstances matter more than a single recipe. The USDA MyPlate fruit guidance notes that whole or cut fruit is generally preferable to juice; blended smoothies retain the fruit and greens rather than discarding pulp. If you have a medical condition or dietary restriction, ask a qualified professional about your individual needs.

**After:**

A green smoothie is one way to combine fruit and leafy greens. The ingredients and quantities tell you more than a daily challenge or a promised result.


### What's in a green blend

- **Spinach:** contains folate. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/168462/nutrients).
- **Banana:** contains potassium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/173944/nutrients).
- **Cucumber:** contains potassium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/168409/nutrients).


### A measured starting point

For one large glass, use one cup cold water or milk, one packed cup baby spinach, one small frozen banana, half a cucumber, and a squeeze of lemon. Add one teaspoon grated ginger only if you want it.

Blend the liquid and greens first. Add the remaining ingredients and blend until smooth. Taste before adding more fruit, lemon, or water. Stop the blender before scraping or adjusting it.


### Adjust the recipe, not the promise

Add liquid a few tablespoons at a time if it is too thick. If it is too thin, add a little more fruit or yogurt. Check milk and yogurt labels if using them: a substitution changes the ingredients and nutrient profile.


### Make it fit your routine

You do not need a fixed time or a daily challenge to use this recipe. The USDA records describe ingredient nutrients, not guaranteed changes to skin, weight, or energy.

For the full version, see [spinach cucumber banana smoothie](/recipe-green-detox). Cover and refrigerate a prepared drink promptly.


## blog-fat-burning-smoothie.html

**Before:**

> It is easy to mistake a nutritious ingredient for a promised outcome. Nuts, oats, yogurt, and fruit can contribute useful nutrients, but the amount matters. A large drink with multiple spoonfuls of nut butter is different from a small fruit-and-water blend.

**After:**

Choose a smoothie by its ingredients and portions. A “fat-burning” label is not a nutrient calculation or evidence that a particular drink changes body fat.


### Ingredients and what they contain

- **Plain dairy yogurt:** contains protein. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/171284/nutrients).
- **Oats:** contains dietary fiber. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169705/nutrients).
- **Peanut butter:** contains magnesium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/172470/nutrients).
- **Strawberries:** contains vitamin C. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/167762/nutrients).


### A simple starting combination

Use ¾ cup plain yogurt, ¾ cup frozen berries, half a banana, and enough water or milk to blend. Add the liquid and yogurt first, then fruit. Taste before adding sweetener.


### Use the quantities you actually choose

The ingredient facts above are not nutrition totals for that combination. A different yogurt, an extra spoonful of nut butter, or a larger portion changes the calculation. The [NIH portion guide](https://www.niddk.nih.gov/health-information/weight-management/just-enough-food-portions) distinguishes the portion you serve from a package's serving size.


### Keep the cooking choices clear

Use yogurt for a creamy base, fruit for the fruit component, and a small amount of oats if you want more body. You do not need every ingredient listed here in one glass. Find measured combinations in the [smoothie collection](/recipes).


## blog-do-juice-cleanses-work.html

**Before:**

> The NIH National Center for Complementary and Integrative Health reports that research on detox programs in people is limited and often low quality. Its summary notes that there is no compelling research supporting detox diets for weight management or removing toxins. A short-term change on the scale is not proof of cleansing.

**After:**

This guide separates facts about juice ingredients from claims about juice-only diets. A nutrient in a fruit does not establish a cleansing effect for a drink.


### What the ingredients contain

- **Orange:** contains vitamin C. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/169097/nutrients).
- **Carrot:** contains vitamin A. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/170393/nutrients).
- **Cucumber:** contains potassium. [USDA ingredient record](https://fdc.nal.usda.gov/food-details/168409/nutrients).


### Whole ingredients and strained juice

These USDA entries describe edible foods. Straining removes some solids and changes the finished drink; dilution changes the amount in a glass. This page does not provide a nutrition calculation for a juice batch.


### What the evidence on cleanses says

[NIH's review of detoxes and cleanses](https://www.nccih.nih.gov/health/detoxes-and-cleanses-what-you-need-to-know) describes limited research and does not establish that detox diets remove toxins or provide lasting weight-management benefits.


### Prepare juice as a recipe

Choose a measured combination, wash the produce, and use clean equipment. Blend with water and strain if you want less pulp. The [blender juice guide](/blog-juice-without-juicer) gives three combinations and the preparation method.


### Check what a claim actually measures

Ask whether a statement concerns a nutrient in an ingredient, a defined product used in a study, or the finished recipe. Those are different measurements. Cover and refrigerate leftovers promptly rather than treating fresh juice as a shelf-stable product.


## Editorial: before and after

| Before | After |
| --- | --- |
| Recipes from my home kitchen | Recipe standards |
| My notes describe what I actually noticed when making them. | Removed with the recipe-notes blocks |
| Each recipe includes its ingredients, preparation steps, one storage note, a short FAQ, and my own preparation notes. | Each recipe includes its ingredients, preparation steps, one storage note, and a short FAQ. |

## Verification

- Confirmed branch repair-content-review and that no tracked pages were deleted.
- All 27 active recipes have one ingredient-facts section and two to four linked ingredient facts.
- Every recorded nutrient is positive in the referenced USDA ingredient record.
- No recipe-note blocks or placeholders remain in public HTML; the two prohibited editorial phrases are absent.
- HTML ingredients and preparation steps, and Recipe structured-data ingredients and instructions, match the original main checkout.
- JSON source files parse, internal links resolve, clean canonicals and sitemap URLs remain, and whitespace checks pass.
- This revision does not change JavaScript, styles, or routing. The previous functional filter and saved-link checks remain applicable. Full browser visual testing has not run; no live-site result is claimed.

## Prior brand-name inventory retained


The public brand is **Madeshealthytreats**, one word. This inventory compares the current local edits with the original main checkout, including the replacements made earlier in this update. Counts identify every original occurrence by file and HTML location. Original brand credits inside recipe author fields and recipe bylines were replaced with **Made** as personal authorship; visible bylines remain **By Made**. Other removed paragraphs containing the former brand were rewritten as described above. URLs, account names, filenames, and social handles were not renamed. Historical before/after quotations in this review remain only as review evidence.

| File | Original locations changed or removed (occurrence count) |
| --- | --- |
| `README.md` | line 1: 1 occurrence(s) |
| `about.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); meta[twitter:description] @content (1); span .italic text (1); img[founder-photo] @alt (1); a .footer-brand text (1) |
| `admin/index.html` | title text (1) |
| `assets/images/README.txt` | line 1: 1 occurrence(s) |
| `blog-30-days-green-smoothie.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-beet-juice-benefits.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.publisher.name (1); a .footer-brand text (1) |
| `blog-best-morning-juice.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.publisher.name (1); a .footer-brand text (1) |
| `blog-budget-smoothie-shopping-list.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); small text (1); a .footer-brand text (1) |
| `blog-celery-juice.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-dairy-free-smoothies.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); small text (1); a .footer-brand text (1) |
| `blog-detox-juice.html` | title text (1) |
| `blog-do-juice-cleanses-work.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.publisher.name (1); a .footer-brand text (1) |
| `blog-fat-burning-smoothie.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-ginger-shots-at-home.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.publisher.name (1); a .footer-brand text (1) |
| `blog-ginger.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-green-smoothie-every-day.html` | title text (1) |
| `blog-high-protein-smoothie.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-juice-without-juicer.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-juices-good-for-liver.html` | title text (1) |
| `blog-morning-vs-evening.html` | title text (1) |
| `blog-probiotics.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-smoothie-a-day-weight-loss.html` | title text (1) |
| `blog-smoothie-meal-prep.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-smoothie-meal-replacement.html` | title text (1) |
| `blog-smoothie-mistakes.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.publisher.name (1); a .footer-brand text (1) |
| `blog-smoothie-vs-juicing.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-smoothies-without-banana.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); small text (1); a .footer-brand text (1) |
| `blog-superfoods.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `blog-wellness-shot-benefits.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.publisher.name (1); a .footer-brand text (1) |
| `blog.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `coming-soon.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `contact.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .btn btn-teal text (1); a .footer-brand text (1) |
| `editorial.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `index.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `juices.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `privacy.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `recipe-acv-detox-shot.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-beet-energy-juice.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-beet-performance-shot.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-berry-probiotic.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-carrot-ginger-juice.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-celery-detox-juice.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-chamomile-lemon-tea.html` | title text (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-citrus-immunity.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-cucumber-mint-juice.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-fresh-mint-tea.html` | title text (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-ginger-immunity-shot.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-golden-glow.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-green-detox.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-guava-strawberry-smoothie.html` | title text (1); structured data $.author.name (1); a text (1); a .footer-brand text (1) |
| `recipe-hibiscus-ginger-tea.html` | title text (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-mango-passion-fruit-smoothie.html` | title text (1); structured data $.author.name (1); a text (1); a .footer-brand text (1) |
| `recipe-matcha-lean.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-papaya-lime-smoothie.html` | title text (1); structured data $.author.name (1); a text (1); a .footer-brand text (1) |
| `recipe-peanut-butter-banana.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-pineapple-turmeric-juice.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-pumpkin-oat-smoothie.html` | title text (1); structured data $.author.name (1); a text (1); a .footer-brand text (1) |
| `recipe-purple-rain.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-tamarind-ginger-cooler.html` | title text (1); structured data $.author.name (1); a text (1); a .footer-brand text (1) |
| `recipe-tropical-power.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-turmeric-golden-shot.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-watermelon-mint.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipe-wheatgrass-energy-shot.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); structured data $.author.name (1); a .footer-brand text (1) |
| `recipes.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `saved.html` | title text (1); a .footer-brand text (1) |
| `shots.html` | title text (1); meta[og:title] @content (1); meta[twitter:title] @content (1); a .footer-brand text (1) |
| `teas.html` | title text (1); a .footer-brand text (1) |

Verification: no separated brand-name variants remain in tracked UTF-8 site files. All 27 recipe bylines remain By Made.
