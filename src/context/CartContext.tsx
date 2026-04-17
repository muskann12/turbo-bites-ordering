import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { MenuItem } from "@/lib/menuData";

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  spicyLevel?: string;
  addons: string[];
  makeMeal: boolean;
  totalPrice: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
  pulse: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(false);

  const addItem = useCallback((newItem: CartItem) => {
    setItems((prev) => [...prev, { ...newItem, id: `${newItem.item.id}-${Date.now()}` }]);
    setPulse(true);
    setTimeout(() => setPulse(false), 600);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, quantity: qty, totalPrice: (i.totalPrice / i.quantity) * qty }
          : i
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const subtotal = items.reduce((sum, i) => sum + i.totalPrice, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, isOpen, setIsOpen, addItem, removeItem, updateQuantity, clear, subtotal, count, pulse }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
