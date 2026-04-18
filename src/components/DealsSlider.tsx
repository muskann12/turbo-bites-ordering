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
    <section className="py-12 md:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 md:mb-8 gap-3 md:gap-4">
          <div>
            <span className="inline-block bg-primary text-primary-foreground px-2.5 md:px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 md:mb-3">
              🔥 Today's Deals
            </span>
            <h2 className="font-display text-4xl md:text-6xl">Steals & Meals</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm md:text-base">
            Limited time offers refreshed daily. Snag them before they're gone.
          </p>
        </div>

        <Carousel opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent>
            {deals.map((deal, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br ${deal.bg} p-4 md:p-8 h-[280px] md:h-[340px] flex flex-col justify-between text-primary-foreground shadow-card`}
                >
                  <div className="relative z-10 flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-[11px] font-bold whitespace-nowrap ${
                          deal.tag === "HOT"
                            ? "bg-secondary text-secondary-foreground animate-blink"
                            : "bg-background text-foreground"
                        }`}
                      >
                        {deal.tag === "HOT" ? "🔥 HOT" : "✨ NEW"}
                      </span>
                      <h3 className="font-display text-2xl md:text-4xl mt-2">{deal.title}</h3>
                      <p className="text-xs md:text-sm opacity-80">{deal.subtitle}</p>
                    </div>
                    <div className="font-display text-xl md:text-3xl text-secondary bg-background/15 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl whitespace-nowrap text-sm md:text-base">
                      {deal.price}
                    </div>
                  </div>
                  <div className="relative z-10 max-w-xs">
                    <p className="text-xs md:text-sm opacity-95 mb-2 md:mb-4 line-clamp-2">{deal.description}</p>
                    <Link to="/menu" className="inline-block bg-background text-foreground font-bold rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm hover:bg-secondary transition-colors">
                      Order Now →
                    </Link>
                  </div>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    loading="lazy"
                    className="absolute -right-6 md:-right-8 -bottom-6 md:-bottom-8 w-40 md:w-56 h-40 md:h-56 object-cover rounded-full opacity-90 rotate-12"
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
