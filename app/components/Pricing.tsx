import Link from 'next/link';

export default function Pricing() {
    const plans = [
        {
            name: "Professional",
            features: ["Inbound campaigns", "Outbound campaigns"],
            highlight: false
        },
        {
            name: "Premium",
            features: ["Inbound campaigns", "Outbound campaigns", "Quick campaigns", "Webhook integration"],
            highlight: true // Maybe highlight this or Growth?
        },
        {
            name: "Growth",
            features: ["Inbound campaigns", "Outbound campaigns", "Callback management", "Webhook integration", "Zapier integration"],
            highlight: true
        },
        {
            name: "Basic",
            features: ["Inbound campaign", "Outbound campaign", "Callback management", "GHL CRM integration", "Webhook", "Zapier integration"],
            highlight: false
        }
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="section-title mb-16 text-center text-4xl font-bold uppercase text-white">
                    Simple, Transparent Pricing
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-8 rounded-2xl border ${plan.highlight
                                    ? 'border-primary bg-zinc-900 shadow-[0_0_30px_rgba(255,87,34,0.15)]'
                                    : 'border-white/10 bg-zinc-900/50'
                                }`}
                        >
                            <h3 className="text-2xl font-bold uppercase mb-6 font-display">{plan.name}</h3>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-300">
                                        <span className="text-primary mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="https://calendar.app.google/qYADTJYY4dFnyhnt6"
                                target="_blank"
                                className={`w-full py-4 text-center text-sm font-bold uppercase tracking-wider rounded transition-colors ${plan.highlight
                                        ? 'bg-primary text-white hover:bg-white hover:text-black'
                                        : 'bg-white text-black hover:bg-gray-200'
                                    }`}
                            >
                                Book Demo
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
