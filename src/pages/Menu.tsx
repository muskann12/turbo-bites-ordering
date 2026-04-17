import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItemCard from "@/components/MenuItemCard";
import ItemCustomizeDialog from "@/components/ItemCustomizeDialog";
import { categories, menuItems, MenuItem } from "@/lib/menuData";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const [params] = useSearchParams();
  const initialCat = params.get("cat") || categories[0].name;
  const [active, setActive] = useState<string>(initialCat);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [open, setOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const target = sectionRefs.current[initialCat];
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [initialCat]);

  const grouped = useMemo(() => {
    return categories.map((c) => ({
      ...c,
      items: menuItems.filter((i) => i.category === c.name),
    }));
  }, []);

  const handleSelect = (item: MenuItem) => {
    setSelected(item);
    setOpen(true);
  };

  const goTo = (name: string) => {
    setActive(name);
    sectionRefs.current[name]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-flame py-10 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl md:text-6xl">Full Menu</h1>
          <p className="opacity-90 mt-1">25+ ways to ruin your diet. We're not sorry.</p>
        </div>
      </div>

      <div className="container py-8 grid lg:grid-cols-[220px_1fr] gap-8">
        <aside className="lg:sticky lg:top-20 self-start">
          <div className="lg:block flex gap-2 overflow-x-auto pb-2 lg:pb-0 lg:space-y-1">
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => goTo(c.name)}
                className={cn(
                  "lg:w-full whitespace-nowrap text-left px-4 py-3 rounded-2xl font-bold text-sm transition-colors flex items-center gap-2",
                  active === c.name
                    ? "bg-primary text-primary-foreground shadow-flame"
                    : "bg-muted hover:bg-muted/70"
                )}
              >
                <span className="text-lg">{c.emoji}</span> {c.name}
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-12">
          {grouped.map((g) => (
            <section
              key={g.name}
              ref={(el) => (sectionRefs.current[g.name] = el)}
              id={g.name}
              className="scroll-mt-24"
            >
              <h2 className="font-display text-4xl mb-4 flex items-center gap-2">
                <span>{g.emoji}</span> {g.name}
              </h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {g.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} onSelect={handleSelect} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <ItemCustomizeDialog item={selected} open={open} onOpenChange={setOpen} />
      <Footer />
    </div>
  );
}
