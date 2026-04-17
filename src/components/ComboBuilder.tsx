import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { formatPKR } from "@/lib/format";

const mains = [
  { id: "m1", name: "Smash Burger", price: 850 },
  { id: "m2", name: "Spicy Chicken Sandwich", price: 790 },
  { id: "m3", name: "Pepperoni Slice (2pc)", price: 690 },
];
const sides = [
  { id: "si1", name: "Crispy Fries", price: 350 },
  { id: "si2", name: "Onion Rings", price: 390 },
  { id: "si3", name: "Loaded Fries", price: 590 },
];
const drinks = [
  { id: "d1", name: "Coke", price: 180 },
  { id: "d2", name: "Lemonade", price: 220 },
  { id: "d3", name: "Choco Shake", price: 490 },
];

const COMBO_DISCOUNT = 0.8; // 20% off

export default function ComboBuilder() {
  const [main, setMain] = useState(mains[0].id);
  const [side, setSide] = useState(sides[0].id);
  const [drink, setDrink] = useState(drinks[0].id);
  const { addItem, setIsOpen } = useCart();

  const total = useMemo(() => {
    const m = mains.find((x) => x.id === main)!.price;
    const s = sides.find((x) => x.id === side)!.price;
    const d = drinks.find((x) => x.id === drink)!.price;
    return (m + s + d) * COMBO_DISCOUNT;
  }, [main, side, drink]);

  const original = useMemo(() => {
    const m = mains.find((x) => x.id === main)!.price;
    const s = sides.find((x) => x.id === side)!.price;
    const d = drinks.find((x) => x.id === drink)!.price;
    return m + s + d;
  }, [main, side, drink]);

  const handleAdd = () => {
    const mainName = mains.find((x) => x.id === main)!.name;
    const sideName = sides.find((x) => x.id === side)!.name;
    const drinkName = drinks.find((x) => x.id === drink)!.name;
    addItem({
      id: "",
      item: {
        id: `combo-${Date.now()}`,
        name: `Combo: ${mainName}`,
        category: "Burgers",
        description: `${sideName} + ${drinkName}`,
        price: total,
        image: "",
      },
      quantity: 1,
      addons: [sideName, drinkName],
      makeMeal: true,
      totalPrice: total,
    });
    toast.success("Combo added to cart! 🎉");
    setIsOpen(true);
  };

  const Group = ({
    title,
    items,
    selected,
    onChange,
  }: {
    title: string;
    items: { id: string; name: string; price: number }[];
    selected: string;
    onChange: (id: string) => void;
  }) => (
    <div>
      <div className="font-display text-2xl text-secondary mb-3">{title}</div>
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 text-left transition-all ${
              selected === item.id
                ? "bg-secondary text-secondary-foreground shadow-flame"
                : "bg-background/10 text-primary-foreground hover:bg-background/20"
            }`}
          >
            <span className="flex items-center gap-2 font-semibold text-sm">
              {selected === item.id && <Check className="h-4 w-4" />}
              {item.name}
            </span>
            <span className="text-xs opacity-80">{formatPKR(item.price)}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-flame relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="container relative">
        <div className="text-center text-primary-foreground mb-10">
          <Sparkles className="h-8 w-8 mx-auto text-secondary mb-2" />
          <h2 className="font-display text-5xl md:text-6xl">Build Your Combo</h2>
          <p className="opacity-90 mt-2">Pick 1 Main + 1 Side + 1 Drink. Save 20% instantly.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Group title="1. Main" items={mains} selected={main} onChange={setMain} />
          <Group title="2. Side" items={sides} selected={side} onChange={setSide} />
          <Group title="3. Drink" items={drinks} selected={drink} onChange={setDrink} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-md mx-auto bg-background rounded-3xl p-6 shadow-elevated text-center"
        >
          <div className="text-sm text-muted-foreground line-through">{formatPKR(original)}</div>
          <div className="font-display text-5xl text-primary">{formatPKR(total)}</div>
          <div className="text-xs uppercase font-bold text-secondary-foreground bg-secondary inline-block px-3 py-1 rounded-full mt-2">
            You save {formatPKR(original - total)}
          </div>
          <button
            onClick={handleAdd}
            className="mt-5 w-full bg-foreground text-background rounded-full py-4 font-bold hover:bg-primary transition-colors"
          >
            Add Combo to Cart
          </button>
        </motion.div>
      </div>
    </section>
  );
}
