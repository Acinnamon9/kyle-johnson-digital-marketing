import { Play } from 'lucide-react';

export default function InfluencerVideo() {
    return (
        <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title mb-12 text-4xl font-bold uppercase text-white">
                    Your Brand, Your Voice — <span className="text-primary">Everywhere</span>
                </h2>

                <div className="relative max-w-4xl mx-auto aspect-video bg-zinc-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-all">
                    {/* Placeholder for Video Embed */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                    <div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>

                    <p className="absolute bottom-8 left-0 right-0 text-gray-400 text-sm font-medium tracking-widest uppercase">
                        Watch the Founder's Message
                    </p>
                </div>
            </div>
        </section>
    );
}
