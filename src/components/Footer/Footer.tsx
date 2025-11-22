"use client";

import { memo, useMemo } from "react";
import { Container } from "../utility/Container";
import { CONTACTS, NAVLINKS, SOCIALLINKS } from "@/constants";
import { Children, Header } from "@/types";
import Link from "next/link";
import styles from "./Footer.module.css";
import { SubscriptionFormData, SubscriptionFormSchema } from "@/middlewares/schema";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { onSubscriptionSubmit } from "@/utils/subscriptionData";
import { Alert } from "../Alert";
import { ErrorMessage, InputField } from "../utility/InputField/InputField";
import { SubmitButton } from "../utility/Button/SubmitButton";

interface FooterColumnProps extends Header, Children { }

const initialSubscriptionValues: SubscriptionFormData = {
    email: "",
};

const FooterColumn = memo(({
    children, header
}: FooterColumnProps) => (
    <div className="col-lg-4 col-md-6">
        <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">{header}</h5>
        {children}
    </div>
));

FooterColumn.displayName = "FooterColumn";

export const Footer = memo(() => {
    const {
        register,
        formState: {
            errors,
            isSubmitting
        },
        onFormSubmit,
        isButtonDisabled,
        alertState,
        hideAlert,
    } = useFormSubmission<SubscriptionFormData>({
        schema: SubscriptionFormSchema,
        defaultValues: initialSubscriptionValues,
        onSubmit: onSubscriptionSubmit,
        successMessage: "Thank you for subscribing! You'll receive our latest news and offers.",
        successTitle: "Subscribed!",
        errorTitle: "Subscription Failed",
        errorMessage: "Something went wrong while subscribing. Please try again.",
    });

    const buttonText = useMemo(
        () => isSubmitting ? "Subscribing..." : "Subscribe",
        [isSubmitting]
    );

    return (
        <>
            <Alert
                type={alertState.type}
                title={alertState.title}
                message={alertState.message}
                isVisible={alertState.isVisible}
                onDismiss={hideAlert}
                autoDismiss={true}
                autoDismissDelay={6000}
                className="sm:max-w-md"
            />

            <Container
                outerContainerClassName="bg-light mt-5 py-5"
                innerContainerClassName="pt-5"
            >

                <div className="row g-5">

                    <FooterColumn header="Get In Touch">
                        <p className="mb-4 shade-gray">Have questions about our services or need veterinary assistance? We&apos;re here to help. Reach out to our friendly team for appointments, consultations, or any inquiries about your pet&apos;s health and wellbeing.</p>
                        {CONTACTS.map((contact, index) => (
                            <p
                                key={index}
                                className={`${index < 2 ? 'mb-2' : ''} shade-gray`}
                            >
                                <i className={`bi ${contact.icon} text-primary me-2`} />
                                {contact.text}
                            </p>
                        ))}
                    </FooterColumn>

                    <FooterColumn header="Quick Links">
                        <div className="d-flex flex-column justify-content-start">
                            {NAVLINKS.map((link, index) => (
                                <Link
                                    key={index}
                                    className={`mb-2 ${styles.shadeGray}`}
                                    href={link.href}
                                >
                                    <i className="bi bi-arrow-right text-primary me-2" />
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                className={`mb-2 ${styles.shadeGray}`}
                                href="/contact"
                            >
                                <i className="bi bi-arrow-right text-primary me-2" />
                                Contact
                            </Link>
                        </div>
                    </FooterColumn>

                    <FooterColumn header="Newsletter">

                        <form
                            onSubmit={onFormSubmit}
                            noValidate
                        >
                            <div>
                                <div className="d-flex">
                                    <InputField
                                        id="email"
                                        placeholder="Your Email"
                                        register={register("email")}
                                        error={errors.email?.message}
                                        disabled={isSubmitting}
                                        className={`form-control p-3 ${styles.noRounded}`}
                                        showError={false}
                                    />

                                    <SubmitButton
                                        isButtonDisabled={isButtonDisabled}
                                        btnText={buttonText}
                                    />
                                </div>

                                <div className={styles.errorContainer}>
                                    {errors.email?.message && <ErrorMessage message={errors.email.message} />}
                                </div>
                            </div>
                        </form>

                        <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            {SOCIALLINKS.map((social, index) => (
                                <a
                                    key={index}
                                    className={`btn btn-outline-primary btn-square me-2 ${styles.noRounded}`}
                                    href={social.href}
                                    target="_blank"
                                >
                                    <i className={`bi ${social.icon}`} />
                                </a>
                            ))}
                        </div>
                    </FooterColumn>

                </div>
            </Container>

            <Container
                outerContainerClassName="bg-dark text-white-50 py-4"
            >
                <div className="row g-5">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0">
                            &copy; <Link className="text-white no-underline" href="/">Purwanchal Vet Pharma</Link>. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0">
                            Designed by <a className="text-white no-underline" target="_blank" href="https://github.com/chyroshan066">Roshan</a>
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
});

Footer.displayName = "Footer";