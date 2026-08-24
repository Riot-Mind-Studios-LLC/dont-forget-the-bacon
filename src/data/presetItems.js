import { Carrot, Apple, Wheat, Beef, Milk } from "lucide-react";

const presetCategories = [
  {
    category: "Vegetables",
    icon: Carrot, // lucide icon name, confirm below
    items: ["Carrots", "Broccoli", "Spinach", "Bell Peppers", "Onions"]
  },
  {
    category: "Fruits",
    icon: Apple,
    items: ["Bananas", "Apples", "Strawberries", "Oranges", "Grapes"]
  },
  {
    category: "Grains",
    icon: Wheat,
    items: ["Bread", "Rice", "Pasta", "Oats", "Tortillas"]
  },
  {
    category: "Protein",
    icon: Beef,
    items: ["Chicken Breast", "Eggs", "Ground Beef", "Beans", "Tofu"]
  },
  {
    category: "Dairy",
    icon: Milk,
    items: ["Milk", "Cheese", "Yogurt", "Butter", "Cream Cheese"]
  }
];

export default presetCategories;

