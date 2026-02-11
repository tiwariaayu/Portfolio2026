import {
  Instrument_Serif,
  Space_Mono,
  Hanken_Grotesk,
  Outfit,
  Syne,
  Caveat,
} from "next/font/google";
import "./globals.css";
import FloatingDock from "@/components/FloatingDock";
import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL("https://tiwariayu.space"),
  title: {
    default: "Yep i can,Code | Ayushman Portfolio",
    template: "%s | Ayushman",
  },
  description:
    "Explore the portfolio of Ayushman, a Full Stack Developer specializing in building digital experiences. View projects, open source contributions, and more.",
  keywords: [
    "Ayushman",
    "Portfolio",
    "Full Stack Developer",
    "Web Development",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Ayushman" }],
  openGraph: {
    title: "Yep i can,Code | Ayushman Portfolio",
    description:
      "Explore the portfolio of Ayushman, a Full Stack Developer specializing in building digital experiences.",
    url: "https://tiwariayu.space",
    siteName: "Ayushman Portfolio",
    images: [
      {
        url: "https://tiwariayu.space/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayushman Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yep i can,Code | Ayushman Portfolio",
    description:
      "Explore the portfolio of Ayushman, a Full Stack Developer specializing in building digital experiences.",
    creator: "@tiwariayu",
    images: ["https://tiwariayu.space/twitter-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayushman",
    url: "https://tiwariayu.space",
    sameAs: [   
      "https://github.com/tiwariaayu",
      "https://www.linkedin.com/in/ayushman-037379264/",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${spaceMono.variable} ${hankenGrotesk.variable} ${outfit.variable} ${syne.variable} ${caveat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FloatingDock />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
