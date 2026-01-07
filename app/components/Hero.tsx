import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient rounded-b-[3rem]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-tight mb-8">
            TRANSFORM YOUR <br />
            <span className="text-primary">BUSINESS</span> ON OUR <br />
            PODCAST
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-bold">
            Turn one conversation into content, connections, and visibility
            across eight major platforms — without creating content yourself.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://calendar.app.google/qYADTJYY4dFnyhnt6"
              target="_blank"
              className="bg-primary text-white px-10 py-5 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-xl"
            >
              Book Demo
            </Link>

            <Link
              href="#brand"
              className="border border-white/30 text-white px-10 py-5 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-xl"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
