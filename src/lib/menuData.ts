export type Category =
  | "Burgers"
  | "Crispy Chicken"
  | "Loaded Fries"
  | "Pizzas"
  | "Shakes"
  | "Platters";

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number; // in PKR
  image: string;
  badge?: "Hot" | "New" | "Bestseller";
  spicyLevels?: boolean;
}

import burger from "@/assets/cat-burger.jpg";
import chicken from "@/assets/cat-chicken.jpg";
import fries from "@/assets/cat-fries.jpg";
import pizza from "@/assets/cat-pizza.jpg";
import shake from "@/assets/cat-shake.jpg";
import platter from "@/assets/cat-platter.jpg";

export const categories: { name: Category; image: string; emoji: string; tagline: string; description: string; itemCount: number }[] = [
  { name: "Burgers", image: burger, emoji: "🍔", tagline: "Premium Beef Burgers", description: "Handcrafted beef patties with premium ingredients. Our signature smash burgers are made fresh daily with 100% grass-fed beef, melted cheeses, and house-made sauces. Perfect for burger lovers!", itemCount: 5 },
  { name: "Crispy Chicken", image: chicken, emoji: "🍗", tagline: "Golden Fried Chicken", description: "Crispy on the outside, juicy on the inside. Our chicken is marinated in our secret 11-spice blend and fried to golden perfection. Served with premium dipping sauces.", itemCount: 5 },
  { name: "Loaded Fries", image: fries, emoji: "🍟", tagline: "Gourmet Potato Sides", description: "Hand-cut Belgian fries topped with premium cheese sauce, bacon, jalapeños, and special seasonings. The perfect side to any meal or a complete meal by itself!", itemCount: 4 },
  { name: "Pizzas", image: pizza, emoji: "🍕", tagline: "Italian Wood-Fired", description: "Authentic Italian-style pizzas made with San Marzano tomatoes, fresh mozzarella, and premium toppings. Hand-tossed dough and wood-fired oven for that perfect crust.", itemCount: 5 },
  { name: "Shakes", image: shake, emoji: "🥤", tagline: "Premium Beverages", description: "Thick, creamy shakes made with premium ice cream and fresh ingredients. Choose from classic flavors to innovative combinations. Perfect refreshment after your meal!", itemCount: 4 },
  { name: "Platters", image: platter, emoji: "🍽️", tagline: "Family Combo Meals", description: "Perfect for sharing! Our platters combine multiple items for a complete dining experience. Great for families, groups, or special occasions.", itemCount: 3 },
];

export const menuItems: MenuItem[] = [
  // Burgers
  { id: "b1", name: "Classic Smash Burger", category: "Burgers", description: "Double smashed beef patties, melted cheddar, pickles & house sauce.", price: 850, image: burger, badge: "Bestseller" },
  { id: "b2", name: "Inferno Spicy Burger", category: "Burgers", description: "Flame-grilled patty, jalapeños, ghost pepper sauce. Handle with care.", price: 950, image: burger, badge: "Hot", spicyLevels: true },
  { id: "b3", name: "BBQ Bacon Beast", category: "Burgers", description: "Triple bacon, smoky BBQ glaze, crispy onions & cheddar.", price: 1050, image: burger },
  { id: "b4", name: "Truffle Mushroom Burger", category: "Burgers", description: "Sautéed mushrooms, truffle aioli, swiss cheese on brioche.", price: 1150, image: burger, badge: "New" },
  { id: "b5", name: "Double Cheese Mountain", category: "Burgers", description: "4 patties. 4 cheese slices. No regrets.", price: 1350, image: burger },

  // Chicken
  { id: "c1", name: "Crispy Bucket (8pc)", category: "Crispy Chicken", description: "Golden crunchy chicken with secret 11-spice blend.", price: 1450, image: chicken, badge: "Bestseller" },
  { id: "c2", name: "Nashville Hot Tenders", category: "Crispy Chicken", description: "Buttermilk tenders drenched in fiery Nashville hot oil.", price: 890, image: chicken, badge: "Hot", spicyLevels: true },
  { id: "c3", name: "Korean BBQ Wings", category: "Crispy Chicken", description: "Twice-fried wings glazed in sticky gochujang sauce.", price: 1090, image: chicken, badge: "New" },
  { id: "c4", name: "Popcorn Chicken", category: "Crispy Chicken", description: "Bite-sized crispy nuggets with honey mustard dip.", price: 590, image: chicken },
  { id: "c5", name: "Chicken Sandwich Deluxe", category: "Crispy Chicken", description: "Crispy fillet, slaw, pickles, spicy mayo on toasted brioche.", price: 790, image: chicken },

  // Fries
  { id: "f1", name: "Classic Loaded Fries", category: "Loaded Fries", description: "Hand-cut fries, melted cheddar, bacon bits & jalapeños.", price: 690, image: fries, badge: "Bestseller" },
  { id: "f2", name: "Truffle Parmesan Fries", category: "Loaded Fries", description: "Crispy fries dusted with parmesan & white truffle oil.", price: 890, image: fries },
  { id: "f3", name: "Buffalo Chicken Fries", category: "Loaded Fries", description: "Topped with shredded buffalo chicken & blue cheese.", price: 950, image: fries, badge: "Hot", spicyLevels: true },
  { id: "f4", name: "Curly Cheese Fries", category: "Loaded Fries", description: "Seasoned curly fries smothered in nacho cheese sauce.", price: 590, image: fries },

  // Pizzas
  { id: "p1", name: "Pepperoni Storm", category: "Pizzas", description: "Hand-tossed dough, double pepperoni, bubbling mozzarella.", price: 1690, image: pizza, badge: "Bestseller" },
  { id: "p2", name: "Diablo Spicy Pizza", category: "Pizzas", description: "Spicy salami, jalapeños, chili oil. For brave souls only.", price: 1790, image: pizza, badge: "Hot", spicyLevels: true },
  { id: "p3", name: "Margherita Classica", category: "Pizzas", description: "San Marzano tomato, fresh mozzarella, basil leaves.", price: 1390, image: pizza },
  { id: "p4", name: "Meat Lovers Supreme", category: "Pizzas", description: "Pepperoni, sausage, bacon, ham. Carnivore's dream.", price: 1990, image: pizza, badge: "New" },
  { id: "p5", name: "BBQ Chicken Pizza", category: "Pizzas", description: "Grilled chicken, smoky BBQ, red onions, cilantro.", price: 1750, image: pizza },

  // Shakes
  { id: "s1", name: "Triple Choco Shake", category: "Shakes", description: "Belgian chocolate, fudge swirl, whipped cream, cherry.", price: 490, image: shake, badge: "Bestseller" },
  { id: "s2", name: "Strawberry Cheesecake Shake", category: "Shakes", description: "Real strawberries blended with cheesecake chunks.", price: 550, image: shake },
  { id: "s3", name: "Salted Caramel Shake", category: "Shakes", description: "Vanilla bean ice cream with salted caramel drizzle.", price: 490, image: shake, badge: "New" },
  { id: "s4", name: "Oreo Storm Shake", category: "Shakes", description: "Loaded with crushed Oreos and cookie cream.", price: 550, image: shake },

  // Platters
  { id: "pl1", name: "Family Mega Platter", category: "Platters", description: "8pc chicken, 2 burgers, fries, wings, onion rings & 4 dips.", price: 4490, image: platter, badge: "Bestseller" },
  { id: "pl2", name: "Game Night Platter", category: "Platters", description: "Wings, tenders, loaded fries, mozzarella sticks & sauces.", price: 3190, image: platter, badge: "Hot" },
  { id: "pl3", name: "Date Night Duo", category: "Platters", description: "2 burgers, fries to share, 2 shakes & a cookie.", price: 2790, image: platter, badge: "New" },
];
