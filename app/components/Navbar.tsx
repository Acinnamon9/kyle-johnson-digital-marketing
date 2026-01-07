"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#problems", label: "Problems" },
    { href: "#features", label: "Solutions" },
    { href: "#brand", label: "Why Us" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 rounded-b-2xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter z-10">
          KYLE JOHNSON <span className="text-primary">DIGITAL MARKETING</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="https://calendar.app.google/qYADTJYY4dFnyhnt6"
          target="_blank"
          className="hidden md:block bg-white text-black px-6 py-2.5 font-bold uppercase hover:bg-primary hover:text-white transition-colors duration-300 rounded-xl"
        >
          Book Demo
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-10 p-2 text-white hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="https://calendar.app.google/qYADTJYY4dFnyhnt6"
            target="_blank"
            onClick={handleLinkClick}
            className="mt-4 bg-white text-black px-6 py-3 font-bold uppercase text-center hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
