import { Flame, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-flame">
                <Flame className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl">TURBO<span className="text-secondary">BITES</span></span>
            </Link>
            <p className="text-sm opacity-70">Hot, fresh, turbo fast. Delivered in 20 min or your next order's free.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xl mb-3">Menu</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/category/Burgers" className="hover:text-secondary">Burgers</Link></li>
              <li><Link to="/category/Crispy%20Chicken" className="hover:text-secondary">Crispy Chicken</Link></li>
              <li><Link to="/category/Pizzas" className="hover:text-secondary">Pizzas</Link></li>
              <li><Link to="/category/Shakes" className="hover:text-secondary">Shakes</Link></li>
              <li><Link to="/menu" className="hover:text-secondary">Full Menu</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-3">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link to="/deals" className="hover:text-secondary">Deals</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-secondary">Admin Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-3">Reach Us</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" /> Plot 12, Gulberg III, Lahore</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary flex-shrink-0" /> 0311-TURBO-00</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary flex-shrink-0" /> hello@turbobites.pk</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-6 text-xs opacity-60 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2025 Turbo Bites Pakistan. All rights reserved.</span>
          <span>Made with 🔥 for hungry humans.</span>
        </div>
      </div>
    </footer>
  );
}
