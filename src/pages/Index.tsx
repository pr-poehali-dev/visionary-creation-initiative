export default function Index() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">R</span>
          </div>
          <span className="font-bold text-base">ReelNat Logo</span>
        </div>
        <button
          onClick={scrollToContact}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-2 rounded transition-colors"
        >
          Book a Demo
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 py-10 max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold leading-snug mb-6">
          Get Your Logo Seen by Millions in Under 60 Seconds.
        </h1>

        <div className="rounded-xl overflow-hidden mb-6 border border-gray-200 shadow-sm">
          <img
            src="https://cdn.poehali.dev/projects/f6b270c4-6398-4112-933d-3f405f34b9c3/files/9d088cb9-fe1b-4767-b63b-dff353014f5b.jpg"
            alt="Reels logo placement"
            className="w-full object-cover aspect-[4/3]"
          />
        </div>

        <button
          onClick={scrollToContact}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors mb-8 w-full max-w-xs"
        >
          Book a Demo
        </button>

        <p className="text-gray-600 text-base leading-relaxed border border-gray-200 rounded-xl p-5">
          Premium logo placement in high-engagement Instagram Reels & YouTube Shorts. Non-intrusive. Maximum impact.
        </p>
      </section>

      {/* Benefits */}
      <section className="px-6 py-8 max-w-lg mx-auto">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { title: "Attention:", desc: "90% higher completion rates than horizontal ads." },
            { title: "Algorithm Power:", desc: "One viral video can generate free organic reach for months." },
            { title: "Immunity:", desc: 'Users skip "Ads," but they watch "Content." We make your logo part of the content.' },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-3 flex flex-col gap-2">
              <span className="font-bold text-sm">{item.title}</span>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Book a Demo
          </button>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-8 max-w-lg mx-auto">
        <div className="border border-gray-200 rounded-xl p-5">
          <h2 className="text-lg font-bold text-center mb-5">How it works</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { step: "1", title: "Select Niche", desc: "Pick your target audience." },
              { step: "2", title: "Submit Logo", desc: "Send us your branding assets." },
              { step: "3", title: "We Place & Promote", desc: "Our creators integrate your brand." },
            ].map((item) => (
              <div key={item.step} className="border border-gray-200 rounded-xl p-3 flex flex-col gap-1">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mb-1">
                  <span className="text-white text-xs font-bold">{item.step}</span>
                </div>
                <span className="font-bold text-sm">{item.title}:</span>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-10 max-w-lg mx-auto text-center">
        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Ready to Dominate the Feed?</h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Get your brand in front of the next generation of customers.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("demo-form")
              el?.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors w-full max-w-xs"
          >
            Book a Demo
          </button>
        </div>
      </section>

      {/* Form */}
      <section id="demo-form" className="px-6 pb-16 max-w-lg mx-auto">
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-5 text-center">Book Your Free Demo</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks! We'll be in touch soon.")
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              required
              placeholder="Your name"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500"
            />
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Company / Brand name"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Book a Demo
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-5 text-center">
        <p className="text-xs text-gray-400">© 2025 ReelNat. All rights reserved.</p>
      </footer>
    </main>
  )
}
