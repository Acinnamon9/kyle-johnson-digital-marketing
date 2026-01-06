export default function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "One Conversation",
            description: "You join a short podcast session designed to highlight your story, expertise, and offer."
        },
        {
            step: "02",
            title: "Multi-Platform Distribution",
            description: "Your episode is distributed across 8 major platforms and our 100,000+ network."
        },
        {
            step: "03",
            title: "Ongoing Visibility",
            description: "Your content continues to generate awareness, conversations, and opportunities long after the recording."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-black relative">
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((item, index) => (
                        <div key={index} className="group p-8 border border-white/10 hover:border-primary/50 bg-zinc-900/30 transition-all duration-300">
                            <span className="block text-6xl font-display font-bold text-white/5 group-hover:text-primary/20 mb-6 transition-colors">
                                {item.step}
                            </span>
                            <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
