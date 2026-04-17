import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard, ShoppingBag, UtensilsCrossed, Tag, Users, Settings,
  TrendingUp, DollarSign, Package, Clock, Search, Bell, Menu as MenuIcon,
  ArrowUpRight, ArrowDownRight, MoreVertical, Flame, Eye, Edit, Trash2, Plus
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

const STATS = [
  { label: "Today's Revenue", value: "Rs. 184,500", change: "+12.5%", trend: "up", icon: DollarSign, color: "primary" },
  { label: "Orders Today", value: "247", change: "+8.2%", trend: "up", icon: ShoppingBag, color: "secondary" },
  { label: "Avg Order Value", value: "Rs. 747", change: "-3.1%", trend: "down", icon: TrendingUp, color: "primary" },
  { label: "Active Now", value: "18", change: "+5", trend: "up", icon: Clock, color: "secondary" },
];

const ORDERS = [
  { id: "#TB-4291", customer: "Ahmed Raza", items: 3, total: 1850, status: "Preparing", time: "2 min ago", phone: "0311-1234567" },
  { id: "#TB-4290", customer: "Fatima Khan", items: 5, total: 3290, status: "Out for delivery", time: "8 min ago", phone: "0322-9876543" },
  { id: "#TB-4289", customer: "Ali Hassan", items: 2, total: 1190, status: "Delivered", time: "15 min ago", phone: "0301-5556677" },
  { id: "#TB-4288", customer: "Zainab Malik", items: 4, total: 2450, status: "Preparing", time: "18 min ago", phone: "0345-7778899" },
  { id: "#TB-4287", customer: "Usman Tariq", items: 1, total: 850, status: "Delivered", time: "22 min ago", phone: "0312-3334455" },
  { id: "#TB-4286", customer: "Hira Sheikh", items: 6, total: 4490, status: "Cancelled", time: "30 min ago", phone: "0333-1112223" },
];

const TOP_ITEMS = [
  { name: "Classic Smash Burger", sold: 89, revenue: 75650 },
  { name: "Pepperoni Storm", sold: 64, revenue: 108160 },
  { name: "Crispy Bucket (8pc)", sold: 52, revenue: 75400 },
  { name: "Loaded Fries", sold: 78, revenue: 53820 },
  { name: "Triple Choco Shake", sold: 41, revenue: 20090 },
];

const statusColor = (s: string) =>
  s === "Delivered" ? "bg-secondary/30 text-secondary-foreground"
  : s === "Out for delivery" ? "bg-primary/15 text-primary"
  : s === "Preparing" ? "bg-secondary text-secondary-foreground"
  : "bg-destructive/15 text-destructive";

export default function Admin() {
  const [tab, setTab] = useState("dashboard");
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:sticky top-0 left-0 z-30 h-screen w-64 bg-foreground text-background transition-transform",
        sidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 border-b border-background/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-flame">
              <Flame className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display text-xl">TURBO<span className="text-secondary">BITES</span></div>
              <div className="text-[10px] uppercase opacity-60 tracking-wider">Admin Panel</div>
            </div>
          </Link>
        </div>
        <nav className="p-3 space-y-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => { setTab(item.id); setSidebar(false); }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors",
                tab === item.id ? "bg-primary text-primary-foreground" : "text-background/70 hover:bg-background/10"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-background/10">
          <div className="bg-background/10 rounded-2xl p-4">
            <div className="text-xs opacity-70">Demo Mode</div>
            <div className="text-sm font-bold mt-1">All data is mocked for preview</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-20 bg-background border-b border-border h-16 flex items-center px-4 md:px-8 gap-4">
          <button onClick={() => setSidebar(!sidebar)} className="lg:hidden h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
            <MenuIcon className="h-5 w-5" />
          </button>
          <div className="flex-1 max-w-md hidden md:flex items-center gap-2 bg-muted rounded-full px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search orders, items, customers..." className="bg-transparent outline-none text-sm flex-1" />
          </div>
          <div className="flex-1 md:hidden" />
          <button className="relative h-9 w-9 rounded-full bg-muted flex items-center justify-center">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-flame flex items-center justify-center text-primary-foreground font-bold text-sm">A</div>
            <div className="hidden md:block">
              <div className="text-sm font-bold leading-tight">Admin</div>
              <div className="text-xs text-muted-foreground">Demo</div>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8">
          {tab === "dashboard" && <Dashboard />}
          {tab === "orders" && <Orders />}
          {tab === "menu" && <MenuTab />}
          {tab === "categories" && <CategoriesTab />}
          {tab === "customers" && <CustomersTab />}
          {tab === "settings" && <SettingsTab />}
        </main>
      </div>

      {sidebar && <div onClick={() => setSidebar(false)} className="fixed inset-0 bg-foreground/50 z-20 lg:hidden" />}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-4xl">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Welcome back, here's what's cooking today.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl p-5 shadow-card border border-border/40"
          >
            <div className="flex items-start justify-between">
              <div className={cn(
                "h-10 w-10 rounded-xl flex items-center justify-center",
                s.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/15 text-secondary-foreground"
              )}>
                <s.icon className="h-5 w-5" />
              </div>
              <span className={cn(
                "text-xs font-bold flex items-center gap-0.5",
                s.trend === "up" ? "text-green-600" : "text-red-600"
              )}>
                {s.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {s.change}
              </span>
            </div>
            <div className="font-display text-2xl md:text-3xl mt-3">{s.value}</div>
            <div className="text-xs text-muted-foreground font-semibold">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
        {/* Recent orders */}
        <div className="bg-card rounded-2xl p-5 md:p-6 shadow-card border border-border/40">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl">Recent Orders</h2>
            <button className="text-xs font-bold text-primary">View all →</button>
          </div>
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground text-xs uppercase">
                  <th className="px-2 py-2">Order</th>
                  <th className="px-2 py-2">Customer</th>
                  <th className="px-2 py-2">Total</th>
                  <th className="px-2 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {ORDERS.slice(0, 5).map((o) => (
                  <tr key={o.id} className="border-t border-border">
                    <td className="px-2 py-3 font-mono text-xs font-bold">{o.id}</td>
                    <td className="px-2 py-3 font-semibold">{o.customer}</td>
                    <td className="px-2 py-3 font-bold text-primary">{formatPKR(o.total)}</td>
                    <td className="px-2 py-3">
                      <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full", statusColor(o.status))}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top items */}
        <div className="bg-card rounded-2xl p-5 md:p-6 shadow-card border border-border/40">
          <h2 className="font-display text-2xl mb-4">Top Sellers</h2>
          <div className="space-y-3">
            {TOP_ITEMS.map((item, i) => (
              <div key={item.name} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-flame text-primary-foreground font-display flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.sold} sold</div>
                </div>
                <div className="font-bold text-primary text-sm">{formatPKR(item.revenue)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-display text-4xl">Orders</h1>
          <p className="text-muted-foreground text-sm">Manage incoming orders in real-time.</p>
        </div>
        <div className="flex gap-2">
          {["All", "Preparing", "Out for delivery", "Delivered", "Cancelled"].map((s) => (
            <button key={s} className="text-xs font-bold px-3 py-2 rounded-full bg-card border border-border hover:bg-muted">
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-2xl shadow-card border border-border/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left text-muted-foreground text-xs uppercase">
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Items</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {ORDERS.map((o) => (
                <tr key={o.id} className="border-t border-border hover:bg-muted/30">
                  <td className="px-4 py-3 font-mono text-xs font-bold">{o.id}</td>
                  <td className="px-4 py-3 font-semibold">{o.customer}</td>
                  <td className="px-4 py-3 text-muted-foreground">{o.phone}</td>
                  <td className="px-4 py-3">{o.items}</td>
                  <td className="px-4 py-3 font-bold text-primary">{formatPKR(o.total)}</td>
                  <td className="px-4 py-3">
                    <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full", statusColor(o.status))}>
                      {o.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{o.time}</td>
                  <td className="px-4 py-3">
                    <button className="h-8 w-8 rounded-full hover:bg-muted flex items-center justify-center">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
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
          <h1 className="font-display text-4xl">Menu Items</h1>
          <p className="text-muted-foreground text-sm">{menuItems.length} items across {categories.length} categories.</p>
        </div>
        <button className="bg-flame text-primary-foreground font-bold rounded-full px-5 py-2.5 text-sm shadow-flame inline-flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Item
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-card rounded-2xl shadow-card border border-border/40 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
              {item.badge && (
                <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-full bg-primary text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="p-3">
              <div className="text-xs text-muted-foreground">{item.category}</div>
              <div className="font-bold text-sm leading-tight truncate">{item.name}</div>
              <div className="flex items-center justify-between mt-2">
                <div className="font-display text-lg text-primary">{formatPKR(item.price)}</div>
                <div className="flex gap-1">
                  <button className="h-7 w-7 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center">
                    <Edit className="h-3 w-3" />
                  </button>
                  <button className="h-7 w-7 rounded-lg bg-muted hover:bg-destructive hover:text-destructive-foreground flex items-center justify-center">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
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
          <h1 className="font-display text-4xl">Categories</h1>
          <p className="text-muted-foreground text-sm">Manage menu categories.</p>
        </div>
        <button className="bg-flame text-primary-foreground font-bold rounded-full px-5 py-2.5 text-sm shadow-flame inline-flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Category
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((c) => {
          const count = menuItems.filter((i) => i.category === c.name).length;
          return (
            <div key={c.name} className="bg-card rounded-2xl shadow-card border border-border/40 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-3 left-4 text-background">
                  <div className="text-3xl">{c.emoji}</div>
                  <div className="font-display text-2xl">{c.name}</div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-bold">{count} items</div>
                  <div className="text-xs text-muted-foreground">{c.tagline}</div>
                </div>
                <div className="flex gap-1">
                  <button className="h-8 w-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="h-8 w-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
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
    { name: "Zainab Malik", email: "zainab@example.com", orders: 67, spent: 52800, joined: "Nov 2022" },
    { name: "Usman Tariq", email: "usman@example.com", orders: 15, spent: 11750, joined: "Jul 2024" },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-4xl">Customers</h1>
        <p className="text-muted-foreground text-sm">{customers.length} loyal customers and counting.</p>
      </div>
      <div className="bg-card rounded-2xl shadow-card border border-border/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left text-muted-foreground text-xs uppercase">
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Orders</th>
                <th className="px-4 py-3">Total Spent</th>
                <th className="px-4 py-3">Joined</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.email} className="border-t border-border hover:bg-muted/30">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-flame text-primary-foreground font-bold flex items-center justify-center text-xs">
                      {c.name[0]}
                    </div>
                    <span className="font-semibold">{c.name}</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{c.email}</td>
                  <td className="px-4 py-3 font-bold">{c.orders}</td>
                  <td className="px-4 py-3 font-bold text-primary">{formatPKR(c.spent)}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{c.joined}</td>
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
        <h1 className="font-display text-4xl">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your store configuration.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border/40">
          <h2 className="font-display text-2xl mb-4">Store Info</h2>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase">Store Name</label>
              <input defaultValue="Turbo Bites Pakistan" className="w-full rounded-xl border-2 border-border px-4 py-2.5 mt-1 bg-background outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase">Contact Phone</label>
              <input defaultValue="0311-TURBO-00" className="w-full rounded-xl border-2 border-border px-4 py-2.5 mt-1 bg-background outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase">Free Delivery Above</label>
              <input defaultValue="2500" className="w-full rounded-xl border-2 border-border px-4 py-2.5 mt-1 bg-background outline-none focus:border-primary" />
            </div>
          </div>
        </div>
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border/40">
          <h2 className="font-display text-2xl mb-4">Operating Hours</h2>
          <div className="space-y-2">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
              <div key={d} className="flex items-center justify-between">
                <span className="text-sm font-semibold">{d}</span>
                <span className="text-sm text-muted-foreground">11:00 AM – 2:00 AM</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
