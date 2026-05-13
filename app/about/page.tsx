import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageTransition } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "About",
  description: "About Galactic Living, a premium managed PG and hostel platform."
};

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="container-lux grid gap-10 pb-20 pt-32 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">About Galactic Living</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">Hospitality thinking for modern PG life.</h1>
          <p className="mt-6 text-lg leading-8 text-black/58">
            We blend hostel affordability with boutique hospitality: cleaner rooms, responsive support, curated meals, community spaces, and digital-first operations.
          </p>
          <div className="mt-8 grid gap-3">
            {["Fully managed homes", "Transparent pricing", "Safety-first operations", "Resident-first service culture"].map((item) => (
              <div key={item} className="flex items-center gap-3 font-bold">
                <CheckCircle2 className="text-galactic-red" /> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-luxury">
          <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" alt="Modern co-living lounge" fill className="object-cover" />
        </div>
      </section>
    </PageTransition>
  );
}
