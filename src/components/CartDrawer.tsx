import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { formatPKR } from "@/lib/format";

export default function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, subtotal } = useCart();
  const delivery = subtotal > 2500 ? 0 : 250;
  const total = subtotal + delivery;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 gap-0">
        <SheetHeader className="p-4 md:p-6 border-b">
          <SheetTitle className="font-display text-2xl md:text-3xl flex items-center gap-2">
            <ShoppingBag className="h-5 md:h-6 w-5 md:w-6 text-primary" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-3 md:p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground py-12 md:py-20">
              <div className="text-4xl md:text-5xl mb-3">🍔</div>
              <p className="font-bold text-sm md:text-base">Your cart is empty</p>
              <p className="text-xs md:text-sm">Add something delicious to get started.</p>
            </div>
          ) : (
            <ul className="space-y-2 md:space-y-3">
              <AnimatePresence>
                {items.map((line) => (
                  <motion.li
                    key={line.id}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 50 }}
                    className="flex gap-2 md:gap-3 bg-muted/40 rounded-xl md:rounded-2xl p-2.5 md:p-3"
                  >
                    {line.item.image && (
                      <img
                        src={line.item.image}
                        alt={line.item.name}
                        className="h-14 md:h-16 w-14 md:w-16 rounded-lg md:rounded-xl object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-bold text-xs md:text-sm leading-tight line-clamp-2">{line.item.name}</div>
                        <button
                          onClick={() => removeItem(line.id)}
                          className="text-muted-foreground hover:text-destructive flex-shrink-0"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-3.5 md:h-4 w-3.5 md:w-4" />
                        </button>
                      </div>
                      {(line.addons.length > 0 || line.spicyLevel) && (
                        <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5 line-clamp-1">
                          {line.spicyLevel && <span>🌶️ {line.spicyLevel} · </span>}
                          {line.addons.join(", ")}
                        </div>
                      )}
                      <div className="flex items-center justify-between mt-1.5 md:mt-2 gap-2">
                        <div className="flex items-center gap-0.5 md:gap-1 bg-background rounded-full p-0.5">
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity - 1)}
                            className="h-6 md:h-7 w-6 md:w-7 rounded-full hover:bg-muted flex items-center justify-center text-sm"
                          >
                            <Minus className="h-2.5 md:h-3 w-2.5 md:w-3" />
                          </button>
                          <span className="text-xs md:text-sm font-bold w-4 md:w-5 text-center">{line.quantity}</span>
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity + 1)}
                            className="h-6 md:h-7 w-6 md:w-7 rounded-full hover:bg-muted flex items-center justify-center text-sm"
                          >
                            <Plus className="h-2.5 md:h-3 w-2.5 md:w-3" />
                          </button>
                        </div>
                        <div className="font-bold text-primary text-xs md:text-sm flex-shrink-0">{formatPKR(line.totalPrice)}</div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 md:p-6 space-y-2.5 md:space-y-3 bg-background">
            <div className="flex justify-between text-xs md:text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">{formatPKR(subtotal)}</span>
            </div>
            <div className="flex justify-between text-xs md:text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-bold">{delivery === 0 ? "FREE" : formatPKR(delivery)}</span>
            </div>
            <div className="flex justify-between text-base md:text-lg font-display">
              <span>Total</span>
              <span className="text-primary">{formatPKR(total)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-flame text-primary-foreground font-bold rounded-full py-3 md:py-4 hover:opacity-90 transition-opacity shadow-flame text-sm md:text-base"
            >
              Express Checkout →
            </Link>
            <p className="text-center text-[10px] md:text-xs text-muted-foreground">
              No login needed · 20 min delivery guaranteed
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
