import { Instrument_Serif, Space_Mono, Hanken_Grotesk, Outfit, Syne } from "next/font/google";
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

export const metadata = {
  title: "Yep i can,Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${spaceMono.variable} ${hankenGrotesk.variable} ${outfit.variable} ${syne.variable} antialiased`}
      >
        <FloatingDock />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
