import { useState } from "react";
import ReelNatLogo from "./ReelNatLogo";

interface NavBarProps {
  scrollTo: (id: string) => void;
}

export default function NavBar({ scrollTo }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2.5">
          <ReelNatLogo size={32} />
          <span className="font-black text-white tracking-tight text-lg">Reel<span className="text-green-400">Nat</span></span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <button onClick={() => handleScrollTo("benefits")} className="hover:text-white transition-colors">Why Reels</button>
          <button onClick={() => handleScrollTo("how")} className="hover:text-white transition-colors">How it works</button>
          <button onClick={() => handleScrollTo("pricing")} className="hover:text-white transition-colors">Pricing</button>
          <button onClick={() => handleScrollTo("faq")} className="hover:text-white transition-colors">FAQ</button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScrollTo("contact")}
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
          <button onClick={() => handleScrollTo("benefits")}>Why Reels</button>
          <button onClick={() => handleScrollTo("how")}>How it works</button>
          <button onClick={() => handleScrollTo("pricing")}>Pricing</button>
          <button onClick={() => handleScrollTo("faq")}>FAQ</button>
        </div>
      )}
    </nav>
  );
}
