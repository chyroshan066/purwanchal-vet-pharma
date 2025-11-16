import { memo } from "react";
import { Container } from "../utility/Container";
import { CONTACTS, NAVLINKS, SOCIALLINKS } from "@/constants";
import { Children, Header } from "@/types";
import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterColumnProps extends Header, Children { }

const FooterColumn = memo(({
    children, header
}: FooterColumnProps) => (
    <div className="col-lg-4 col-md-6">
        <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">{header}</h5>
        {children}
    </div>
));

FooterColumn.displayName = "FooterColumn";

export const Footer = memo(() => (
    <>
        <Container
            outerContainerClassName="bg-light mt-5 py-5"
            innerContainerClassName="pt-5"
        >

            <div className="row g-5">

                <FooterColumn header="Get In Touch">
                    <p className="mb-4 shade-gray">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                    {CONTACTS.map((contact, index) => (
                        <p
                            key={index}
                            className={`${index < 2 ? 'mb-2' : ''} shade-gray`}
                        >
                            <i className={`bi ${contact.icon} text-primary me-2`} />
                            {contact.text}
                        </p>
                    ))}
                </FooterColumn>

                <FooterColumn header="Quick Links">
                    <div className="d-flex flex-column justify-content-start">
                        {NAVLINKS.map((link, index) => (
                            <Link
                                key={index}
                                className={`mb-2 ${styles.shadeGray}`}
                                href={link.href}
                            >
                                <i className="bi bi-arrow-right text-primary me-2" />
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </FooterColumn>

                <FooterColumn header="Newsletter">
                    <form action="">
                        <div className="input-group">
                            <input
                                type="text"
                                className={`form-control p-3 ${styles.noRounded}`}
                                placeholder="Your Email"
                            />
                            <button className={`btn btn-primary ${styles.noRounded}`}>Sign Up</button>
                        </div>
                    </form>
                    <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div className="d-flex">
                        {SOCIALLINKS.map((social, index) => (
                            <a
                                key={index}
                                className={`btn btn-outline-primary btn-square me-2 ${styles.noRounded}`}
                                href={social.href}
                            >
                                <i className={`bi ${social.icon}`} />
                            </a>
                        ))}
                    </div>
                </FooterColumn>

            </div>
        </Container>

        <Container
            outerContainerClassName="bg-dark text-white-50 py-4"
        >
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">
                        &copy; <Link className="text-white no-underline" href="#">Your Site Name</Link>. All Rights Reserved.
                    </p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">
                        Designed by <a className="text-white no-underline" href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
            </div>
        </Container>
    </>
));

Footer.displayName = "Footer";