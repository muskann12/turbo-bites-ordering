import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const branches = [
  { city: "Lahore", address: "Plot 12, Main Boulevard, Gulberg III", phone: "0311-TURBO-01", hours: "11am – 2am" },
  { city: "Karachi", address: "Shop 4, Zamzama Boulevard, DHA", phone: "0311-TURBO-02", hours: "11am – 2am" },
  { city: "Islamabad", address: "F-7 Markaz, near Centaurus", phone: "0311-TURBO-03", hours: "11am – 12am" },
  { city: "Faisalabad", address: "D-Ground, People's Colony", phone: "0311-TURBO-04", hours: "11am – 12am" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message sent! We'll reply within 2 hours. 🔥");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-foreground text-background py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-5xl md:text-7xl">Talk to us.</h1>
          <p className="mt-2 opacity-80 max-w-md">Got a question, complaint, or just want to say the burger was 🔥? We're listening.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon: Phone, title: "Call us", value: "0311-TURBO-00", sub: "Daily 10am – 2am" },
              { icon: Mail, title: "Email", value: "hello@turbobites.pk", sub: "We reply in 2 hours" },
              { icon: MessageCircle, title: "WhatsApp", value: "0311-1234567", sub: "Order or chat 24/7" },
              { icon: Clock, title: "Delivery hours", value: "11am – 2am Daily", sub: "Including holidays" },
            ].map((c) => (
              <div key={c.title} className="bg-card rounded-2xl p-5 shadow-card border border-border/40 flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase">{c.title}</div>
                  <div className="font-display text-2xl">{c.value}</div>
                  <div className="text-sm text-muted-foreground">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-6 md:p-8 shadow-elevated border border-border/40"
          >
            <h2 className="font-display text-3xl md:text-4xl">Send a message</h2>
            <p className="text-muted-foreground text-sm mt-1">Fill the form and we'll get back to you within 2 hours.</p>
            <div className="space-y-4 mt-6">
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-2xl border-2 border-border px-4 py-3 outline-none focus:border-primary bg-background"
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-2xl border-2 border-border px-4 py-3 outline-none focus:border-primary bg-background"
              />
              <textarea
                placeholder="What's on your mind?"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-2xl border-2 border-border px-4 py-3 outline-none focus:border-primary resize-none bg-background"
              />
              <button
                type="submit"
                className="w-full bg-flame text-primary-foreground font-bold rounded-full py-4 shadow-flame hover:opacity-90 inline-flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Branches */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
            <h2 className="font-display text-5xl md:text-6xl">Find us nearby</h2>
            <p className="text-muted-foreground">12 branches across Pakistan and counting.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {branches.map((b, i) => (
              <motion.div
                key={b.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card rounded-3xl p-5 shadow-card border border-border/40"
              >
                <div className="font-display text-3xl text-primary">{b.city}</div>
                <div className="text-sm text-muted-foreground mt-2 flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /> {b.address}
                </div>
                <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" /> {b.phone}
                </div>
                <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                  <Clock className="h-4 w-4 flex-shrink-0" /> {b.hours}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
