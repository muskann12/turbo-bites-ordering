import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock, MessageCircle, CreditCard, Wallet } from "lucide-react";
import { toast } from "sonner";
import { formatPKR } from "@/lib/format";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [pay, setPay] = useState<"card" | "cash">("cash");
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });

  const delivery = subtotal > 2500 ? 0 : 250;
  const total = subtotal + delivery;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Order placed! 🔥 ETA 20 minutes.");
    clear();
    navigate("/");
  };

  const handleWhatsapp = () => {
    if (!form.name || !form.phone || !form.address) {
      toast.error("Please fill all fields first");
      return;
    }
    const text = encodeURIComponent(
      `🍔 *TURBO BITES ORDER*\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\n\nItems:\n${items
        .map((i) => `• ${i.quantity}x ${i.item.name} – ${formatPKR(i.totalPrice)}`)
        .join("\n")}\n\n*Total: ${formatPKR(total)}*`
    );
    window.open(`https://wa.me/923111111111?text=${text}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-12 md:py-20 text-center">
          <div className="text-5xl md:text-6xl mb-4">🍔</div>
          <h1 className="font-display text-3xl md:text-4xl">Your cart is empty</h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">Add some bites before checking out.</p>
          <Link to="/menu" className="inline-block mt-6 bg-primary text-primary-foreground font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
            Browse Menu
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-foreground py-6 md:py-8 text-background">
        <div className="container">
          <h1 className="font-display text-3xl md:text-5xl">Express Checkout</h1>
          <p className="opacity-80 text-xs md:text-sm flex items-center gap-2 mt-1">
            <Clock className="h-4 w-4 text-secondary flex-shrink-0" /> No login needed · 20 min delivery
          </p>
        </div>
      </div>

      <div className="container py-6 md:py-10 grid lg:grid-cols-[1fr_auto] gap-6 md:gap-8">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <section className="bg-gradient-to-br from-card to-card/80 rounded-2xl md:rounded-3xl p-5 md:p-7 border border-border/60 shadow-lg">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
              <h2 className="font-display text-xl md:text-2xl">Your Details</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              <input
                placeholder="Full name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl md:rounded-2xl border-2 border-border/50 px-4 md:px-5 py-3 md:py-3.5 outline-none focus:border-primary focus:bg-background/50 bg-background/80 text-sm md:text-base transition-colors hover:border-primary/50"
              />
              <input
                placeholder="Phone (e.g. 0311-1234567) *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-xl md:rounded-2xl border-2 border-border/50 px-4 md:px-5 py-3 md:py-3.5 outline-none focus:border-primary focus:bg-background/50 bg-background/80 text-sm md:text-base transition-colors hover:border-primary/50"
              />
              <input
                placeholder="Delivery address *"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="rounded-xl md:rounded-2xl border-2 border-border/50 px-4 md:px-5 py-3 md:py-3.5 outline-none focus:border-primary focus:bg-background/50 sm:col-span-2 bg-background/80 text-sm md:text-base transition-colors hover:border-primary/50"
              />
              <textarea
                placeholder="Order notes (optional)"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={2}
                className="rounded-xl md:rounded-2xl border-2 border-border/50 px-4 md:px-5 py-3 md:py-3.5 outline-none focus:border-primary focus:bg-background/50 sm:col-span-2 resize-none bg-background/80 text-sm md:text-base transition-colors hover:border-primary/50"
              />
            </div>
          </section>

          <section className="bg-gradient-to-br from-card to-card/80 rounded-2xl md:rounded-3xl p-5 md:p-7 border border-border/60 shadow-lg">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold text-sm">2</div>
              <h2 className="font-display text-xl md:text-2xl">Payment Method</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <button
                type="button"
                onClick={() => setPay("cash")}
                className={`flex flex-col items-center gap-2 rounded-2xl md:rounded-3xl p-4 md:p-5 border-2 transition-all duration-300 transform hover:scale-105 ${
                  pay === "cash" 
                    ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-primary shadow-lg" 
                    : "border-border hover:border-primary/50 bg-background/50 hover:bg-background/80"
                }`}
              >
                <Wallet className="h-6 md:h-7 w-6 md:w-7" />
                <span className="text-xs md:text-sm font-bold whitespace-nowrap">Cash</span>
                <span className="text-[10px] opacity-70">On Delivery</span>
              </button>
              <button
                type="button"
                onClick={() => setPay("card")}
                className={`flex flex-col items-center gap-2 rounded-2xl md:rounded-3xl p-4 md:p-5 border-2 transition-all duration-300 transform hover:scale-105 ${
                  pay === "card" 
                    ? "bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground border-secondary shadow-lg" 
                    : "border-border hover:border-secondary/50 bg-background/50 hover:bg-background/80"
                }`}
              >
                <CreditCard className="h-6 md:h-7 w-6 md:w-7" />
                <span className="text-xs md:text-sm font-bold whitespace-nowrap">Card</span>
                <span className="text-[10px] opacity-70">/ Easypaisa</span>
              </button>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold rounded-full py-4 shadow-lg shadow-primary/40 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
            >
              ✓ Place Order · {formatPKR(total)}
            </button>
            <button
              type="button"
              onClick={handleWhatsapp}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-foreground to-foreground/90 text-background font-bold rounded-full py-4 px-4 md:px-6 hover:scale-105 transition-all duration-300 hover:shadow-lg text-sm md:text-base"
            >
              <MessageCircle className="h-5 w-5" /> <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </form>

        <aside className="lg:sticky lg:top-20 self-start bg-muted/40 rounded-3xl p-6 h-fit">
          <h3 className="font-display text-2xl mb-4">Order Summary</h3>
          <ul className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {items.map((line) => (
              <li key={line.id} className="flex gap-3 text-sm">
                <span className="bg-primary text-primary-foreground rounded-lg w-7 h-7 flex items-center justify-center font-bold flex-shrink-0">
                  {line.quantity}
                </span>
                <div className="flex-1">
                  <div className="font-bold leading-tight">{line.item.name}</div>
                  {line.addons.length > 0 && (
                    <div className="text-xs text-muted-foreground">{line.addons.join(", ")}</div>
                  )}
                </div>
                <div className="font-bold text-primary text-xs">{formatPKR(line.totalPrice)}</div>
              </li>
            ))}
          </ul>
          <div className="border-t mt-4 pt-4 space-y-1.5 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPKR(subtotal)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{delivery === 0 ? "FREE" : formatPKR(delivery)}</span></div>
            <div className="flex justify-between font-display text-xl pt-1"><span>Total</span><span className="text-primary">{formatPKR(total)}</span></div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
