"use client";

import { memo } from "react";
import { TitleHeader } from "../utility/TitleHeader";
import { Container } from "../utility/Container";
import styles from "./Products.module.css";
import Image from "next/image";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";
import { PRODUCT_CAROUSEL_OPTIONS } from "@/utils/owlCarouselPresets";
import { PRODUCTS } from "@/constants";
import { ClassName } from "@/types";

export const Products = memo(({
    className
}: ClassName) => {
    const { carouselRef, shouldUseCarousel } = useOwlCarousel(PRODUCT_CAROUSEL_OPTIONS);

    return (
        <Container
            outerContainerClassName={`py-5 ${className}`}
        >

            <TitleHeader
                title="Products"
                subTitle="Products For Your Best Friends"
                style={{ maxWidth: "600px" }}
            />

            <div
                ref={carouselRef}
                className={`owl-carousel ${styles.productCarousel} product-carousel`}
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
                            <Image
                                className={styles.productImage}
                                src={product.imgSrc}
                                alt={product.product}
                                width={300}
                                height={300}
                                priority={index <= 2}
                            />
                            <h6 className={`text-uppercase ${styles.productTitle}`}>{product.product}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
});

Products.displayName = "Products";