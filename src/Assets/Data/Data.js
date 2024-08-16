const mealsData = [
    {
      "id": 1,
      "name": "Classic Pancakes",
      "type": "Breakfast",
      "ingredients": [
        "1 cup all-purpose flour",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "1/2 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 cup buttermilk",
        "1 egg",
        "2 tablespoons melted butter",
        "Maple syrup for serving"
      ]
    },
    {
      "id": 2,
      "name": "Chocolate Cake",
      "type": "Dessert",
      "ingredients": [
        "2 cups all-purpose flour",
        "1 3/4 cups granulated sugar",
        "3/4 cup unsweetened cocoa powder",
        "1 1/2 teaspoons baking powder",
        "1 1/2 teaspoons baking soda",
        "1 teaspoon salt",
        "2 eggs",
        "1 cup milk",
        "1/2 cup vegetable oil",
        "2 teaspoons vanilla extract"
      ]
    },
    {
      "id": 3,
      "name": "Grilled Chicken Salad",
      "type": "Lunch",
      "ingredients": [
        "2 boneless, skinless chicken breasts",
        "Salt and black pepper to taste",
        "2 cups mixed greens",
        "1/2 cucumber, sliced",
        "1/2 red bell pepper, diced",
        "1/4 red onion, thinly sliced",
        "2 tablespoons balsamic vinaigrette dressing"
      ]
    },
    {
      "id": 4,
      "name": "Spaghetti Carbonara",
      "type": "Dinner",
      "ingredients": [
        "8 oz spaghetti",
        "2 large eggs",
        "1 cup grated Pecorino Romano cheese",
        "4 slices bacon, chopped",
        "2 cloves garlic, minced",
        "Salt and black pepper to taste",
        "Fresh parsley for garnish"
      ]
    },
    {
      "id": 5,
      "name": "Greek Salad",
      "type": "Lunch",
      "ingredients": [
        "2 cups diced cucumbers",
        "1 cup cherry tomatoes, halved",
        "1/2 red onion, thinly sliced",
        "1/2 cup Kalamata olives, pitted",
        "1/2 cup crumbled feta cheese",
        "2 tablespoons olive oil",
        "1 tablespoon red wine vinegar",
        "1 teaspoon dried oregano",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 6,
      "name": "Vegetable Stir-Fry",
      "type": "Dinner",
      "ingredients": [
        "2 cups mixed vegetables (broccoli, bell peppers, carrots, snap peas)",
        "1 tablespoon vegetable oil",
        "2 cloves garlic, minced",
        "1/4 cup soy sauce",
        "1 tablespoon honey",
        "1 teaspoon sesame oil",
        "1/2 teaspoon grated ginger",
        "Cooked rice for serving"
      ]
    },
    {
      "id": 7,
      "name": "Blueberry Muffins",
      "type": "Breakfast",
      "ingredients": [
        "1 1/2 cups all-purpose flour",
        "1/2 cup granulated sugar",
        "1/4 cup unsalted butter, melted",
        "1/4 cup milk",
        "1/4 cup plain yogurt",
        "1 egg",
        "1 1/2 teaspoons baking powder",
        "1/2 teaspoon vanilla extract",
        "1 cup fresh blueberries"
      ]
    },
    {
      "id": 8,
      "name": "Caesar Salad",
      "type": "Lunch",
      "ingredients": [
        "2 hearts of romaine lettuce, chopped",
        "1/4 cup grated Parmesan cheese",
        "1/2 cup croutons",
        "1/4 cup Caesar salad dressing",
        "1 lemon, juiced",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 9,
      "name": "Chicken Alfredo",
      "type": "Dinner",
      "ingredients": [
        "8 oz fettuccine pasta",
        "2 boneless, skinless chicken breasts",
        "2 tablespoons olive oil",
        "2 cloves garlic, minced",
        "1 cup heavy cream",
        "1/2 cup grated Parmesan cheese",
        "1/4 cup chopped fresh parsley",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 10,
      "name": "Avocado Toast",
      "type": "Breakfast",
      "ingredients": [
        "2 slices whole-grain bread",
        "1 ripe avocado, mashed",
        "1/4 teaspoon red pepper flakes",
        "1/2 teaspoon lemon juice",
        "Salt and black pepper to taste",
        "Poached egg (optional)",
        "Sliced radishes for garnish (optional)"
      ]
    },
    {
      "id": 11,
      "name": "French Onion Soup",
      "type": "Lunch",
      "ingredients": [
        "4 large onions, thinly sliced",
        "2 tablespoons butter",
        "4 cups beef broth",
        "1/2 cup dry white wine",
        "1 teaspoon Worcestershire sauce",
        "Salt and black pepper to taste",
        "4 slices French bread",
        "1 1/2 cups shredded Gruyère cheese"
      ]
    },
    {
      "id": 12,
      "name": "Beef Tacos",
      "type": "Dinner",
      "ingredients": [
        "1 lb ground beef",
        "1 packet taco seasoning",
        "8 small taco shells",
        "1 cup shredded lettuce",
        "1 cup diced tomatoes",
        "1/2 cup shredded cheddar cheese",
        "1/4 cup diced onions",
        "Sour cream and salsa for topping"
      ]
    },
    {
      "id": 13,
      "name": "Margherita Pizza",
      "type": "Dinner",
      "ingredients": [
        "1 pizza dough ball",
        "1/2 cup pizza sauce",
        "1 1/2 cups shredded mozzarella cheese",
        "1/2 cup fresh basil leaves",
        "2 tablespoons olive oil",
        "1 clove garlic, minced",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 14,
      "name": "Sushi Roll",
      "type": "Dinner",
      "ingredients": [
        "1 cup sushi rice",
        "2 sheets nori (seaweed)",
        "1/2 cucumber, julienne sliced",
        "1/2 avocado, thinly sliced",
        "4 imitation crab sticks",
        "Soy sauce, pickled ginger, and wasabi for serving"
      ]
    },
    {
      "id": 15,
      "name": "Chocolate Chip Cookies",
      "type": "Dessert",
      "ingredients": [
        "2 1/4 cups all-purpose flour",
        "1/2 teaspoon baking soda",
        "1 cup unsalted butter, softened",
        "1/2 cup granulated sugar",
        "1 cup packed brown sugar",
        "1 teaspoon vanilla extract",
        "2 large eggs",
        "2 cups semisweet chocolate chips"
      ]
    },
    {
      "id": 16,
      "name": "Eggs Benedict",
      "type": "Breakfast",
      "ingredients": [
        "2 English muffins, split and toasted",
        "4 poached eggs",
        "4 slices Canadian bacon",
        "Hollandaise sauce",
        "Fresh chives for garnish"
      ]
    },
    {
      "id": 17,
      "name": "Chicken Noodle Soup",
      "type": "Lunch",
      "ingredients": [
        "2 boneless, skinless chicken breasts",
        "8 cups chicken broth",
        "2 carrots, sliced",
        "2 celery stalks, chopped",
        "1/2 onion, diced",
        "2 cloves garlic, minced",
        "2 cups egg noodles",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 18,
      "name": "Taco Salad",
      "type": "Lunch",
      "ingredients": [
        "1 lb ground beef",
        "1 packet taco seasoning",
        "4 cups chopped lettuce",
        "1 cup diced tomatoes",
        "1 cup shredded cheddar cheese",
        "1/2 cup diced onions",
        "1/2 cup black olives, sliced",
        "1/2 cup sour cream",
        "1/2 cup salsa",
        "Tortilla chips for garnish"
      ]
    },
    {
      "id": 19,
      "name": "Spaghetti Aglio e Olio",
      "type": "Dinner",
      "ingredients": [
        "8 oz spaghetti",
        "4 cloves garlic, thinly sliced",
        "1/2 teaspoon red pepper flakes",
        "1/4 cup olive oil",
        "2 tablespoons chopped fresh parsley",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 20,
      "name": "Fruit Salad",
      "type": "Breakfast",
      "ingredients": [
        "2 cups mixed fresh fruit (strawberries, blueberries, melon, grapes)",
        "2 tablespoons honey",
        "1 tablespoon fresh lime juice",
        "Fresh mint leaves for garnish"
      ]
    },
    {
      "id": 21,
      "name": "Chicken Parmesan",
      "type": "Dinner",
      "ingredients": [
        "2 boneless, skinless chicken breasts",
        "1 cup breadcrumbs",
        "1/2 cup grated Parmesan cheese",
        "1 egg",
        "1 cup marinara sauce",
        "1/2 cup shredded mozzarella cheese",
        "Fresh basil leaves for garnish"
      ]
    },
    {
      "id": 22,
      "name": "Omelette",
      "type": "Breakfast",
      "ingredients": [
        "2 eggs",
        "2 tablespoons milk",
        "Salt and black pepper to taste",
        "2 tablespoons butter",
        "1/4 cup diced bell peppers",
        "1/4 cup diced onions",
        "1/4 cup shredded cheddar cheese",
        "Salsa for serving"
      ]
    },
    {
      "id": 23,
      "name": "Chicken Tenders",
      "type": "Lunch",
      "ingredients": [
        "1 lb chicken tenders",
        "1 cup buttermilk",
        "1 cup all-purpose flour",
        "1 teaspoon paprika",
        "1/2 teaspoon garlic powder",
        "1/2 teaspoon onion powder",
        "Salt and black pepper to taste",
        "Vegetable oil for frying"
      ]
    },
    {
      "id": 24,
      "name": "Mushroom Risotto",
      "type": "Dinner",
      "ingredients": [
        "1 cup Arborio rice",
        "4 cups chicken or vegetable broth",
        "1 cup sliced mushrooms",
        "1/2 cup dry white wine",
        "1/2 cup grated Parmesan cheese",
        "2 tablespoons butter",
        "2 cloves garlic, minced",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 25,
      "name": "Pancetta and Pea Pasta",
      "type": "Dinner",
      "ingredients": [
        "8 oz pasta",
        "1/2 cup diced pancetta",
        "1 cup frozen peas",
        "1/4 cup heavy cream",
        "1/4 cup grated Parmesan cheese",
        "2 tablespoons olive oil",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 26,
      "name": "Waffles",
      "type": "Breakfast",
      "ingredients": [
        "1 1/2 cups all-purpose flour",
        "2 tablespoons sugar",
        "1 tablespoon baking powder",
        "1/2 teaspoon salt",
        "2 eggs",
        "1 1/2 cups milk",
        "1/2 cup melted butter",
        "Maple syrup for serving"
      ]
    },
    {
      "id": 27,
      "name": "Cobb Salad",
      "type": "Lunch",
      "ingredients": [
        "4 cups chopped lettuce",
        "2 hard-boiled eggs, sliced",
        "1 cup diced cooked chicken breast",
        "1/2 cup crumbled blue cheese",
        "1/2 cup diced tomatoes",
        "1/4 cup diced red onion",
        "2 slices cooked bacon, crumbled",
        "Avocado dressing"
      ]
    },
    {
      "id": 28,
      "name": "Beef Stir-Fry",
      "type": "Dinner",
      "ingredients": [
        "1 lb flank steak, thinly sliced",
        "2 cups broccoli florets",
        "1 bell pepper, sliced",
        "1/2 cup sliced carrots",
        "2 cloves garlic, minced",
        "1/4 cup soy sauce",
        "2 tablespoons hoisin sauce",
        "1 tablespoon vegetable oil",
        "Cooked rice for serving"
      ]
    },
    {
      "id": 29,
      "name": "Strawberry Smoothie",
      "type": "Breakfast",
      "ingredients": [
        "1 cup fresh strawberries",
        "1 banana",
        "1/2 cup Greek yogurt",
        "1/2 cup milk",
        "1 tablespoon honey",
        "1/2 teaspoon vanilla extract"
      ]
    },
    {
      "id": 30,
      "name": "Caprese Salad",
      "type": "Lunch",
      "ingredients": [
        "4 large tomatoes, sliced",
        "8 oz fresh mozzarella cheese, sliced",
        "1/4 cup fresh basil leaves",
        "2 tablespoons balsamic glaze",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 31,
      "name": "Lemon Garlic Shrimp",
      "type": "Dinner",
      "ingredients": [
        "1 lb large shrimp, peeled and deveined",
        "2 tablespoons olive oil",
        "4 cloves garlic, minced",
        "1 lemon, juiced and zested",
        "2 tablespoons chopped fresh parsley",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 32,
      "name": "Pancakes with Berries",
      "type": "Breakfast",
      "ingredients": [
        "1 cup all-purpose flour",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "1/2 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 cup buttermilk",
        "1 egg",
        "2 tablespoons melted butter",
        "Mixed berries for topping"
      ]
    },
    {
      "id": 33,
      "name": "Chicken Caesar Wrap",
      "type": "Lunch",
      "ingredients": [
        "2 large tortillas",
        "1 cup chopped cooked chicken breast",
        "1/2 cup Caesar salad dressing",
        "1/2 cup chopped romaine lettuce",
        "1/4 cup grated Parmesan cheese",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 34,
      "name": "Beef and Broccoli",
      "type": "Dinner",
      "ingredients": [
        "1 lb flank steak, thinly sliced",
        "2 cups broccoli florets",
        "1/2 cup sliced carrots",
        "1/4 cup soy sauce",
        "2 tablespoons oyster sauce",
        "2 cloves garlic, minced",
        "1 teaspoon grated ginger",
        "1 tablespoon vegetable oil",
        "Cooked rice for serving"
      ]
    },
    {
      "id": 35,
      "name": "Oatmeal with Apples and Cinnamon",
      "type": "Breakfast",
      "ingredients": [
        "1 cup rolled oats",
        "2 cups milk",
        "1 apple, diced",
        "1/2 teaspoon cinnamon",
        "2 tablespoons honey",
        "Chopped nuts for topping (optional)"
      ]
    },
    {
      "id": 36,
      "name": "Chicken Quesadilla",
      "type": "Lunch",
      "ingredients": [
        "2 large tortillas",
        "1 cup diced cooked chicken breast",
        "1 cup shredded cheddar cheese",
        "1/2 cup diced tomatoes",
        "1/4 cup diced onions",
        "Sour cream and salsa for serving"
      ]
    },
    {
      "id": 37,
      "name": "Beef and Mushroom Stroganoff",
      "type": "Dinner",
      "ingredients": [
        "1 lb beef sirloin, thinly sliced",
        "2 cups sliced mushrooms",
        "1/2 cup diced onions",
        "2 cloves garlic, minced",
        "1 cup beef broth",
        "1/2 cup sour cream",
        "2 tablespoons Worcestershire sauce",
        "Cooked egg noodles for serving"
      ]
    },
    {
      "id": 38,
      "name": "Pancakes with Maple Syrup",
      "type": "Breakfast",
      "ingredients": [
        "1 cup all-purpose flour",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "1/2 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 cup buttermilk",
        "1 egg",
        "2 tablespoons melted butter",
        "Maple syrup for topping"
      ]
    },
    {
      "id": 39,
      "name": "Greek Gyro",
      "type": "Lunch",
      "ingredients": [
        "2 pita bread rounds",
        "1/2 lb thinly sliced cooked lamb or chicken",
        "1/2 cup diced tomatoes",
        "1/4 cup diced cucumbers",
        "1/4 cup diced red onions",
        "Tzatziki sauce for topping"
      ]
    },
    {
      "id": 40,
      "name": "Beef and Vegetable Stir-Fry",
      "type": "Dinner",
      "ingredients": [
        "1 lb beef sirloin, thinly sliced",
        "2 cups mixed vegetables (broccoli, bell peppers, carrots, snap peas)",
        "1/4 cup soy sauce",
        "2 tablespoons oyster sauce",
        "2 cloves garlic, minced",
        "1 teaspoon grated ginger",
        "1 tablespoon vegetable oil",
        "Cooked rice for serving"
      ]
    },
    {
      "id": 41,
      "name": "Breakfast Burrito",
      "type": "Breakfast",
      "ingredients": [
        "2 large tortillas",
        "4 scrambled eggs",
        "1/2 cup cooked breakfast sausage",
        "1/2 cup shredded cheddar cheese",
        "1/4 cup diced tomatoes",
        "1/4 cup diced onions",
        "Salsa for topping"
      ]
    },
    {
      "id": 42,
      "name": "Chicken Caesar Salad",
      "type": "Lunch",
      "ingredients": [
        "2 boneless, skinless chicken breasts",
        "Salt and black pepper to taste",
        "2 hearts of romaine lettuce, chopped",
        "1/4 cup grated Parmesan cheese",
        "1/2 cup croutons",
        "1/4 cup Caesar salad dressing",
        "1 lemon, juiced"
      ]
    },
    {
      "id": 43,
      "name": "Beef and Broccoli Stir-Fry",
      "type": "Dinner",
      "ingredients": [
        "1 lb flank steak, thinly sliced",
        "2 cups broccoli florets",
        "1/2 cup sliced carrots",
        "1/4 cup soy sauce",
        "2 tablespoons oyster sauce",
        "2 cloves garlic, minced",
        "1 teaspoon grated ginger",
        "1 tablespoon vegetable oil",
        "Cooked rice for serving"
      ]
    },
    {
      "id": 44,
      "name": "Peanut Butter and Banana Toast",
      "type": "Breakfast",
      "ingredients": [
        "2 slices whole-grain bread",
        "2 tablespoons peanut butter",
        "1 banana, sliced",
        "Honey for drizzling"
      ]
    },
    {
      "id": 45,
      "name": "Cobb Wrap",
      "type": "Lunch",
      "ingredients": [
        "2 large tortillas",
        "2 cups chopped lettuce",
        "1/2 cup diced cooked chicken breast",
        "1/4 cup crumbled blue cheese",
        "1/4 cup diced tomatoes",
        "2 slices cooked bacon, crumbled",
        "Avocado dressing"
      ]
    },
    {
      "id": 46,
      "name": "Lemon Garlic Shrimp Pasta",
      "type": "Dinner",
      "ingredients": [
        "8 oz linguine pasta",
        "1 lb large shrimp, peeled and deveined",
        "4 cloves garlic, minced",
        "1 lemon, juiced and zested",
        "2 tablespoons chopped fresh parsley",
        "2 tablespoons olive oil",
        "Salt and black pepper to taste"
      ]
    },
    {
      "id": 47,
      "name": "Banana Pancakes",
      "type": "Breakfast",
      "ingredients": [
        "1 cup all-purpose flour",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "1/2 teaspoon baking soda",
        "1/4 teaspoon salt",
        "1 cup buttermilk",
        "1 ripe banana, mashed",
        "1 egg",
        "2 tablespoons melted butter",
        "Maple syrup for serving"
      ]
    },
    {
      "id": 48,
      "name": "Chicken Fajitas",
      "type": "Lunch",
      "ingredients": [
        "2 boneless, skinless chicken breasts, sliced",
        "1 bell pepper, sliced",
        "1 onion, sliced",
        "2 tablespoons vegetable oil",
        "2 teaspoons chili powder",
        "1 teaspoon cumin",
        "1/2 teaspoon paprika",
        "1/2 teaspoon garlic powder",
        "Flour tortillas for serving",
        "Sour cream and salsa for topping"
      ]
    },
    {
      "id": 49,
      "name": "Baked Ziti",
      "type": "Dinner",
      "ingredients": [
        "8 oz ziti pasta",
        "1 lb ground beef",
        "1/2 cup diced onions",
        "2 cloves garlic, minced",
        "24 oz marinara sauce",
        "1 cup ricotta cheese",
        "2 cups shredded mozzarella cheese",
        "1/4 cup grated Parmesan cheese",
        "Fresh basil leaves for garnish"
      ]
    },
    {
      "id": 50,
      "name": "Mango Smoothie",
      "type": "Breakfast",
      "ingredients": [
        "1 cup fresh mango chunks",
        "1/2 cup Greek yogurt",
        "1/2 cup milk",
        "1 tablespoon honey",
        "1/2 teaspoon vanilla extract"
      ]
    }
  ];

export default mealsData;