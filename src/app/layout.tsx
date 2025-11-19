import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../public/fonts/flaticon/flaticon.css";
import "../styles/owl.carousel.min.css";
import "./globals.css";
import "@/styles/custom-bootstrap.scss";
import ScriptsAndProviders from "@/utils/ScriptsAndProviders";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { Children } from "@/types";
import { TopBar } from "@/components/TopBar/TopBar";
import { Navbar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { baseURL } from "@/constants";
import { veterinaryClinicStructuredData, veterinaryServicesStructuredData, veterinarySpecialtiesStructuredData } from "@/constants/structured-data";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-700.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-poppins'
});

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/roboto/Roboto-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-700.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "Purwanchal Vet Pharma - Quality Veterinary Care in Itahari, Sunsari | Pet Healthcare & Animal Wellness",
  description: "Purwanchal Vet Pharma provides comprehensive veterinary services in Itahari-04, Sunsari, Nepal. Expert pet care, veterinary pharmaceuticals, grooming, training, and emergency treatment for your beloved companions.",
  keywords: [
    "veterinary pharmacy Itahari",
    "vet clinic Sunsari",
    "Purwanchal Vet Pharma",
    "pet care Itahari",
    "veterinary services Purva Line",
    "vet doctor Itahari-04",
    "pet clinic Sunsari Nepal",
    "animal care Eastern Nepal",
    "pet grooming Itahari",
    "veterinary treatment Nepal",
    "pet vaccination Itahari",
    "animal healthcare Sunsari",
    "pet surgery Itahari",
    "veterinary consultation Nepal",
    "pet medicines Nepal",
    "veterinary pharmaceuticals Itahari",
    "pet food supplements Sunsari",
    "animal healthcare products",
    "pet training Itahari",
    "diagnostic testing pets",
    "emergency vet care Sunsari",
    "home vet service Nepal",
    "pet health checkup Itahari",
    "dog care Itahari",
    "cat veterinarian Sunsari",
    "livestock treatment Nepal",
    "farm animal healthcare",
  ],
  authors: [{ name: "Purwanchal Vet Pharma" }],
  creator: "Purwanchal Vet Pharma",
  publisher: "Purwanchal Vet Pharma",
  metadataBase: new URL("https://purwanchalvetpharma.com.np"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "Purwanchal Vet Pharma - Expert Veterinary Care in Itahari, Sunsari",
    description: "Comprehensive veterinary services, pet care, grooming, and emergency treatment in Itahari-04, Sunsari, Nepal. Your trusted partner in animal wellness.",
    type: "website",
    locale: "en_US",
    url: `${baseURL}`,
    siteName: "Purwanchal Vet Pharma",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "Purwanchal Vet Pharma - Quality Veterinary Care in Itahari, Sunsari, Nepal",
      }
    ],
  },
  category: "Healthcare",
  classification: "Veterinary Services, Animal Healthcare, Pet Care",
  referrer: "origin-when-cross-origin",
  applicationName: "Purwanchal Vet Pharma",
  generator: "Next.js",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<Children>) {
  return (
    <html lang="en">

      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(veterinaryClinicStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(veterinaryServicesStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(veterinarySpecialtiesStructuredData),
          }}
        />
      </head>

      <body
        className={`${poppins.variable} ${roboto.variable}`}
        suppressHydrationWarning={true}
      >
        <ScriptsAndProviders>

          <TopBar />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />

        </ScriptsAndProviders>
        <AnalyticsWrapper />
      </body>

    </html>
  );
}
