import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Replaced placeholder with text logo for now, or use an image if available */}
          <div className="text-2xl font-serif font-bold text-white tracking-tighter">
            CONSULTING <span className="text-brand-gold">UPSCALE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors uppercase tracking-wider">
            Services
          </Link>
          <Link href="#why-us" className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors uppercase tracking-wider">
            Why Us
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors uppercase tracking-wider">
            Results
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors uppercase tracking-wider">
            Packages
          </Link>

          <Link
            href="#contact"
            className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all font-bold text-sm uppercase tracking-wider rounded-md"
          >
            Client Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
}
