import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Lane 1: Company Logo/Link */}
          <div className="flex flex-col items-start">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6">
              KYLE JOHNSON{" "}
              <span className="text-primary block">DIGITAL MARKETING</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Automating authority and connections.
            </p>
          </div>

          {/* Lane 2: Navigation */}
          <div className="flex flex-col items-start">
            <h4 className="font-bold text-white uppercase mb-6 tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="#problems"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Problems
              </a>
              <a
                href="#features"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Solutions
              </a>
              <a
                href="#brand"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Why Us
              </a>
              <a
                href="#pricing"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Testimonials
              </a>
            </div>
          </div>

          {/* Lane 3: Company Details */}
          <div>
            <h4 className="font-bold text-white uppercase mb-6 tracking-wider">
              Contact
            </h4>
            <div className="space-y-4 text-gray-400">
              <p>Kyle Johnson Digital Marketing</p>
              <p>100 S 4th St, Suite 550</p>
              <p>St. Louis, MO 63102</p>
              <a
                href="mailto:contact@kljj365.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" /> contact@kljj365.com
              </a>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Kyle Johnson Digital Marketing.
            All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
