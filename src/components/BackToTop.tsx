"use client";

import Link from "next/link";
import { memo, useState, useEffect } from "react";
import styles from "./Footer/Footer.module.css";

export const BackToTop = memo(() => {
    const [isVisible, setIsVisible] = useState(false);

    // Monitor scroll position to show/hide button
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Smooth scroll to top with easeInOutExpo animation
    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const duration = 200;
        const start = window.scrollY;
        const startTime = performance.now();

        const easeInOutExpo = (t: number): number => {
            if (t === 0) return 0;

            if (t === 1) return 1;

            if (t < 0.5) {
                return Math.pow(2, 20 * t - 10) / 2;
            }

            return (2 - Math.pow(2, -20 * t + 10)) / 2;
        };

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutExpo(progress);

            window.scrollTo(0, start * (1 - easedProgress));

            if (progress < 1) {
                requestAnimationFrame(animateScroll);  // "requestAnimationFrame" is a native browser API provided by all modern browsers
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <Link
            href="#"
            onClick={scrollToTop}
            className={`btn btn-primary py-3 fs-4 back-to-top ${styles.noRounded}`}
            style={{
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                transition: 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out'
            }}
        >
            <i className="bi bi-arrow-up" />
        </Link>
    )
});

BackToTop.displayName = "BackToTop";