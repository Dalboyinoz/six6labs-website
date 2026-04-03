import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const queryClient = new QueryClient();

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference" data-testid="navbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-display font-bold tracking-tight uppercase text-white" data-testid="logo">
            Six6<span className="text-accent">Labs</span>
          </div>
          <a 
            href="mailto:hello@six6labs.com" 
            className="text-sm font-medium tracking-wide text-white hover:text-accent transition-colors flex items-center gap-2 group"
            data-testid="nav-contact"
          >
            Contact
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 bg-zinc-950" 
        data-testid="hero-section"
      >
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] mix-blend-screen translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-sm font-mono text-accent tracking-widest uppercase">Product Studio</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tighter text-white mb-8"
              data-testid="hero-headline"
            >
              Building practical digital products for real-world businesses.
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed"
              data-testid="hero-subheadline"
            >
              Six6 Labs develops tools and platforms across transport, trades, and local services. We build what works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 px-6 bg-zinc-900 relative" data-testid="products-section">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">In Development</h2>
              <p className="text-zinc-400 max-w-xl text-lg">Targeted solutions designed from the ground up to solve specific operational friction points.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="group relative bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden flex flex-col h-full"
              data-testid="product-card-redlands"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900 relative">
                <img 
                  src="/images/redlands.png" 
                  alt="Redlands Rides conceptual visualization" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 text-xs font-mono text-zinc-300 border border-zinc-800">
                  TRANSPORT
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-white mb-3">Redlands Rides</h3>
                <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                  Local transport platform focused on reliability and service. Connecting communities with precision.
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-accent mt-auto group-hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  BETA
                </div>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="group relative bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden flex flex-col h-full"
              data-testid="product-card-scopo"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900 relative">
                <img 
                  src="/images/scopo.png" 
                  alt="ScopO CRM visualization" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 text-xs font-mono text-zinc-300 border border-zinc-800">
                  TRADES
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-white mb-3">ScopO</h3>
                <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                  CRM and workflow tools built specifically for trade businesses to streamline operations and quoting.
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-accent mt-auto group-hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  IN DEVELOPMENT
                </div>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="group relative bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden flex flex-col h-full"
              data-testid="product-card-appro"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900 relative">
                <img 
                  src="/images/appro.png" 
                  alt="ApprO real estate tools visualization" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 text-xs font-mono text-zinc-300 border border-zinc-800">
                  REAL ESTATE
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-white mb-3">ApprO</h3>
                <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                  Smart tools for real estate agents delivering actionable open home insights and lead management.
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-accent mt-auto group-hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  IN DEVELOPMENT
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-zinc-950 border-t border-zinc-900" data-testid="about-section">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              We build tools that <br/><span className="text-zinc-500">solve real problems.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl" data-testid="about-text">
              Six6 Labs is the product arm of Six6 Media, focused on building scalable digital tools that solve real operational problems. We don't chase trends. We engineer practical platforms for industries that keep the world moving.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-8 border border-zinc-800 aspect-square flex flex-col justify-end">
                <div className="text-4xl font-display font-bold text-white mb-2">03</div>
                <div className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Core Platforms</div>
              </div>
              <div className="bg-accent/10 p-8 border border-accent/20 aspect-square flex flex-col justify-end translate-y-8">
                <div className="text-4xl font-display font-bold text-accent mb-2">100%</div>
                <div className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Utility Focus</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-zinc-900" data-testid="footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold tracking-tight text-zinc-500">
            Six6<span className="text-zinc-700">Labs</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm text-zinc-500 font-mono">
            <a 
              href="mailto:hello@six6labs.com" 
              className="hover:text-accent transition-colors flex items-center gap-2"
              data-testid="footer-email"
            >
              <Mail className="w-4 h-4" />
              hello@six6labs.com
            </a>
            <div className="flex items-center gap-2" data-testid="footer-location">
              <MapPin className="w-4 h-4" />
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
      <Route path="/" component={Home} />
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
