// import { Offer } from "@/components/Offer";
import { Products } from "@/components/Products/Products";
import { baseURL } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veterinary Products & Medicines - Purwanchal Vet Pharma | Pet Healthcare Products in Itahari",
    description: "Shop quality veterinary pharmaceuticals, pet medicines, supplements, and animal healthcare products at Purwanchal Vet Pharma in Itahari-04, Sunsari, Nepal. Trusted products for your pet's health and wellness.",
    keywords: [
        "veterinary products Itahari",
        "pet medicines Sunsari Nepal",
        "animal pharmaceuticals Itahari",
        "vet medicines Purva Line",
        "pet supplements Itahari-04",
        "veterinary drugs Nepal",
        "animal healthcare products Sunsari",
        "pet food supplements Itahari",
        "veterinary antibiotics Nepal",
        "pet vitamins Sunsari",
        "animal nutrition products",
        "pet deworming medicine Itahari",
        "veterinary vaccines Nepal",
        "pet grooming products Sunsari",
        "animal care products Itahari",
        "livestock medicines Nepal",
        "pet health supplements",
        "veterinary pharmaceuticals Sunsari",
        "pet care products Itahari",
        "animal wellness products Nepal",
        "quality vet medicines Itahari",
        "pet medication Sunsari",
        "veterinary supplies Nepal",
        "pet pharmacy Itahari",
        "animal medicine store Sunsari"
    ],
    alternates: {
        canonical: "/product",
    },
    openGraph: {
        title: "Veterinary Products & Medicines - Purwanchal Vet Pharma",
        description: "Explore our range of quality veterinary pharmaceuticals, pet medicines, supplements, and animal healthcare products in Itahari-04, Sunsari, Nepal. Your trusted source for pet wellness products.",
        url: `${baseURL}/product`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Veterinary Products & Medicines at Purwanchal Vet Pharma - Itahari, Sunsari, Nepal",
            }
        ],
    },
};

export default function ProductPage() {
    return (
        <>
            <Products className="mt-5" />
            {/* <Offer /> */}
        </>
    );
}