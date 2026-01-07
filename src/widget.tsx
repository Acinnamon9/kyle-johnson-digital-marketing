
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../app/page';
import '../app/globals.css';

// Build-time CSS injection would go here if we were importing it directly in JS,
// but for Shadow DOM we need to manually link the stylesheet.

class MyWidget extends HTMLElement {
    connectedCallback() {
        // secure the shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a mount point
        const mountPoint = document.createElement('div');
        shadow.appendChild(mountPoint);

        // Inject styles
        // NOTE: In production, you might want to point this to a hosted URL or the built file.
        // For local testing, we assume the CSS is in the same directory or passed via props.
        // When using @tailwindcss/vite, it generates a CSS file. We need to link it.
        // Since the filename includes a hash by default, we'll need to strictly reference it
        // or rely on user supplying the CSS.
        // HOWEVER, for a single file widget, including styles is tricky without a loader that inlines them.
        // For now, we'll try to link to 'style.css' which we'll configure Vite to output.

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        // This assumes the CSS file is served from the same location as the JS file
        // Or we can default to a known location.
        // Getting the script's src to resolve the css path relative to it:
        const scriptUrl = import.meta.url; // This works in modules
        // If bundled as IIFE, import.meta might not work the same depending on target.
        // So let's try a simpler approach: relative path ./nextjs.css
        link.href = './nextjs.css';
        shadow.appendChild(link);

        const root = ReactDOM.createRoot(mountPoint);
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    }
}

// Define the custom element
if (!customElements.get('my-widget')) {
    customElements.define('my-widget', MyWidget);
}
