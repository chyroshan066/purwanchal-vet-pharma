import { Title } from "@/types";
import { memo } from "react";

interface TitleHeaderProps extends Title {
    subTitle: string;
    style?: React.CSSProperties;
    color?: string
}

export const TitleHeader = memo(({
    title, subTitle, style, color = "primary"
}: TitleHeaderProps) => (
    <div
        className={`border-start border-5 border-${color} ps-5 mb-5`}
        style={style}
    >
        <h6 className={`text-${color} text-uppercase`}>{title}</h6>
        <h1 className={`display-5 text-uppercase mb-0 ${color === "dark" && "text-white"}`}>{subTitle}</h1>
    </div>
));

TitleHeader.displayName = "TitleHeader";