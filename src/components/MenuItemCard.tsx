import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { MenuItem } from "@/lib/menuData";
import { formatPKR } from "@/lib/format";

interface Props {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export default function MenuItemCard({ item, onSelect }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
      className="group bg-card rounded-2xl md:rounded-3xl overflow-hidden shadow-card border border-border/40 flex flex-col h-full hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted to-muted/80">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
        />
        {item.badge && (
          <span
            className={`absolute top-2 md:top-3 left-2 md:left-3 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase shadow-lg ${
              item.badge === "Hot"
                ? "bg-primary text-primary-foreground animate-blink"
                : item.badge === "New"
                ? "bg-secondary text-secondary-foreground animate-blink"
                : "bg-foreground text-background"
            }`}
          >
            {item.badge === "Hot" ? "🔥 Hot" : item.badge === "New" ? "✨ New" : "⭐ Best"}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3 md:p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-sm md:text-base leading-tight line-clamp-2 group-hover:text-primary transition-colors">{item.name}</h3>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mt-1 md:mt-1.5 flex-1">{item.description}</p>
        <div className="flex items-center justify-between mt-2.5 md:mt-3 gap-2">
          <div className="font-display text-lg md:text-xl text-primary font-bold">{formatPKR(item.price)}</div>
          <button
            onClick={() => onSelect(item)}
            className="flex items-center gap-1 bg-primary text-primary-foreground font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm hover:bg-primary/90 hover:shadow-lg active:scale-95 transition-all duration-300"
          >
            <Plus className="h-3 md:h-4 w-3 md:w-4" /> <span className="hidden xs:inline">Add</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
