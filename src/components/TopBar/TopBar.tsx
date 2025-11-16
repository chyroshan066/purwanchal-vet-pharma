import { memo } from "react";
import styles from './TopBar.module.css';
import { CONTACTS } from "@/constants";

export const TopBar = memo(() => (
    <div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gx-0">

            {CONTACTS.map((contact, index) => (
                <div
                    key={index}
                    className={`col-lg-4 text-center py-2 ${index === 1 ? "border-start border-end" : ""}`}
                >
                    <div className="d-inline-flex align-items-center justify-content-center">
                        <i className={`bi me-3 ${contact.icon} ${styles.icon}`}></i>
                        <div className="text-start">
                            <h6 className={`mb-1 ${styles.heading}`}>{contact.header}</h6>
                            <span className={styles.text}>{contact.text}</span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
));

TopBar.displayName = "TopBar";