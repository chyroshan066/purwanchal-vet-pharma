import { About } from "@/components/About/About";
import { baseURL } from "@/constants";
import { Metadata } from "next";
// import { Offer } from "@/components/Offer";
import { Team } from "@/components/Team/Team";

export const metadata: Metadata = {
    title: "About Us - Purwanchal Vet Pharma | Expert Veterinary Team in Itahari, Sunsari",
    description: "Meet the dedicated veterinary team at Purwanchal Vet Pharma in Itahari-04, Sunsari, Nepal. Learn about our mission to provide exceptional animal healthcare, our experienced veterinarians, and our commitment to pet wellness in Eastern Nepal.",
    keywords: [
        "about Purwanchal Vet Pharma",
        "veterinary team Itahari",
        "vet doctors Sunsari Nepal",
        "veterinary clinic history",
        "experienced veterinarian Itahari",
        "qualified vet Sunsari",
        "animal healthcare specialists Nepal",
        "veterinary professionals Itahari-04",
        "certified veterinarian Nepal",
        "pet care experts Sunsari",
        "veterinary qualifications Nepal",
        "vet clinic mission Itahari",
        "animal welfare Eastern Nepal",
        "trusted veterinarian Purva Line",
        "veterinary credentials Nepal",
        "best vet clinic Itahari",
        "experienced animal care Sunsari",
        "veterinary expertise Nepal",
        "Purwanchal Vet Pharma team",
        "compassionate pet care Itahari"
    ],
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Purwanchal Vet Pharma - Expert Veterinary Team in Itahari, Sunsari",
        description: "Discover the expertise and dedication of Purwanchal Vet Pharma's veterinary team. Serving pets and animals in Itahari-04, Sunsari with compassionate care and advanced veterinary services.",
        url: `${baseURL}/about`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Purwanchal Vet Pharma Team - Expert Veterinary Care in Itahari, Sunsari, Nepal",
            }
        ],
    },
};

export default function AboutPage() {
    return (
        <>
            <About className="mt-5" />
            {/* <Offer /> */}
            <Team />
        </>
    );
}