import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import WhyUs from '@/app/components/WhyUs';
import Testimonials from '@/app/components/Testimonials';
import Pricing from '@/app/components/Pricing';
import Funding from '@/app/components/Funding';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-brand-gold selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections with Alternating Backgrounds */}
      <Services />

      <WhyUs />

      <Testimonials />

      <Pricing />

      <Funding />

      <Footer />
    </main>
  );
}