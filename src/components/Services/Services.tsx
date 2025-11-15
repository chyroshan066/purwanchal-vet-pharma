import { memo } from "react";
import { TitleHeader } from "../utility/TitleHeader";
import { Icon, Title } from "@/types";
import styles from "./Services.module.css";

interface Service extends Icon, Title {
    description: string;
}

const SERVICES: Service[] = [
    {
        icon: "house",
        title: "Pet Boarding",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },
    {
        icon: "food",
        title: "Pet Feeding",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },
    {
        icon: "grooming",
        title: "Pet Grooming",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },
    {
        icon: "cat",
        title: "Pet Training",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },
    {
        icon: "dog",
        title: "Pet Exercise",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },
    {
        icon: "vaccine",
        title: "Pet Treatment",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },
];

export const Services = memo(() => (
    <div className="container-fluid py-5">
        <div className="container">

            <TitleHeader
                title="About Us"
                subTitle="We Keep Your Pets Happy All Time"
                style={{ maxWidth: "600px" }}
            />

            <div className="row g-5">
                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className="col-md-6"
                    >
                        <div className={`bg-light d-flex p-4 ${styles.serviceItem}`}>
                            <i className={`flaticon-${service.icon} display-1 text-primary me-4`} />
                            <div>
                                <h5 className="text-uppercase mb-3">{service.title}</h5>
                                <p className={styles.shadeGray}>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
));

Services.displayName = "Services";