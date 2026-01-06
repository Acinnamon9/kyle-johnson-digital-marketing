import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Playbook Section */}
                <div className="text-center mb-20">
                    <h2 className="text-2xl font-bold uppercase text-brand-gold mb-10 tracking-widest">Capital Ready Playbook</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {['DIY Playbook', 'Full Suite'].map((item, i) => (
                            <div key={i} className="bg-zinc-900/50 p-8 border border-zinc-800 hover:border-brand-gold transition-colors">
                                <h3 className="font-bold text-xl mb-6">{item}</h3>
                                <button className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all ${i === 0 ? 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black' : 'bg-brand-gold text-black hover:bg-brand-gold-hover'}`}>
                                    {i === 0 ? 'Learn More' : 'Get Started'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Corporate 101 Feature */}
                <div className="mb-24 relative">
                    <div className="absolute inset-0 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative bg-zinc-900 p-12 md:p-16 border border-brand-gold text-center max-w-2xl mx-auto shadow-[0_0_50px_rgba(212,175,55,0.15)] rounded-2xl">
                        <h3 className="text-3xl font-bold text-white mb-4">Corporate 101</h3>
                        <div className="text-5xl font-extrabold text-brand-gold my-6">$1,500</div>
                        <ul className="text-left text-gray-300 space-y-4 mb-10 max-w-xs mx-auto">
                            {['Business Entity Setup', 'EIN & DUNS Registration', 'Professional Address Setup', 'Bank Account Guidance'].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-brand-gold shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-brand-gold-hover transition-all rounded-lg text-lg">
                            Purchase Now
                        </button>
                    </div>
                </div>

                {/* AI Packages Section */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-12 text-gray-400 uppercase tracking-widest">Upscale AI Packages</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Essential', price: '$297' },
                            { name: 'Executive', price: '$497' },
                            { name: 'Elite', price: '$997' },
                            { name: 'Enterprise', price: 'Custom' }
                        ].map((pkg, i) => (
                            <div key={i} className="bg-zinc-900 p-8 border border-zinc-800 hover:border-brand-gold transition-colors flex flex-col justify-between h-full">
                                <div>
                                    <h4 className="font-bold text-lg mb-4 text-white">{pkg.name}</h4>
                                    <div className="h-px w-full bg-zinc-800 mb-4"></div>
                                </div>
                                <p className="text-brand-gold font-bold text-xl">{pkg.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
