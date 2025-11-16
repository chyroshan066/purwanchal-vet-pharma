import { memo } from "react";
import { TitleHeader } from "../utility/TitleHeader";
import styles from "./Services.module.css";
import { Container } from "../utility/Container";
import { SERVICES } from "@/constants";

export const Services = memo(() => (
    <Container
        outerContainerClassName="py-5"
    >

        <TitleHeader
            title="Services"
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

    </Container>
));

Services.displayName = "Services";