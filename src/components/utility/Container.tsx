import { Children } from "@/types";
import { memo } from "react";

interface ContainerProps extends Children {
    outerContainerClassName?: string;
    innerContainerClassName?: string;
    style?: React.CSSProperties;
}

export const Container = memo(({
    children, outerContainerClassName, innerContainerClassName, style
}: ContainerProps) => (
    <div
        className={`container-fluid ${outerContainerClassName}`}
        style={style}
    >
        <div className={`container ${innerContainerClassName}`}>
            {children}
        </div>
    </div>
));

Container.displayName = "Container";