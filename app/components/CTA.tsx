import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6 text-black">
                    Ready to Multiply Your Reach?
                </h2>
                <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto mb-12 font-medium">
                    One conversation can open doors across platforms, audiences, and opportunities.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                        href="https://calendar.app.google/qYADTJYY4dFnyhnt6"
                        target="_blank"
                        className="bg-black text-white px-10 py-5 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                    >
                        Book Demo
                    </Link>

                    <Link
                        href="https://calendar.app.google/qYADTJYY4dFnyhnt6" // Assuming same link or different if provided later
                        target="_blank"
                        className="bg-transparent border-2 border-black text-black px-10 py-5 text-xl font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Free AI Demo Call
                    </Link>
                </div>
            </div>
        </section>
    );
}
