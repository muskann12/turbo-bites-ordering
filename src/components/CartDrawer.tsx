import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, subtotal } = useCart();
  const delivery = subtotal > 25 ? 0 : 2.99;
  const total = subtotal + delivery;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 gap-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="font-display text-3xl flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground py-20">
              <div className="text-5xl mb-3">🍔</div>
              <p className="font-bold">Your cart is empty</p>
              <p className="text-sm">Add something delicious to get started.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              <AnimatePresence>
                {items.map((line) => (
                  <motion.li
                    key={line.id}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 50 }}
                    className="flex gap-3 bg-muted/40 rounded-2xl p-3"
                  >
                    {line.item.image && (
                      <img
                        src={line.item.image}
                        alt={line.item.name}
                        className="h-16 w-16 rounded-xl object-cover"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-bold text-sm leading-tight">{line.item.name}</div>
                        <button
                          onClick={() => removeItem(line.id)}
                          className="text-muted-foreground hover:text-destructive"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      {(line.addons.length > 0 || line.spicyLevel) && (
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {line.spicyLevel && <span>🌶️ {line.spicyLevel} · </span>}
                          {line.addons.join(", ")}
                        </div>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-background rounded-full p-0.5">
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity - 1)}
                            className="h-7 w-7 rounded-full hover:bg-muted flex items-center justify-center"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-bold w-5 text-center">{line.quantity}</span>
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity + 1)}
                            className="h-7 w-7 rounded-full hover:bg-muted flex items-center justify-center"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="font-bold text-primary">${line.totalPrice.toFixed(2)}</div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6 space-y-3 bg-background">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-bold">{delivery === 0 ? "FREE" : `$${delivery.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-lg font-display">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-flame text-primary-foreground font-bold rounded-full py-4 hover:opacity-90 transition-opacity shadow-flame"
            >
              Express Checkout →
            </Link>
            <p className="text-center text-xs text-muted-foreground">
              No login needed · 20 min delivery guaranteed
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
