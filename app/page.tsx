import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Features from "./components/Features";
import Explainer from "./components/Explainer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <Explainer />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
