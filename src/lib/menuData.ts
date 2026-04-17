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
  price: number;
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

export const categories: { name: Category; image: string; emoji: string }[] = [
  { name: "Burgers", image: burger, emoji: "🍔" },
  { name: "Crispy Chicken", image: chicken, emoji: "🍗" },
  { name: "Loaded Fries", image: fries, emoji: "🍟" },
  { name: "Pizzas", image: pizza, emoji: "🍕" },
  { name: "Shakes", image: shake, emoji: "🥤" },
  { name: "Platters", image: platter, emoji: "🍽️" },
];

export const menuItems: MenuItem[] = [
  // Burgers
  { id: "b1", name: "Classic Smash Burger", category: "Burgers", description: "Double smashed beef patties, melted cheddar, pickles & house sauce.", price: 7.99, image: burger, badge: "Bestseller" },
  { id: "b2", name: "Inferno Spicy Burger", category: "Burgers", description: "Flame-grilled patty, jalapeños, ghost pepper sauce. Handle with care.", price: 8.99, image: burger, badge: "Hot", spicyLevels: true },
  { id: "b3", name: "BBQ Bacon Beast", category: "Burgers", description: "Triple bacon, smoky BBQ glaze, crispy onions & cheddar.", price: 9.49, image: burger },
  { id: "b4", name: "Truffle Mushroom Burger", category: "Burgers", description: "Sautéed mushrooms, truffle aioli, swiss cheese on brioche.", price: 10.49, image: burger, badge: "New" },
  { id: "b5", name: "Double Cheese Mountain", category: "Burgers", description: "4 patties. 4 cheese slices. No regrets.", price: 11.99, image: burger },

  // Chicken
  { id: "c1", name: "Crispy Bucket (8pc)", category: "Crispy Chicken", description: "Golden crunchy chicken with secret 11-spice blend.", price: 12.99, image: chicken, badge: "Bestseller" },
  { id: "c2", name: "Nashville Hot Tenders", category: "Crispy Chicken", description: "Buttermilk tenders drenched in fiery Nashville hot oil.", price: 8.49, image: chicken, badge: "Hot", spicyLevels: true },
  { id: "c3", name: "Korean BBQ Wings", category: "Crispy Chicken", description: "Twice-fried wings glazed in sticky gochujang sauce.", price: 9.99, image: chicken, badge: "New" },
  { id: "c4", name: "Popcorn Chicken", category: "Crispy Chicken", description: "Bite-sized crispy nuggets with honey mustard dip.", price: 5.99, image: chicken },
  { id: "c5", name: "Chicken Sandwich Deluxe", category: "Crispy Chicken", description: "Crispy fillet, slaw, pickles, spicy mayo on toasted brioche.", price: 7.49, image: chicken },

  // Fries
  { id: "f1", name: "Classic Loaded Fries", category: "Loaded Fries", description: "Hand-cut fries, melted cheddar, bacon bits & jalapeños.", price: 6.49, image: fries, badge: "Bestseller" },
  { id: "f2", name: "Truffle Parmesan Fries", category: "Loaded Fries", description: "Crispy fries dusted with parmesan & white truffle oil.", price: 7.99, image: fries },
  { id: "f3", name: "Buffalo Chicken Fries", category: "Loaded Fries", description: "Topped with shredded buffalo chicken & blue cheese.", price: 8.49, image: fries, badge: "Hot", spicyLevels: true },
  { id: "f4", name: "Curly Cheese Fries", category: "Loaded Fries", description: "Seasoned curly fries smothered in nacho cheese sauce.", price: 5.99, image: fries },

  // Pizzas
  { id: "p1", name: "Pepperoni Storm", category: "Pizzas", description: "Hand-tossed dough, double pepperoni, bubbling mozzarella.", price: 14.99, image: pizza, badge: "Bestseller" },
  { id: "p2", name: "Diablo Spicy Pizza", category: "Pizzas", description: "Spicy salami, jalapeños, chili oil. For brave souls only.", price: 15.99, image: pizza, badge: "Hot", spicyLevels: true },
  { id: "p3", name: "Margherita Classica", category: "Pizzas", description: "San Marzano tomato, fresh mozzarella, basil leaves.", price: 12.49, image: pizza },
  { id: "p4", name: "Meat Lovers Supreme", category: "Pizzas", description: "Pepperoni, sausage, bacon, ham. Carnivore's dream.", price: 17.49, image: pizza, badge: "New" },
  { id: "p5", name: "BBQ Chicken Pizza", category: "Pizzas", description: "Grilled chicken, smoky BBQ, red onions, cilantro.", price: 15.49, image: pizza },

  // Shakes
  { id: "s1", name: "Triple Choco Shake", category: "Shakes", description: "Belgian chocolate, fudge swirl, whipped cream, cherry.", price: 5.49, image: shake, badge: "Bestseller" },
  { id: "s2", name: "Strawberry Cheesecake Shake", category: "Shakes", description: "Real strawberries blended with cheesecake chunks.", price: 5.99, image: shake },
  { id: "s3", name: "Salted Caramel Shake", category: "Shakes", description: "Vanilla bean ice cream with salted caramel drizzle.", price: 5.49, image: shake, badge: "New" },
  { id: "s4", name: "Oreo Storm Shake", category: "Shakes", description: "Loaded with crushed Oreos and cookie cream.", price: 5.99, image: shake },

  // Platters
  { id: "pl1", name: "Family Mega Platter", category: "Platters", description: "8pc chicken, 2 burgers, fries, wings, onion rings & 4 dips.", price: 39.99, image: platter, badge: "Bestseller" },
  { id: "pl2", name: "Game Night Platter", category: "Platters", description: "Wings, tenders, loaded fries, mozzarella sticks & sauces.", price: 27.99, image: platter, badge: "Hot" },
  { id: "pl3", name: "Date Night Duo", category: "Platters", description: "2 burgers, fries to share, 2 shakes & a cookie.", price: 24.99, image: platter, badge: "New" },
];
