import { memo } from "react";

export const Container = memo(({
    children
}: { children: React.ReactNode }) => (
    <div className="container-fluid py-5">
        <div className="container">
            {children}
        </div>
    </div>
));

Container.displayName = "Container";