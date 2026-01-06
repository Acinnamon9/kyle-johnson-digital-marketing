import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google"; // Replacing Syne with Oswald as per commonly available fonts or just using what works
import "./globals.css";

const oswald = Oswald({
    variable: "--font-display",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "15 Minutes of Fame – Podcast Seat",
    description: "Transform Your Business On Our Podcast",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${oswald.variable} ${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
