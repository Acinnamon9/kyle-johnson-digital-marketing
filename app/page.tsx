import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Explainer from './components/Explainer';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import WhoItsFor from './components/WhoItsFor';
import InfluencerVideo from './components/InfluencerVideo';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <SocialProof />
            <Explainer />
            <HowItWorks />
            <Features />
            <Pricing />
            <WhoItsFor />
            <InfluencerVideo />
            <CTA />
            <Footer />
        </main>
    );
}
