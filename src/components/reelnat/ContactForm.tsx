import { useState } from "react";
import ReelNatLogo from "./ReelNatLogo";

interface ContactFormProps {
  scrollTo: (id: string) => void;
}

export default function ContactForm({ scrollTo }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", brand: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
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
          <div className="flex items-center gap-2.5">
            <ReelNatLogo size={24} />
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
    </>
  );
}
