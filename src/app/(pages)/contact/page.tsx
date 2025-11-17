"use client";

import { Alert } from "@/components/Alert";
import { InputField } from "@/components/utility/InputField/InputField";
import { SubmitButton } from "@/components/utility/Button/SubmitButton";
import { Container } from "@/components/utility/Container"
import { TitleHeader } from "@/components/utility/TitleHeader";
import { CONTACTS } from "@/constants";
import { ContactFormData, ContactFormSchema } from "@/middlewares/schema";
import { onSubmit } from "@/utils/contactData";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useMemo } from "react";
import Link from "next/link";
import styles from "@/components/About/About.module.css";

const initialValues: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

interface Field {
    id: "name" | "email" | "phone" | "message";
    placeholder: string;
}

const FIELDS: Field[] = [
    {
        id: "name",
        placeholder: "Your Name",
    },
    {
        id: "email",
        placeholder: "Your Email",
    },
    {
        id: "phone",
        placeholder: "Your Phone",
    },
    {
        id: "message",
        placeholder: "Message",
    },
];

export default function Contact() {
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
    } = useFormSubmission<ContactFormData>({
        schema: ContactFormSchema,
        defaultValues: initialValues,
        onSubmit: onSubmit,
        successMessage: "Thank you! Your message has been sent. We look forward to serving you.",
        successTitle: "Message Sent!",
        errorTitle: "Sending Failed",
        errorMessage: "Something went wrong while sending your message. Please try again.",
    });

    const buttonText = useMemo(
        () => isSubmitting ? "Sending..." : "Send Message",
        [isSubmitting]
    );

    return (<>
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

        <Container outerContainerClassName="pt-5 mt-5">

            <TitleHeader
                title="Contact Us"
                subTitle="Please Feel Free To Contact Us"
                style={{ maxWidth: "600px" }}
            />

            <div className="row g-5">
                <div className="col-lg-7">
                    <form
                        onSubmit={onFormSubmit}
                        noValidate
                    >
                        <div className="row g-3">

                            {FIELDS.map((field, index) => (
                                <div
                                    key={index}
                                    className="col-12"
                                >
                                    <InputField
                                        id={field.id}
                                        type={field.id === "phone" ? "tel" : "text"}
                                        placeholder={field.placeholder}
                                        register={register(field.id)}
                                        isTextarea={field.id === "message" ? true : false}
                                        error={errors[field.id]?.message}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            ))}

                            <div className="col-12">
                                <SubmitButton
                                    isButtonDisabled={isButtonDisabled}
                                    btnText={buttonText}
                                    className="w-100 py-3"
                                />
                            </div>

                        </div>
                    </form>
                </div>

                <div className="col-lg-5">
                    <div className="bg-light mb-5 p-5">
                        {CONTACTS.map((contact, index) => (
                            <Link
                                href={contact.href}
                                key={index}
                                className="d-flex align-items-center mb-2 no-underline"
                                target="_blank"
                            >
                                <i className={`bi ${contact.icon} fs-1 text-primary me-3`} />
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1 text-dark">{contact.header}</h6>
                                    <span className={styles.shadeGray}>{contact.text}</span>
                                </div>
                            </Link>
                        ))}
                        <div>
                            <iframe
                                className="position-relative w-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6709.9215467983595!2d87.27605558617391!3d26.66295139211589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d0078cc97f7%3A0x6b4b147d8cbd18a9!2sPurwanchal%20Vet%20Pharma%20-%20Veterinary%20Clinic%20%26%20Lab!5e0!3m2!1sen!2snp!4v1763358081539!5m2!1sen!2snp"
                                style={{
                                    height: "205px",
                                    border: 0
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"  // Security
                                aria-hidden="false"
                                tabIndex={0}
                                title="Business Location Map"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </Container>
    </>
    );
}