import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MenuItem } from "@/lib/menuData";
import { useState, useEffect } from "react";
import { Minus, Plus, Flame } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ADDONS = [
  { id: "cheese", name: "Extra Cheese", price: 1.0 },
  { id: "jalapenos", name: "Jalapeños", price: 0.75 },
  { id: "bacon", name: "Crispy Bacon", price: 1.5 },
  { id: "dip", name: "Dip Sauce", price: 0.5 },
];

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
  const mealUpgrade = makeMeal ? 3.49 : 0;
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
      <DialogContent className="max-w-lg p-0 overflow-hidden gap-0 max-h-[90vh] overflow-y-auto">
        <div className="relative h-48 bg-muted">
          <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-3 left-4 text-background">
            <div className="font-display text-3xl leading-none">{item.name}</div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <DialogHeader className="sr-only">
            <DialogTitle>{item.name}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">{item.description}</p>

          <label className="flex items-center justify-between p-4 rounded-2xl bg-secondary/15 border-2 border-secondary cursor-pointer">
            <div>
              <div className="font-bold">🍟 Make it a Meal?</div>
              <div className="text-xs text-muted-foreground">Add fries + drink for $3.49</div>
            </div>
            <input
              type="checkbox"
              checked={makeMeal}
              onChange={(e) => setMakeMeal(e.target.checked)}
              className="h-5 w-5 accent-primary"
            />
          </label>

          <div>
            <div className="font-bold mb-2">Extra Toppings</div>
            <div className="grid grid-cols-2 gap-2">
              {ADDONS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => toggleAddon(a.id)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm border-2 transition-colors ${
                    addons.includes(a.id)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary"
                  }`}
                >
                  <span>{a.name}</span>
                  <span className="text-xs opacity-80">+${a.price.toFixed(2)}</span>
                </button>
              ))}
            </div>
          </div>

          {item.spicyLevels && (
            <div>
              <div className="font-bold mb-2 flex items-center gap-1">
                <Flame className="h-4 w-4 text-primary" /> Spicy Level
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SPICE_LEVELS.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSpice(lvl)}
                    className={`rounded-xl py-2 text-sm font-bold border-2 transition-colors ${
                      spice === lvl
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3 bg-muted rounded-full p-1">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="h-9 w-9 rounded-full bg-background flex items-center justify-center"
                aria-label="Decrease"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-bold min-w-[1.5rem] text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="h-9 w-9 rounded-full bg-background flex items-center justify-center"
                aria-label="Increase"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 ml-3 bg-flame text-primary-foreground font-bold rounded-full py-3 px-5 hover:opacity-90 transition-opacity shadow-flame"
            >
              Add • ${total.toFixed(2)}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
