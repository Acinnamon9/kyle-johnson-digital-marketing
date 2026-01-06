import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-6 tracking-tight">
              CONSULTING <span className="text-brand-gold">UPSCALE</span>
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Where structure unlocks capital. We build the foundation for your business's financial success.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-zinc-500 hover:text-brand-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-gold">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-gold">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Business Credit</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Funding</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Corporate Kits</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Consultations</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-gold">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
          <p>&copy; {currentYear} Consulting Upscale. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Elite Entrepreneurs</p>
        </div>
      </div>
    </footer>
  );
}