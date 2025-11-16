"use client";

import { ContactFormData } from "@/middlewares/schema";
import { ClassName } from "@/types";
import { memo } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps extends ClassName {
    id: keyof ContactFormData;
    placeholder?: string;
    type?: string;
    register: UseFormRegister<ContactFormData> | UseFormRegisterReturn;
    error?: string;
    disabled?: boolean;
    isTextarea?: boolean;
};

// export const ErrorMessage = memo(({
//     message
// }: {
//     message?: string
// }) => {
//     if (!message) return null;

//     return <span style={{
//         color: 'var(--lavender-blue)',
//         fontSize: '0.875rem !important',
//         display: 'block',
//         fontFamily: 'var(--fontFamily-roboto)',
//         marginTop: '0',
//         paddingTop: '0',
//         lineHeight: '1.2'
//     }}>
//         {message}
//     </span>;
// });

// ErrorMessage.displayName = "ErrorMessage";

export const InputField = memo((
    {
        id,
        placeholder,
        type = "text",
        register,
        // error,
        disabled,
        isTextarea = false,
        className = "form-control bg-light border-0 px-4"
    }: FormFieldProps
) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (typeof register === 'object' && 'onChange' in register && register.onChange) {
            register.onChange(e);
        }
    };

    const getRegisterProps = () => {
        if (typeof register === 'function') {
            // If register is a function (UseFormRegister), call it with the field id
            return register(id);
        } else {
            // If register is already an object (UseFormRegisterReturn), return it as is
            return register;
        }
    };

    if (isTextarea) {
        const registerProps = getRegisterProps();

        return (
            <div>
                <textarea
                    {...registerProps}
                    placeholder={placeholder}
                    autoComplete="off"
                    className="form-control bg-light border-0 px-4 py-3"
                    disabled={disabled}
                    onChange={handleInputChange}
                    rows={8}
                />
                {/* <ErrorMessage message={error} /> */}
            </div>
        );
    }

    const registerProps = getRegisterProps();

    return (
        <div>
            <input
                {...registerProps}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                className={className}
                onChange={handleInputChange}
                disabled={disabled}
                style={{ height: "55px" }}
            />
            {/* <ErrorMessage message={error} /> */}
        </div>
    );
});

InputField.displayName = "FormField";