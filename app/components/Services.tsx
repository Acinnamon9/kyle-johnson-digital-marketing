import { Shield, TrendingUp, FileCheck, BookOpen, Users, DollarSign } from 'lucide-react';

const services = [
    {
        icon: Shield,
        title: "Corporate Formation",
        description: "Expert LLC and Corporation setup with complete compliance documentation, EIN, and operating agreements."
    },
    {
        icon: DollarSign,
        title: "Business Funding",
        description: "Access high-limit business credit lines with our proven Upscale Method and strategic funding roadmap."
    },
    {
        icon: TrendingUp,
        title: "Credit Optimization",
        description: "Financial profile enhancement and lender-ready structuring for maximum funding approval rates."
    },
    {
        icon: FileCheck,
        title: "Compliance & Documentation",
        description: "Complete corporate documentation including minutes, seals, and certificates for total legitimacy."
    },
    {
        icon: BookOpen,
        title: "Capital Ready Playbook",
        description: "Step-by-step digital guide to prepare your business for high-limit funding opportunities."
    },
    {
        icon: Users,
        title: "Consultation Services",
        description: "Personalized strategy sessions with expert guidance on funding and business structure."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-zinc-50 text-zinc-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-brand-gold mb-4">Services</h2>
                    <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white border border-zinc-200 rounded-xl hover:shadow-xl hover:border-brand-gold transition-all duration-300"
                        >
                            <div className="w-14 h-14 mb-6 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-black transition-colors">
                                <service.icon className="w-7 h-7 text-zinc-600 group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-brand-gold-hover transition-colors">{service.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
