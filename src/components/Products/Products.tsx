"use client";

import { memo, useEffect, useRef, useState } from "react";
import { TitleHeader } from "../utility/TitleHeader";
import { Container } from "../utility/Container";
import styles from "./Products.module.css";
import { waitForJQuery } from "@/utils/jQueryProvider";

const PRODUCTS = [
    {
        imgSrc: "/images/products/product-1.png",
        product: "Quality Pet Foods",
        price: 199.00,
    },
    {
        imgSrc: "/images/products/product-2.png",
        product: "Quality Pet Foods",
        price: 199.00,
    },
    {
        imgSrc: "/images/products/product-3.png",
        product: "Quality Pet Foods",
        price: 199.00,
    },
    {
        imgSrc: "/images/products/product-4.png",
        product: "Quality Pet Foods",
        price: 199.00,
    },
    {
        imgSrc: "/images/products/product-2.png",
        product: "Quality Pet Foods",
        price: 199.00,
    },
];

// Helper function to check if Owl Carousel is available
const isOwlCarouselAvailable = (): boolean => {
    return !!(
        typeof window !== 'undefined' &&
        window.$ &&
        typeof window.$.fn === 'object' &&
        typeof window.$.fn.owlCarousel === 'function'
    );
};

export const Products = memo(() => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isCarouselReady, setIsCarouselReady] = useState(false);
    const [shouldUseCarousel, setShouldUseCarousel] = useState(true);
    const initAttemptedRef = useRef(false);

    useEffect(() => {
        let mounted = true;
        let carouselInstance: any = null;

        const initCarousel = async () => {
            if (!mounted || !carouselRef.current || initAttemptedRef.current) return;

            try {
                // Wait for jQuery to be available
                await waitForJQuery();

                if (!mounted || !carouselRef.current) return;

                // Check if jQuery is properly loaded
                if (typeof window.$ === 'undefined' || typeof window.$.fn === 'undefined') {
                    console.error('❌ jQuery not properly loaded');
                    setShouldUseCarousel(false);
                    return;
                }

                // Check if Owl Carousel is available
                if (!isOwlCarouselAvailable()) {
                    console.error('❌ Owl Carousel not available');
                    setShouldUseCarousel(false);
                    return;
                }

                initAttemptedRef.current = true;

                const $carousel = window.$(carouselRef.current);

                // Destroy existing instance if any
                if ($carousel.hasClass('owl-loaded')) {
                    $carousel.trigger('destroy.owl.carousel');
                    $carousel.removeClass('owl-loaded');
                }

                // Initialize Owl Carousel
                carouselInstance = $carousel.owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: true,
                    navText: [
                        '<i class="bi bi-arrow-left"></i>',
                        '<i class="bi bi-arrow-right"></i>'
                    ],
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    smartSpeed: 1000,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        }
                    }
                });

                setIsCarouselReady(true);
                console.log('✅ Owl Carousel initialized successfully');

            } catch (error) {
                console.error('❌ Error initializing carousel:', error);
                setShouldUseCarousel(false);
            }
        };

        // Add event listener for owlCarouselReady event
        const handleOwlCarouselReady = () => {
            console.log('📢 owlCarouselReady event received');
            initCarousel();
        };

        // Add event listener for jQueryLoaded event as fallback
        const handleJQueryLoaded = () => {
            console.log('📢 jQueryLoaded event received');
            // Wait a bit for Owl Carousel to potentially load
            setTimeout(() => {
                if (isOwlCarouselAvailable()) {
                    initCarousel();
                }
            }, 100);
        };

        // Set up event listeners
        window.addEventListener('owlCarouselReady', handleOwlCarouselReady);
        window.addEventListener('jQueryLoaded', handleJQueryLoaded);

        // Try to initialize immediately if everything is ready
        const tryImmediateInit = () => {
            if (isOwlCarouselAvailable()) {
                console.log('🚀 Owl Carousel available immediately, initializing...');
                initCarousel();
            } else if (typeof window.$ !== 'undefined') {
                // jQuery is available but Owl Carousel isn't, wait a bit
                console.log('⏳ jQuery available, waiting for Owl Carousel...');
                const checkOwl = setInterval(() => {
                    if (isOwlCarouselAvailable()) {
                        clearInterval(checkOwl);
                        initCarousel();
                    }
                }, 50);

                // Timeout after 3 seconds
                setTimeout(() => {
                    clearInterval(checkOwl);
                    if (!isOwlCarouselAvailable()) {
                        console.error('❌ Owl Carousel not available after waiting');
                        setShouldUseCarousel(false);
                    }
                }, 3000);
            }
        };

        // Start the initialization process
        tryImmediateInit();

        return () => {
            mounted = false;
            window.removeEventListener('owlCarouselReady', handleOwlCarouselReady);
            window.removeEventListener('jQueryLoaded', handleJQueryLoaded);

            // Cleanup carousel
            if (carouselRef.current && isOwlCarouselAvailable()) {
                try {
                    const $carousel = window.$(carouselRef.current);
                    if ($carousel.hasClass('owl-loaded')) {
                        $carousel.trigger('destroy.owl.carousel');
                    }
                } catch (error) {
                    console.error('Error destroying carousel:', error);
                }
            }
        };
    }, []);

    return (
        <Container>
            <TitleHeader
                title="Products"
                subTitle="Products For Your Best Friends"
                style={{ maxWidth: "600px" }}
            />

            <div
                ref={carouselRef}
                className={`owl-carousel ${styles.productCarousel}`}
                style={!shouldUseCarousel ? {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '30px'
                } : undefined}
            >
                {PRODUCTS.map((product, index) => (
                    <div
                        key={index}
                        className={`item ${styles.productItem}`}
                    >
                        <div className={`position-relative bg-light d-flex flex-column text-center ${styles.productItemInner}`}>
                            <img
                                className="img-fluid mb-4"
                                src={product.imgSrc}
                                alt={product.product}
                                loading={index > 2 ? "lazy" : "eager"}
                            />
                            <h6 className="text-uppercase">{product.product}</h6>
                            <h5 className="text-primary mb-0">${product.price.toFixed(2)}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
});

Products.displayName = "Products";