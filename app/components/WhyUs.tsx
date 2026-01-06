import { CheckCircle } from 'lucide-react';

const benefits = [
    { title: "Proven Track Record", desc: "Years of experience helping businesses secure millions in funding." },
    { title: "Expert Guidance", desc: "Direct access to specialists who understand lender requirements." },
    { title: "Complete Compliance", desc: "We ensure every detail meets strict corporate compliance standards." },
    { title: "Scalable Solutions", desc: "Strategies that grow with your business needs and goals." },
    { title: "Premium Presentation", desc: "Professional corporate kits and documentation that impress lenders." },
    { title: "Fast Implementation", desc: "Streamlined processes to get you funding-ready in record time." },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-background text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center uppercase tracking-widest mb-16 text-white">
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <div key={index} className="p-8 border border-zinc-800 bg-zinc-900/50 rounded-lg hover:bg-zinc-900 transition-colors">
                            <CheckCircle className="w-8 h-8 text-brand-gold mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
