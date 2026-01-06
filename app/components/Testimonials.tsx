import { Star } from 'lucide-react';

const testimonials = [
    {
        text: "This service completely transformed our ability to secure capital. The team guided us through every step of building a credible corporate profile.",
        author: "Michael R.",
        role: "Real Estate Investor"
    },
    {
        text: "I was denied funding multiple times before working with Consulting Upscale. Their 'Credit Readiness' audit found issues I didn't even know existed.",
        author: "Sarah L.",
        role: "E-commerce Founder"
    },
    {
        text: "The Corporate Kit and documentation are top-notch. It makes my business look incredibly professional to bankers and partners.",
        author: "David K.",
        role: "Tech Startup CEO"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-zinc-50 text-zinc-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold uppercase tracking-widest mb-16">Trusted by Elite Entrepreneurs</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-brand-gold relative">
                            <div className="flex justify-center mb-6 space-x-1">
                                {[...Array(5)].map((_, starI) => (
                                    <Star key={starI} className="w-5 h-5 text-brand-gold fill-current" />
                                ))}
                            </div>
                            <p className="italic text-zinc-600 text-lg mb-8 leading-relaxed">"{item.text}"</p>
                            <div>
                                <p className="font-bold text-black text-xl">{item.author}</p>
                                <p className="text-sm text-zinc-500 uppercase tracking-wide">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
