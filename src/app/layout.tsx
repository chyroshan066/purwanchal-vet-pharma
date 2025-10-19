import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../public/fonts/flaticon/flaticon.css";
import "../styles/owl.carousel.min.css";
import Script from 'next/script';
import JQueryProvider from "@/utils/jQueryProvider";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--poppins'
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
  variable: '--roboto'
});

export const metadata: Metadata = {
  title: "<website_title>",
  description: "<website_description>",
  keywords: [
    "<search_keyword1>",
    "<search_keyword2>",
    // ..... and so on
  ],
  authors: [{ name: "<website_name>" }],
  creator: "<website_name>",
  publisher: "<website_name>",
  metadataBase: new URL("https://purwanchalvetpharma.com"),
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
    title: "<website_title>",
    description: "<website_description>",
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "<website_name>",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "<website_name> Preview",
      }
    ],
  },
  category: "<website_category>",
  classification: "<website_classification>",
  referrer: "origin-when-cross-origin",
  applicationName: "<website_name>",
  generator: "Next.js",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify("structured_data_from_constants"),
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script id="check-plugins" strategy="afterInteractive">
          {`
    console.log('jQuery loaded:', typeof window.$ !== 'undefined');
    console.log('easyPieChart loaded:', typeof window.$.fn.easyPieChart !== 'undefined');
  `}
        </Script>
      </head>

      <body
        className={`${poppins.variable} ${roboto.variable}`}
        suppressHydrationWarning={true}
      >
        <JQueryProvider>
          {children}
        </JQueryProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
