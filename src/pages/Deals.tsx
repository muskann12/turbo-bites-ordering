import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Tag, Flame, Gift } from "lucide-react";
import wings from "@/assets/deal-wings.jpg";
import combo from "@/assets/deal-combo.jpg";
import midnight from "@/assets/deal-midnight.jpg";

const allDeals = [
  { title: "Midnight Cravings", subtitle: "Daily 10pm – 2am", description: "Hot pizza slice + cola. Late night legends only.", price: "Rs. 799", original: "Rs. 1,200", image: midnight, tag: "HOT", code: "NIGHT799" },
  { title: "Buy 1 Get 1 Burger", subtitle: "Every Tuesday", description: "Order any signature burger and get a second one absolutely free.", price: "BOGO", original: "Rs. 1,700", image: combo, tag: "NEW", code: "BOGOTUE" },
  { title: "Student Bundle", subtitle: "With valid student ID", description: "Wings + loaded fries + shake. Fuel your study sessions.", price: "Rs. 1,199", original: "Rs. 1,800", image: wings, tag: "HOT", code: "STUDY30" },
  { title: "Family Feast Friday", subtitle: "Friday 6pm – 10pm", description: "Mega platter for 4 with free dessert. Perfect for jumma night.", price: "Rs. 3,990", original: "Rs. 4,990", image: combo, tag: "NEW", code: "FAMILY1K" },
  { title: "First Order -30%", subtitle: "New customers only", description: "Welcome to the family! Get 30% off your very first Turbo Bites order.", price: "30% OFF", original: "—", image: midnight, tag: "HOT", code: "WELCOME30" },
  { title: "Office Lunch Combo", subtitle: "Mon–Fri 12pm – 3pm", description: "5 burgers + 5 fries + 5 drinks delivered hot to your office.", price: "Rs. 4,499", original: "Rs. 5,750", image: wings, tag: "NEW", code: "OFFICE5" },
];

export default function Deals() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-flame text-primary-foreground py-12 md:py-16">
        <div className="container">
          <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
            <Flame className="h-3 w-3" /> Smoking Hot Offers
          </span>
          <h1 className="font-display text-5xl md:text-7xl">Deals that hit different.</h1>
          <p className="mt-2 opacity-90">Refreshed daily. Use the code at checkout.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {allDeals.map((deal, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/40 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={deal.image} alt={deal.title} loading="lazy" className="w-full h-full object-cover" />
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                      deal.tag === "HOT"
                        ? "bg-primary text-primary-foreground animate-blink"
                        : "bg-secondary text-secondary-foreground animate-blink"
                    }`}
                  >
                    {deal.tag === "HOT" ? "🔥 HOT" : "✨ NEW"}
                  </span>
                  <div className="absolute top-3 right-3 bg-background/95 backdrop-blur-sm text-foreground font-display text-xl px-3 py-1 rounded-2xl">
                    {deal.price}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs text-muted-foreground font-semibold flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {deal.subtitle}
                  </div>
                  <h3 className="font-display text-2xl mt-1">{deal.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 flex-1">{deal.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-2 pt-4 border-t border-dashed border-border">
                    <div className="flex items-center gap-2 bg-secondary/15 text-secondary-foreground rounded-full px-3 py-1.5">
                      <Tag className="h-3 w-3 text-primary" />
                      <code className="text-xs font-bold tracking-wider">{deal.code}</code>
                    </div>
                    <Link
                      to="/menu"
                      className="bg-foreground text-background font-bold rounded-full px-4 py-2 text-sm hover:bg-primary transition-colors"
                    >
                      Use →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 bg-foreground text-background rounded-3xl p-8 md:p-12 text-center">
            <Gift className="h-10 w-10 mx-auto text-secondary mb-3" />
            <h2 className="font-display text-4xl md:text-5xl">Want first dibs on new deals?</h2>
            <p className="opacity-80 mt-2 max-w-md mx-auto">Subscribe to our SMS list and get exclusive codes 24 hours before everyone else.</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto mt-6 gap-2">
              <input
                placeholder="0311-1234567"
                className="flex-1 rounded-full bg-background/10 px-5 py-3 text-sm placeholder:text-background/50 outline-none focus:bg-background/20"
              />
              <button className="bg-secondary text-secondary-foreground rounded-full px-6 py-3 font-bold">
                Sign me up
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
