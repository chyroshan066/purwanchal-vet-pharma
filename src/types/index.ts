export interface Title {
    title?: string;
}

export interface AlertState extends Title {
    isVisible: boolean;
    type: "success" | "error";
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