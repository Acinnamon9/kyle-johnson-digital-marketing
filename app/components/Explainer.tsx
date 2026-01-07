export default function Explainer() {
  return (
    <section id="brand" className="py-24 bg-zinc-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            <h2 className="section-title mb-8 text-4xl md:text-5xl font-bold uppercase text-black">
              What Is <span className="text-primary">15 Minutes of Fame</span>?
            </h2>

            <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
              <p>
                15 Minutes of Fame is a strategic podcast partnership designed
                for business owners who want visibility, authority, and
                connections—without spending hours creating content.
              </p>
              <p>
                You show up for a single conversation. We distribute it across
                eight platforms, turning your voice into evergreen content that
                works for you even when you’re unavailable.
              </p>
              <p className="text-black font-medium text-2xl pt-4">
                Think of it as cloning your presence—authentically, efficiently,
                and at scale.
              </p>
            </div>
          </div>

          {/* Right: Visual Placeholder */}
          <div className="h-full min-h-[400px] bg-zinc-800 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
            <span className="text-gray-500 font-display uppercase tracking-widest text-sm relative z-10">
              Brand Visual / Dashboard Preview
            </span>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 blur-[50px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
