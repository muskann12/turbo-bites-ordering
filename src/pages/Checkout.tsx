import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock, MessageCircle, CreditCard, Wallet } from "lucide-react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [pay, setPay] = useState<"card" | "cash">("card");
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });

  const delivery = subtotal > 25 ? 0 : 2.99;
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
        .map((i) => `• ${i.quantity}x ${i.item.name} – $${i.totalPrice.toFixed(2)}`)
        .join("\n")}\n\n*Total: $${total.toFixed(2)}*`
    );
    window.open(`https://wa.me/15551234567?text=${text}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <div className="text-6xl mb-4">🍔</div>
          <h1 className="font-display text-4xl">Your cart is empty</h1>
          <p className="text-muted-foreground mt-2">Add some bites before checking out.</p>
          <Link to="/menu" className="inline-block mt-6 bg-primary text-primary-foreground font-bold rounded-full px-8 py-3">
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
      <div className="bg-foreground py-8 text-background">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl">Express Checkout</h1>
          <p className="opacity-80 text-sm flex items-center gap-2 mt-1">
            <Clock className="h-4 w-4 text-secondary" /> No login needed · 20 min delivery
          </p>
        </div>
      </div>

      <div className="container py-10 grid lg:grid-cols-[1fr_400px] gap-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="bg-card rounded-3xl p-6 border shadow-card">
            <h2 className="font-display text-2xl mb-4">1. Your Details</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                placeholder="Full name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-2xl border-2 border-border px-4 py-3 outline-none focus:border-primary"
              />
              <input
                placeholder="Phone *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-2xl border-2 border-border px-4 py-3 outline-none focus:border-primary"
              />
              <input
                placeholder="Delivery address *"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="rounded-2xl border-2 border-border px-4 py-3 outline-none focus:border-primary sm:col-span-2"
              />
              <textarea
                placeholder="Order notes (optional)"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={2}
                className="rounded-2xl border-2 border-border px-4 py-3 outline-none focus:border-primary sm:col-span-2 resize-none"
              />
            </div>
          </section>

          <section className="bg-card rounded-3xl p-6 border shadow-card">
            <h2 className="font-display text-2xl mb-4">2. Payment Method</h2>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPay("card")}
                className={`flex flex-col items-center gap-1 rounded-2xl p-4 border-2 transition-colors ${
                  pay === "card" ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"
                }`}
              >
                <CreditCard className="h-6 w-6" />
                <span className="text-sm font-bold">Card</span>
              </button>
              <button
                type="button"
                onClick={() => setPay("cash")}
                className={`flex flex-col items-center gap-1 rounded-2xl p-4 border-2 transition-colors ${
                  pay === "cash" ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"
                }`}
              >
                <Wallet className="h-6 w-6" />
                <span className="text-sm font-bold">Cash on Delivery</span>
              </button>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 bg-flame text-primary-foreground font-bold rounded-full py-4 shadow-flame hover:opacity-90"
            >
              Place Order · ${total.toFixed(2)}
            </button>
            <button
              type="button"
              onClick={handleWhatsapp}
              className="flex items-center justify-center gap-2 bg-foreground text-background font-bold rounded-full py-4 px-5 hover:bg-primary"
            >
              <MessageCircle className="h-5 w-5" /> Send via WhatsApp
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
                <div className="font-bold text-primary">${line.totalPrice.toFixed(2)}</div>
              </li>
            ))}
          </ul>
          <div className="border-t mt-4 pt-4 space-y-1.5 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{delivery === 0 ? "FREE" : `$${delivery.toFixed(2)}`}</span></div>
            <div className="flex justify-between font-display text-xl pt-1"><span>Total</span><span className="text-primary">${total.toFixed(2)}</span></div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
