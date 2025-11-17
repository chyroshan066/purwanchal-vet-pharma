"use client";

import Link from 'next/link';
import styles from './NavBar.module.css';
import { NAVLINKS } from '@/constants';
import { memo, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const Navbar = memo(() => {
    const navbarRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const navbar = navbarRef.current;

        if (!navbar) return;

        // Sticky Navbar on scroll
        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add(styles.stickyTop);
            } else {
                navbar.classList.remove(styles.stickyTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            ref={navbarRef}
            className={`navbar navbar-expand-lg navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 ${styles.navbar}`}
        >
            <Link
                href="/"
                className={`navbar-brand ${styles.brand}`}
            >
                <h1 className={`m-0 text-uppercase ${styles.h1}`}>
                    <i className={`bi bi-shop fs-1 me-3 ${styles.brandIcon}`} />
                    Purwanchal Vet
                </h1>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarCollapse"
            >
                <div className="navbar-nav ms-auto py-0">

                    {NAVLINKS.map((link, index) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={`nav-link ${styles.navLink} ${isActive ? styles.active : ''}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <Link
                        href="/contact"
                        className={`nav-link ${styles.navLink} ${styles.navContact}`}
                    >
                        Contact <i className="bi bi-arrow-right" />
                    </Link>
                </div>
            </div>
        </nav>
    );
});

Navbar.displayName = "Navbar";