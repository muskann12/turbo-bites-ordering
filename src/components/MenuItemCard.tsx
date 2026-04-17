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
      whileHover={{ y: -4 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border/40 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
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
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-base leading-tight">{item.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1 flex-1">{item.description}</p>
        <div className="flex items-center justify-between mt-3 gap-2">
          <div className="font-display text-xl text-primary">{formatPKR(item.price)}</div>
          <button
            onClick={() => onSelect(item)}
            className="flex items-center gap-1 bg-foreground text-background font-bold rounded-full px-4 py-2 text-sm hover:bg-primary transition-colors"
          >
            <Plus className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}
