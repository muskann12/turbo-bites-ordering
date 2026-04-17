import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Flame, Heart, Award, Users, Leaf, Clock } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Flame, title: "Bold Flavors", desc: "We don't do bland. Every bite is engineered to slap." },
  { icon: Clock, title: "20-Min Promise", desc: "Hot at your door in 20 minutes — or your next order is free." },
  { icon: Leaf, title: "Fresh Daily", desc: "Buns baked every morning. Patties pressed to order. Never frozen." },
  { icon: Heart, title: "Community First", desc: "Local sourcing, fair wages, and food drives every month." },
];

const stats = [
  { num: "50K+", label: "Happy Customers" },
  { num: "12", label: "Branches in Pakistan" },
  { num: "4.9★", label: "Average Rating" },
  { num: "20 min", label: "Avg Delivery Time" },
];

const team = [
  { name: "Bilal Ahmed", role: "Founder & CEO", emoji: "👨‍🍳" },
  { name: "Ayesha Khan", role: "Head of Kitchen", emoji: "👩‍🍳" },
  { name: "Hassan Ali", role: "Operations Lead", emoji: "🏃‍♂️" },
  { name: "Sana Malik", role: "Brand Director", emoji: "🎨" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutTeam} alt="Turbo Bites team" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        </div>
        <div className="container relative py-20 md:py-28">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">Our Story</span>
          <h1 className="font-display text-5xl md:text-7xl max-w-2xl leading-none">From a tiny garage to your favorite bite.</h1>
          <p className="mt-4 text-lg text-background/80 max-w-xl">
            Started in 2019 by two friends with a fryer and a dream. Today, Turbo Bites serves over 50,000 hungry humans across Pakistan.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-bold uppercase text-sm">Our Mission</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Make great fast food accessible to everyone.</h2>
            <p className="text-muted-foreground mt-4">
              We believe nobody should have to choose between fast and fresh. Our kitchens are built for speed without ever cutting corners on quality. Whether it's a midnight craving or a family Sunday feast, we've got you.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-muted/40 rounded-2xl p-4">
                  <div className="font-display text-3xl text-primary">{s.num}</div>
                  <div className="text-xs text-muted-foreground font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <img src={aboutTeam} alt="Our team" className="rounded-3xl shadow-elevated w-full" loading="lazy" />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-2xl p-4 shadow-flame">
              <Award className="h-6 w-6 mb-1" />
              <div className="font-display text-2xl">#1 Burger</div>
              <div className="text-xs font-bold">Lahore Food Awards 2024</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl md:text-6xl">What We Stand For</h2>
            <p className="text-muted-foreground mt-2">Four values, zero compromises.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-3xl p-6 shadow-card border border-border/40"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <Users className="h-8 w-8 mx-auto text-primary mb-2" />
            <h2 className="font-display text-5xl md:text-6xl">The Crew</h2>
            <p className="text-muted-foreground mt-2">The humans flipping the patties.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="aspect-square rounded-3xl bg-flame flex items-center justify-center text-7xl shadow-card">
                  {t.emoji}
                </div>
                <div className="font-display text-2xl mt-3">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
