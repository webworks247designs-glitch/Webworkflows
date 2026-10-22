import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const baseUrl = "https://webworkflows-owh1.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Freelance Web Designer in Hyderabad | Webworkflo's",
    template: "%s | Webworkflo's",
  },
  description:
    "Expert freelance web designer and frontend developer in Hyderabad. I design, build, and launch fast, high-converting websites for small businesses, startups, and creators.",
  keywords: [
    "Webworkflo's",
    "Webworkflows",
    "Freelance Web Designer in Hyderabad",
    "Web Designer Hyderabad",
    "Frontend Developer Hyderabad",
    "Website Designer for Small Business Hyderabad",
  ],
  authors: [{ name: "Webworkflo's", url: baseUrl }],
  creator: "Webworkflo's",
  publisher: "Webworkflo's",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Freelance Web Designer in Hyderabad | Webworkflo's",
    description:
      "Expert freelance web designer and frontend developer in Hyderabad. I design, build, and launch fast, high-converting websites for small businesses, startups, and creators.",
    url: baseUrl,
    siteName: "Webworkflo's",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "Webworkflo's - Freelance Web Designer in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Designer in Hyderabad | Webworkflo's",
    description:
      "Expert freelance web designer and frontend developer in Hyderabad. Custom, fast websites for small businesses.",
    images: ["/images/LOGO.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1027" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Webworkflo's",
      alternateName: ["Webworkflows", "Web Workflows", "Webworkflos"],
      description: "Freelance web designer and frontend developer in Hyderabad.",
      inLanguage: "en-IN",
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Webworkflo's",
      alternateName: ["Webworkflows", "Web Workflows", "Webworkflos"],
      url: baseUrl,
      logo: `${baseUrl}/images/LOGO.jpg`,
      image: `${baseUrl}/images/LOGO.jpg`,
      description:
        "Freelance web designer and frontend developer in Hyderabad crafting high-converting, modern websites for small businesses, startups, and creators.",
      email: "webworks247designs@gmail.com",
      telephone: "+919959896378",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.google.co.in/search?q=Webworkflo%27s&ludocid=13756383820960255399",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+919959896378",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Telugu", "Hindi"],
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#business`,
      name: "Webworkflo's",
      parentOrganization: {
        "@id": `${baseUrl}/#organization`,
      },
      alternateName: ["Webworkflows", "Web Workflows"],
      url: baseUrl,
      telephone: "+919959896378",
      email: "webworks247designs@gmail.com",
      priceRange: "₹₹",
      description:
        "Freelance web designer and frontend developer in Hyderabad crafting high-converting, modern websites for small businesses, startups, and creators.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.385044,
        longitude: 78.486671,
      },
      areaServed: {
        "@type": "City",
        name: "Hyderabad",
      },
      sameAs: [
        "https://www.google.co.in/search?q=Webworkflo%27s&ludocid=13756383820960255399",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best freelance website designer in Hyderabad for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Webworkflo's specializes in high-converting, custom websites and landing pages for small businesses, startups, clinics, and local services in Hyderabad. Unlike slow traditional agencies that use bulky templates, we build clean, bespoke Next.js websites that load in under 0.5 seconds, rank on Google, and convert visitors into WhatsApp inquiries.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a website designer in Hyderabad charge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website design in Hyderabad typically ranges from ₹14,999 for high-converting single landing pages up to ₹34,999+ for full custom multi-page business websites. We also offer a performance-aligned Pay-Per-Enquiry model where you only pay ₹299 per verified customer enquiry after a nominal setup.",
          },
        },
        {
          "@type": "Question",
          name: "Do you serve businesses across all areas of Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We work with clients across all major hubs in Hyderabad, including Hitec City, Madhapur, Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, Kukatpally, and Secunderabad. We collaborate smoothly via WhatsApp, Google Meet, and direct founder phone access.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to design and launch my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A high-impact landing page takes 3 to 5 business days. A complete 4 to 8-page business website takes 10 to 14 days. We work in rapid sprint milestones with zero agency bureaucracy so you can start getting leads fast.",
          },
        },
        {
          "@type": "Question",
          name: "Will my website rank on Google Search and Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every website we build includes full Technical SEO: sub-0.5s loading speed (100/100 Core Web Vitals), clean semantic HTML, mobile responsiveness, XML sitemaps, robots.txt, and LocalBusiness JSON-LD Schema markup. We also help connect your site to your Google Business Profile.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer support and maintenance after launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every build comes with 30 days of complimentary post-launch support and bug fixes. After that, we provide low-cost monthly maintenance retainers for content updates, speed monitoring, and ongoing SEO improvements.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bricolage.variable} ${figtree.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
