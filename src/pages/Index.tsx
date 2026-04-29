import { useState, useEffect, useRef } from "react";

const HERO_IMG = "https://cdn.poehali.dev/projects/f6b270c4-6398-4112-933d-3f405f34b9c3/files/2d18828e-6569-4f76-8e8b-28b16467fc41.jpg";
const PHONE_IMG = "https://cdn.poehali.dev/projects/f6b270c4-6398-4112-933d-3f405f34b9c3/files/627c8e84-4692-4025-8a8e-319d80f33cb5.jpg";
const STEPS_IMG = "https://cdn.poehali.dev/projects/f6b270c4-6398-4112-933d-3f405f34b9c3/files/31be389b-05a7-46af-8800-34998886d965.jpg";

const STATS = [
  { value: "180M+", label: "Monthly views" },
  { value: "90%", label: "Completion rate" },
  { value: "3x", label: "Brand recall" },
  { value: "60s", label: "Time to launch" },
];

const BENEFITS = [
  {
    icon: "👁",
    title: "Attention",
    desc: "90% higher completion rates than horizontal ads. Viewers stay glued to vertical content.",
  },
  {
    icon: "⚡",
    title: "Algorithm Power",
    desc: "One viral video generates free organic reach for months — no extra budget needed.",
  },
  {
    icon: "🛡",
    title: "Ad Immunity",
    desc: 'Users skip "Ads," but they watch "Content." We make your logo part of the story.',
  },
];

const STEPS = [
  {
    num: "01",
    title: "Select Niche",
    desc: "Pick your target audience from 20+ content verticals — fitness, tech, lifestyle, gaming & more.",
  },
  {
    num: "02",
    title: "Submit Logo",
    desc: "Upload your branding assets in any format. Our team handles all the creative integration.",
  },
  {
    num: "03",
    title: "We Place & Promote",
    desc: "Our 500+ vetted creators seamlessly integrate your brand and push it across platforms.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$499",
    period: "/ month",
    color: "border-gray-800",
    features: ["5 creator placements", "1 niche category", "Basic analytics", "Instagram Reels only"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    period: "/ month",
    color: "border-green-500",
    features: ["20 creator placements", "3 niche categories", "Advanced analytics", "Reels + YouTube Shorts", "Priority support"],
    cta: "Book a Demo",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$3,499",
    period: "/ month",
    color: "border-gray-800",
    features: ["Unlimited placements", "All niches", "Real-time dashboard", "All platforms", "Dedicated manager"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "What kind of brands do you work with?",
    a: "We work with brands of all sizes — from startups to Fortune 500s. If you have a logo and an audience you want to reach, we can place it.",
  },
  {
    q: "How soon can my logo go live?",
    a: "After assets submission, your brand starts appearing in content within 48–72 hours.",
  },
  {
    q: "Are placements disclosed as ads?",
    a: "Our placements are native — they blend into the content naturally. We stay compliant with platform guidelines.",
  },
  {
    q: "Can I choose which creators I work with?",
    a: "On Growth and Scale plans you can browse and approve creators before they go live with your brand.",
  },
];

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <div className="text-3xl md:text-4xl font-black text-green-400">{value}</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-semibold text-sm hover:bg-gray-900 transition-colors"
      >
        <span>{q}</span>
        <span className={`text-green-400 text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", brand: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-green-500 rounded-lg rotate-12 opacity-60" />
              <div className="absolute inset-0 bg-green-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-sm">R</span>
              </div>
            </div>
            <span className="font-black text-white tracking-tight">Reel<span className="text-green-400">Nat</span></span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <button onClick={() => scrollTo("benefits")} className="hover:text-white transition-colors">Why Reels</button>
            <button onClick={() => scrollTo("how")} className="hover:text-white transition-colors">How it works</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-white transition-colors">Pricing</button>
            <button onClick={() => scrollTo("faq")} className="hover:text-white transition-colors">FAQ</button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-green-500 hover:bg-green-400 text-black font-bold text-sm px-5 py-2 rounded-lg transition-colors"
            >
              Book a Demo
            </button>
            <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0d0d0d] border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm text-gray-300">
            <button onClick={() => scrollTo("benefits")}>Why Reels</button>
            <button onClick={() => scrollTo("how")}>How it works</button>
            <button onClick={() => scrollTo("pricing")}>Pricing</button>
            <button onClick={() => scrollTo("faq")}>FAQ</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="relative pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.13) 0%, transparent 70%), #080808" }}
      >
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/60 to-[#080808]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            500+ Active Creators · 20+ Niches
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Get Your Logo Seen by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Millions
            </span>
            <br />in Under 60 Seconds.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium logo placement in viral Instagram Reels & YouTube Shorts.
            Non-intrusive. Native. Maximum impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-lg shadow-green-500/25"
            >
              Book a Free Demo
            </button>
            <button
              onClick={() => scrollTo("how")}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <span className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-xs">▶</span>
              See how it works
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </section>

      {/* PHONE + DESC */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-2xl" />
            <img
              src={PHONE_IMG}
              alt="Logo in Reels"
              className="relative rounded-2xl w-full object-cover shadow-2xl shadow-black/60 border border-white/5"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#111] border border-green-500/30 rounded-xl px-4 py-3 flex items-center gap-2 shadow-xl">
              <span className="text-green-400 text-xl">📈</span>
              <div>
                <div className="text-white font-bold text-sm">+340%</div>
                <div className="text-gray-500 text-xs">Brand recall</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why it works</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3 mb-5 leading-tight">
              Native ads that people{" "}
              <span className="text-green-400">actually watch</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Traditional ads get skipped in 5 seconds. Our placements live inside the content — so viewers
              watch your brand for the full 30–60 seconds, while genuinely entertained.
            </p>
            <ul className="flex flex-col gap-3">
              {["Fully native — no banner blindness", "Works across all verticals", "Tracked ROI with live analytics", "No production costs for you"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3">The unfair advantage</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-green-500/20 transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Process</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3">How it works</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">From signup to live placements in under 72 hours</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 font-black text-sm flex-shrink-0">
                    {s.num}
                  </div>
                  {i < STEPS.length - 1 && <div className="w-px flex-1 bg-green-500/10 mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="text-white font-bold text-base mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-green-500/5 rounded-3xl blur-2xl" />
            <img
              src={STEPS_IMG}
              alt="How it works"
              className="relative rounded-2xl w-full object-cover shadow-2xl shadow-black/60 border border-white/5"
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3">Simple, transparent plans</h2>
            <p className="text-gray-500 mt-3">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-[#0f0f0f] border-2 ${plan.color} rounded-2xl p-6 flex flex-col ${plan.highlight ? "md:scale-105 shadow-2xl shadow-green-500/10" : ""}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm mb-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("contact")}
                  className={`mt-6 w-full py-3 rounded-xl font-bold text-sm transition-all ${plan.highlight ? "bg-green-500 hover:bg-green-400 text-black hover:scale-105" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"}`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3">Common questions</h2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq) => <FaqItem key={faq.q} {...faq} />)}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="mx-4 md:mx-auto max-w-5xl mb-20 rounded-3xl overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #052e16 0%, #14532d 50%, #052e16 100%)" }}
      >
        <div className="absolute inset-0 opacity-25">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="relative px-8 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Dominate the Feed?</h2>
          <p className="text-green-200/80 mb-8 max-w-lg mx-auto">
            Get your brand in front of the next generation of customers. First 14 days free.
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-green-400 hover:bg-green-300 text-black font-black px-10 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-xl shadow-black/40"
          >
            Book a Free Demo
          </button>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl font-black mt-3">Book your free demo</h2>
          <p className="text-gray-500 mt-2 text-sm">We'll reach out within 1 business day</p>
        </div>

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-white font-bold text-xl mb-2">Request received!</h3>
            <p className="text-gray-400 text-sm">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-xs mb-1.5 block">Your name *</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Johnson"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1.5 block">Email *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Brand / Company</label>
              <input
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                placeholder="Nike, Shopify, etc."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">What's your goal?</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your brand and audience..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-4 rounded-xl transition-all hover:scale-[1.02] text-sm shadow-lg shadow-green-500/20 mt-2"
            >
              Book a Free Demo →
            </button>
            <p className="text-center text-gray-600 text-xs">No commitment · First 14 days free</p>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 bg-green-500 rounded-md rotate-12 opacity-60" />
              <div className="absolute inset-0 bg-green-400 rounded-md flex items-center justify-center">
                <span className="text-black font-black text-xs">R</span>
              </div>
            </div>
            <span className="font-black text-white text-sm tracking-tight">Reel<span className="text-green-400">Nat</span></span>
          </div>
          <p className="text-gray-600 text-xs">© 2025 ReelNat. All rights reserved.</p>
          <div className="flex gap-5 text-gray-600 text-xs">
            <button className="hover:text-gray-400 transition-colors">Privacy</button>
            <button className="hover:text-gray-400 transition-colors">Terms</button>
            <a href="mailto:hello@reelnat.com" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
