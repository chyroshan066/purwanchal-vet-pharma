import { memo } from "react";
import styles from "./About.module.css";

const DETAILS = [
    {
        id: 1,
        title: "Our Mission",
        text: "Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna"
    },
    {
        id: 2,
        title: "Our Vision",
        text: "Purwanchal campus is a bagla billa. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna"
    },
];

export const About = memo(() => (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5">
                <div
                    className="col-lg-5 mb-5 mb-lg-0"
                    style={{ minHeight: "500px" }}
                >
                    <div className="position-relative h-100">
                        <img
                            className="position-absolute w-100 h-100 rounded"
                            src="/images/about.jpg"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className={`text-primary text-uppercase`}>About Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
                    </div>
                    <h4 className={`text-body mb-4 ${styles.shadeGray}`}>Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
                    <div className="bg-light p-4">

                        <ul
                            className="nav nav-pills justify-content-between mb-3"
                            id="pills-tab"
                            role="tablist"
                        >
                            {DETAILS.map(detail => (
                                <li
                                    key={detail.id}
                                    className="nav-item w-50"
                                    role="presentation"
                                >
                                    <button
                                        className={`nav-link text-uppercase w-100 ${detail.id === 1 ? 'active' : ''} ${styles.navLink}`}
                                        id={`pills-${detail.id}-tab`}
                                        data-bs-toggle="pill"
                                        data-bs-target={`#pills-${detail.id}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={`pills-${detail.id}`}
                                        aria-selected={detail.id === 1}
                                    >
                                        {detail.title}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div
                            className="tab-content"
                            id="pills-tabContent"
                        >
                            {DETAILS.map(detail => (
                                <div
                                    key={detail.id}
                                    className={`tab-pane fade ${detail.id === 1 ? 'show active' : ''}`}
                                    id={`pills-${detail.id}`}
                                    role="tabpanel"
                                    aria-labelledby={`pills-${detail.id}-tab`}
                                >
                                    <p className={`mb-0 ${styles.shadeGray}`}>{detail.text}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
));

About.displayName = "About";