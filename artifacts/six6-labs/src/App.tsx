import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Truck, Wrench, Home, Mail, MapPin, ArrowRight } from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const products = [
  {
    id: "redlands",
    name: "Redlands Rides",
    tag: "Transport",
    description: "Local transport platform focused on reliability and service. Built for the communities that need it most.",
    status: "Beta",
    Icon: Truck,
  },
  {
    id: "scopo",
    name: "ScopO",
    tag: "Trades",
    description: "CRM and workflow tools built specifically for trade businesses — quoting, scheduling, and client management in one place.",
    status: "In Development",
    Icon: Wrench,
  },
  {
    id: "appro",
    name: "ApprO",
    tag: "Real Estate",
    description: "Smart tools for real estate agents delivering actionable open home insights and lead management.",
    status: "In Development",
    Icon: Home,
  },
];

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border" data-testid="navbar">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="text-base font-semibold tracking-tight text-foreground font-display" data-testid="logo">
            Six6<span className="text-accent">Labs</span>
          </div>
          <a
            href="mailto:hello@six6labs.com"
            className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5 group"
            data-testid="nav-contact"
          >
            Contact
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6" data-testid="hero-section">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Product Studio</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight text-foreground mb-6 max-w-3xl"
              data-testid="hero-headline"
            >
              Building practical digital products for real-world businesses.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              data-testid="hero-subheadline"
            >
              Six6 Labs develops tools and platforms across transport, trades, and local services. We focus on what actually works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border"></div>
      </div>

      {/* Products */}
      <section className="py-24 px-6" data-testid="products-section">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">In Development</h2>
              <p className="text-muted-foreground">Tools built to solve real operational problems.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  className="bg-card rounded-lg p-7 shadow-sm border border-border/60 flex flex-col gap-5 hover:shadow-md transition-shadow duration-200"
                  data-testid={`product-card-${product.id}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center">
                      <product.Icon className="w-4.5 h-4.5 text-accent" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {product.tag}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span className="text-xs font-mono text-muted-foreground">{product.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border"></div>
      </div>

      {/* About */}
      <section className="py-24 px-6" data-testid="about-section">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">About Six6 Labs</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="about-text">
                Six6 Labs is the product arm of Six6 Media, focused on building scalable digital tools that solve real operational problems. We engineer practical platforms for industries that keep the world moving.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border/60 rounded-lg p-6">
                <div className="text-3xl font-display font-bold text-foreground mb-1">03</div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Core Platforms</div>
              </div>
              <div className="bg-card border border-border/60 rounded-lg p-6">
                <div className="text-3xl font-display font-bold text-accent mb-1">100%</div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Utility Focus</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6" data-testid="footer">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-display font-semibold text-muted-foreground">
            Six6<span className="text-foreground">Labs</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs font-mono text-muted-foreground">
            <a
              href="mailto:hello@six6labs.com"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
              data-testid="footer-email"
            >
              <Mail className="w-3.5 h-3.5" />
              hello@six6labs.com
            </a>
            <div className="flex items-center gap-1.5" data-testid="footer-location">
              <MapPin className="w-3.5 h-3.5" />
              Redlands Coast, QLD
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
