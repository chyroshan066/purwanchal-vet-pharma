import { memo } from "react";
import styles from "../../Footer/Footer.module.css";
import { ClassName } from "@/types";

interface SubmitButtonProps extends ClassName {
    isButtonDisabled?: boolean;
    btnText: string;
}

export const SubmitButton = memo(({
    isButtonDisabled = false,
    btnText,
    className
}: SubmitButtonProps) => (
    <button
        type="submit"
        className={`btn btn-primary ${className} ${styles.noRounded}`}
        disabled={isButtonDisabled}
    >
        {btnText}
    </button>
));

SubmitButton.displayName = "SubmitButton";