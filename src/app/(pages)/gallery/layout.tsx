import { Metadata } from "next";
import { baseURL } from "@/constants";
import { Children } from "@/types";

export const metadata: Metadata = {
    title: "Gallery - Purwanchal Vet Pharma | Photos & Videos of Our Veterinary Clinic in Itahari",
    description: "Explore the gallery of Purwanchal Vet Pharma in Itahari-04, Sunsari, Nepal. View photos and videos of our veterinary clinic, pet care moments, happy patients, grooming sessions, and our dedicated team in action.",
    keywords: [
        "Purwanchal Vet Pharma gallery",
        "vet clinic photos Itahari",
        "veterinary clinic images Sunsari",
        "pet care gallery Nepal",
        "vet pharma pictures Itahari-04",
        "animal clinic gallery Purva Line",
        "pet grooming photos Sunsari",
        "veterinary team photos Nepal",
        "happy pets gallery Itahari",
        "vet clinic tour Sunsari",
        "pet treatment photos Nepal",
        "animal care images Itahari",
        "veterinary services gallery",
        "pet wellness moments Sunsari",
        "vet clinic videos Itahari",
        "pet care videos Nepal",
        "veterinary facility tour",
        "animal hospital gallery Sunsari",
        "pet clinic showcase Itahari",
        "vet pharma facility Nepal"
    ],
    alternates: {
        canonical: "/gallery",
    },
    openGraph: {
        title: "Gallery - Purwanchal Vet Pharma | See Our Veterinary Clinic in Action",
        description: "Browse photos and videos from Purwanchal Vet Pharma in Itahari-04, Sunsari, Nepal. See our clinic, meet our team, and view moments of compassionate pet care and animal wellness.",
        url: `${baseURL}/gallery`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Purwanchal Vet Pharma Gallery - Veterinary Clinic Photos & Videos in Itahari, Sunsari, Nepal",
            }
        ],
    },
};

export default function ContactLayout({
    children,
}: Readonly<Children>) {
    return <>{children}</>;
}