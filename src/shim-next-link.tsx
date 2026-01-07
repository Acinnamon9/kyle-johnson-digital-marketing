
import React from 'react';

// This is a shim for next/link to work in a standalone Vite build (no Next.js router)
export default function Link({
    href,
    children,
    replace,
    scroll,
    prefetch,
    ...props
}: {
    href: string;
    children: React.ReactNode;
    [key: string]: any;
}) {
    return (
        <a href={href} {...props}>
            {children}
        </a>
    );
}
