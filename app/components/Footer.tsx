import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-white/10 text-gray-400">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-white font-bold uppercase mb-2">Kyle Johnson Digital Marketing</h4>
                    <p className="mb-1">100 S 4th St, Suite 550</p>
                    <p className="mb-4">St. Louis, MO 63102</p>
                    <a href="mailto:contact@kljj365.com" className="hover:text-primary transition-colors">
                        contact@kljj365.com
                    </a>
                </div>

                <div className="text-center md:text-right">
                    <p className="mb-4">@kljj365</p>
                    <Link
                        href="https://calendar.app.google/qYADTJYY4dFnyhnt6"
                        target="_blank"
                        className="inline-block bg-white text-black px-6 py-2 font-bold uppercase text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                        Book Demo
                    </Link>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-sm opacity-50">
                &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Kyle Johnson Digital Marketing. All rights reserved.
            </div>
        </footer>
    );
}
