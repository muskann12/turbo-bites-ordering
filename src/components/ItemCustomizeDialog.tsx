import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MenuItem } from "@/lib/menuData";
import { useState, useEffect } from "react";
import { Minus, Plus, Flame } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { formatPKR } from "@/lib/format";

const ADDONS = [
  { id: "cheese", name: "Extra Cheese", price: 120 },
  { id: "jalapenos", name: "Jalapeños", price: 80 },
  { id: "bacon", name: "Crispy Bacon", price: 180 },
  { id: "dip", name: "Dip Sauce", price: 60 },
];

const MEAL_UPGRADE = 350;
const SPICE_LEVELS = ["Mild", "Hot", "Extra Hot"];

interface Props {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ItemCustomizeDialog({ item, open, onOpenChange }: Props) {
  const { addItem, setIsOpen } = useCart();
  const [qty, setQty] = useState(1);
  const [makeMeal, setMakeMeal] = useState(false);
  const [addons, setAddons] = useState<string[]>([]);
  const [spice, setSpice] = useState("Mild");

  useEffect(() => {
    if (open) {
      setQty(1);
      setMakeMeal(false);
      setAddons([]);
      setSpice("Mild");
    }
  }, [open]);

  if (!item) return null;

  const addonTotal = ADDONS.filter((a) => addons.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const mealUpgrade = makeMeal ? MEAL_UPGRADE : 0;
  const unitPrice = item.price + addonTotal + mealUpgrade;
  const total = unitPrice * qty;

  const toggleAddon = (id: string) =>
    setAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const handleAdd = () => {
    addItem({
      id: "",
      item,
      quantity: qty,
      spicyLevel: item.spicyLevels ? spice : undefined,
      addons: [
        ...addons.map((a) => ADDONS.find((x) => x.id === a)!.name),
        ...(makeMeal ? ["Meal upgrade"] : []),
      ],
      makeMeal,
      totalPrice: total,
    });
    onOpenChange(false);
    toast.success(`${item.name} added! 🔥`);
    setIsOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:w-full max-w-2xl p-0 overflow-hidden gap-0 max-h-[95vh] overflow-y-auto rounded-3xl">
        <div className="relative h-40 sm:h-56 md:h-64 bg-muted">
          <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-6 text-background">
            <div className="font-display text-2xl sm:text-3xl md:text-4xl font-black leading-none">{item.name}</div>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
          <DialogHeader className="sr-only">
            <DialogTitle>{item.name}</DialogTitle>
          </DialogHeader>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>

          <label className="flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-secondary/15 border-2 border-secondary cursor-pointer hover:bg-secondary/20 transition-colors">
            <div>
              <div className="font-bold text-sm sm:text-base">🍟 Make it a Meal?</div>
              <div className="text-xs text-muted-foreground">Add fries + drink for {formatPKR(MEAL_UPGRADE)}</div>
            </div>
            <input
              type="checkbox"
              checked={makeMeal}
              onChange={(e) => setMakeMeal(e.target.checked)}
              className="h-5 w-5 accent-primary"
            />
          </label>

          <div>
            <div className="font-bold mb-3 text-sm sm:text-base">✨ Extra Toppings</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ADDONS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => toggleAddon(a.id)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs sm:text-sm border-2 font-medium transition-all ${
                    addons.includes(a.id)
                      ? "bg-primary text-primary-foreground border-primary scale-105 shadow-lg"
                      : "bg-background border-border hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  <span>{a.name}</span>
                  <span className="text-xs opacity-80">+{formatPKR(a.price)}</span>
                </button>
              ))}
            </div>
          </div>

          {item.spicyLevels && (
            <div>
              <div className="font-bold mb-3 text-sm sm:text-base flex items-center gap-1">
                <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> Spicy Level
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {SPICE_LEVELS.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSpice(lvl)}
                    className={`rounded-xl py-2 px-2 text-xs sm:text-sm font-bold border-2 transition-all ${
                      spice === lvl
                        ? "bg-primary text-primary-foreground border-primary scale-105 shadow-md"
                        : "border-border hover:border-primary hover:bg-background/50"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 sm:pt-4 gap-3">
            <div className="flex items-center gap-2 sm:gap-3 bg-muted rounded-full p-1 sm:p-1.5">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Decrease"
              >
                <Minus className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
              </button>
              <span className="font-bold min-w-[2rem] text-center text-sm sm:text-base">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Increase"
              >
                <Plus className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-full py-3 sm:py-4 px-4 sm:px-6 hover:shadow-lg hover:scale-105 active:scale-95 transition-all shadow-lg text-xs sm:text-sm md:text-base"
            >
              Add • {formatPKR(total)}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
