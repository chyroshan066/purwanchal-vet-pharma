import { memo } from "react";
import styles from "./About.module.css";
import { ClassName, Text, Title } from "@/types";
import { TitleHeader } from "../utility/TitleHeader";
import Image from "next/image";
import { Container } from "../utility/Container";

interface Detail extends Title, Text {
    id: number;
}

const DETAILS: Detail[] = [
    {
        id: 1,
        title: "Our Mission",
        text: "To provide accessible, high-quality veterinary products and expert care to the animals of Itahari and Sunsari. We exist to improve animal health through reliable pharmaceuticals, professional guidance, and unwavering commitment to the wellbeing of every creature we serve."
    },
    {
        id: 2,
        title: "Our Vision",
        text: "To be Eastern Nepal's leading veterinary pharmacy, recognized for excellence in animal healthcare. We aspire to create a healthier future where quality veterinary care is available to all animals, from beloved pets to essential livestock."
    },
];

export const About = memo(({
    className
}: ClassName) => (
    <Container
        outerContainerClassName={`py-5 ${className}`}
    >

        <div className="row gx-5">
            <div
                className="col-lg-5 mb-5 mb-lg-0"
                style={{ minHeight: "500px" }}
            >
                <div className="position-relative h-100">
                    <Image
                        className="position-absolute w-100 h-100"
                        src="/images/about.webp"
                        alt="about-banner"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <div className="col-lg-7">

                <TitleHeader
                    title="About Us"
                    subTitle="We Keep Your Pets Happy All Time"
                />

                <h4 className={`text-body mb-4 ${styles.shadeGray}`}>Where Animal Wellness Meets Expert Care
                    Proudly serving Itahari's pet parents and farmers with premium veterinary pharmaceuticals and professional guidance.</h4>
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

    </Container>
));

About.displayName = "About";