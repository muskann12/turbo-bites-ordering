import { Flame, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/deals", label: "Deals" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const { count, setIsOpen, pulse } = useCart();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0 group">
          <div className="flex h-8 sm:h-9 w-8 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-flame shadow-flame group-hover:scale-110 transition-transform duration-300">
            <Flame className="h-4 sm:h-5 w-4 sm:w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg sm:text-2xl tracking-wide hidden xs:inline font-bold group-hover:text-primary transition-colors">
            <span>TURBO</span><span className="text-primary">BITES</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "px-2 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap group",
                location.pathname === l.to
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground/70 hover:text-primary hover:bg-muted/80 group-hover:scale-105"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <motion.button
            onClick={() => setIsOpen(true)}
            animate={pulse ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.4 }}
            className="relative flex h-10 sm:h-11 items-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-3 sm:px-4 text-background hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 sm:h-5 w-4 sm:w-5" />
            <span className="hidden sm:inline font-bold text-sm">Cart</span>
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-muted"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container py-3 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl font-semibold",
                    location.pathname === l.to
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
