import { useEffect, useMemo, useRef, useState } from "react";
import { waitForJQuery } from "@/utils/jQueryProvider";

export interface OwlCarouselResponsiveConfig {
    [breakpoint: number]: {
        items: number;
    };
}

export interface OwlCarouselOptions {
    loop?: boolean;
    margin?: number;
    nav?: boolean;
    navText?: [string, string];
    dots?: boolean;
    autoplay?: boolean;
    smartSpeed?: number;
    responsive?: OwlCarouselResponsiveConfig;
    items?: number;
}

export interface UseOwlCarouselReturn {
    carouselRef: React.RefObject<HTMLDivElement | null>;
    isCarouselReady: boolean;
    shouldUseCarousel: boolean;
    reinitializeCarousel: () => Promise<void>;
}

/**
 * @param options - Owl Carousel configuration options
 * @param dependencies - Optional dependencies array to trigger reinitialization
 * @returns Object containing carousel ref, ready state, and fallback state
 * 
 * @example
 * const { carouselRef, isCarouselReady, shouldUseCarousel } = useOwlCarousel({
 *   loop: true,
 *   margin: 30,
 *   nav: true,
 *   autoplay: true,
 *   responsive: {
 *     0: { items: 1 },
 *     768: { items: 3 }
 *   }
 * });
 */
export const useOwlCarousel = (
    options: OwlCarouselOptions = {}
): UseOwlCarouselReturn => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isCarouselReady, setIsCarouselReady] = useState(false);
    const [shouldUseCarousel, setShouldUseCarousel] = useState(true);
    const initAttemptedRef = useRef(false);

    const defaultOptions: OwlCarouselOptions = {
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left" />',
            '<i class="bi bi-arrow-right" />'
        ],
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
    };

    // Merge default options with provided options
    const mergedOptions = useMemo(() => {
        return { ...defaultOptions, ...options };
    }, [options]);

    // Function to reinitialize carousel manually
    const reinitializeCarousel = async () => {
        if (!carouselRef.current) return;

        try {
            await waitForJQuery();

            if (!isOwlCarouselAvailable()) {
                console.error('⚠ Owl Carousel not available for reinitialization');
                return;
            }

            const $carousel = window.$(carouselRef.current);

            // Destroy existing instance
            if ($carousel.hasClass('owl-loaded')) {
                $carousel.trigger('destroy.owl.carousel');
                $carousel.removeClass('owl-loaded');
            }

            // Reinitialize with new options
            $carousel.owlCarousel(mergedOptions);
            setIsCarouselReady(true);
        } catch (error) {
            console.error('⚠ Error reinitializing carousel:', error);
        }
    };

    useEffect(() => {
        let mounted = true;
        const currentCarouselRef = carouselRef.current;

        const initCarousel = async () => {
            if (!mounted || !currentCarouselRef || initAttemptedRef.current) return;

            try {
                // Wait for jQuery to be available
                await waitForJQuery();

                if (!mounted || !currentCarouselRef) return;

                // Check if jQuery is properly loaded
                if (typeof window.$ === 'undefined' || typeof window.$.fn === 'undefined') {
                    console.error('⚠ jQuery not properly loaded');
                    setShouldUseCarousel(false);
                    return;
                }

                // Check if Owl Carousel is available
                if (!isOwlCarouselAvailable()) {
                    console.error('⚠ Owl Carousel not available');
                    setShouldUseCarousel(false);
                    return;
                }

                initAttemptedRef.current = true;

                const $carousel = window.$(currentCarouselRef);

                // Destroy existing instance if any
                if ($carousel.hasClass('owl-loaded')) {
                    $carousel.trigger('destroy.owl.carousel');
                    $carousel.removeClass('owl-loaded');
                }

                // Initialize Owl Carousel with merged options - MODIFIED: Using merged options
                $carousel.owlCarousel(mergedOptions);

                setIsCarouselReady(true);
            } catch (error) {
                console.error('⚠ Error initializing carousel:', error);
                setShouldUseCarousel(false);
            }
        };

        const handleOwlCarouselReady = () => {
            initCarousel();
        };

        const handleJQueryLoaded = () => {
            setTimeout(() => {
                if (isOwlCarouselAvailable()) {
                    initCarousel();
                }
            }, 100);
        };

        // Set up event listeners
        window.addEventListener('owlCarouselReady', handleOwlCarouselReady);
        window.addEventListener('jQueryLoaded', handleJQueryLoaded);

        // Try immediate initialization
        const tryImmediateInit = () => {
            if (isOwlCarouselAvailable()) {
                initCarousel();
            } else if (typeof window.$ !== 'undefined') {
                console.log('⏳ jQuery available, waiting for Owl Carousel...');
                const checkOwl = setInterval(() => {
                    if (isOwlCarouselAvailable()) {
                        clearInterval(checkOwl);
                        initCarousel();
                    }
                }, 50);

                setTimeout(() => {
                    clearInterval(checkOwl);
                    if (!isOwlCarouselAvailable()) {
                        console.error('⚠ Owl Carousel not available after waiting');
                        setShouldUseCarousel(false);
                    }
                }, 3000);
            }
        };

        tryImmediateInit();

        return () => {
            mounted = false;
            window.removeEventListener('owlCarouselReady', handleOwlCarouselReady);
            window.removeEventListener('jQueryLoaded', handleJQueryLoaded);

            // Cleanup carousel
            if (currentCarouselRef && isOwlCarouselAvailable()) {
                try {
                    const $carousel = window.$(currentCarouselRef);
                    if ($carousel.hasClass('owl-loaded')) {
                        $carousel.trigger('destroy.owl.carousel');
                    }
                } catch (error) {
                    console.error('Error destroying carousel:', error);
                }
            }
        };
    }, [mergedOptions]); 

    return {
        carouselRef,
        isCarouselReady,
        shouldUseCarousel,
        reinitializeCarousel 
    };
};

// Helper function to check if Owl Carousel is available (exported for reuse)
export const isOwlCarouselAvailable = (): boolean => {
    return !!(
        typeof window !== 'undefined' &&
        window.$ &&
        typeof window.$.fn === 'object' &&
        typeof window.$.fn.owlCarousel === 'function'
    );
};