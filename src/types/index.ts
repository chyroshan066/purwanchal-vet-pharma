export interface AlertState {
    isVisible: boolean;
    type: "success" | "error";
    title?: string;
    message: string;
}

export interface Icon {
    icon: string;
}

export interface Text {
    text: string;
}

export interface NavLink {
    name: string;
    href: string;
}