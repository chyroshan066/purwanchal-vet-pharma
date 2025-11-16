export interface Children {
    children: React.ReactNode;
}

export interface Title {
    title?: string;
}

export interface AlertState extends Title {
    isVisible: boolean;
    type: "success" | "error";
    message: string;
}

interface Icon {
    icon: string;
}

export interface Header {
    header: string;
}

export interface Text {
    text: string;
}

interface ImgSrc {
    imgSrc: string;
}

interface Name {
    name: string;
}

interface Href {
    href: string;
}

export interface Contact extends Icon, Text, Header {}
export interface NavLink extends Name, Href {}
export interface SocialLink extends Href, Icon {}

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