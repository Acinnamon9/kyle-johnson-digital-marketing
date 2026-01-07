"use client";

import { useState } from "react";
import { ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This system completely transformed how we handle outreach. The AI agents feel incredibly human.",
    name: "Sarah Jenkins",
    role: "Agency Owner",
  },
  {
    quote:
      "I was skeptical about AI calling, but the results speak for themselves. We doubled our booked appointments.",
    name: "Marcus Thorne",
    role: "Real Estate Broker",
  },
  {
    quote:
      "The setup was seamless. Within 72 hours we had a fully white-labeled solution running.",
    name: "Elena Rodriguez",
    role: "Marketing Director",
  },
  {
    quote:
      "Finally, a way to scale personal connections without burning out my sales team.",
    name: "David Chen",
    role: "SaaS Founder",
  },
  {
    quote:
      "The brand identity kit alone was worth the investment. It looks so professional.",
    name: "Priya Patel",
    role: "Consultant",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Get 3 items to show, handling wrap-around
  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-black border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="section-title text-4xl font-bold uppercase text-white">
            What People Say
          </h2>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all group"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visibleTestimonials.map((t, index) => (
            <div
              key={`${startIndex}-${index}`}
              className="p-8 bg-zinc-900/50 border border-white/10 rounded-2xl relative animate-fadeIn"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-lg text-gray-300 mb-8 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h4 className="text-white font-bold text-xl uppercase">
                  {t.name}
                </h4>
                <span className="text-primary text-sm font-medium">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
