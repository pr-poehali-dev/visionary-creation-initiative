import { useState, useEffect, useRef } from "react";
import { HERO_IMG, PHONE_IMG, STEPS_IMG, STATS, BENEFITS, STEPS, PLANS, FAQS } from "./ReelNatLogo";

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

interface SectionsProps {
  scrollTo: (id: string) => void;
}

export default function LandingSections({ scrollTo }: SectionsProps) {
  return (
    <>
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
    </>
  );
}
