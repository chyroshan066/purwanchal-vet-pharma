import { Title } from "@/types";
import { memo } from "react";

interface TitleHeaderProps extends Title {
    subTitle: string;
    style?: React.CSSProperties;
}

export const TitleHeader = memo(({
    title, subTitle, style
}: TitleHeaderProps) => (
    <div
        className="border-start border-5 border-primary ps-5 mb-5"
        style={style}
    >
        <h6 className="text-primary text-uppercase">{title}</h6>
        <h1 className="display-5 text-uppercase mb-0">{subTitle}</h1>
    </div>
));

TitleHeader.displayName = "TitleHeader";