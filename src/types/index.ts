export interface Children {
    children: React.ReactNode;
}

export interface ClassName {
    className?: string
}

export interface Title {
    title?: string;
}

export interface Message {
    message: string;
}

export interface IsVisible {
    isVisible: boolean;
}

export interface AlertState extends Title, Message, IsVisible {
    type: "success" | "error";
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

export interface Name {
    name: string;
}

export interface Href {
    href: string;
}

export interface Description {
    description: string;
}

export interface Email {
    email: string;
}

export interface Contact extends Icon, Text, Header, Href {}
export interface NavLink extends Name, Href {}
export interface SocialLink extends Href, Icon {}
export interface Service extends Icon, Title {}

export interface Product extends ImgSrc {
    product: string;
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