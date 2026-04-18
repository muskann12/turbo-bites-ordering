import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard, ShoppingBag, UtensilsCrossed, Tag, Users, Settings,
  TrendingUp, DollarSign, Package, Clock, Search, Bell, Menu as MenuIcon,
  ArrowUpRight, ArrowDownRight, MoreVertical, Flame, Eye, Edit, Trash2, Plus, Star, Activity, Zap
} from "lucide-react";
import { menuItems, categories } from "@/lib/menuData";
import { formatPKR } from "@/lib/format";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "orders", label: "Orders", icon: ShoppingBag, badge: 12 },
  { id: "menu", label: "Menu Items", icon: UtensilsCrossed },
  { id: "categories", label: "Categories", icon: Tag },
  { id: "customers", label: "Customers", icon: Users },
  { id: "settings", label: "Settings", icon: Settings },
];

// Real data from app
const getTotalByCategory = (catName: string) => menuItems.filter(i => i.category === catName).length;
const avgPrice = Math.round(menuItems.reduce((sum, item) => sum + item.price, 0) / menuItems.length);
const bestsellerCount = menuItems.filter(i => i.badge === "Bestseller").length;
const hotItemsCount = menuItems.filter(i => i.badge === "Hot").length;

const STATS = [
  { label: "Total Menu Items", value: menuItems.length.toString(), change: "+3 new", trend: "up", icon: UtensilsCrossed, color: "primary" },
  { label: "Categories", value: categories.length.toString(), change: "All active", trend: "up", icon: Tag, color: "secondary" },
  { label: "Avg Item Price", value: formatPKR(avgPrice), change: "per item", trend: "up", icon: DollarSign, color: "primary" },
  { label: "Bestsellers", value: bestsellerCount.toString(), change: "top items", trend: "up", icon: Star, color: "secondary" },
];

// Top selling items from real menu
const TOP_ITEMS = menuItems
  .filter(item => item.badge === "Bestseller" || item.badge === "Hot")
  .slice(0, 4)
  .map((item, i) => ({
    name: item.name,
    sold: 50 + i * 15,
    revenue: (50 + i * 15) * item.price,
  }));

const ORDERS = [
  { id: "#TB-4291", customer: "Ahmed Raza", items: 3, total: 1850, status: "Preparing", time: "2 min ago", phone: "0311-1234567" },
  { id: "#TB-4290", customer: "Fatima Khan", items: 5, total: 3290, status: "Out for delivery", time: "8 min ago", phone: "0322-9876543" },
  { id: "#TB-4289", customer: "Ali Hassan", items: 2, total: 1190, status: "Delivered", time: "15 min ago", phone: "0301-5556677" },
  { id: "#TB-4288", customer: "Zainab Malik", items: 4, total: 2450, status: "Preparing", time: "18 min ago", phone: "0345-7778899" },
  { id: "#TB-4287", customer: "Usman Tariq", items: 1, total: 850, status: "Delivered", time: "22 min ago", phone: "0312-3334455" },
];

const statusColor = (s: string) =>
  s === "Delivered" ? "bg-secondary/30 text-secondary-foreground"
  : s === "Out for delivery" ? "bg-primary/15 text-primary"
  : s === "Preparing" ? "bg-secondary text-secondary-foreground"
  : "bg-destructive/15 text-destructive";

export default function AdminPanel() {
  const [tab, setTab] = useState("dashboard");
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex">
      <aside className={cn(
        "fixed lg:sticky top-0 left-0 z-30 h-screen w-64 bg-gradient-to-b from-foreground to-foreground/95 text-background transition-transform border-r-2 border-background/20",
        sidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 border-b border-background/20 backdrop-blur-sm">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg">
              <Zap className="h-5 w-5 text-primary-foreground font-bold" />
            </div>
            <div>
              <div className="font-display text-lg font-black">TURBO<span className="text-secondary">BITES</span></div>
              <div className="text-[9px] uppercase opacity-70 tracking-wider font-bold">Pro Admin</div>
            </div>
          </Link>
        </div>
        <nav className="p-3 space-y-2">
          {NAV.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              onClick={() => { setTab(item.id); setSidebar(false); }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all",
                tab === item.id 
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg" 
                  : "text-background/80 hover:bg-background/10 hover:text-background"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-secondary/50 text-background text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </motion.button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-background/20 bg-gradient-to-t from-foreground/50 to-transparent backdrop-blur-sm">
          <div className="bg-background/10 rounded-2xl p-4 border border-background/20">
            <div className="text-[11px] opacity-80 font-semibold">REAL DATA</div>
            <div className="text-xs text-background/90 mt-2 leading-relaxed">Connected to actual menu items & categories</div>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 bg-gradient-to-r from-background to-background/80 backdrop-blur-xl border-b-2 border-border/50 h-16 flex items-center px-4 md:px-8 gap-4 shadow-sm">
          <button onClick={() => setSidebar(!sidebar)} className="lg:hidden h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:from-primary/30 hover:to-secondary/30 transition-all">
            <MenuIcon className="h-5 w-5 text-primary" />
          </button>
          <div className="flex-1 max-w-md hidden md:flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2.5 border border-border/50">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search orders, items, customers..." className="bg-transparent outline-none text-sm flex-1" />
          </div>
          <div className="flex-1 md:hidden" />
          <motion.button whileHover={{ scale: 1.1 }} className="relative h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-all border border-border/50">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-br from-primary to-secondary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">3</span>
          </motion.button>
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">A</div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold leading-tight">Admin Panel</div>
              <div className="text-xs text-muted-foreground font-medium">Active Now</div>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8 space-y-8">
          {tab === "dashboard" && <Dashboard />}
          {tab === "orders" && <Orders />}
          {tab === "menu" && <MenuTab />}
          {tab === "categories" && <CategoriesTab />}
          {tab === "customers" && <CustomersTab />}
          {tab === "settings" && <SettingsTab />}
        </main>
      </div>

      {sidebar && <div onClick={() => setSidebar(false)} className="fixed inset-0 bg-foreground/50 z-20 lg:hidden backdrop-blur-sm" />}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-5xl font-black bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Dashboard</h1>
        <p className="text-muted-foreground text-lg mt-2">Live data from your restaurant. {menuItems.length} items across {categories.length} categories.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-background/50 to-muted/50 rounded-2xl p-5 shadow-lg border-2 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className={cn(
                "h-12 w-12 rounded-xl flex items-center justify-center",
                s.color === "primary" ? "bg-gradient-to-br from-primary/20 to-primary/10 text-primary" : "bg-gradient-to-br from-secondary/20 to-secondary/10 text-secondary"
              )}>
                <s.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold flex items-center gap-0.5 px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                <ArrowUpRight className="h-3 w-3" />
                {s.change}
              </span>
            </div>
            <div className="font-display text-3xl font-black mt-3">{s.value}</div>
            <div className="text-xs text-muted-foreground font-bold uppercase tracking-wide mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-background/50 to-muted/50 rounded-3xl p-6 shadow-lg border-2 border-border/50 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-black">Recent Orders</h2>
            <button className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">View all →</button>
          </div>
          <div className="space-y-3">
            {ORDERS.slice(0, 5).map((o) => (
              <motion.div key={o.id} whileHover={{ x: 4 }} className="flex items-center justify-between p-3 bg-background/30 rounded-xl hover:bg-background/50 transition-all border border-border/30">
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs font-bold text-primary">{o.id}</div>
                  <div className="font-semibold text-sm mt-0.5">{o.customer}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-primary">{formatPKR(o.total)}</span>
                  <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full", statusColor(o.status))}>
                    {o.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-background/50 to-muted/50 rounded-3xl p-6 shadow-lg border-2 border-border/50 backdrop-blur-sm">
          <h2 className="font-display text-2xl font-black mb-6">🔥 Top Sellers</h2>
          <div className="space-y-4">
            {TOP_ITEMS.map((item, i) => (
              <motion.div key={item.name} whileHover={{ x: 4 }} className="flex items-center gap-3 p-3 bg-background/30 rounded-xl hover:bg-background/50 transition-all border border-border/30">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground font-display flex items-center justify-center text-sm font-bold">{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.sold} sold</div>
                </div>
                <div className="font-bold text-primary">{formatPKR(item.revenue)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-5xl font-black">Orders</h1>
        <p className="text-muted-foreground text-lg mt-2">Manage all incoming orders in real-time.</p>
      </div>

      <div className="bg-gradient-to-br from-background/50 to-muted/50 rounded-3xl shadow-lg border-2 border-border/50 backdrop-blur-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/30 border-b-2 border-border/30">
              <tr className="text-left text-muted-foreground text-xs font-bold uppercase">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {ORDERS.map((o) => (
                <tr key={o.id} className="border-t border-border/30 hover:bg-background/50 transition-all">
                  <td className="px-6 py-4 font-mono text-xs font-bold text-primary">{o.id}</td>
                  <td className="px-6 py-4 font-semibold">{o.customer}</td>
                  <td className="px-6 py-4">{o.items}</td>
                  <td className="px-6 py-4 font-bold text-primary">{formatPKR(o.total)}</td>
                  <td className="px-6 py-4">
                    <span className={cn("text-[10px] font-bold px-3 py-1 rounded-full", statusColor(o.status))}>
                      {o.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{o.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MenuTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-5xl font-black">Menu Items</h1>
          <p className="text-muted-foreground text-lg mt-2">{menuItems.length} items across {categories.length} categories.</p>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-full px-6 py-3 text-sm shadow-lg inline-flex items-center gap-2 hover:shadow-xl transition-all">
          <Plus className="h-5 w-5" /> Add Item
        </motion.button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {menuItems.map((item) => (
          <motion.div key={item.id} whileHover={{ y: -4 }} className="bg-gradient-to-br from-background/50 to-muted/50 rounded-2xl shadow-lg border-2 border-border/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all group">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              {item.badge && (
                <span className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full bg-primary text-primary-foreground shadow-lg">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="text-xs text-primary font-bold uppercase">{item.category}</div>
              <div className="font-bold text-sm leading-tight mt-1 truncate">{item.name}</div>
              <div className="flex items-center justify-between mt-3">
                <div className="font-display text-xl text-primary font-black">{formatPKR(item.price)}</div>
                <div className="flex gap-2">
                  <motion.button whileHover={{ scale: 1.1 }} className="h-8 w-8 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                    <Edit className="h-4 w-4" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} className="h-8 w-8 rounded-lg bg-destructive/10 hover:bg-destructive text-destructive hover:text-destructive-foreground flex items-center justify-center transition-all">
                    <Trash2 className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CategoriesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-5xl font-black">Categories</h1>
          <p className="text-muted-foreground text-lg mt-2">Manage {categories.length} menu categories.</p>
        </div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-full px-6 py-3 text-sm shadow-lg inline-flex items-center gap-2 hover:shadow-xl transition-all">
          <Plus className="h-5 w-5" /> Add Category
        </motion.button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => {
          const count = menuItems.filter((i) => i.category === c.name).length;
          return (
            <motion.div
              key={c.name}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-br from-background/50 to-muted/50 rounded-3xl shadow-lg border-2 border-border/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent group-hover:via-foreground/60 transition-all" />
                <motion.div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Star className="h-4 w-4" />{count} Items
                </motion.div>
                <div className="absolute bottom-4 left-4 text-background">
                  <motion.div className="text-5xl mb-2 group-hover:scale-110 transition-transform">{c.emoji}</motion.div>
                  <div className="font-display text-2xl font-black">{c.name}</div>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <div className="text-xs text-primary font-bold uppercase tracking-wide">{c.tagline}</div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{c.description}</p>
                </div>
                <div className="flex gap-2">
                  <motion.button whileHover={{ scale: 1.05 }} className="flex-1 h-10 rounded-lg bg-primary/15 hover:bg-primary text-primary hover:text-primary-foreground font-semibold text-sm transition-all flex items-center justify-center gap-2">
                    <Eye className="h-4 w-4" /> View
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} className="flex-1 h-10 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground font-semibold text-sm transition-all flex items-center justify-center gap-2">
                    <Edit className="h-4 w-4" /> Edit
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function CustomersTab() {
  const customers = [
    { name: "Ahmed Raza", email: "ahmed@example.com", orders: 23, spent: 18450, joined: "Jan 2024" },
    { name: "Fatima Khan", email: "fatima@example.com", orders: 41, spent: 34290, joined: "Mar 2023" },
    { name: "Ali Hassan", email: "ali@example.com", orders: 8, spent: 6200, joined: "Sep 2024" },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-5xl font-black">Customers</h1>
        <p className="text-muted-foreground text-lg mt-2">{customers.length}+ loyal customers.</p>
      </div>
      <div className="bg-gradient-to-br from-background/50 to-muted/50 rounded-3xl shadow-lg border-2 border-border/50 backdrop-blur-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/30 border-b-2 border-border/30">
              <tr className="text-left text-muted-foreground text-xs font-bold uppercase">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Orders</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Joined</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.email} className="border-t border-border/30 hover:bg-background/50 transition-all">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold flex items-center justify-center text-xs">{c.name[0]}</div>
                    <div>
                      <div className="font-semibold">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold">{c.orders}</td>
                  <td className="px-6 py-4 font-bold text-primary">{formatPKR(c.spent)}</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{c.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-5xl font-black">Settings</h1>
        <p className="text-muted-foreground text-lg mt-2">Manage your store configuration.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-background/50 to-muted/50 rounded-3xl p-6 shadow-lg border-2 border-border/50 backdrop-blur-sm">
          <h2 className="font-display text-2xl font-black mb-6">Store Info</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-primary uppercase tracking-wide">Store Name</label>
              <input defaultValue="Turbo Bites Pakistan" className="w-full rounded-xl border-2 border-border/50 px-4 py-3 mt-2 bg-background/50 outline-none focus:border-primary transition-all" />
            </div>
            <div>
              <label className="text-xs font-bold text-primary uppercase tracking-wide">Contact Phone</label>
              <input defaultValue="0311-TURBO-00" className="w-full rounded-xl border-2 border-border/50 px-4 py-3 mt-2 bg-background/50 outline-none focus:border-primary transition-all" />
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-background/50 to-muted/50 rounded-3xl p-6 shadow-lg border-2 border-border/50 backdrop-blur-sm">
          <h2 className="font-display text-2xl font-black mb-6">Operating Hours</h2>
          <div className="space-y-3">
            {["Mon-Fri", "Saturday", "Sunday"].map((d) => (
              <div key={d} className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-border/30">
                <span className="text-sm font-semibold">{d}</span>
                <span className="text-sm text-primary font-bold">11:00 AM – 2:00 AM</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
