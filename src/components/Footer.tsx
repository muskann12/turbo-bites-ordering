import { Flame, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background pt-16 md:pt-20 pb-8 md:pb-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3 group">
              <div className="flex h-10 md:h-11 w-10 md:w-11 items-center justify-center rounded-lg md:rounded-xl bg-secondary group-hover:scale-110 transition-transform duration-300">
                <Flame className="h-5 md:h-6 w-5 md:w-6 text-foreground" />
              </div>
              <span className="font-display text-xl md:text-2xl font-bold">TURBO<span className="text-secondary">BITES</span></span>
            </Link>
            <p className="text-xs md:text-sm opacity-80 mb-4 leading-relaxed">Hot, fresh, turbo fast. Delivered in 20 min or your next order's free. Order now!</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"><Instagram className="h-4 w-4 text-foreground" /></a>
              <a href="#" aria-label="Twitter" className="h-10 w-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"><Twitter className="h-4 w-4 text-foreground" /></a>
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"><Facebook className="h-4 w-4 text-foreground" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg md:text-xl mb-4 md:mb-5 font-bold text-secondary">🍔 Menu</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm opacity-85">
              <li><Link to="/category/Burgers" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300">→ Burgers</Link></li>
              <li><Link to="/category/Crispy%20Chicken" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300">→ Crispy Chicken</Link></li>
              <li><Link to="/category/Pizzas" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300">→ Pizzas</Link></li>
              <li><Link to="/category/Shakes" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300">→ Shakes</Link></li>
              <li><Link to="/menu" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300 font-semibold">→ Full Menu</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg md:text-xl mb-4 md:mb-5 font-bold text-secondary">🏢 Company</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm opacity-85">
              <li><Link to="/about" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300">→ About Us</Link></li>
              <li><Link to="/deals" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300">🔥 Hot Deals</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300">→ Contact</Link></li>
              <li><Link to="/admin" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block duration-300">⚙️ Admin</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg md:text-xl mb-4 md:mb-5 font-bold text-secondary">📞 Reach Us</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm opacity-85">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-4 md:h-5 w-4 md:w-5 mt-0.5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-secondary transition-colors">Plot 12, Gulberg III, Lahore</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone className="h-4 md:h-5 w-4 md:w-5 text-secondary flex-shrink-0 group-hover:animate-pulse" />
                <a href="tel:0311-TURBO-00" className="group-hover:text-secondary transition-colors">0311-TURBO-00</a>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail className="h-4 md:h-5 w-4 md:w-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@turbobites.pk" className="group-hover:text-secondary transition-colors">hello@turbobites.pk</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-10 md:mt-14 pt-6 md:pt-8 text-xs opacity-70 flex flex-col md:flex-row justify-between gap-3 md:gap-0">
          <span>© 2026 Turbo Bites Pakistan. All rights reserved. 🇵🇰</span>
          <span>Made with 🔥 by food lovers for hungry humans.</span>
        </div>
      </div>
    </footer>
  );
}
