import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemCard from "@/components/MenuItemCard";
import ItemCustomizeDialog from "@/components/ItemCustomizeDialog";
import { categories, menuItems, MenuItem } from "@/lib/menuData";
import { ArrowLeft } from "lucide-react";

export default function Category() {
  const { name } = useParams<{ name: string }>();
  const decoded = decodeURIComponent(name || "");
  const cat = categories.find((c) => c.name === decoded);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [open, setOpen] = useState(false);

  if (!cat) return <Navigate to="/menu" replace />;

  const items = menuItems.filter((i) => i.category === cat.name);
  const others = categories.filter((c) => c.name !== cat.name);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative bg-foreground text-background overflow-hidden">
        <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-transparent" />
        <div className="container relative py-16 md:py-24">
          <Link to="/menu" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to menu
          </Link>
          <div className="text-6xl mb-2">{cat.emoji}</div>
          <h1 className="font-display text-6xl md:text-8xl">{cat.name}</h1>
          <p className="text-lg opacity-90 mt-2 max-w-md">{cat.tagline}</p>
          <div className="mt-4 inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
            {items.length} items
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {items.map((item) => (
              <MenuItemCard key={item.id} item={item} onSelect={(i) => { setSelected(i); setOpen(true); }} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl mb-6">Explore other categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {others.map((c) => (
              <Link
                key={c.name}
                to={`/category/${encodeURIComponent(c.name)}`}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-card"
              >
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent" />
                <div className="absolute bottom-3 left-3 text-background">
                  <div className="text-2xl">{c.emoji}</div>
                  <div className="font-display text-lg">{c.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ItemCustomizeDialog item={selected} open={open} onOpenChange={setOpen} />
      <Footer />
    </div>
  );
}
