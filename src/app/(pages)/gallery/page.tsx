"use client";

import { memo, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/utility/Container";
import { TitleHeader } from "@/components/utility/TitleHeader";
import styles from "./_components/Gallery.module.css";
import { GALLERY_ITEMS } from "@/constants";
import { GalleryItem } from "@/types";

type FilterType = "all" | "photo" | "video";

const GalleryModal = memo(({
    item,
    onClose,
    onPrev,
    onNext,
    hasPrev,
    hasNext,
}: {
    item: GalleryItem;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    hasPrev: boolean;
    hasNext: boolean;
}) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();

            if (e.key === "ArrowLeft" && hasPrev) onPrev();

            if (e.key === "ArrowRight" && hasNext) onNext();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose, onPrev, onNext, hasPrev, hasNext]);

    return (
        <div
            className={styles.modalBackdrop}
            onClick={onClose}
        >
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}>

                <button
                    className={styles.modalClose}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <i className="bi bi-x-lg" />
                </button>

                <button
                    className={`${styles.modalNav} ${styles.modalPrev}`}
                    onClick={onPrev}
                    disabled={!hasPrev}
                    aria-label="Previous"
                >
                    <i className="bi bi-chevron-left" />
                </button>

                {item.type === "photo" ? (
                    <Image
                        src={item.src}
                        alt={item.caption || "Gallery image"}
                        width={1200}
                        height={800}
                        style={{ objectFit: "contain" }}
                        priority
                    />
                ) : (
                    <video
                        src={item.src}
                        controls
                        autoPlay
                        style={{
                            maxWidth: "100%",
                            maxHeight: "85vh"
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                )}

                <button
                    className={`${styles.modalNav} ${styles.modalNext}`}
                    onClick={onNext}
                    disabled={!hasNext}
                    aria-label="Next"
                >
                    <i className="bi bi-chevron-right" />
                </button>

                {item.caption && (
                    <p className={styles.modalCaption}>{item.caption}</p>
                )}
            </div>
        </div>
    );
});

GalleryModal.displayName = "GalleryModal";

const GalleryItemCard = memo(({
    item,
    onClick,
}: {
    item: GalleryItem;
    onClick: () => void;
}) => (
    <div
        className={styles.galleryItem}
        onClick={onClick}
    >
        {item.type === "photo" ? (
            <Image
                src={item.src}
                alt={item.caption || "Gallery image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
            />
        ) : (
            <>
                {item.thumbnail ? (
                    <Image
                        src={item.thumbnail}
                        alt={item.caption || "Video thumbnail"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                    />
                ) : (
                    <video
                        src={item.src}
                        muted
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                )}
                <span className={styles.videoIndicator}>
                    <i className="bi bi-play-fill" /> Video
                </span>
            </>
        )}
        <div className={styles.galleryOverlay}>
            <span className={styles.galleryIcon}>
                <i className={`bi ${item.type === "photo" ? "bi-zoom-in" : "bi-play-fill"}`} />
            </span>
        </div>
    </div>
));

GalleryItemCard.displayName = "GalleryItemCard";

export default function GalleryPage() {
    const [filter, setFilter] = useState<FilterType>("all");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const filteredItems = GALLERY_ITEMS.filter(item =>
        filter === "all" || item.type === filter
    );

    const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

    const openModal = useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    const goToPrev = useCallback(() => {
        setSelectedIndex(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
    }, []);

    const goToNext = useCallback(() => {
        setSelectedIndex(prev =>
            prev !== null && prev < filteredItems.length - 1 ? prev + 1 : prev
        );
    }, [filteredItems.length]);

    return (
        <>
            {/* Gallery Section */}
            <Container outerContainerClassName="mt-5 py-5">

                <TitleHeader
                    title="Gallery"
                    subTitle="Capturing Moments of Care & Joy"
                    style={{ maxWidth: "600px" }}
                />

                {/* Filter Tabs */}
                <div className={styles.filterTabs}>
                    {(["all", "photo", "video"] as FilterType[]).map((type) => (
                        <button
                            key={type}
                            className={`${styles.filterTab} ${filter === type ? styles.active : ""}`}
                            onClick={() => setFilter(type)}
                        >
                            {type === "all" ? "All" : type === "photo" ? "Photos" : "Videos"}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className={styles.galleryGrid}>
                    {filteredItems.map((item, index) => (
                        <GalleryItemCard
                            key={item.id}
                            item={item}
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-muted fs-5">No items found in this category.</p>
                    </div>
                )}
            </Container>

            {/* Modal */}
            {selectedItem && (
                <GalleryModal
                    item={selectedItem}
                    onClose={closeModal}
                    onPrev={goToPrev}
                    onNext={goToNext}
                    hasPrev={selectedIndex !== null && selectedIndex > 0}
                    hasNext={selectedIndex !== null && selectedIndex < filteredItems.length - 1}
                />
            )}
        </>
    );
}