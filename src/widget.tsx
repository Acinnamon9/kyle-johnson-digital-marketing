
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../app/page';
import '../app/globals.css';

// Build-time CSS injection would go here if we were importing it directly in JS,
// but for Shadow DOM we need to manually link the stylesheet.

class MyWidget extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a mount point
        const mountPoint = document.createElement('div');
        // Give it 'body' styles since there is no body inside Shadow DOM
        mountPoint.style.minHeight = '100vh';
        mountPoint.style.backgroundColor = 'black';
        mountPoint.style.color = 'white';
        mountPoint.style.fontFamily = "'Inter', sans-serif";
        shadow.appendChild(mountPoint);

        // 1. Inject Theme CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './nextjs.css';
        shadow.appendChild(link);

        // 2. Inject Google Fonts (Oswald and Inter)
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;700&display=swap';
        shadow.appendChild(fontLink);

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
