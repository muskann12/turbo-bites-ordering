import { motion } from "framer-motion";
import { Clock, Flame, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroBurger from "@/assets/hero-burger.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-8 py-12 lg:py-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-2 backdrop-blur-sm border border-background/20">
            <Clock className="h-4 w-4 text-secondary" />
            <span className="text-sm font-bold uppercase tracking-wider">Get it in 20 mins</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
            Hot.<br />
            Fresh.<br />
            <span className="text-secondary">Turbo fast.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-md">
            Hand-crafted burgers, crispy chicken & loaded fries — delivered straight to your door, faster than you can say "extra cheese".
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-bold text-secondary-foreground hover:scale-105 transition-transform shadow-flame"
            >
              <Flame className="h-5 w-5" />
              Start My Order
            </Link>
            <Link
              to="/deals"
              className="inline-flex items-center gap-2 rounded-full border-2 border-background/40 px-8 py-4 font-bold text-primary-foreground hover:bg-background/10 transition-colors"
            >
              View Deals
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9 / 5</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-secondary">50K+</span> happy bellies
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={heroBurger}
              alt="Massive juicy cheeseburger"
              width={1536}
              height={1280}
              className="rounded-3xl shadow-flame w-full"
            />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute -top-4 -left-4 md:-left-8 rounded-2xl bg-background p-4 shadow-card flex items-center gap-3 rotate-[-6deg]"
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
            className="absolute -bottom-4 -right-4 md:-right-8 rounded-2xl bg-foreground p-4 shadow-card text-background rotate-[6deg]"
          >
            <div className="font-display text-3xl text-secondary">-30%</div>
            <div className="text-xs font-semibold">First Order</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="bg-foreground py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 text-background font-display text-2xl">
              <span>🔥 FREE DELIVERY OVER $25</span>
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
