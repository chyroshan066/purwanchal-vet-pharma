"use client";

import { memo } from 'react';
import styles from './Hero.module.css';
import { Container } from '@/components/utility/Container';
import { Button } from '@/components/utility/Button/Button';

export const Hero = memo(() => {
    // const [videoSrc, setVideoSrc] = useState<string>('');
    // const [showModal, setShowModal] = useState<boolean>(false);

    // const handlePlayClick = (src: string) => {
    //     setVideoSrc(src);
    //     setShowModal(true);
    // };

    // const handleModalClose = () => {
    //     setShowModal(false);
    // };

    return <>
        <Container
            // outerContainerClassName="bg-primary py-5 mb-5 hero"
            outerContainerClassName={`bg-primary py-5 mb-5 hero ${styles.heroSection}`}
            innerContainerClassName="py-5"
        >
            {/* <div className="row justify-content-start"> */}
            <div className={`row justify-content-start ${styles.heroContent}`}>
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className={`display-1 text-uppercase mb-lg-4 ${styles.heroTitle}`}>Purwanchal Vet Pharma</h1>
                    <h1 className={`text-uppercase mb-lg-4 ${styles.heroSubtitle}`}>Expert Veterinary Care for Your Furry Family Members</h1>
                    <p className={`fs-4 mb-lg-4 ${styles.heroText}`}>
                        From preventive wellness to emergency care, we provide comprehensive veterinary services with compassion and expertise. Your pet&apos;s health and happiness are our mission.
                    </p>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">

                        <Button
                            text="Read More"
                            href="/about"
                        />

                        {/* <button
                            type="button"
                            className={styles.btnPlay}
                            onClick={() => handlePlayClick('https://www.youtube.com/embed/DWRcNpR6Kdc')}
                        >
                            <span />
                        </button>
                        <h5 className={`font-weight-normal text-white m-0 ms-4 d-none d-sm-block ${styles.playText}`}>Play Video</h5> */}
                    </div>
                </div>
            </div>
        </Container>

        {/* Video Modal */}
        {/* <div
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
                            <iframe
                                id="video"
                                src={showModal ? `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0` : ''}
                                title="YouTube video"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* {showModal &&
            <div
                className="modal-backdrop fade show"
                onClick={handleModalClose}
            />
        } */}
    </>
});

Hero.displayName = "Hero";
