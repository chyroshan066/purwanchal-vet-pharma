import Link from "next/link";
import { memo } from "react";
import styles from "./Button.module.css";
import { Text } from "@/types";

interface ButtonProps extends Text {
    variant?: string;
}

export const Button = memo(({
    text, variant = "btnOutlineLight"
}: ButtonProps) => (
    <Link
        href="#"
        className={`py-md-3 px-md-5 me-5 ${styles.btn} ${styles[variant]}`}
    >
        {text}
    </Link>
));