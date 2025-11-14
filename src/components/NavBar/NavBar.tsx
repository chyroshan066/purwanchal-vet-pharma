import Link from 'next/link';
import styles from './NavBar.module.css';
import { NAVLINKS } from '@/constants';
import { memo } from 'react';

export const Navbar = memo(() => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0`}>
            <Link
                href="/"
                className={`navbar-brand ms-lg-5 ${styles.brand}`}
            >
                <h1 className={`m-0 text-uppercase ${styles.h1}`}>
                    <i className={`bi bi-shop fs-1 me-3 ${styles.brandIcon}`}></i>
                    Pet Shop
                </h1>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarCollapse"
            >
                <div className="navbar-nav ms-auto py-0">

                    {NAVLINKS.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`nav-item nav-link ${styles.navLink}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className={`nav-item nav-link ${styles.navLink} ${styles.navContact}`}
                    >
                        Contact <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
});

Navbar.displayName = "Navbar";