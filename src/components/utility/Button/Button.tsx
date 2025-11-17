import Link from "next/link";
import { memo } from "react";
import styles from "./Button.module.css";
import { Href, Text } from "@/types";

interface ButtonProps extends Text, Href {
    variant?: string;
}

export const Button = memo(({
    text,
    href,
    variant = "btnOutlineLight"
}: ButtonProps) => (
    <Link
        href={href}
        className={`py-md-3 px-md-5 me-5 ${styles.btn} ${styles[variant]}`}
    >
        {text}
    </Link>
));

Button.displayName = "Button";