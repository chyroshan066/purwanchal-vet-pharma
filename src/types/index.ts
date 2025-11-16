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

export interface Service extends Icon, Title {
    description: string;
}

export interface Product extends ImgSrc {
    product: string;
    price: number;
}

export interface Team extends ImgSrc, Name {
    designation: string;
    social: {
        facebookLink: string;
        twitterLink: string;
        linkedinLink: string;
    }
}

export interface Testimonial extends Name, ImgSrc, Text {
    profession: string;
}