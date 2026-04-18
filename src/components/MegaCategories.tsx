import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/lib/menuData";
import { ArrowRight, Flame, Star } from "lucide-react";

export default function MegaCategories() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <span className="text-sm font-bold text-primary uppercase tracking-widest">🔥 Our Specialties</span>
              <div className="h-1 w-8 bg-gradient-to-r from-secondary to-primary rounded-full" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Choose Your Craving
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Explore our 6 iconic categories featuring 26+ premium items. Each dish is crafted with passion and the finest ingredients.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <Link
                to={`/category/${encodeURIComponent(cat.name)}`}
                className="relative flex flex-col h-full bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 group-hover:to-background/90 transition-all" />
                  
                  {/* Emoji Badge */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="absolute top-4 right-4 text-5xl md:text-6xl filter drop-shadow-lg"
                  >
                    {cat.emoji}
                  </motion.div>
                  
                  {/* Item Count Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                  >
                    <Star className="h-3.5 w-3.5" />
                    {cat.itemCount} Items
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 md:p-6 space-y-3">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs md:text-sm font-semibold text-primary/80 mt-1 uppercase tracking-wide">
                      {cat.tagline}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {cat.description}
                  </p>
                  
                  {/* CTA Button */}
                  <motion.div
                    className="flex items-center gap-2 text-primary font-bold text-sm mt-auto pt-2 group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 4 }}
                  >
                    <span>Explore Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 md:p-8">
            <p className="text-muted-foreground mb-3">Ready to order?</p>
            <p className="font-display text-2xl md:text-3xl font-black">
              26+ Premium Items Waiting for You
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
