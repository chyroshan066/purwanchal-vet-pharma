"use client";

import { Alert } from "@/components/Alert";
import { InputField } from "@/components/utility/Button/InputField";
import { SubmitButton } from "@/components/utility/Button/SubmitButton";
import { Container } from "@/components/utility/Container"
import { TitleHeader } from "@/components/utility/TitleHeader";
import { CONTACTS } from "@/constants";
import { ContactFormData, ContactFormSchema } from "@/middlewares/schema";
import { AlertState } from "@/types";
import { onSubmit } from "@/utils/contactData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const initialValues: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

export default function Contact() {
    const [alertState, setAlertState] = useState<AlertState>({
        isVisible: false,
        type: "success",
        message: "",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<ContactFormData>({
        defaultValues: initialValues,
        resolver: zodResolver(ContactFormSchema),
        mode: "onChange", // Enable real-time validation for better UX
        reValidateMode: "onChange", // Re-validate on every change
        criteriaMode: "all", // Show all validation errors
        shouldFocusError: true, // Focus on error field
    });

    const showAlert = useCallback((
        type: AlertState["type"],
        message: string,
        title?: string
    ) => {
        setAlertState({
            isVisible: true,
            type,
            message,
            title,
        });
    }, []);

    const hideAlert = useCallback(() => {
        setAlertState(prev => ({
            ...prev,
            isVisible: false,
        }));
    }, []);

    const handleFormSubmit = useCallback(async (data: ContactFormData) => {
        try {
            await onSubmit(data);

            showAlert(
                "success",
                "Thank you! Your message has been sent successfully. We look forward to serving you.",
                "Message Sent!"
            );

            reset(initialValues);
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : "Something went wrong while sending a message. Please try again.";

            showAlert(
                "error",
                errorMessage,
                "Sending Failed"
            );

            console.error('Message Sending error:', error);
        }
    }, [reset, showAlert]);

    const onFormSubmit = handleSubmit(handleFormSubmit);

    const isButtonDisabled = useMemo(
        () => isSubmitting,
        [isSubmitting]
    );

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
                            <div className="col-12">
                                <InputField
                                    id="name"
                                    placeholder="Your Name"
                                    register={register("name")}
                                    error={errors.name?.message}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="col-12">
                                <InputField
                                    id="email"
                                    placeholder="Your Email"
                                    register={register("email")}
                                    error={errors.email?.message}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="col-12">
                                <InputField
                                    id="phone"
                                    type="tel"
                                    placeholder="Your Phone"
                                    register={register("phone")}
                                    error={errors.phone?.message}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="col-12">
                                <InputField
                                    id="message"
                                    placeholder="Message"
                                    register={register("message")}
                                    isTextarea={true}
                                    error={errors.message?.message}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="col-12">
                                <SubmitButton
                                    isButtonDisabled={isButtonDisabled}
                                    btnText={buttonText}
                                />
                            </div>

                        </div>
                    </form>
                </div>

                <div className="col-lg-5">
                    <div className="bg-light mb-5 p-5">
                        {CONTACTS.map((contact, index) => (
                            <div
                                key={index}
                                className="d-flex align-items-center mb-2"
                            >
                                <i className={`bi ${contact.icon} fs-1 text-primary me-3`} />
                                <div className="text-start">
                                    <h6 className="text-uppercase mb-1">{contact.header}</h6>
                                    <span>{contact.text}</span>
                                </div>
                            </div>
                        ))}
                        <div>
                            {/* <iframe className="position-relative w-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0" style={{height: "205px", border:"0"}} allowFullScreen="" aria-hidden="false"
                                tabindex="0"></iframe> */}
                        </div>
                    </div>
                </div>

            </div>

        </Container>
    </>
    );
}