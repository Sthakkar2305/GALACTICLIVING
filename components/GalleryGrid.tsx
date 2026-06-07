"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Item = {
  _id?: string;
  id?: string;
  image: string;
};

export function GalleryGrid({ items: initialItems }: { items: Item[] }) {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [lightbox, setLightbox] = useState<Item | null>(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const res = await fetch("/api/gallery");
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data)) {
            const localSaved = localStorage.getItem("local_gallery_items");
            if (localSaved) {
              const parsed = JSON.parse(localSaved);
              setItems([...parsed, ...data]);
            } else {
              setItems(data);
            }
          }
        }
      } catch (err) {
        console.error("Failed to load gallery items", err);
      }
    }
    loadItems();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const localSaved = localStorage.getItem("local_gallery_items");
      const parsed = localSaved ? JSON.parse(localSaved) : [];
      fetch("/api/gallery")
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setItems([...parsed, ...data]);
          }
        })
        .catch(() => {
          setItems([...parsed, ...initialItems]);
        });
    };

    window.addEventListener("storage", handleStorageChange);
    const localSaved = localStorage.getItem("local_gallery_items");
    if (localSaved) {
      const parsed = JSON.parse(localSaved);
      setItems([...parsed, ...initialItems]);
    }
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [initialItems]);

  return (
    <div>
      <div className="masonry">
        {items.map((item, index) => (
          <article 
            key={item._id || item.id || index} 
            className="masonry-item group cursor-pointer overflow-hidden rounded-md bg-white shadow-luxury" 
            onClick={() => setLightbox(item)}
          >
            <div className={`relative ${index % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
              <Image 
                src={item.image} 
                alt="Gallery Image" 
                fill 
                className="object-cover transition duration-700 group-hover:scale-105" 
                sizes="(min-width: 1024px) 33vw, 100vw" 
                loading="lazy" 
              />
            </div>
          </article>
        ))}
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/88 p-4 backdrop-blur" onClick={() => setLightbox(null)}>
          <button className="absolute right-5 top-5 rounded-full bg-white p-3 text-black" aria-label="Close lightbox">
            <X size={20} />
          </button>
          <div className="w-full max-w-5xl overflow-hidden rounded-md bg-white" onClick={(event) => event.stopPropagation()}>
            <div className="relative aspect-[16/10]">
              <Image src={lightbox.image} alt="Gallery Lightbox" fill className="object-cover" sizes="100vw" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
