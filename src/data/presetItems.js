import { Carrot, Apple, Wheat, Beef, Milk, ShelvingUnit } from "lucide-react";

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
    category: "Pantry",
    icon: ShelvingUnit,
    items: ["Olive Oil", "Salt", "Black Pepper", "Sugar", "Flour", "Baking Soda", "Baking Powder", "Vanilla Extract", "Soy Sauce", "Pasta", "Canned Tomatoes", "Chicken Broth", "Honey", "Vinegar", "Peanut Butter", "Canned Beans", "Cereal", "Bread Crumbs", "Ketchup", "Mustard"]
  }
];

export default presetCategories;

