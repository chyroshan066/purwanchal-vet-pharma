'use client';

import { useEffect, ReactNode, useState } from 'react';

interface JQueryProviderProps {
    children: ReactNode;
    onJQueryReady?: () => void;
}

// Initialize the promise only in browser environment
const initJQueryPromise = () => {
    if (typeof window !== 'undefined' && !window.jQueryLoadPromise) {
        window.jQueryLoadPromise = new Promise((resolve) => {
            window.jQueryLoadResolve = resolve;
        });
    }
};

export default function JQueryProvider({ children, onJQueryReady }: JQueryProviderProps) {
    const [jQueryReady, setJQueryReady] = useState(false);

    useEffect(() => {
        initJQueryPromise();

        // Check if jQuery is already loaded
        if (typeof window !== 'undefined' && window.$ !== undefined && window.jQuery !== undefined) {
            setJQueryReady(true);

            if (window.jQueryLoadResolve) {
                window.jQueryLoadResolve();
            }

            if (onJQueryReady) {
                onJQueryReady();
            }

            return;
        }

        import('jquery')
            .then((jQuery) => {
                window.$ = window.jQuery = jQuery.default;

                setJQueryReady(true);

                // Notify all waiting components
                if (window.jQueryLoadResolve) {
                    window.jQueryLoadResolve();
                }

                // Notify parent component
                if (onJQueryReady) {
                    onJQueryReady();
                }

                // Dispatch custom event for components that prefer event listeners
                window.dispatchEvent(new CustomEvent('jQueryLoaded'));
            })
            .catch((error) => {
                console.error('❌ Failed to load jQuery:', error);
            });
    }, [onJQueryReady]);

    return <>{children}</>;
}

export const waitForJQuery = (): Promise<void> => {
    // If already loaded, resolve immediately
    if (typeof window !== 'undefined' && window.$ !== undefined && window.jQuery !== undefined) {
        return Promise.resolve();
    }

    // Initialize promise if needed
    initJQueryPromise();

    // Otherwise wait for the load promise
    return window.jQueryLoadPromise || Promise.reject('jQuery load promise not initialized');
};