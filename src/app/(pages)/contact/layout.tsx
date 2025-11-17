import type { Metadata } from "next";
import { Children } from "@/types";
import { baseURL } from "@/constants";

export const metadata: Metadata = {
    title: "Contact Us - Purwanchal Vet Pharma | Book Appointment in Itahari, Sunsari",
    description: "Contact Purwanchal Vet Pharma for veterinary services in Itahari-04, Sunsari, Nepal. Book appointments, emergency care, or inquiries. Visit us at Purva Line or call for immediate pet healthcare assistance.",
    keywords: [
        "contact Purwanchal Vet Pharma",
        "vet clinic contact Itahari",
        "book veterinary appointment Sunsari",
        "vet phone number Itahari",
        "veterinary clinic address Purva Line",
        "emergency vet contact Nepal",
        "pet care appointment Itahari-04",
        "vet clinic location Sunsari",
        "veterinary consultation booking",
        "pet emergency contact Itahari",
        "vet clinic hours Sunsari Nepal",
        "veterinary services inquiry",
        "pet care helpline Itahari",
        "vet clinic email Sunsari",
        "book pet checkup Itahari",
        "veterinary appointment online",
        "pet healthcare contact Nepal",
        "emergency animal care Sunsari",
        "vet directions Purva Line Itahari"
    ],
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Purwanchal Vet Pharma - Book Your Pet's Appointment Today",
        description: "Get in touch with Purwanchal Vet Pharma in Itahari-04, Sunsari, Nepal. Book appointments, emergency services, or general inquiries for your pet's healthcare needs.",
        url: `${baseURL}/contact`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Contact Purwanchal Vet Pharma - Veterinary Care in Itahari, Sunsari, Nepal",
            }
        ],
    },
};

export default function ContactLayout({
    children,
}: Readonly<Children>) {
    return <>{children}</>;
}