import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../app/page';

// Import global styles so they are bundled
import '../app/globals.css';

/**
 * Configuration options for the widget
 */
interface WidgetConfig {
    // Add any config options here if needed, e.g. theme, userId
    [key: string]: any;
}

/**
 * Initialize the widget in a specific container
 * @param config Configuration object
 */
function init(config: WidgetConfig = {}) {
    // Find the container. User can pass a specific selector or Element, 
    // or we default to a specific ID if we want to enforce it.
    // For this implementation, let's assume the user creates a <div id="my-widget"></div>
    // or passes the element ID in config if they want custom.

    const containerId = config.containerId || 'my-widget';
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Widget container element #${containerId} not found`);
        return;
    }

    // Prevent double initialization
    if (container.dataset.widgetInitialized) {
        console.warn('Widget already initialized');
        return;
    }
    container.dataset.widgetInitialized = 'true';

    const root = createRoot(container);

    // Render the App. 
    // Note: We are rendering the same App component used in Next.js.
    // We might need to handle routing if the App uses it, but based on the file content
    // it looks like a single-page landing page which is perfect.
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

// Expose the init function globally
// We use 'as any' to avoid TypeScript errors with window augmentation for now
(window as any).MyWidget = { init };
