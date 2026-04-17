import { Flame, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-flame">
                <Flame className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl">TURBO<span className="text-secondary">BITES</span></span>
            </div>
            <p className="text-sm opacity-70">Hot, fresh, turbo fast. Delivered in 20 min or your next order's free.</p>
          </div>
          <div>
            <h4 className="font-display text-xl mb-3">Menu</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Burgers</li>
              <li>Crispy Chicken</li>
              <li>Pizzas</li>
              <li>Shakes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-3">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>About Us</li>
              <li>Careers</li>
              <li>Franchise</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-3">Stay Hungry</h4>
            <p className="text-sm opacity-70 mb-3">Get exclusive deals straight to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full bg-background/10 px-4 py-2 text-sm placeholder:text-background/50 outline-none focus:bg-background/20"
              />
              <button className="rounded-full bg-secondary text-secondary-foreground font-bold px-4 text-sm">Go</button>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-6 text-xs opacity-60 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2025 Turbo Bites. All rights reserved.</span>
          <span>Made with 🔥 for hungry humans.</span>
        </div>
      </div>
    </footer>
  );
}
