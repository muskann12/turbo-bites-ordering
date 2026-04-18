import { Apple, Smartphone, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AppBanner() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-foreground p-6 md:p-14 text-background">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-secondary text-secondary-foreground px-2.5 md:px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 md:mb-4">
                📱 App Exclusive
              </span>
              <h2 className="font-display text-3xl md:text-6xl leading-none">
                Get the app. <br />
                <span className="text-secondary">Save 30% extra.</span>
              </h2>
              <p className="mt-3 md:mt-4 text-background/80 max-w-md text-sm md:text-base">
                Track orders in real-time, unlock app-only deals, and earn Turbo Points on every bite.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
                <button className="flex items-center gap-2 md:gap-3 bg-background text-foreground px-4 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl hover:scale-105 transition-transform text-sm md:text-base">
                  <Apple className="h-5 md:h-7 w-5 md:w-7" />
                  <div className="text-left">
                    <div className="text-[9px] md:text-[10px]">Download on</div>
                    <div className="font-bold text-xs md:text-sm">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 md:gap-3 bg-background text-foreground px-4 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl hover:scale-105 transition-transform text-sm md:text-base">
                  <Smartphone className="h-5 md:h-7 w-5 md:w-7" />
                  <div className="text-left">
                    <div className="text-[9px] md:text-[10px]">Get it on</div>
                    <div className="font-bold text-xs md:text-sm">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6 text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-3 md:h-4 w-3 md:w-4 fill-secondary text-secondary" />
                  <span className="font-bold">4.8</span>
                  <span className="opacity-70">/ 5</span>
                </div>
                <div className="opacity-70">120K+ downloads</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden md:flex justify-center"
            >
              <div className="relative">
                <div className="w-48 md:w-64 h-[400px] md:h-[480px] rounded-[2rem] md:rounded-[3rem] bg-background p-2 md:p-3 shadow-flame">
                  <div className="w-full h-full bg-flame rounded-[1.75rem] md:rounded-[2.5rem] p-4 md:p-6 flex flex-col text-primary-foreground">
                    <div className="text-[10px] md:text-xs opacity-80">Welcome back,</div>
                    <div className="font-display text-lg md:text-2xl">ALEX 👋</div>
                    <div className="mt-4 md:mt-6 bg-background/15 rounded-lg md:rounded-2xl p-3 md:p-4">
                      <div className="text-xs opacity-80">Order #4291</div>
                      <div className="font-bold mt-1 text-sm md:text-base">Arriving in 12 min</div>
                      <div className="mt-2 md:mt-3 h-2 bg-background/20 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-2/3 rounded-full" />
                      </div>
                    </div>
                    <div className="mt-3 md:mt-4 bg-secondary text-secondary-foreground rounded-lg md:rounded-2xl p-3 md:p-4">
                      <div className="font-display text-2xl md:text-3xl">-30%</div>
                      <div className="text-[10px] md:text-xs font-bold">App-only code</div>
                    </div>
                    <div className="mt-auto text-center text-xs opacity-70">Turbo Points: 1,240 ⚡</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
