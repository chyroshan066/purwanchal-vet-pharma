"use client";

import { memo } from "react";
import { TESTIMONIALS } from "@/constants";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";
import { TESTIMONIAL_CAROUSEL_OPTIONS } from "@/utils/owlCarouselPresets";
import { Container } from "./utility/Container";

export const Testimonial = memo(() => {
    const { carouselRef } = useOwlCarousel(TESTIMONIAL_CAROUSEL_OPTIONS);

    return (
        <Container
            outerContainerClassName="py-5 bg-testimonial"
            innerContainerClassName="py-5"
            style={{ margin: "45px 0" }}
        >

            <div className="row justify-content-end">
                <div className="col-lg-7">

                    <div
                        ref={carouselRef}
                        className="owl-carousel testimonial-carousel bg-white p-5"
                    >
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`text-center owl-item`}
                            >
                                <div className="position-relative mb-4">
                                    {/* <img
                                        className="img-fluid mx-auto"
                                        src={testimonial.imgSrc}
                                        alt=""
                                    /> */}
                                    <div
                                        className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                                        style={{
                                            width: "45px",
                                            height: "45px"
                                        }}
                                    >
                                        <i className="bi bi-chat-square-quote text-primary" />
                                    </div>
                                </div>
                                <p>{testimonial.text}</p>
                                <hr className="w-25 mx-auto" />
                                <h5 className="text-uppercase">{testimonial.name}</h5>
                                <span>{testimonial.profession}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </Container>
    );
});

Testimonial.displayName = "Testimonial";