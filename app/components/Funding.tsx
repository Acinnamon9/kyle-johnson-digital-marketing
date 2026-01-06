export default function Funding() {
    return (
        <section id="funding" className="py-24 bg-zinc-900 text-white border-t border-zinc-800">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to Scale Your Business?</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Don't let a lack of capital hold you back. Our team helps you navigate the complex world of corporate finance to secure the funding you deserve.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-black p-10 border border-zinc-800 rounded-2xl hover:border-brand-gold transition-colors">
                        <h3 className="text-2xl font-bold text-brand-gold mb-4">Credit Readiness Assessment</h3>
                        <p className="text-gray-400 mb-8 h-20">
                            Before applying, ensure your business meets all 20+ compliance points required by top-tier lenders.
                        </p>
                        <button className="w-full py-4 border border-white text-white hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest rounded-lg">
                            Start Assessment
                        </button>
                    </div>

                    <div className="bg-brand-gold p-10 rounded-2xl text-black">
                        <h3 className="text-2xl font-bold mb-4">Get Full Funding Support</h3>
                        <p className="text-black/80 mb-8 h-20 font-medium">
                            Work directly with our experts to build your business credit and secure high-limit financing lines.
                        </p>
                        <button className="w-full py-4 bg-black text-white hover:bg-zinc-800 transition-all font-bold uppercase tracking-widest rounded-lg">
                            Book Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
