import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    KYLE JOHNSON <span className="text-primary">DIGITAL MARKETING</span>
                </Link>

                <Link
                    href="https://calendar.app.google/qYADTJYY4dFnyhnt6"
                    target="_blank"
                    className="bg-white text-black px-6 py-2.5 font-bold uppercase hover:bg-primary hover:text-white transition-colors duration-300"
                >
                    Book Demo
                </Link>
            </div>
        </nav>
    );
}
