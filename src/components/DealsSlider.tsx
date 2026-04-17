import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import wings from "@/assets/deal-wings.jpg";
import combo from "@/assets/deal-combo.jpg";
import midnight from "@/assets/deal-midnight.jpg";

const deals = [
  {
    title: "Midnight Cravings",
    subtitle: "10pm – 2am",
    description: "Hot pizza slice + cola for just Rs. 799. Late night legends only.",
    price: "Rs. 799",
    image: midnight,
    tag: "HOT",
    bg: "from-primary to-foreground",
  },
  {
    title: "Buy 1 Get 1 Free",
    subtitle: "All Tuesdays",
    description: "Order any signature burger and get a second one absolutely free.",
    price: "BOGO",
    image: combo,
    tag: "NEW",
    bg: "from-secondary to-primary",
  },
  {
    title: "Student Bundle",
    subtitle: "With valid ID",
    description: "Wings + loaded fries + shake. Fuel your finals for Rs. 1,199.",
    price: "Rs. 1,199",
    image: wings,
    tag: "HOT",
    bg: "from-foreground to-primary",
  },
];

export default function DealsSlider() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              🔥 Today's Deals
            </span>
            <h2 className="font-display text-5xl md:text-6xl">Steals & Meals</h2>
          </div>
          <p className="hidden md:block text-muted-foreground max-w-sm">
            Limited time offers refreshed daily. Snag them before they're gone.
          </p>
        </div>

        <Carousel opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent>
            {deals.map((deal, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${deal.bg} p-6 md:p-8 h-[340px] flex flex-col justify-between text-primary-foreground shadow-card`}
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${
                          deal.tag === "HOT"
                            ? "bg-secondary text-secondary-foreground animate-blink"
                            : "bg-background text-foreground"
                        }`}
                      >
                        {deal.tag === "HOT" ? "🔥 HOT" : "✨ NEW"}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl mt-3">{deal.title}</h3>
                      <p className="text-sm opacity-80">{deal.subtitle}</p>
                    </div>
                    <div className="font-display text-2xl md:text-3xl text-secondary bg-background/15 backdrop-blur-sm px-4 py-2 rounded-2xl whitespace-nowrap">
                      {deal.price}
                    </div>
                  </div>
                  <div className="relative z-10 max-w-xs">
                    <p className="text-sm opacity-95 mb-4">{deal.description}</p>
                    <Link to="/menu" className="inline-block bg-background text-foreground font-bold rounded-full px-5 py-2 text-sm hover:bg-secondary transition-colors">
                      Order Now →
                    </Link>
                  </div>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    loading="lazy"
                    className="absolute -right-8 -bottom-8 w-56 h-56 object-cover rounded-full opacity-90 rotate-12"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
