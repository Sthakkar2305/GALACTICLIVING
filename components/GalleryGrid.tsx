"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { X } from "lucide-react";

type Item = {
  id: string;
  propertyId: string;
  propertyName: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export function GalleryGrid({ items }: { items: Item[] }) {
  const [category, setCategory] = useState("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category)))], [items]);
  const filtered = category === "All" ? items : items.filter((item) => item.category === category);

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${
              category === item ? "bg-galactic-red text-white shadow-redglow" : "bg-galactic-mist text-black/65 hover:bg-black hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="masonry">
        {filtered.map((item, index) => (
          <article key={item.id} className="masonry-item group cursor-pointer overflow-hidden rounded-[28px] bg-white shadow-luxury" onClick={() => setLightbox(item)}>
            <div className={`relative ${index % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">{item.category}</p>
                <h3 className="mt-1 text-xl font-black">{item.propertyName}</h3>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="font-bold">₹{item.price.toLocaleString("en-IN")} /mo</span>
                  <Link onClick={(event) => event.stopPropagation()} href={`/properties/${item.propertyId}`} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/88 p-4 backdrop-blur" onClick={() => setLightbox(null)}>
          <button className="absolute right-5 top-5 rounded-full bg-white p-3 text-black" aria-label="Close lightbox">
            <X size={20} />
          </button>
          <div className="w-full max-w-5xl overflow-hidden rounded-[30px] bg-white" onClick={(event) => event.stopPropagation()}>
            <div className="relative aspect-[16/10]">
              <Image src={lightbox.image} alt={lightbox.title} fill className="object-cover" sizes="100vw" />
            </div>
            <div className="p-5 md:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-galactic-red">{lightbox.category}</p>
              <h2 className="mt-2 text-2xl font-black">{lightbox.title}</h2>
              <p className="mt-2 text-black/58">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
