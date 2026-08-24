import { Carrot, Apple, Wheat, Beef, Milk, ShelvingUnit, SprayCan, ShowerHead } from "lucide-react";

const presetCategories = [
  {
    category: "Vegetables",
    icon: Carrot, // lucide icon name, confirm below
    items: ["Carrot", "Broccoli", "Spinach", "Potato", "Onion", "Bell Pepper", "Tomato", "Cucumber", "Zucchini", "Cauliflower", "Celery", "Lettuce", "Kale", "Asparagus", "Green Beans", "Mushroom", "Sweet Potato", "Cabbage", "Corn", "Garlic"]
  },
  {
    category: "Fruits",
    icon: Apple,
    items: ["Apple", "Banana", "Orange", "Grapes", "Strawberry", "Blueberry", "Pineapple", "Mango", "Watermelon", "Peach", "Pear", "Cherry", "Kiwi", "Lemon", "Lime", "Raspberry", "Plum", "Avocado", "Cantaloupe", "Pomegranate"]
  },
  {
    category: "Grains",
    icon: Wheat,
    items: ["Rice", "Pasta", "Quinoa", "Tortillas", "Oats", "Barley", "Wheat", "Farro", "Millet", "Bulgur", "Buckwheat", "Rye", "Cornmeal", "Couscous", "Brown Rice", "Wild Rice", "Sorghum", "Amaranth", "Semolina", "Popcorn"]
    
  },
  {
    category: "Protein",
    icon: Beef,
    items: ["Chicken Breast", "Ground Beef", "Salmon", "Eggs", "Tofu", "Black Beans", "Lentils", "Shrimp", "Pork Chops", "Turkey", "Greek Yogurt", "Chickpeas", "Almonds", "Steak", "Tuna", "Cottage Cheese", "Tempeh", "Edamame", "Peanut Butter", "Ground Turkey"]
  },
  {
    category: "Dairy",
    icon: Milk,
    items: ["Milk", "Cheddar Cheese", "Mozzarella", "Butter", "Greek Yogurt", "Sour Cream", "Cream Cheese", "Cottage Cheese", "Heavy Cream", "Parmesan", "Half and Half", "Whipped Cream", "Buttermilk", "Ricotta", "Yogurt", "Feta Cheese", "Swiss Cheese", "Ice Cream", "Condensed Milk", "Goat Cheese"]
  },
  {
    category: "Pantry Items",
    icon: ShelvingUnit,
    items: ["Olive Oil", "Salt", "Black Pepper", "Sugar", "Flour", "Baking Soda", "Baking Powder", "Vanilla Extract", "Soy Sauce", "Pasta", "Canned Tomatoes", "Chicken Broth", "Honey", "Vinegar", "Peanut Butter", "Canned Beans", "Cereal", "Bread Crumbs", "Ketchup", "Mustard"]
  },
  {
    category: "Household Items",
    icon: SprayCan,
    items: ["Dish Soap", "Laundry Detergent", "All-Purpose Cleaner", "Paper Towels", "Sponges", "Glass Cleaner", "Bleach", "Trash Bags", "Toilet Bowl Cleaner", "Disinfecting Wipes", "Fabric Softener", "Dishwasher Detergent", "Rubber Gloves", "Air Freshener", "Floor Cleaner", "Scrub Brush", "Hand Soap", "Stain Remover", "Furniture Polish", "Microfiber Cloths"]
  }
  ,
  {
    category: "Personal Care Items",
    icon: ShowerHead,
    items: ["Toothpaste", "Toothbrush", "Body Soap", "Shampoo", "Conditioner", "Deodorant", "Razors", "Shaving Cream", "Mouthwash", "Dental Floss", "Body Wash", "Lotion", "Hand Sanitizer", "Cotton Swabs", "Feminine Hygiene Products", "Toilet Paper", "Facial Tissue", "Sunscreen", "Hair Brush", "Nail Clippers"]
  }
];

export default presetCategories;