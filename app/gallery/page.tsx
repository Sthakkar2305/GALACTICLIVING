import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageTransition } from "@/components/ui/Motion";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dynamic Gallery",
  description: "Explore Galactic Living rooms, amenities, lounges, and property photos in a dynamic masonry gallery."
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <section className="bg-galactic-black pb-16 pt-32 text-white">
        <div className="container-lux">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Dynamic gallery</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight md:text-7xl">Rooms, lounges, meals, and the details that matter.</h1>
          <p className="mt-5 max-w-2xl text-white/62">Masonry layout, category filters, lazy-loaded images, hover zoom, and lightbox preview.</p>
        </div>
      </section>
      <section className="container-lux py-14">
        <GalleryGrid items={galleryItems} />
      </section>
    </PageTransition>
  );
}
