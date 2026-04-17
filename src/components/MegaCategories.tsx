import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/lib/menuData";
import { ArrowRight } from "lucide-react";

export default function MegaCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
            Browse the menu
          </span>
          <h2 className="font-display text-5xl md:text-6xl">Pick Your Poison</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Six legendary categories. Endless flavor combos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <Link
                to={`/menu?cat=${encodeURIComponent(cat.name)}`}
                className="group relative block overflow-hidden rounded-3xl aspect-[4/5] shadow-card"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-background">
                  <div className="text-3xl mb-2">{cat.emoji}</div>
                  <h3 className="font-display text-2xl md:text-3xl">{cat.name}</h3>
                  <div className="flex items-center gap-1 text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    Order now <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
