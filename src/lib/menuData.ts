// lib/menuData.ts

export type MenuCategoryId =
  | "mocktails"
  | "shakes"
  | "tea-coffee"
  | "soups"
  | "starters"
  | "sandwiches"
  | "salads"
  | "momos"
  | "pizza"
  | "pasta"
  | "burgers"
  | "tandoor"
  | "tandoori-bread"
  | "main-course-chinese"
  | "main-course-indian"
  | "noodles-rice"
  | "desserts"
  | "shisha";

export interface MenuItem {
  id: string;
  name: string;
  price: number; // in INR
  category: MenuCategoryId;
  isVeg: boolean; // true = veg, false = non-veg
  description?: string;

  // Optional flags used in UI (Hero, badges, etc.)
  isSignature?: boolean; // Highlight as "Signature"
  isPopular?: boolean; // Highlight as "Popular"
  isSpicy?: boolean; // Highlight as "Spicy"
}

export const menuCategories: { id: MenuCategoryId; label: string }[] = [
  { id: "mocktails", label: "Mocktails" },
  { id: "shakes", label: "Shakes" },
  { id: "tea-coffee", label: "Tea & Coffee" },
  { id: "soups", label: "Soups" },
  { id: "starters", label: "Appetizers / Starters" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "salads", label: "Salads" },
  { id: "momos", label: "Momos" },
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
  { id: "burgers", label: "Burgers" },
  { id: "tandoor", label: "Tandoor" },
  { id: "tandoori-bread", label: "Tandoori Bread" },
  { id: "main-course-chinese", label: "Main Course – Chinese" },
  { id: "main-course-indian", label: "Main Course – Indian" },
  { id: "noodles-rice", label: "Noodles & Rice" },
  { id: "desserts", label: "Desserts" },
  { id: "shisha", label: "Shisha" }
];

export const menuItems: MenuItem[] = [
  // Mocktails
  {
    id: "caramel-apple-spritz",
    name: "Caramel Apple Spritz",
    price: 149,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "kiwi-basil-smash",
    name: "Kiwi Basil Smash",
    price: 189,
    category: "mocktails",
    isVeg: true,
    isPopular: true
  },
  {
    id: "passion-fruit-paradise",
    name: "Passion Fruit Paradise",
    price: 179,
    category: "mocktails",
    isVeg: true,
    isPopular: true
  },
  {
    id: "aspirin",
    name: "Aspirin",
    price: 149,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "cucumber-collins",
    name: "Cucumber Collins",
    price: 179,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "floral-sunrise",
    name: "Floral Sunrise",
    price: 179,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "purple-glacier",
    name: "Purple Glacier",
    price: 179,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mojitos",
    name: "Mojitos",
    price: 149,
    category: "mocktails",
    isVeg: true,
    isPopular: true
  },
  {
    id: "sea-breeze",
    name: "Sea Breeze",
    price: 179,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "fresh-smashin",
    name: "Fresh Smashin",
    price: 169,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "coco-no-loco",
    name: "Coco No Loco",
    price: 199,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "cucumber-elder-flower",
    name: "Cucumber Elder Flower",
    price: 179,
    category: "mocktails",
    isVeg: true
  },

  // Shakes
  {
    id: "strawberry-shake",
    name: "Strawberry Shake",
    price: 199,
    category: "shakes",
    isVeg: true
  },
  {
    id: "mango-shake",
    name: "Mango Shake",
    price: 199,
    category: "shakes",
    isVeg: true,
    isPopular: true
  },
  {
    id: "blackcurrant-shake",
    name: "Blackcurrant Shake",
    price: 199,
    category: "shakes",
    isVeg: true
  },
  {
    id: "horchata-shake",
    name: "Horchata Shake",
    price: 199,
    category: "shakes",
    isVeg: true
  },
  {
    id: "kitkat-shake",
    name: "KitKat Shake",
    price: 199,
    category: "shakes",
    isVeg: true
  },
  {
    id: "pina-colada",
    name: "Pina Colada",
    price: 199,
    category: "shakes",
    isVeg: true
  },
  {
    id: "pineapple-shake",
    name: "Pineapple Shake",
    price: 199,
    category: "shakes",
    isVeg: true
  },
  {
    id: "banana-shake",
    name: "Banana Shake",
    price: 199,
    category: "shakes",
    isVeg: true
  },

  // Tea & Coffee
  {
    id: "adrak-elaichi-tea",
    name: "Adrak Elaichi Tea",
    price: 99,
    category: "tea-coffee",
    isVeg: true,
    isPopular: true
  },
  {
    id: "royal-tea",
    name: "Royal Tea",
    price: 99,
    category: "tea-coffee",
    isVeg: true
  },
  {
    id: "green-tea-honey-lemon-ginger",
    name: "Green Tea with Honey Lemon Ginger",
    price: 119,
    category: "tea-coffee",
    isVeg: true
  },
  {
    id: "masala-tea",
    name: "Masala Tea",
    price: 99,
    category: "tea-coffee",
    isVeg: true
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 119,
    category: "tea-coffee",
    isVeg: true
  },
  {
    id: "mocha-cafe",
    name: "Mocha Cafe",
    price: 129,
    category: "tea-coffee",
    isVeg: true
  },
  {
    id: "irish-coffee",
    name: "Irish",
    price: 129,
    category: "tea-coffee",
    isVeg: true
  },
  {
    id: "hazelnut-coffee",
    name: "Hazelnut",
    price: 129,
    category: "tea-coffee",
    isVeg: true
  },
  {
    id: "black-coffee",
    name: "Black Coffee",
    price: 109,
    category: "tea-coffee",
    isVeg: true
  },
  {
    id: "latte",
    name: "Latte",
    price: 119,
    category: "tea-coffee",
    isVeg: true
  },

  // Soups
  {
    id: "tomato-soup",
    name: "Tomato Soup",
    price: 299,
    category: "soups",
    isVeg: true
  },
  {
    id: "broccoli-almond-soup",
    name: "Broccoli Almond Soup",
    price: 399,
    category: "soups",
    isVeg: true,
    isSignature: true
  },
  {
    id: "minestrone-soup",
    name: "Minestrone Soup",
    price: 299,
    category: "soups",
    isVeg: true
  },
  {
    id: "manchow-soup-veg",
    name: "Manchow Soup (Veg)",
    price: 299,
    category: "soups",
    isVeg: true,
    isSpicy: true,
    isPopular: true
  },
  {
    id: "lemon-coriander-soup-veg",
    name: "Lemon Coriander Soup (Veg)",
    price: 299,
    category: "soups",
    isVeg: true
  },
  {
    id: "sweet-corn-soup-veg",
    name: "Sweet Corn Soup (Veg)",
    price: 249,
    category: "soups",
    isVeg: true
  },
  {
    id: "hot-sour-soup-veg",
    name: "Hot & Sour Soup (Veg)",
    price: 249,
    category: "soups",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "mushroom-cappuccino-soup",
    name: "Mushroom Cappuccino Soup",
    price: 399,
    category: "soups",
    isVeg: true
  },
  {
    id: "pollo-alla-crema-soup",
    name: "Pollo Alla Crema Soup",
    price: 399,
    category: "soups",
    isVeg: false
  },
  {
    id: "manchow-soup-chicken",
    name: "Manchow Soup (Chicken)",
    price: 399,
    category: "soups",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "lemon-coriander-soup-chicken",
    name: "Lemon Coriander Soup (Chicken)",
    price: 399,
    category: "soups",
    isVeg: false
  },
  {
    id: "sweet-corn-soup-chicken",
    name: "Sweet Corn Soup (Chicken)",
    price: 299,
    category: "soups",
    isVeg: false
  },
  {
    id: "hot-sour-soup-chicken",
    name: "Hot & Sour Soup (Chicken)",
    price: 299,
    category: "soups",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "sicilian-chicken-soup",
    name: "Sicilian Chicken Soup",
    price: 399,
    category: "soups",
    isVeg: false,
    isSignature: true
  },

  // Appetizers / Starters
  {
    id: "jalapeno-poppers",
    name: "Jalapeño Poppers",
    price: 349,
    category: "starters",
    isVeg: true,
    isPopular: true
  },
  {
    id: "stuffed-baked-mushrooms",
    name: "Stuffed Baked Mushrooms",
    price: 349,
    category: "starters",
    isVeg: true
  },
  {
    id: "mexican-cheese-roll",
    name: "Mexican Cheese Roll",
    price: 299,
    category: "starters",
    isVeg: true
  },
  {
    id: "nachos",
    name: "Nachos",
    price: 249,
    category: "starters",
    isVeg: true
  },
  {
    id: "french-fries",
    name: "French Fries",
    price: 199,
    category: "starters",
    isVeg: true
  },
  {
    id: "peri-peri-french-fries",
    name: "Peri Peri French Fries",
    price: 199,
    category: "starters",
    isVeg: true
  },
  {
    id: "chilli-paneer-dry",
    name: "Chilli Paneer Dry",
    price: 299,
    category: "starters",
    isVeg: true,
    isSpicy: true,
    isPopular: true
  },
  {
    id: "chilli-baby-corn",
    name: "Chilli Baby Corn",
    price: 299,
    category: "starters",
    isVeg: true
  },
  {
    id: "chilli-potato",
    name: "Chilli Potato",
    price: 299,
    category: "starters",
    isVeg: true
  },
  {
    id: "paneer-65",
    name: "Paneer 65",
    price: 299,
    category: "starters",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "shanghai-paneer",
    name: "Shanghai Paneer",
    price: 299,
    category: "starters",
    isVeg: true
  },
  {
    id: "chilli-mushroom",
    name: "Chilli Mushroom",
    price: 349,
    category: "starters",
    isVeg: true
  },
  {
    id: "salt-pepper-corn",
    name: "Salt & Pepper Corn",
    price: 349,
    category: "starters",
    isVeg: true
  },
  {
    id: "sauteed-mushrooms",
    name: "Sautéed Mushrooms",
    price: 399,
    category: "starters",
    isVeg: true
  },
  {
    id: "panko-crusted-chicken",
    name: "Panko Crusted Chicken",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "panko-crusted-fish",
    name: "Panko Crusted Fish",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "fish-and-chips",
    name: "Fish & Chips",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "corn-crusted-chicken-supreme",
    name: "Corn Crusted Chicken Supreme",
    price: 399,
    category: "starters",
    isVeg: false
  },
  {
    id: "butter-garlic-prawns",
    name: "Butter Garlic Prawns",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "fish-fingers",
    name: "Fish Fingers",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "fish-fry",
    name: "Fish Fry",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "butter-fried-prawns",
    name: "Butter Fried Prawns",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "bbq-chicken-wings",
    name: "BBQ Chicken Wings",
    price: 399,
    category: "starters",
    isVeg: false,
    isPopular: true
  },
  {
    id: "chilli-chicken-dry",
    name: "Chilli Chicken Dry",
    price: 449,
    category: "starters",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "chilli-garlic-chicken-dry",
    name: "Chilli Garlic Chicken Dry",
    price: 449,
    category: "starters",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "paneer-crispy-fried-prawns-dry",
    name: "Paneer Crispy Fried Prawns(Dry)",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    price: 549,
    category: "starters",
    isVeg: false
  },
  {
    id: "grilled-fish",
    name: "Grilled Fish",
    price: 599,
    category: "starters",
    isVeg: false
  },
  {
    id: "chicken-popcorn",
    name: "Chicken Popcorn",
    price: 399,
    category: "starters",
    isVeg: false
  },
  {
    id: "drums-of-heaven",
    name: "Drums of Heaven",
    price: 399,
    category: "starters",
    isVeg: false
  },
  {
    id: "chicken-lollipop",
    name: "Chicken Lollipop",
    price: 399,
    category: "starters",
    isVeg: false,
    isPopular: true
  },
  {
    id: "rosemary-chicken-wings",
    name: "Rosemary Chicken Wings",
    price: 399,
    category: "starters",
    isVeg: false
  },
  {
    id: "kung-pao-chicken",
    name: "Kung Pao Chicken",
    price: 449,
    category: "starters",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "nandos-chicken-wings",
    name: "Nando's Chicken Wings",
    price: 449,
    category: "starters",
    isVeg: false
  },
  {
    id: "nandos-prawns",
    name: "Nando's Prawns",
    price: 599,
    category: "starters",
    isVeg: false
  },
  {
    id: "cilantro-fish",
    name: "Cilantro Fish",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "butter-garlic-prawns-classic",
    name: "Butter Garlic Prawns (Classic)",
    price: 499,
    category: "starters",
    isVeg: false,
    isSignature: true
  },
  {
    id: "larb-mai-kai",
    name: "Larb Mai Kai",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "goan-rava-fried-fish",
    name: "Goan Rava Fried Fish",
    price: 599,
    category: "starters",
    isVeg: false
  },
  {
    id: "chicken-meatballs",
    name: "Chicken Meatballs",
    price: 449,
    category: "starters",
    isVeg: false
  },
  {
    id: "chicken-wontons",
    name: "Chicken Wontons",
    price: 449,
    category: "starters",
    isVeg: false
  },
  {
    id: "prawn-wontons",
    name: "Prawn Wontons",
    price: 549,
    category: "starters",
    isVeg: false
  },
  {
    id: "cordon-bleu-chicken-rolls",
    name: "Cordon Bleu Chicken Rolls",
    price: 549,
    category: "starters",
    isVeg: false
  },
  {
    id: "chicken-cheese-pesto",
    name: "Chicken & Cheese Pesto",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "schezwan-chicken-dry",
    name: "Schezwan Chicken Dry",
    price: 499,
    category: "starters",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "stir-fry-chicken-vegetables",
    name: "Stir Fry Chicken with Vegetables",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "chicken-wrapped-cream-cheese",
    name: "Chicken Wrapped Cream Cheese",
    price: 499,
    category: "starters",
    isVeg: false
  },
  {
    id: "cheesy-baked-butter-fried-shrimp",
    name: "Cheesy Baked Butter Fried Shrimp",
    price: 549,
    category: "starters",
    isVeg: false
  },

  // Sandwiches
  {
    id: "veg-mayo-sandwich",
    name: "Veg Mayo Sandwich",
    price: 199,
    category: "sandwiches",
    isVeg: true
  },
  {
    id: "bombay-veg-dal-sew",
    name: "Bombay Veg Dal Sew",
    price: 220,
    category: "sandwiches",
    isVeg: true
  },
  {
    id: "corn-cheese-sandwich",
    name: "Corn & Cheese Sandwich",
    price: 311,
    category: "sandwiches",
    isVeg: true
  },
  {
    id: "paneer-tikka-sandwich",
    name: "Paneer Tikka Sandwich",
    price: 298,
    category: "sandwiches",
    isVeg: true
  },
  {
    id: "grilled-chicken-sandwich",
    name: "Grilled Chicken Sandwich",
    price: 324,
    category: "sandwiches",
    isVeg: false
  },
  {
    id: "bbq-chicken-sandwich",
    name: "BBQ Chicken Sandwich",
    price: 324,
    category: "sandwiches",
    isVeg: false
  },
  {
    id: "tandoori-chicken-sandwich",
    name: "Tandoori Chicken Sandwich",
    price: 324,
    category: "sandwiches",
    isVeg: false
  },
  {
    id: "mayo-egg-chicken-sandwich",
    name: "Mayo Egg Chicken Sandwich",
    price: 350,
    category: "sandwiches",
    isVeg: false
  },

  // Salads
  {
    id: "green-salad",
    name: "Green Salad",
    price: 239,
    category: "salads",
    isVeg: true
  },
  {
    id: "watermelon-feta-salad",
    name: "Watermelon Feta Salad",
    price: 399,
    category: "salads",
    isVeg: true,
    isPopular: true
  },
  {
    id: "caprese-salad",
    name: "Caprese Salad",
    price: 399,
    category: "salads",
    isVeg: true
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    price: 299,
    category: "salads",
    isVeg: true
  },
  {
    id: "walnut-salad",
    name: "Walnut Salad",
    price: 249,
    category: "salads",
    isVeg: true
  },
  {
    id: "chicken-avocado-salad",
    name: "Chicken Avocado Salad",
    price: 299,
    category: "salads",
    isVeg: false
  },
  {
    id: "chicken-tandoori-salad",
    name: "Chicken Tandoori Salad",
    price: 299,
    category: "salads",
    isVeg: false
  },

  // Momos
  {
    id: "veg-momos-6pcs",
    name: "Veg Momo (6 pcs)",
    price: 249,
    category: "momos",
    isVeg: true
  },
  {
    id: "non-veg-momos-6pcs",
    name: "Non-Veg Momo (6 pcs)",
    price: 299,
    category: "momos",
    isVeg: false
  },

  // Pizza
  {
    id: "margherita-pizza",
    name: "Margherita (Cheese & Cherry Tomato)",
    price: 299,
    category: "pizza",
    isVeg: true,
    isPopular: true
  },
  {
    id: "funghi-pizza",
    name: "Funghi Pizza (Mushroom & Cheese)",
    price: 449,
    category: "pizza",
    isVeg: true
  },
  {
    id: "four-cheese-pizza",
    name: "Four Cheese Pizza",
    price: 449,
    category: "pizza",
    isVeg: true
  },
  {
    id: "mixed-veg-pizza",
    name: "Mixed Veg Pizza",
    price: 399,
    category: "pizza",
    isVeg: true
  },
  {
    id: "roasted-chicken-pizza",
    name: "Roasted Chicken Pizza",
    price: 499,
    category: "pizza",
    isVeg: false
  },
  {
    id: "peri-peri-chicken-pizza",
    name: "Peri Peri Chicken Pizza",
    price: 399,
    category: "pizza",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "tandoori-chicken-pizza",
    name: "Tandoori Chicken Pizza",
    price: 399,
    category: "pizza",
    isVeg: false
  },
  {
    id: "mutton-keema-pizza",
    name: "Mutton Keema Pizza",
    price: 499,
    category: "pizza",
    isVeg: false
  },

  // Pasta
  {
    id: "veg-alfredo",
    name: "Veg Alfredo",
    price: 249,
    category: "pasta",
    isVeg: true
  },
  {
    id: "veg-pesto",
    name: "Veg Pesto",
    price: 249,
    category: "pasta",
    isVeg: true
  },
  {
    id: "tomato-basil-pasta",
    name: "Tomato Basil",
    price: 249,
    category: "pasta",
    isVeg: true
  },
  {
    id: "mix-veg-pasta",
    name: "Mix Veg Pasta",
    price: 249,
    category: "pasta",
    isVeg: true
  },
  {
    id: "chicken-alfredo",
    name: "Chicken Alfredo",
    price: 399,
    category: "pasta",
    isVeg: false,
    isPopular: true
  },
  {
    id: "chicken-pesto",
    name: "Chicken Pesto",
    price: 399,
    category: "pasta",
    isVeg: false
  },
  {
    id: "chicken-arrabbiata",
    name: "Chicken Arrabbiata",
    price: 349,
    category: "pasta",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "mix-sauce-chicken",
    name: "Mix Sauce & Chicken",
    price: 399,
    category: "pasta",
    isVeg: false
  },

  // Burgers
  {
    id: "crispy-burger",
    name: "Crispy Burger",
    price: 199,
    category: "burgers",
    isVeg: true
  },
  {
    id: "paneer-cheese-burger",
    name: "Paneer Cheese Burger",
    price: 299,
    category: "burgers",
    isVeg: true
  },
  {
    id: "tandoori-paneer-burger",
    name: "Tandoori Paneer Burger",
    price: 299,
    category: "burgers",
    isVeg: true
  },
  {
    id: "veg-cheese-burger",
    name: "Veg & Cheese Burger",
    price: 249,
    category: "burgers",
    isVeg: true
  },
  {
    id: "roasted-chicken-burger",
    name: "Roasted Chicken Burger",
    price: 299,
    category: "burgers",
    isVeg: false
  },
  {
    id: "keema-tikka-burger",
    name: "Keema Tikka Burger",
    price: 349,
    category: "burgers",
    isVeg: false
  },
  {
    id: "tandoori-chicken-burger",
    name: "Tandoori Chicken Burger",
    price: 349,
    category: "burgers",
    isVeg: false
  },
  {
    id: "mutton-keema-tikka-burger",
    name: "Mutton Keema Tikka Burger",
    price: 449,
    category: "burgers",
    isVeg: false
  },

  // Tandoor
  {
    id: "tandoori-stuffed-potato",
    name: "Tandoori Stuffed Potato",
    price: 199,
    category: "tandoor",
    isVeg: true
  },
  {
    id: "achari-paneer-tikka",
    name: "Achari Paneer Tikka",
    price: 299,
    category: "tandoor",
    isVeg: true
  },
  {
    id: "afghani-paneer-tikka",
    name: "Afghani Paneer Tikka",
    price: 299,
    category: "tandoor",
    isVeg: true
  },
  {
    id: "malai-broccoli",
    name: "Malai Broccoli",
    price: 349,
    category: "tandoor",
    isVeg: true
  },
  {
    id: "mushroom-kalemiri",
    name: "Mushroom Kalemiri",
    price: 349,
    category: "tandoor",
    isVeg: true
  },
  {
    id: "stuffed-paneer",
    name: "Stuffed Paneer",
    price: 349,
    category: "tandoor",
    isVeg: true
  },
  {
    id: "tandoori-chicken-half",
    name: "Tandoori Chicken (Half)",
    price: 399,
    category: "tandoor",
    isVeg: false
  },
  {
    id: "tandoori-chicken-full",
    name: "Tandoori Chicken (Full)",
    price: 699,
    category: "tandoor",
    isVeg: false,
    isSignature: true
  },
  {
    id: "murg-ki-shole",
    name: "Murg Ki Shole",
    price: 499,
    category: "tandoor",
    isVeg: false
  },
  {
    id: "olive-malai-chicken-tikka",
    name: "Olive Malai Chicken Tikka",
    price: 599,
    category: "tandoor",
    isVeg: false
  },
  {
    id: "fish-tikka",
    name: "Fish Tikka",
    price: 599,
    category: "tandoor",
    isVeg: false
  },
  {
    id: "tandoori-wasabi-prawn",
    name: "Tandoori Wasabi Prawn",
    price: 599,
    category: "tandoor",
    isVeg: false
  },
  {
    id: "mutton-seekh-kebab",
    name: "Mutton Seekh Kebab (4 pcs)",
    price: 599,
    category: "tandoor",
    isVeg: false
  },

  // Tandoori Bread
  {
    id: "tandoori-roti",
    name: "Tandoori Roti",
    price: 69,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "butter-roti",
    name: "Butter Roti",
    price: 99,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "ghee-roti",
    name: "Ghee Roti",
    price: 99,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "naan",
    name: "Naan",
    price: 89,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "butter-naan",
    name: "Butter Naan",
    price: 99,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "garlic-naan",
    name: "Garlic Naan",
    price: 149,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "masala-kulcha",
    name: "Masala Kulcha",
    price: 149,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "tandoori-laccha",
    name: "Tandoori Laccha",
    price: 199,
    category: "tandoori-bread",
    isVeg: true
  },

  // Main Course – Chinese
  {
    id: "chilli-paneer-gravy",
    name: "Chilli Paneer Gravy",
    price: 249,
    category: "main-course-chinese",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "sweet-sour-paneer",
    name: "Sweet & Sour Paneer",
    price: 249,
    category: "main-course-chinese",
    isVeg: true
  },
  {
    id: "veg-hot-garlic-paneer",
    name: "Veg Hot Garlic with Paneer",
    price: 249,
    category: "main-course-chinese",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "paneer-schezwan",
    name: "Paneer with Schezwan",
    price: 249,
    category: "main-course-chinese",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "chilli-garlic-paneer",
    name: "Chilli Garlic Paneer",
    price: 249,
    category: "main-course-chinese",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "chicken-hot-pot",
    name: "Chicken Hot Pot",
    price: 299,
    category: "main-course-chinese",
    isVeg: false
  },
  {
    id: "schezwan-chicken-hot-pot",
    name: "Schezwan Chicken Hot Pot",
    price: 349,
    category: "main-course-chinese",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "chicken-hot-garlic",
    name: "Chicken Hot Garlic",
    price: 399,
    category: "main-course-chinese",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "sweet-sour-chicken",
    name: "Sweet & Sour Chicken",
    price: 399,
    category: "main-course-chinese",
    isVeg: false
  },
  {
    id: "chicken-thai-green-curry",
    name: "Chicken Thai Green Curry",
    price: 399,
    category: "main-course-chinese",
    isVeg: false,
    isSignature: true,
    isSpicy: true
  },
  {
    id: "garlic-chicken",
    name: "Garlic Chicken",
    price: 299,
    category: "main-course-chinese",
    isVeg: false
  },

  // Main Course – Indian
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    price: 349,
    category: "main-course-indian",
    isVeg: true,
    isSignature: true,
    isPopular: true
  },
  {
    id: "kadhai-paneer",
    name: "Kadhai Paneer",
    price: 349,
    category: "main-course-indian",
    isVeg: true
  },
  {
    id: "paneer-do-pyaza",
    name: "Paneer Do Pyaza",
    price: 349,
    category: "main-course-indian",
    isVeg: true
  },
  {
    id: "mixed-veg",
    name: "Mixed Veg",
    price: 349,
    category: "main-course-indian",
    isVeg: true
  },
  {
    id: "malai-kofta",
    name: "Malai Kofta",
    price: 349,
    category: "main-course-indian",
    isVeg: true
  },
  {
    id: "chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    price: 399,
    category: "main-course-indian",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "kadai-chicken",
    name: "Kadai Chicken",
    price: 399,
    category: "main-course-indian",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "chicken-butter-masala",
    name: "Chicken Butter Masala",
    price: 399,
    category: "main-course-indian",
    isVeg: false,
    isPopular: true
  },
  {
    id: "fish-do-pyaza",
    name: "Fish Do Pyaza",
    price: 499,
    category: "main-course-indian",
    isVeg: false
  },
  {
    id: "prawn-malai-curry",
    name: "Prawn Malai Curry",
    price: 499,
    category: "main-course-indian",
    isVeg: false
  },
  {
    id: "mutton-kassa",
    name: "Mutton Kassa",
    price: 599,
    category: "main-course-indian",
    isVeg: false,
    isSignature: true,
    isSpicy: true
  },

  // Noodles & Rice
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    price: 249,
    category: "noodles-rice",
    isVeg: true,
    isPopular: true
  },
  {
    id: "veg-fried-rice-paneer",
    name: "Veg Fried Rice with Paneer",
    price: 299,
    category: "noodles-rice",
    isVeg: true
  },
  {
    id: "lemon-coriander-rice",
    name: "Lemon Coriander Rice",
    price: 299,
    category: "noodles-rice",
    isVeg: true
  },
  {
    id: "veg-hakka",
    name: "Veg Hakka",
    price: 299,
    category: "noodles-rice",
    isVeg: true
  },
  {
    id: "beans-sprouts-hakka",
    name: "Beans Sprouts with Hakka",
    price: 299,
    category: "noodles-rice",
    isVeg: true
  },
  {
    id: "stir-mushroom",
    name: "Stir Mushroom",
    price: 349,
    category: "noodles-rice",
    isVeg: true
  },
  {
    id: "chicken-fried-rice",
    name: "Chicken Fried Rice",
    price: 299,
    category: "noodles-rice",
    isVeg: false
  },
  {
    id: "egg-chicken-fried-rice",
    name: "Egg Chicken Fried Rice",
    price: 349,
    category: "noodles-rice",
    isVeg: false
  },
  {
    id: "mixed-fried-rice",
    name: "Mixed Fried Rice",
    price: 399,
    category: "noodles-rice",
    isVeg: false
  },
  {
    id: "chicken-hakka",
    name: "Chicken Hakka",
    price: 349,
    category: "noodles-rice",
    isVeg: false
  },
  {
    id: "egg-chicken-hakka",
    name: "Egg Chicken Hakka",
    price: 399,
    category: "noodles-rice",
    isVeg: false
  },
  {
    id: "mixed-hakka",
    name: "Mixed Hakka",
    price: 449,
    category: "noodles-rice",
    isVeg: false
  },

  // Desserts
  {
    id: "biscoff-cheesecake",
    name: "Biscoff Cheesecake",
    price: 399,
    category: "desserts",
    isVeg: true,
    isSignature: true,
    isPopular: true
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    price: 349,
    category: "desserts",
    isVeg: true
  },
  {
    id: "brownie-ice-cream",
    name: "Brownie with Ice Cream",
    price: 299,
    category: "desserts",
    isVeg: true,
    isPopular: true
  },
  {
    id: "gulab-jamun-rabri",
    name: "Gulab Jamun with Rabri",
    price: 199,
    category: "desserts",
    isVeg: true
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    price: 249,
    category: "desserts",
    isVeg: true
  },

  // Shisha
  {
    id: "regular-shisha",
    name: "Regular Shisha",
    price: 599,
    category: "shisha",
    isVeg: true,
    isPopular: true
  },
  {
    id: "gum-supari",
    name: "Gum Supari",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "orange-rasna",
    name: "Orange Rasna",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "kiwi-spring-water",
    name: "Kiwi Spring Water",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "kiwi-rasna",
    name: "Kiwi Rasna",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "blueberry-rasna",
    name: "Blueberry Rasna",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "blueberry-spring-water",
    name: "Blueberry Spring Water",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "brain-freezer",
    name: "Brain Freezer",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "orange-shisha",
    name: "Orange",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "teen-paan",
    name: "Teen Paan",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "blueberry-shisha",
    name: "Blueberry",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "gum-mint",
    name: "Gum Mint",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "rasna-mint",
    name: "Rasna Mint",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "commissioner",
    name: "Commissioner",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "double-apple",
    name: "Double Apple",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "double-apple-mint",
    name: "Double Apple Mint",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "lemon-rasna-shisha",
    name: "Lemon Rasna",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "lemon-mint-shisha",
    name: "Lemon Mint",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "vanilla-rasna",
    name: "Vanilla Rasna",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "teen-paan-qiwam",
    name: "Teen Paan Qiwam",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "teen-paan-white",
    name: "Teen Paan White",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "rose-shisha",
    name: "Rose",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "teen-paan-rose",
    name: "Teen Paan Rose",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "love-66-guru",
    name: "Love 66 Guru",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "teen-paan-peach",
    name: "Teen Paan Peach",
    price: 599,
    category: "shisha",
    isVeg: true
  },
  {
    id: "chat-pata-avenue",
    name: "Chat Pata Avenue (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "five-paan",
    name: "Five Paan (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "elaichi-mint",
    name: "Elaichi Mint (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "kiwi-blast",
    name: "Kiwi Blast (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "lemon-blast",
    name: "Lemon Blast (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "gum-blast",
    name: "Gum Blast (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "orange-blast",
    name: "Orange Blast (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "blueberry-blast",
    name: "Blueberry Blast (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "icy-grape-blast",
    name: "Icy Grape Blast (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "candy-special",
    name: "Candy (Special)",
    price: 799,
    category: "shisha",
    isVeg: true
  },
  {
    id: "sky-avenue-special-shisha",
    name: "Sky Avenue Special",
    price: 799,
    category: "shisha",
    isVeg: true,
    isSignature: true
  },
  {
    id: "jumbo-base-shisha",
    name: "Jumbo Base Shisha",
    price: 999,
    category: "shisha",
    isVeg: true
  },
  {
    id: "extra-coal",
    name: "Extra Coal",
    price: 50,
    category: "shisha",
    isVeg: true
  },
  {
    id: "special-base",
    name: "Special Base",
    price: 79,
    category: "shisha",
    isVeg: true
  }
];