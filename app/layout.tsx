import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { contact } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://galacticliving.com"),
  title: {
    default: "Galactic Living | Premium PG & Hostel Living in Ahmedabad",
    template: "%s | Galactic Living"
  },
  description: "Luxury PG, hostel, and co-living homes with meals, WiFi, laundry, security, housekeeping, and premium resident support.",
  openGraph: {
    title: "Galactic Living",
    description: "Premium PG and hostel living for students and working professionals.",
    url: "/",
    siteName: "Galactic Living",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Galactic Living",
    address: "Ahmedabad, Gujarat",
    telephone: `+91 ${contact.phone}`,
    email: contact.email,
    amenityFeature: ["WiFi", "Meals", "Laundry", "Security", "Housekeeping", "AC Rooms"].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name
    }))
  };

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
