import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-background text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl mb-8">
          We Help Businesses Pre-Qualify For Financing & Build Business Credit
          <span className="text-brand-gold">:</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
          Unlock your business's full potential with our expert guidance in
          securing funding and establishing a strong credit profile.
        </p>

        {/* CTA Button */}
        <Link 
          href="https://member.consultingupscale.com/"
          className="inline-block bg-brand-gold hover:bg-brand-gold-hover text-black font-bold py-4 px-10 rounded-full text-lg uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Run Your Free Pre-Qualification Scan
        </Link>
      </div>
      
      {/* Optional: Add subtle background elements if needed to match "vignette" or texture */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#111111_100%)] opacity-80"></div>
    </section>
  );
}