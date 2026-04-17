import { Apple, Smartphone, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AppBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 md:p-14 text-background">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                📱 App Exclusive
              </span>
              <h2 className="font-display text-4xl md:text-6xl leading-none">
                Get the app. <br />
                <span className="text-secondary">Save 30% extra.</span>
              </h2>
              <p className="mt-4 text-background/80 max-w-md">
                Track orders in real-time, unlock app-only deals, and earn Turbo Points on every bite.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <button className="flex items-center gap-3 bg-background text-foreground px-5 py-3 rounded-2xl hover:scale-105 transition-transform">
                  <Apple className="h-7 w-7" />
                  <div className="text-left">
                    <div className="text-[10px]">Download on</div>
                    <div className="font-bold text-sm">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-background text-foreground px-5 py-3 rounded-2xl hover:scale-105 transition-transform">
                  <Smartphone className="h-7 w-7" />
                  <div className="text-left">
                    <div className="text-[10px]">Get it on</div>
                    <div className="font-bold text-sm">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
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
                <div className="w-64 h-[480px] rounded-[3rem] bg-background p-3 shadow-flame">
                  <div className="w-full h-full bg-flame rounded-[2.5rem] p-6 flex flex-col text-primary-foreground">
                    <div className="text-xs opacity-80">Welcome back,</div>
                    <div className="font-display text-2xl">ALEX 👋</div>
                    <div className="mt-6 bg-background/15 rounded-2xl p-4">
                      <div className="text-xs opacity-80">Order #4291</div>
                      <div className="font-bold mt-1">Arriving in 12 min</div>
                      <div className="mt-3 h-2 bg-background/20 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-2/3 rounded-full" />
                      </div>
                    </div>
                    <div className="mt-4 bg-secondary text-secondary-foreground rounded-2xl p-4">
                      <div className="font-display text-3xl">-30%</div>
                      <div className="text-xs font-bold">App-only code</div>
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
