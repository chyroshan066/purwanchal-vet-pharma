"use client";

import { memo } from "react";
import { Container } from "../utility/Container";
import { TitleHeader } from "../utility/TitleHeader";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";
import { TEAM_CAROUSEL_OPTIONS } from "@/utils/owlCarouselPresets";
import styles from "./Team.module.css";
import Image from "next/image";
import { TEAM } from "@/constants";

export const Team = memo(() => {
    const { carouselRef } = useOwlCarousel(TEAM_CAROUSEL_OPTIONS);

    return (
        <Container
            outerContainerClassName="py-5"
        >

            <TitleHeader
                title="Team Members"
                subTitle="Qualified Pets Care Professionals"
                style={{ maxWidth: "600px" }}
            />

            <div
                ref={carouselRef}
                className="owl-carousel team-carousel position-relative"
                style={{ paddingRight: "25px" }}
            >

                {TEAM.map((member, index) => (
                    <div
                        key={index}
                        className={styles.teamItem}
                    >
                        <div className="position-relative overflow-hidden">
                            <Image
                                className="img-fluid w-100"
                                src={member.imgSrc}
                                alt={member.name}
                                width={500}
                                height={500}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                                priority={index <= 3}
                            />
                            <div className={styles.teamOverlay}>
                                <div className="d-flex align-items-center justify-content-start">

                                    {[
                                        {
                                            icon: "bi-facebook",
                                            link: member.social.facebookLink,
                                        },
                                        {
                                            icon: "bi-twitter",
                                            link: member.social.twitterLink,
                                        },
                                        {
                                            icon: "bi-linkedin",
                                            link: member.social.linkedinLink,
                                        },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            className="btn btn-light btn-square mx-1"
                                            href={social.icon}
                                        >
                                            <i className={`bi ${social.icon}`} />
                                        </a>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="text-uppercase">{member.name}</h5>
                            <p className="m-0">{member.designation}</p>
                        </div>
                    </div>
                ))}

            </div>

        </Container>
    )
});

Team.displayName = "Team";