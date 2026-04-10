import { Switch, Route, Router as WouterRouter, useParams, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowLeft, CheckCircle } from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const products = [
  {
    id: "redlands",
    name: "Redlands Rides",
    tag: "Transport",
    description: "Local transport platform focused on reliability and service. Built for reliability where it matters most.",
    extendedDescription: "Redlands Rides is a local transport platform built for the Redlands Coast area. It connects passengers with reliable, professional drivers — focused on consistency and service quality over ride-share volume.",
    status: "Beta",
    iconSrc: "/images/redlands-icon.png",
    iconSize: 66,
    containerSize: 80,
    features: [
      "Simple booking for passengers",
      "Driver-focused workflow — no complicated dashboards",
      "Built for local reliability, not scale",
      "Transparent pricing, no surge model",
    ],
    closingLine: "",
    screenshots: [],
  },
  {
    id: "scopo",
    name: "ScopO",
    tag: "Trades",
    description: "CRM and workflow tools designed for trade businesses — quoting, scheduling, and client management in one place.",
    extendedDescription: "ScopO gives trade businesses the tools to run their operations without the overhead. From quoting to scheduling to following up with clients — it's designed around how tradies actually work, not how software companies think they work.",
    status: "In Development",
    iconSrc: "/images/scopo-icon.png",
    iconSize: 66,
    containerSize: 80,
    features: [
      "Fast quote creation and tracking",
      "Job scheduling with simple calendar view",
      "Client history and communication log",
      "Follow-up reminders that don't get ignored",
    ],
    closingLine: "",
    screenshots: [],
  },
  {
    id: "appro",
    name: "ApprO",
    tag: "Real Estate",
    description: "Smart tools for real estate agents delivering actionable open home insights and lead management.",
    extendedDescription: "ApprO gives real estate agents a smarter way to handle appraisals and open home data.\n\nNo more spreadsheets. No more follow-up guesswork.\nFrom the first appraisal through to open homes, everything is captured, structured, and ready to act on — all in one place.",
    status: "In Development",
    iconSrc: "/images/appro-icon-v4.png",
    iconSize: 76,
    containerSize: 80,
    features: [
      "Capture appraisal details quickly and consistently",
      "Know exactly who came through your open homes",
      "Turn conversations into real follow-up opportunities",
      "Stay on top of every lead without relying on memory",
      "Keep everything in one place",
    ],
    closingLine: "Build a clearer pipeline from appraisal to sale.",
    screenshots: [
      { src: "/images/appro/appro-screen-1.png", caption: "Appraisals dashboard" },
      { src: "/images/appro/appro-screen-2.png", caption: "AI-generated property summary" },
      { src: "/images/appro/appro-screen-3.png", caption: "Open home tracking and insights" },
    ],
  },
];

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="h-px bg-border" />
    </div>
  );
}

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
            className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
            data-testid="nav-email"
          >
            hello@six6labs.com
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6" data-testid="hero-section">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
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
              className="text-lg text-muted-foreground max-w-sm leading-relaxed"
              data-testid="hero-subheadline"
            >
              Six6 Labs develops tools and platforms across transport, trades, and local services. We focus on what actually works.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Divider />

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
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Current Products</h2>
              <p className="text-muted-foreground">Platforms we're actively building and refining.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {products.map((product) => (
                <motion.div key={product.id} variants={fadeUp}>
                  <Link href={`/product/${product.id}`}>
                    <div
                      className="bg-white rounded-lg p-7 shadow-sm border border-border/50 flex flex-col gap-5 hover:shadow-md hover:border-border transition-all duration-200 cursor-pointer h-full"
                      data-testid={`product-card-${product.id}`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className="rounded-xl border border-border/30 bg-white overflow-hidden shrink-0 flex items-center justify-center"
                          style={{ width: product.containerSize, height: product.containerSize }}
                        >
                          <img
                            src={product.iconSrc}
                            alt={`${product.name} icon`}
                            style={{ width: product.iconSize, height: product.iconSize, objectFit: "contain" }}
                          />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          {product.tag}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-display font-semibold text-foreground mb-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-xs font-mono text-muted-foreground">{product.status}</span>
                        </div>
                        <span className="text-xs font-mono text-accent">Learn more →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

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
            {/* Left: About */}
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">About</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-2xl font-display font-bold text-foreground mb-2">
                About Six6 Labs
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm font-mono text-muted-foreground mb-6">
                Built from real-world experience.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col gap-5 text-muted-foreground leading-relaxed" data-testid="about-text">
                <p>I build practical digital products from real-world business experience.</p>
                <p>After years working directly with businesses across hospitality, trades, and local services, I kept seeing the same problems — disconnected systems, inefficient workflows, and tools that didn't reflect how people actually work.</p>
                <p>So I started building solutions.</p>
                <p>Through Six6 Labs, I develop platforms designed around real operations — simple, reliable, and built to solve everyday business problems.</p>
                <p className="text-xs font-mono text-muted-foreground/70">Based in Redlands Coast, QLD.</p>
              </motion.div>
            </div>

            {/* Right: Contact */}
            <motion.div variants={fadeUp} className="md:pt-16">
              <div className="bg-white border border-border/50 rounded-lg p-10 shadow-sm flex flex-col gap-5">
                <h3 className="text-lg font-display font-semibold text-foreground">Let's connect</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you're building something, or just want to talk through an idea — feel free to reach out.
                </p>
                <a
                  href="mailto:hello@six6labs.com"
                  className="text-sm font-mono text-accent hover:underline underline-offset-4 transition-colors"
                  data-testid="contact-email"
                >
                  hello@six6labs.com
                </a>
                <a
                  href="mailto:hello@six6labs.com"
                  className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mt-1"
                  data-testid="contact-cta"
                >
                  Send a message →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* Footer */}
      <footer className="py-10 px-6" data-testid="footer">
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

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/">
          <span className="text-base font-semibold tracking-tight text-foreground font-display cursor-pointer">
            Six6<span className="text-accent">Labs</span>
          </span>
        </Link>
        <a
          href="mailto:hello@six6labs.com"
          className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
        >
          hello@six6labs.com
        </a>
      </div>
    </nav>
  );
}

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) return <NotFound />;

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-8">
              <Link href="/">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back
                </span>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div
                className="rounded-xl border border-border/30 bg-white overflow-hidden shrink-0 flex items-center justify-center shadow-sm"
                style={{ width: product.containerSize, height: product.containerSize }}
              >
                <img
                  src={product.iconSrc}
                  alt={`${product.name} icon`}
                  style={{ width: product.iconSize, height: product.iconSize, objectFit: "contain" }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">{product.tag}</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {product.status}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">{product.name}</h1>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl leading-relaxed flex flex-col gap-3">
              {product.extendedDescription.split("\n\n").map((para, i) => (
                <p key={i}>
                  {para.split("\n").map((line, j, arr) => (
                    <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                  ))}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* How it works */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-xl font-display font-bold text-foreground mb-8">
              Designed for real-world agents
            </motion.h2>
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                </div>
              ))}
            </motion.div>
            {product.closingLine && (
              <motion.p variants={fadeUp} className="mt-8 text-sm font-medium text-foreground/70 border-l-2 border-accent pl-4">
                {product.closingLine}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-border" /></div>

      {/* Screenshots */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-xl font-display font-bold text-foreground mb-8">
              Screenshots
            </motion.h2>
            {product.screenshots.length > 0 ? (
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {product.screenshots.map((shot, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="rounded-lg border border-border/50 overflow-hidden shadow-sm bg-white">
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground text-center">{shot.caption}</span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="aspect-video bg-muted rounded-lg border border-border/50 flex items-center justify-center"
                  >
                    <span className="text-xs font-mono text-muted-foreground/50">Coming soon</span>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/">
            <span className="text-sm font-display font-semibold text-muted-foreground cursor-pointer">
              Six6<span className="text-foreground">Labs</span>
            </span>
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs font-mono text-muted-foreground">
            <a href="mailto:hello@six6labs.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" />
              hello@six6labs.com
            </a>
            <div className="flex items-center gap-1.5">
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
      <Route path="/product/:id" component={ProductPage} />
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
