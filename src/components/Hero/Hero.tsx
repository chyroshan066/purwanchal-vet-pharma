"use client";

import { memo, useState } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export const Hero = memo(() => {
    const [videoSrc, setVideoSrc] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const handlePlayClick = (src: string) => {
        setVideoSrc(src);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return <>
        <div className={`container-fluid bg-primary py-5 mb-5 ${styles.hero}`}>
            <div className="container py-5">
                <div className="row justify-content-start">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h1 className={`display-1 text-uppercase mb-lg-4 ${styles.heroTitle}`}>Pet Shop</h1>
                        <h1 className={`text-uppercase mb-lg-4 ${styles.heroSubtitle}`}>Make Your Pets Happy</h1>
                        <p className={`fs-4 mb-lg-4 ${styles.heroText}`}>
                            Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd. Kasd clita ea justo est sed kasd erat clita sea
                        </p>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                            <Link
                                href="#"
                                className={`py-md-3 px-md-5 me-5 ${styles.btnLight}`}
                            >
                                Read More
                            </Link>
                            <button
                                type="button"
                                className={styles.btnPlay}
                                onClick={() => handlePlayClick('https://www.youtube.com/embed/DWRcNpR6Kdc')}
                            >
                                <span />
                            </button>
                            <h5 className={`font-weight-normal text-white m-0 ms-4 d-none d-sm-block ${styles.playText}`}>Play Video</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Video Modal */}
        <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            id="videoModal"
            tabIndex={-1}
            aria-labelledby="videoModalLabel"
            aria-hidden={!showModal}
            style={{ display: showModal ? 'block' : 'none' }}
        >
            <div className={`modal-dialog modal-dialog-centered modal-lg ${styles.modalDialog}`}>
                <div className={`modal-content ${styles.modalContent}`}>
                    <div className="modal-header">
                        <h5
                            className="modal-title fw-bold text-dark"
                            id="videoModalLabel"
                        >Youtube Video</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleModalClose}
                            aria-label="Close"
                        />
                    </div>
                    <div className={`modal-body ${styles.modalBody}`}>
                        <div className="ratio ratio-16x9">
                            {/* <iframe
                                id="video"
                                src={showModal ? `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0` : ''}
                                title="YouTube video"
                                allowFullScreen
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {showModal &&
            <div
                className="modal-backdrop fade show"
                onClick={handleModalClose}
            />
        }
    </>
});

Hero.displayName = "Hero";
