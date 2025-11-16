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

export interface ImgSrc {
    imgSrc: string;
}

export interface Name {
    name: string;
}

export interface Href {
    href: string;
}

export interface NavLink extends Name, Href {}