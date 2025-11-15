import { memo } from "react";
import { TitleHeader } from "../utility/TitleHeader";

export const Services = memo(() => (
    <div className="container-fluid py-5">
        <div className="container">

            <TitleHeader
                title="About Us"
                subTitle="We Keep Your Pets Happy All Time"
                style={{ maxWidth: "600px" }}
            />

            <div className="row g-5">
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="flaticon-house display-1 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a
                                className="text-primary text-uppercase"
                                href=""
                            >
                                Read More<i className="bi bi-chevron-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="flaticon-food display-1 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a className="text-primary text-uppercase" href="">Read More<i className="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="flaticon-grooming display-1 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a className="text-primary text-uppercase" href="">Read More<i className="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="flaticon-cat display-1 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Training</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a className="text-primary text-uppercase" href="">Read More<i className="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="flaticon-dog display-1 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a className="text-primary text-uppercase" href="">Read More<i className="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-item bg-light d-flex p-4">
                        <i className="flaticon-vaccine display-1 text-primary me-4"></i>
                        <div>
                            <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a className="text-primary text-uppercase" href="">Read More<i className="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
));

Services.displayName = "Services";