// lib/menuData.ts

export type MenuCategoryId =
  | "mocktails"
  | "soft-drinks"
  | "tea"
  | "coffee"
  | "shakes"
  | "soups-veg"
  | "soups-nonveg"
  | "salad-veg"
  | "salad-nonveg"
  | "starters-veg"
  | "starters-nonveg"
  | "momos"
  | "pizza-veg"
  | "pizza-nonveg"
  | "pasta-veg"
  | "pasta-nonveg"
  | "burgers-veg"
  | "burgers-nonveg"
  | "sandwich-veg"
  | "sandwich-nonveg"
  | "tandoori-platter-veg"
  | "tandoori-platter-nonveg"
  | "chinese-veg"
  | "chinese-nonveg"
  | "indian-veg"
  | "indian-nonveg"
  | "tandoor-veg"
  | "tandoor-nonveg"
  | "tandoor-tikkas"
  | "tandoori-bread"
  | "noodles-rice-veg"
  | "noodles-rice-nonveg"
  | "desserts"
  | "special-item";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number; // INR
  category: MenuCategoryId;
  isVeg: boolean; // used for Veg / Non-Veg filter
  isSignature?: boolean;
  isPopular?: boolean;
  isSpicy?: boolean;
}

export const menuCategories: { id: MenuCategoryId; label: string }[] = [
  { id: "mocktails", label: "Mocktails" },
  { id: "soft-drinks", label: "Soft Drinks" },
  { id: "tea", label: "Tea" },
  { id: "coffee", label: "Coffee" },
  { id: "shakes", label: "Shakes" },
  { id: "soups-veg", label: "Soups (Veg)" },
  { id: "soups-nonveg", label: "Soups (Non-Veg)" },
  { id: "salad-veg", label: "Salad (Veg)" },
  { id: "salad-nonveg", label: "Salad (Non-Veg)" },
  { id: "starters-veg", label: "Starters (Veg)" },
  { id: "starters-nonveg", label: "Starters (Non-Veg)" },
  { id: "momos", label: "Momos" },
  { id: "pizza-veg", label: "Pizza (Veg)" },
  { id: "pizza-nonveg", label: "Pizza (Non-Veg)" },
  { id: "pasta-veg", label: "Pasta (Veg)" },
  { id: "pasta-nonveg", label: "Pasta (Non-Veg)" },
  { id: "burgers-veg", label: "Burgers (Veg)" },
  { id: "burgers-nonveg", label: "Burgers (Non-Veg)" },
  { id: "sandwich-veg", label: "Sandwich (Veg)" },
  { id: "sandwich-nonveg", label: "Sandwich (Non-Veg)" },
  { id: "tandoori-platter-veg", label: "Tandoori Platter (Veg)" },
  { id: "tandoori-platter-nonveg", label: "Tandoori Platter (Non-Veg)" },
  { id: "chinese-veg", label: "Chinese (Veg)" },
  { id: "chinese-nonveg", label: "Chinese (Non-Veg)" },
  { id: "indian-veg", label: "Indian (Veg)" },
  { id: "indian-nonveg", label: "Indian (Non-Veg)" },
  { id: "tandoor-veg", label: "Tandoor (Veg)" },
  { id: "tandoor-nonveg", label: "Tandoor (Non-Veg)" },
  { id: "tandoor-tikkas", label: "Tandoor Tikkas (Non-Veg)" },
  { id: "tandoori-bread", label: "Tandoori Bread" },
  { id: "noodles-rice-veg", label: "Noodles & Rice (Veg)" },
  { id: "noodles-rice-nonveg", label: "Noodles & Rice (Non-Veg)" },
  { id: "desserts", label: "Desserts" },
  { id: "special-item", label: "Special Item (Shisha)" }
];

export const menuItems: MenuItem[] = [
  // Mocktails
  {
    id: "mocktail-loves-me",
    name: "Loves Me",
    description: "Strawberry pulp, grenadine syrup, topped up with soda",
    price: 179,
    category: "mocktails",
    isVeg: true,
    isPopular: true
  },
  {
    id: "mocktail-sim-bim",
    name: "Sim-Bim",
    description:
      "Fresh blueberry, blackcurrant, lime sugar syrup, topped with ginger ale",
    price: 199,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-orange-pop",
    name: "Orange Pop",
    description:
      "Fresh orange juice, grenadine syrup, pinch of salt, topped with soda",
    price: 199,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-rainbow",
    name: "Rainbow",
    description:
      "Real orange juice, pineapple juice, grenadine, blue curacao syrup, topped with soda",
    price: 179,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-love-shots",
    name: "Love Shots",
    description: "Six juicy & acidic shot drinks",
    price: 239,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-cucumber-collins",
    name: "Cucumber Collins",
    description:
      "Fresh cucumber chunks, cucumber syrup, lemon syrup, topped with soda",
    price: 169,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-passion-fruit-paradise",
    name: "Passion Fruit Paradise",
    description:
      "Passion fruit syrup, orange juice, coconut water, and lime",
    price: 169,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-purple-glacier",
    name: "Purple Glacier",
    description:
      "Fresh blueberry, lavender syrup, rosemary, thyme, topped with soda",
    price: 179,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-coco-do-loco",
    name: "Coco Do Loco",
    description:
      "Coconut pulp, coconut cocoa, coconut water, lime juice, topped with soda",
    price: 199,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-kiwi-basil-smash",
    name: "Kiwi Basil Smash",
    description:
      "Kiwi halves, fresh basil leaves, lemon juice, simple syrup",
    price: 199,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-mojito",
    name: "Mojito",
    description: "Classic mojito – available in flavours of your choice",
    price: 169,
    category: "mocktails",
    isVeg: true
  },
  {
    id: "mocktail-oww-some",
    name: "Oww-Some",
    description: "Watermelon juice, rose syrup lemon, topped with ginger ale",
    price: 219,
    category: "mocktails",
    isVeg: true
  },

  // Soft Drinks
  {
    id: "soft-drinks-soft-drinks",
    name: "Soft Drinks",
    price: 99,
    category: "soft-drinks",
    isVeg: true
  },

  // Tea
  {
    id: "tea-adrak-elaichi",
    name: "Adrak Elaichi Tea",
    price: 99,
    category: "tea",
    isVeg: true
  },
  {
    id: "tea-royal-tea",
    name: "Royal Tea",
    price: 99,
    category: "tea",
    isVeg: true
  },
  {
    id: "tea-green-tea-honey",
    name: "Green Tea with Honey",
    price: 119,
    category: "tea",
    isVeg: true
  },
  {
    id: "tea-lemon-ginger-masala",
    name: "Lemon Ginger Masala Tea",
    price: 99,
    category: "tea",
    isVeg: true
  },

  // Coffee
  {
    id: "coffee-cappuccino",
    name: "Cappuccino",
    price: 119,
    category: "coffee",
    isVeg: true
  },
  {
    id: "coffee-mocha-cafe",
    name: "Mocha Cafe",
    price: 129,
    category: "coffee",
    isVeg: true
  },
  {
    id: "coffee-irish",
    name: "Irish",
    price: 129,
    category: "coffee",
    isVeg: true
  },
  {
    id: "coffee-hazelnut",
    name: "Hazelnut",
    price: 129,
    category: "coffee",
    isVeg: true
  },
  {
    id: "coffee-black",
    name: "Black Coffee",
    price: 109,
    category: "coffee",
    isVeg: true
  },
  {
    id: "coffee-latte",
    name: "Latte",
    price: 119,
    category: "coffee",
    isVeg: true
  },

  // Shakes
  {
    id: "shake-strawberry",
    name: "Strawberry Shake",
    price: 299,
    category: "shakes",
    isVeg: true
  },
  {
    id: "shake-mango",
    name: "Mango Shake",
    price: 299,
    category: "shakes",
    isVeg: true
  },
  {
    id: "shake-blackcurrant",
    name: "Blackcurrant Shake",
    price: 299,
    category: "shakes",
    isVeg: true
  },
  {
    id: "shake-horchata",
    name: "Horchata Shake",
    price: 349,
    category: "shakes",
    isVeg: true
  },
  {
    id: "shake-kitkat",
    name: "KitKat Shake",
    price: 199,
    category: "shakes",
    isVeg: true
  },
  {
    id: "shake-pina-colada",
    name: "Pina Colada",
    price: 349,
    category: "shakes",
    isVeg: true
  },
  {
    id: "shake-pineapple",
    name: "Pineapple Shake",
    price: 299,
    category: "shakes",
    isVeg: true
  },
  {
    id: "shake-banana",
    name: "Banana Shake",
    price: 299,
    category: "shakes",
    isVeg: true
  },
  {
    id: "shake-pistachio",
    name: "Pistachio Shake",
    price: 399,
    category: "shakes",
    isVeg: true
  },

  // Soups (Veg)
  {
    id: "soup-veg-tomato",
    name: "Tomato Soup",
    price: 249,
    category: "soups-veg",
    isVeg: true
  },
  {
    id: "soup-veg-broccoli-almond",
    name: "Broccoli Almond Soup",
    price: 299,
    category: "soups-veg",
    isVeg: true
  },
  {
    id: "soup-veg-minestrone",
    name: "Minestrone Soup",
    price: 299,
    category: "soups-veg",
    isVeg: true
  },
  {
    id: "soup-veg-manchow",
    name: "Manchow Soup",
    price: 299,
    category: "soups-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "soup-veg-lemon-coriander",
    name: "Lemon Coriander Soup",
    price: 299,
    category: "soups-veg",
    isVeg: true
  },
  {
    id: "soup-veg-sweet-corn",
    name: "Sweet Corn Soup",
    price: 179,
    category: "soups-veg",
    isVeg: true
  },
  {
    id: "soup-veg-hot-sour",
    name: "Hot & Sour Soup",
    price: 249,
    category: "soups-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "soup-veg-mushroom-cappuccino",
    name: "Mushroom Cappuccino Soup",
    price: 299,
    category: "soups-veg",
    isVeg: true
  },

  // Soups (Non-Veg)
  {
    id: "soup-nonveg-pollo-alla-crema",
    name: "Pollo Alla Crema Soup",
    price: 299,
    category: "soups-nonveg",
    isVeg: false
  },
  {
    id: "soup-nonveg-manchow-chicken",
    name: "Manchow Soup (Chicken)",
    price: 399,
    category: "soups-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "soup-nonveg-lemon-coriander-chicken",
    name: "Lemon Coriander Soup (Chicken)",
    price: 249,
    category: "soups-nonveg",
    isVeg: false
  },
  {
    id: "soup-nonveg-sweet-corn-chicken",
    name: "Sweet Corn Soup (Chicken)",
    price: 249,
    category: "soups-nonveg",
    isVeg: false
  },
  {
    id: "soup-nonveg-hot-sour-chicken",
    name: "Hot & Sour Soup (Chicken)",
    price: 299,
    category: "soups-nonveg",
    isVeg: false,
    isSpicy: true
  },

  // Salad (Veg)
  {
    id: "salad-veg-green",
    name: "Green Salad",
    price: 239,
    category: "salad-veg",
    isVeg: true
  },
  {
    id: "salad-veg-watermelon-feta",
    name: "Watermelon Feta Salad",
    price: 349,
    category: "salad-veg",
    isVeg: true
  },
  {
    id: "salad-veg-caprese",
    name: "Caprese Salad",
    price: 299,
    category: "salad-veg",
    isVeg: true
  },
  {
    id: "salad-veg-caesar",
    name: "Caesar Salad",
    price: 299,
    category: "salad-veg",
    isVeg: true
  },
  {
    id: "salad-veg-walnut",
    name: "Walnut Salad",
    price: 249,
    category: "salad-veg",
    isVeg: true
  },

  // Salad (Non-Veg)
  {
    id: "salad-nonveg-chicken-avocado",
    name: "Chicken Avocado Salad",
    price: 299,
    category: "salad-nonveg",
    isVeg: false
  },
  {
    id: "salad-nonveg-chicken-tandoori",
    name: "Chicken Tandoori Salad",
    price: 299,
    category: "salad-nonveg",
    isVeg: false
  },

  // Starters (Veg)
  {
    id: "starters-veg-stuffed-baked-mushrooms",
    name: "Stuffed Baked Mushrooms",
    description: "Mushrooms stuffed with cheese & herbs, baked",
    price: 349,
    category: "starters-veg",
    isVeg: true
  },
  {
    id: "starters-veg-mexican-cheese-roll",
    name: "Mexican Cheese Roll",
    description: "Mexican spiced cheese rolls, panko crumbed & deep fried",
    price: 299,
    category: "starters-veg",
    isVeg: true
  },
  {
    id: "starters-veg-nachos",
    name: "Nachos",
    description:
      "Nacho chips served with cheese dip, salsa & sour cream",
    price: 249,
    category: "starters-veg",
    isVeg: true
  },
  {
    id: "starters-veg-french-fries",
    name: "French Fries",
    description: "Classic deep-fried finger potatoes",
    price: 199,
    category: "starters-veg",
    isVeg: true
  },
  {
    id: "starters-veg-peri-peri-fries",
    name: "Peri Peri French Fries",
    description: "Deep-fried finger potatoes tossed with peri peri spice",
    price: 199,
    category: "starters-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "starters-veg-chilli-paneer-dry",
    name: "Chilli Paneer Dry (8 Pcs)",
    description: "Cottage cheese tossed with chilli & soya sauce",
    price: 299,
    category: "starters-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "starters-veg-chilli-baby-corn",
    name: "Chilli Baby Corn",
    description: "Crispy baby corn tossed in spicy chilli glaze",
    price: 299,
    category: "starters-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "starters-veg-chilli-potato",
    name: "Chilli Potato",
    description: "Crispy finger potatoes tossed in chilli tomato sauce",
    price: 299,
    category: "starters-veg",
    isVeg: true
  },
  {
    id: "starters-veg-paneer-65",
    name: "Paneer 65 (8 Pcs)",
    description: "Cottage cheese tossed with curry leaves, mustard & chilli",
    price: 299,
    category: "starters-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "starters-veg-shanghai-paneer",
    name: "Shanghai Paneer",
    description: "Cottage cheese tossed in Shanghai-style hot sauce",
    price: 299,
    category: "starters-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "starters-veg-chilli-mushroom",
    name: "Chilli Mushroom",
    description: "Crispy mushroom tossed in bold chilli sauce",
    price: 349,
    category: "starters-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "starters-veg-salt-pepper-corn",
    name: "Salt & Pepper Corn",
    description: "Crispy corn tossed in salt and cracked pepper",
    price: 349,
    category: "starters-veg",
    isVeg: true
  },
  {
    id: "starters-veg-sauteed-mushrooms",
    name: "Sautéed Mushrooms",
    price: 399,
    category: "starters-veg",
    isVeg: true
  },
  {
    id: "starters-veg-cheese-chilli-toast",
    name: "Cheese chilli toast",
    price: 259,
    category: "starters-veg",
    isVeg: true
  },
  {
    id: "starters-veg-cheese-garlic-bread",
    name: "Cheese garlic bread",
    price: 279,
    category: "starters-veg",
    isVeg: true
  },

  // Starters (Non-Veg)
  {
    id: "starters-nonveg-panko-crusted-chicken",
    name: "Panko Crusted Chicken (6 Pcs)",
    description:
      "Cajun-marinated boneless chicken, panko coated & deep fried",
    price: 349,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-panko-crusted-fish",
    name: "Panko Crusted Fish (6 Pcs)",
    description:
      "Cajun-marinated fish, panko coated & deep fried",
    price: 399,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-fish-chips",
    name: "Fish & Chips (2 Pcs)",
    description: "Battered fried fish served with French fries & hot dip",
    price: 499,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-corn-crusted-chicken-supreme",
    name: "Corn Crusted Chicken Supreme (6 Pcs)",
    description:
      "Boneless chicken coated with cornflakes, deep fried & served sizzling",
    price: 399,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-garlic-prawns",
    name: "Garlic Prawns (6 Pcs)",
    description: "Prawns tossed in butter, garlic & herbs",
    price: 499,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-fish-fingers",
    name: "Fish Fingers",
    price: 499,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-fried-prawns",
    name: "Fried Prawns",
    description: "Crispy fried prawns, golden and light",
    price: 499,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-paneer-crispy-dry",
    name: "Paneer Crispy (Dry)",
    price: 499,
    category: "starters-nonveg",
    isVeg: false // category says non-veg
  },
  {
    id: "starters-nonveg-bbq-chicken-wings",
    name: "BBQ Chicken Wings",
    price: 399,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-chilli-chicken-dry",
    name: "Chilli Chicken Dry",
    price: 349,
    category: "starters-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "starters-nonveg-chilli-garlic-chicken-dry",
    name: "Chilli Garlic Chicken Dry",
    price: 449,
    category: "starters-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "starters-nonveg-grilled-chicken",
    name: "Grilled Chicken",
    price: 549,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-grilled-fish",
    name: "Grilled Fish",
    price: 599,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-chicken-popcorn",
    name: "Chicken Popcorn",
    price: 399,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-drums-of-heaven",
    name: "Drums of Heaven",
    price: 399,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-chicken-lollipop",
    name: "Chicken Lollipop",
    price: 349,
    category: "starters-nonveg",
    isVeg: false,
    isPopular: true
  },
  {
    id: "starters-nonveg-rosemary-chicken-wings",
    name: "Rosemary Chicken Wings",
    price: 399,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-kung-pao-chicken",
    name: "Kung Pao Chicken",
    price: 449,
    category: "starters-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "starters-nonveg-butter-garlic-prawns-classic",
    name: "Butter Garlic Prawns (Classic)",
    price: 499,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-chicken-wontons",
    name: "Chicken Wontons",
    price: 449,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-chicken-cheese-pesto",
    name: "Chicken & Cheese Pesto",
    price: 459,
    category: "starters-nonveg",
    isVeg: false
  },
  {
    id: "starters-nonveg-schezwan-chicken-dry",
    name: "Schezwan Chicken Dry",
    price: 499,
    category: "starters-nonveg",
    isVeg: false,
    isSpicy: true
  },

  // Momos
  {
    id: "momos-veg",
    name: "Veg Momo (6 pcs)",
    price: 249,
    category: "momos",
    isVeg: true
  },
  {
    id: "momos-nonveg",
    name: "Non-Veg Momo (6 pcs)",
    price: 299,
    category: "momos",
    isVeg: false
  },

  // Pizza (Veg)
  {
    id: "pizza-veg-margherita",
    name: "Margherita",
    description: "Cheese & cherry tomato",
    price: 299,
    category: "pizza-veg",
    isVeg: true,
    isPopular: true
  },
  {
    id: "pizza-veg-funghi",
    name: "Funghi Pizza",
    description: "Mushroom & cheese",
    price: 449,
    category: "pizza-veg",
    isVeg: true
  },
  {
    id: "pizza-veg-four-cheese",
    name: "Four Cheese Pizza",
    price: 449,
    category: "pizza-veg",
    isVeg: true
  },
  {
    id: "pizza-veg-mixed-veg",
    name: "Mixed Veg Pizza",
    price: 399,
    category: "pizza-veg",
    isVeg: true
  },

  // Pizza (Non-Veg)
  {
    id: "pizza-nonveg-roasted-chicken",
    name: "Roasted Chicken Pizza",
    price: 499,
    category: "pizza-nonveg",
    isVeg: false
  },
  {
    id: "pizza-nonveg-peri-peri",
    name: "Peri Peri Pizza",
    description: "Peri Peri Chicken & cheese",
    price: 399,
    category: "pizza-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "pizza-nonveg-tandoori-chicken",
    name: "Tandoori Chicken Pizza",
    price: 399,
    category: "pizza-nonveg",
    isVeg: false
  },
  {
    id: "pizza-nonveg-mutton-keema",
    name: "Mutton Keema Pizza",
    price: 499,
    category: "pizza-nonveg",
    isVeg: false
  },

  // Pasta (Veg)
  {
    id: "pasta-veg-alfredo",
    name: "Veg Alfredo",
    price: 249,
    category: "pasta-veg",
    isVeg: true
  },
  {
    id: "pasta-veg-pesto",
    name: "Veg Pesto",
    price: 249,
    category: "pasta-veg",
    isVeg: true
  },
  {
    id: "pasta-veg-tomato-basil",
    name: "Tomato Basil",
    price: 249,
    category: "pasta-veg",
    isVeg: true
  },
  {
    id: "pasta-veg-mix-veg",
    name: "Mix Veg Pasta",
    price: 249,
    category: "pasta-veg",
    isVeg: true
  },

  // Pasta (Non-Veg)
  {
    id: "pasta-nonveg-chicken-alfredo",
    name: "Chicken Alfredo",
    price: 399,
    category: "pasta-nonveg",
    isVeg: false,
    isPopular: true
  },
  {
    id: "pasta-nonveg-chicken-pesto",
    name: "Chicken Pesto",
    price: 399,
    category: "pasta-nonveg",
    isVeg: false
  },
  {
    id: "pasta-nonveg-chicken-arrabbiata",
    name: "Chicken Arrabbiata",
    price: 349,
    category: "pasta-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "pasta-nonveg-mix-sauce-chicken",
    name: "Mix Sauce & Chicken",
    price: 399,
    category: "pasta-nonveg",
    isVeg: false
  },

  // Burgers (Veg)
  {
    id: "burgers-veg-crispy",
    name: "Crispy Burger",
    price: 199,
    category: "burgers-veg",
    isVeg: true
  },
  {
    id: "burgers-veg-paneer-cheese",
    name: "Paneer Cheese Burger",
    price: 299,
    category: "burgers-veg",
    isVeg: true
  },
  {
    id: "burgers-veg-tandoori-paneer",
    name: "Tandoori Paneer Burger",
    price: 299,
    category: "burgers-veg",
    isVeg: true
  },
  {
    id: "burgers-veg-veg-cheese",
    name: "Veg & Cheese Burger",
    price: 249,
    category: "burgers-veg",
    isVeg: true
  },

  // Burgers (Non-Veg)
  {
    id: "burgers-nonveg-roasted-chicken",
    name: "Roasted Chicken Burger",
    price: 299,
    category: "burgers-nonveg",
    isVeg: false
  },
  {
    id: "burgers-nonveg-keema-tikka",
    name: "Keema Tikka Burger",
    price: 349,
    category: "burgers-nonveg",
    isVeg: false
  },
  {
    id: "burgers-nonveg-tandoori-chicken",
    name: "Tandoori Chicken Burger",
    price: 349,
    category: "burgers-nonveg",
    isVeg: false
  },
  {
    id: "burgers-nonveg-mutton-keema-tikka",
    name: "Mutton Keema Tikka Burger",
    price: 449,
    category: "burgers-nonveg",
    isVeg: false
  },

  // Sandwich (Veg)
  {
    id: "sandwich-veg-veg-mayo",
    name: "Veg Mayo Sandwich",
    price: 199,
    category: "sandwich-veg",
    isVeg: true
  },
  {
    id: "sandwich-veg-bombay-veg-dal-sew",
    name: "Bombay Veg Dal Sew",
    price: 220,
    category: "sandwich-veg",
    isVeg: true
  },
  {
    id: "sandwich-veg-corn-cheese",
    name: "Corn & Cheese Sandwich",
    price: 311,
    category: "sandwich-veg",
    isVeg: true
  },
  {
    id: "sandwich-veg-paneer-tikka",
    name: "Paneer Tikka Sandwich",
    price: 298,
    category: "sandwich-veg",
    isVeg: true
  },

  // Sandwich (Non-Veg)
  {
    id: "sandwich-nonveg-grilled-chicken",
    name: "Grilled Chicken Sandwich",
    price: 324,
    category: "sandwich-nonveg",
    isVeg: false
  },
  {
    id: "sandwich-nonveg-bbq-chicken",
    name: "BBQ Chicken Sandwich",
    price: 324,
    category: "sandwich-nonveg",
    isVeg: false
  },
  {
    id: "sandwich-nonveg-tandoori-chicken",
    name: "Tandoori Chicken Sandwich",
    price: 324,
    category: "sandwich-nonveg",
    isVeg: false
  },
  {
    id: "sandwich-nonveg-mayo-egg-chicken",
    name: "Mayo Egg Chicken Sandwich",
    price: 350,
    category: "sandwich-nonveg",
    isVeg: false
  },

  // Tandoori Platter (Non-Veg)
  {
    id: "tandoori-platter-nonveg",
    name: "Non-Veg Platter",
    description:
      "Chicken Tikka - 3 pcs, Chicken Malai Tikka - 3 pcs, Tangdi Kabab - 2 pcs, Kasundi Fish Tikka - 3 pcs, Tandoori Prawns - 3 pcs, Mutton Seek Kabab - 1 pcs",
    price: 1099,
    category: "tandoori-platter-nonveg",
    isVeg: false,
    isSignature: true
  },

  // Tandoori Platter (Veg)
  {
    id: "tandoori-platter-veg",
    name: "Veg Platter",
    description:
      "Paneer Tikka - 3 pcs, Pudina Paneer Tikka - 3 pcs, Malai Broccoli - 3 pcs, Bharwan Aloo - 3 pcs, Veg Seekh Kabab - 2 pcs",
    price: 899,
    category: "tandoori-platter-veg",
    isVeg: true,
    isSignature: true
  },

  // Chinese (Veg)
  {
    id: "chinese-veg-chilli-paneer-gravy",
    name: "Chilli Paneer Gravy",
    price: 249,
    category: "chinese-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "chinese-veg-sweet-sour-paneer",
    name: "Sweet & Sour Paneer",
    price: 249,
    category: "chinese-veg",
    isVeg: true
  },
  {
    id: "chinese-veg-veg-hot-garlic-paneer",
    name: "Veg Hot Garlic with Paneer",
    price: 249,
    category: "chinese-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "chinese-veg-paneer-schezwan",
    name: "Paneer with Schezwan",
    price: 249,
    category: "chinese-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "chinese-veg-chilli-garlic-paneer",
    name: "Chilli Garlic Paneer",
    price: 249,
    category: "chinese-veg",
    isVeg: true,
    isSpicy: true
  },

  // Chinese (Non-Veg)
  {
    id: "chinese-nonveg-chicken-hot-pot",
    name: "Chicken Hot Pot",
    price: 299,
    category: "chinese-nonveg",
    isVeg: false
  },
  {
    id: "chinese-nonveg-schezwan-chicken-hot-pot",
    name: "Schezwan Chicken Hot Pot",
    price: 349,
    category: "chinese-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "chinese-nonveg-chicken-hot-garlic",
    name: "Chicken Hot Garlic",
    price: 399,
    category: "chinese-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "chinese-nonveg-sweet-sour-chicken",
    name: "Sweet & Sour Chicken",
    price: 399,
    category: "chinese-nonveg",
    isVeg: false
  },
  {
    id: "chinese-nonveg-chicken-thai-green-curry",
    name: "Chicken Thai Green Curry",
    price: 399,
    category: "chinese-nonveg",
    isVeg: false,
    isSignature: true
  },
  {
    id: "chinese-nonveg-garlic-chicken",
    name: "Garlic Chicken",
    price: 299,
    category: "chinese-nonveg",
    isVeg: false
  },

  // Indian (Veg)
  {
    id: "indian-veg-paneer-butter-masala",
    name: "Paneer Butter Masala",
    price: 349,
    category: "indian-veg",
    isVeg: true,
    isSignature: true,
    isPopular: true
  },
  {
    id: "indian-veg-kadhai-paneer",
    name: "Kadhai Paneer",
    price: 349,
    category: "indian-veg",
    isVeg: true,
    isSpicy: true
  },
  {
    id: "indian-veg-paneer-do-pyaza",
    name: "Paneer Do Pyaza",
    price: 349,
    category: "indian-veg",
    isVeg: true
  },
  {
    id: "indian-veg-mixed-veg",
    name: "Mixed Veg",
    price: 349,
    category: "indian-veg",
    isVeg: true
  },
  {
    id: "indian-veg-malai-kofta",
    name: "Malai Kofta",
    price: 349,
    category: "indian-veg",
    isVeg: true
  },
  {
    id: "indian-veg-dal-makhani",
    name: "Dal Makhani",
    price: 299,
    category: "indian-veg",
    isVeg: true
  },
  {
    id: "indian-veg-yellow-dal-tadka",
    name: "Yellow Dal Tadka",
    price: 199,
    category: "indian-veg",
    isVeg: true
  },
  {
    id: "indian-veg-dal-fry",
    name: "Dal Fry",
    price: 179,
    category: "indian-veg",
    isVeg: true
  },
  {
    id: "indian-veg-veg-jalfrezi",
    name: "Veg Jalfrezi",
    price: 289,
    category: "indian-veg",
    isVeg: true
  },
  {
    id: "indian-veg-shyam-savera-kofta",
    name: "Shyam Savera Kofta",
    price: 339,
    category: "indian-veg",
    isVeg: true
  },
  {
    id: "indian-veg-hyderabadi-handi",
    name: "Hyderabadi Handi (Mix Veg)",
    price: 379,
    category: "indian-veg",
    isVeg: true
  },

  // Indian (Non-Veg)
  {
    id: "indian-nonveg-chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    price: 399,
    category: "indian-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "indian-nonveg-kadai-chicken",
    name: "Kadai Chicken",
    price: 399,
    category: "indian-nonveg",
    isVeg: false,
    isSpicy: true
  },
  {
    id: "indian-nonveg-chicken-butter-masala",
    name: "Chicken Butter Masala",
    price: 399,
    category: "indian-nonveg",
    isVeg: false,
    isPopular: true
  },
  {
    id: "indian-nonveg-fish-do-pyaza",
    name: "Fish Do Pyaza",
    price: 499,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-prawn-malai-curry",
    name: "Prawn Malai Curry",
    price: 499,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-mutton-kassa",
    name: "Mutton Kassa",
    price: 599,
    category: "indian-nonveg",
    isVeg: false,
    isSignature: true,
    isSpicy: true
  },
  {
    id: "indian-nonveg-tangdi-masala-2",
    name: "Tangdi Masala/Lababdar (2 pcs)",
    price: 249,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-tangdi-masala-4",
    name: "Tangdi Masala/Lababdar (4 pcs)",
    price: 399,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-murgh-deewani-handi",
    name: "Murgh Deewani Handi (4 pcs)",
    price: 399,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-chicken-bharta",
    name: "Chicken Bharta",
    price: 389,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-chicken-do-pyaza",
    name: "Chicken Do Pyaza",
    price: 389,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-dak-bungalow-chicken",
    name: "Dak Bungalow Chicken",
    price: 419,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-egg-bhurji",
    name: "Egg Bhurji (4 pcs)",
    price: 159,
    category: "indian-nonveg",
    isVeg: false
  },
  {
    id: "indian-nonveg-egg-curry",
    name: "Egg Curry (2 pcs)",
    price: 179,
    category: "indian-nonveg",
    isVeg: false
  },

  // Tandoor Veg
  {
    id: "tandoor-veg-stuffed-potato",
    name: "Tandoori Stuffed Potato",
    price: 199,
    category: "tandoor-veg",
    isVeg: true
  },
  {
    id: "tandoor-veg-achari-paneer-tikka",
    name: "Achari Paneer Tikka",
    price: 299,
    category: "tandoor-veg",
    isVeg: true
  },
  {
    id: "tandoor-veg-afghani-paneer-tikka",
    name: "Afghani Paneer Tikka",
    price: 299,
    category: "tandoor-veg",
    isVeg: true
  },
  {
    id: "tandoor-veg-malai-broccoli",
    name: "Malai Broccoli",
    price: 349,
    category: "tandoor-veg",
    isVeg: true
  },
  {
    id: "tandoor-veg-mushroom-kalemiri",
    name: "Mushroom Kalemiri",
    price: 349,
    category: "tandoor-veg",
    isVeg: true
  },
  {
    id: "tandoor-veg-stuffed-paneer",
    name: "Stuffed Paneer",
    price: 349,
    category: "tandoor-veg",
    isVeg: true
  },
  {
    id: "tandoor-veg-pudina-paneer-tikka",
    name: "Pudina Paneer Tikka",
    price: 299,
    category: "tandoor-veg",
    isVeg: true
  },
  {
    id: "tandoor-veg-kasundi-paneer-tikka",
    name: "Kasundi Paneer Tikka",
    price: 259,
    category: "tandoor-veg",
    isVeg: true
  },
  {
    id: "tandoor-veg-gilafi-seekh-kabab",
    name: "Gilafi Seekh Kabab",
    price: 229,
    category: "tandoor-veg",
    isVeg: true
  },

  // Tandoor Non-Veg
  {
    id: "tandoor-nonveg-tandoori-chicken-half",
    name: "Tandoori Chicken (Half)",
    price: 399,
    category: "tandoor-nonveg",
    isVeg: false
  },
  {
    id: "tandoor-nonveg-tandoori-chicken-full",
    name: "Tandoori Chicken (Full)",
    price: 699,
    category: "tandoor-nonveg",
    isVeg: false
  },
  {
    id: "tandoor-nonveg-murg-ki-shole",
    name: "Murg Ki Shole",
    price: 499,
    category: "tandoor-nonveg",
    isVeg: false
  },
  {
    id: "tandoor-nonveg-olive-malai-chicken-tikka",
    name: "Olive Malai Chicken Tikka",
    price: 599,
    category: "tandoor-nonveg",
    isVeg: false
  },
  {
    id: "tandoor-nonveg-fish-tikka",
    name: "Fish Tikka",
    price: 599,
    category: "tandoor-nonveg",
    isVeg: false
  },
  {
    id: "tandoor-nonveg-tandoori-wasabi-prawn",
    name: "Tandoori Wasabi Prawn",
    description: "4 pcs",
    price: 599,
    category: "tandoor-nonveg",
    isVeg: false
  },
  {
    id: "tandoor-nonveg-mutton-seekh-kebab",
    name: "Mutton Seekh Kebab",
    price: 599,
    category: "tandoor-nonveg",
    isVeg: false
  },

  // Tandoor Tikkas (Non-Veg)
  {
    id: "tandoor-tikkas-pudina-chicken-tikka",
    name: "Pudina Chicken Tikka",
    price: 349,
    category: "tandoor-tikkas",
    isVeg: false
  },
  {
    id: "tandoor-tikkas-lasuni-chicken-tikka",
    name: "Lasuni Chicken Tikka",
    price: 319,
    category: "tandoor-tikkas",
    isVeg: false
  },
  {
    id: "tandoor-tikkas-jamuni-chicken-tikka",
    name: "Jamuni Chicken Tikka",
    price: 329,
    category: "tandoor-tikkas",
    isVeg: false
  },
  {
    id: "tandoor-tikkas-chicken-seekh-kabab",
    name: "Chicken Seekh Kabab",
    price: 359,
    category: "tandoor-tikkas",
    isVeg: false
  },
  {
    id: "tandoor-tikkas-adaraki-chicken-tikka",
    name: "Adaraki Chicken Tikka",
    description: "Wings/Leg",
    price: 339,
    category: "tandoor-tikkas",
    isVeg: false
  },

  // Tandoori Bread
  {
    id: "tandoori-bread-tandoori-roti",
    name: "Tandoori Roti",
    price: 69,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "tandoori-bread-butter-roti",
    name: "Butter Roti",
    price: 99,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "tandoori-bread-ghee-roti",
    name: "Ghee Roti",
    price: 99,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "tandoori-bread-naan",
    name: "Naan",
    price: 89,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "tandoori-bread-butter-naan",
    name: "Butter Naan",
    price: 99,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "tandoori-bread-garlic-naan",
    name: "Garlic Naan",
    price: 149,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "tandoori-bread-masala-kulcha",
    name: "Masala Kulcha",
    price: 149,
    category: "tandoori-bread",
    isVeg: true
  },
  {
    id: "tandoori-bread-tandoori-laccha",
    name: "Tandoori Laccha",
    price: 199,
    category: "tandoori-bread",
    isVeg: true
  },

  // Noodles & Rice (Veg)
  {
    id: "noodles-rice-veg-veg-fried-rice",
    name: "Veg Fried Rice",
    price: 249,
    category: "noodles-rice-veg",
    isVeg: true
  },
  {
    id: "noodles-rice-veg-veg-fried-rice-paneer",
    name: "Veg Fried Rice with Paneer",
    price: 299,
    category: "noodles-rice-veg",
    isVeg: true
  },
  {
    id: "noodles-rice-veg-lemon-coriander-rice",
    name: "Lemon Coriander Rice",
    price: 299,
    category: "noodles-rice-veg",
    isVeg: true
  },
  {
    id: "noodles-rice-veg-veg-hakka",
    name: "Veg Hakka",
    price: 299,
    category: "noodles-rice-veg",
    isVeg: true
  },
  {
    id: "noodles-rice-veg-beans-sprouts-hakka",
    name: "Beans Sprouts with Hakka",
    price: 299,
    category: "noodles-rice-veg",
    isVeg: true
  },

  // Noodles & Rice (Non-Veg)
  {
    id: "noodles-rice-nonveg-chicken-fried-rice",
    name: "Chicken Fried Rice",
    price: 299,
    category: "noodles-rice-nonveg",
    isVeg: false
  },
  {
    id: "noodles-rice-nonveg-egg-chicken-fried-rice",
    name: "Egg Chicken Fried Rice",
    price: 349,
    category: "noodles-rice-nonveg",
    isVeg: false
  },
  {
    id: "noodles-rice-nonveg-mixed-fried-rice",
    name: "Mixed Fried Rice",
    price: 349,
    category: "noodles-rice-nonveg",
    isVeg: false
  },
  {
    id: "noodles-rice-nonveg-chicken-hakka",
    name: "Chicken Hakka",
    price: 349,
    category: "noodles-rice-nonveg",
    isVeg: false
  },
  {
    id: "noodles-rice-nonveg-egg-chicken-hakka",
    name: "Egg Chicken Hakka",
    price: 349,
    category: "noodles-rice-nonveg",
    isVeg: false
  },
  {
    id: "noodles-rice-nonveg-mixed-hakka",
    name: "Mixed Hakka",
    price: 449,
    category: "noodles-rice-nonveg",
    isVeg: false
  },

  // Desserts
  {
    id: "desserts-biscoff-cheesecake",
    name: "Biscoff Cheesecake",
    price: 399,
    category: "desserts",
    isVeg: true,
    isSignature: true
  },
  {
    id: "desserts-dryfruit-cheesecake",
    name: "Dryfruit Cheesecake",
    price: 450,
    category: "desserts",
    isVeg: true
  },
  {
    id: "desserts-brownie-ice-cream",
    name: "Brownie with Ice Cream",
    price: 299,
    category: "desserts",
    isVeg: true,
    isPopular: true
  },
  {
    id: "desserts-gulab-jamun-rabri",
    name: "Gulab Jamun with Rabri",
    price: 199,
    category: "desserts",
    isVeg: true
  },
  {
    id: "desserts-ice-cream",
    name: "Ice Cream",
    price: 249,
    category: "desserts",
    isVeg: true
  },

  // Special Item (Shisha)
  {
    id: "special-regular-shisha",
    name: "Regular Shisha",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-gum-supari",
    name: "Gum Supari",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-orange-rasna",
    name: "Orange Rasna",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-kiwi-spring-water",
    name: "Kiwi Spring Water",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-kiwi-rasna",
    name: "Kiwi Rasna",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-blueberry-rasna",
    name: "Blueberry Rasna",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-blueberry-spring-water",
    name: "Blueberry Spring Water",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-brain-freezer",
    name: "Brain Freezer",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-orange",
    name: "Orange",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-teen-paan",
    name: "Teen Paan",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-blueberry",
    name: "Blueberry",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-gum-mint",
    name: "Gum Mint",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-rasna-mint",
    name: "Rasna Mint",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-commissioner",
    name: "Commissioner",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-chat-pata-avenue",
    name: "Chat Pata Avenue",
    price: 799,
    category: "special-item",
    isVeg: true,
    isSignature: true
  },
  {
    id: "special-five-paan",
    name: "Five Paan",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-electric-mint",
    name: "Electric Mint",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-energetic-mint",
    name: "Energetic Mint",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-kiwi-blast",
    name: "Kiwi Blast",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-lemon-blast",
    name: "Lemon Blast",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-gum-blast",
    name: "Gum Blast",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-orange-blast",
    name: "Orange Blast",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-blueberry-blast",
    name: "Blueberry Blast",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-icy-grape-blast",
    name: "Icy Grape Blast",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-candy",
    name: "Candy",
    price: 799,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-sky-avenue-special",
    name: "Sky Avenue Special",
    price: 599,
    category: "special-item",
    isVeg: true,
    isSignature: true
  },
  {
    id: "special-double-apple-mint",
    name: "Double Apple Mint",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-double-apple",
    name: "Double Apple",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-lemon-rasna",
    name: "Lemon Rasna",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-lemon-mint",
    name: "Lemon Mint",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-vanilla-rasna",
    name: "Vanilla Rasna",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-teen-paan-qiwam",
    name: "Teen Paan Qiwam",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-teen-paan-white",
    name: "Teen Paan White",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-rose",
    name: "Rose",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-teen-paan-rose",
    name: "Teen Paan Rose",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-teen-paan-peach",
    name: "Teen Paan Peach",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-love-66-guru",
    name: "Love 66 Guru",
    price: 599,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-jumbo-base-shisha",
    name: "Jumbo Base Shisha",
    price: 999,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-extra-coal",
    name: "Extra Coal",
    price: 50,
    category: "special-item",
    isVeg: true
  },
  {
    id: "special-special-base",
    name: "Special Base",
    price: 79,
    category: "special-item",
    isVeg: true
  }
];
