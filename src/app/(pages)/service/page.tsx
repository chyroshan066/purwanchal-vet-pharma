import { Services } from "@/components/Services/Services";
import { baseURL } from "@/constants";
import { Metadata } from "next";
// import { Testimonial } from "@/components/Testimonial";

export const metadata: Metadata = {
    title: "Veterinary Services - Purwanchal Vet Pharma | Comprehensive Pet Care in Itahari, Sunsari",
    description: "Expert veterinary services at Purwanchal Vet Pharma in Itahari-04, Sunsari, Nepal. We offer pet checkups, vaccinations, surgery, grooming, emergency care, diagnostic testing, and comprehensive animal healthcare services.",
    keywords: [
        "veterinary services Itahari",
        "pet care services Sunsari Nepal",
        "animal healthcare Itahari-04",
        "pet vaccination Purva Line",
        "veterinary surgery Itahari",
        "pet grooming services Sunsari",
        "emergency vet care Nepal",
        "pet health checkup Itahari",
        "animal diagnostic testing Sunsari",
        "pet dental care Itahari",
        "veterinary consultation Nepal",
        "pet wellness services Sunsari",
        "animal surgery Itahari",
        "pet training services Nepal",
        "livestock veterinary care Sunsari",
        "farm animal services Itahari",
        "pet deworming services Nepal",
        "veterinary laboratory Itahari",
        "pet x-ray services Sunsari",
        "animal ultrasound Itahari",
        "pet boarding services Nepal",
        "home vet visits Itahari",
        "pet microchipping Sunsari",
        "veterinary pharmacy services",
        "comprehensive pet care Itahari",
        "animal wellness programs Nepal"
    ],
    alternates: {
        canonical: "/service",
    },
    openGraph: {
        title: "Veterinary Services - Comprehensive Pet Care at Purwanchal Vet Pharma",
        description: "Professional veterinary services in Itahari-04, Sunsari, Nepal. From routine checkups to emergency care, surgery, grooming, and diagnostic testing - we provide complete animal healthcare solutions.",
        url: `${baseURL}/service`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Veterinary Services at Purwanchal Vet Pharma - Comprehensive Pet Care in Itahari, Sunsari, Nepal",
            }
        ],
    },
};

export default function ServicePage() {
    return (
        <>
            <Services className="mt-5" />
            {/* <Testimonial /> */}
        </>
    );
}