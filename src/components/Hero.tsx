import { motion, AnimatePresence } from "framer-motion";
import { Clock, Flame, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBurger from "@/assets/hero-burger.jpg";
import heroChicken from "@/assets/hero-chicken.jpg";
import heroPizza from "@/assets/hero-pizza.jpg";
import heroFries from "@/assets/hero-fries.jpg";

const slides = [
  { image: heroBurger, alt: "Juicy double cheeseburger" },
  { image: heroPizza, alt: "Hot pepperoni pizza" },
  { image: heroChicken, alt: "Crispy fried chicken" },
  { image: heroFries, alt: "Loaded cheesy fries" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-foreground">
      {/* Background fade slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[index].image}
              alt={slides[index].alt}
              className="w-full h-full object-cover animate-ken-burns"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-4 md:gap-8 py-12 sm:py-16 lg:py-28 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-background space-y-4 md:space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-background/15 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-md border border-background/20 hover:bg-background/20 transition-colors">
            <Clock className="h-3.5 md:h-4 w-3.5 md:w-4 text-secondary animate-pulse" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">⚡ Get it in 20 mins</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-black">
            Hot.<br />
            Fresh.<br />
            <span className="text-secondary">Turbo fast.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-background/90 max-w-md leading-relaxed">
            Hand-crafted burgers, crispy chicken & loaded fries — delivered straight to your door, faster than you can say "extra cheese". 🍔
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 md:px-8 py-3 md:py-4 font-bold text-secondary-foreground hover:scale-110 active:scale-95 transition-all shadow-lg shadow-secondary/40 text-sm md:text-base hover:shadow-xl"
            >
              <Flame className="h-4 md:h-5 w-4 md:w-5" />
              Order Now
            </Link>
            <Link
              to="/deals"
              className="inline-flex items-center gap-2 rounded-full border-2 border-background/40 px-5 md:px-8 py-3 md:py-4 font-bold text-background hover:bg-background/20 transition-all backdrop-blur-sm text-sm md:text-base hover:border-background/60"
            >
              🔥 Hot Deals
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 md:h-4 w-3 md:w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-xs md:text-sm font-semibold">4.9 / 5</span>
            </div>
            <div className="text-xs md:text-sm">
              <span className="font-bold text-secondary">50K+</span> happy bellies
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 pt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 md:w-10 bg-secondary" : "w-3 md:w-4 bg-background/40 hover:bg-background/60"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute top-8 left-0 rounded-2xl bg-background p-4 shadow-elevated flex items-center gap-3 rotate-[-6deg] animate-float"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Clock className="h-5 w-5 text-secondary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-semibold">Delivery</div>
              <div className="font-display text-xl">20 MIN</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute bottom-8 right-0 rounded-2xl bg-primary p-4 shadow-elevated text-primary-foreground rotate-[6deg]"
          >
            <div className="font-display text-3xl text-secondary">-30%</div>
            <div className="text-xs font-semibold">First Order</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute top-1/2 right-12 -translate-y-1/2 rounded-2xl bg-background/95 backdrop-blur-md p-4 shadow-elevated"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["bg-primary", "bg-secondary", "bg-foreground"].map((c, i) => (
                  <div key={i} className={`h-7 w-7 rounded-full ${c} border-2 border-background`} />
                ))}
              </div>
              <div className="text-xs font-bold">50K+ orders today</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="bg-foreground py-3 overflow-hidden border-t border-background/10 relative z-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 text-background font-display text-2xl">
              <span>🔥 FREE DELIVERY OVER Rs. 2,500</span>
              <span className="text-secondary">★</span>
              <span>⚡ ORDER IN 20 MIN</span>
              <span className="text-secondary">★</span>
              <span>🍔 BUY 1 GET 1 BURGERS</span>
              <span className="text-secondary">★</span>
              <span>🌶️ NEW NASHVILLE HOT</span>
              <span className="text-secondary">★</span>
              <span>📱 APP EXCLUSIVE -30%</span>
              <span className="text-secondary">★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
