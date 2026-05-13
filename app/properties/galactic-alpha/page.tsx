import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, ShieldCheck, Star } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { amenities, properties } from "@/lib/data";

const property = properties[0];

export const metadata: Metadata = {
  title: property.name,
  description: property.description,
  openGraph: {
    title: property.name,
    description: property.description,
    images: [property.image]
  }
};

export default function PropertyDetailsPage() {
  return (
    <main className="overflow-hidden">
      <section className="bg-galactic-black pb-10 pt-28 text-white">
        <div className="container-lux">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-bold text-white/65">
            <Link href="/properties" className="hover:text-white">Properties</Link>
            <span>/</span>
            <span>{property.name}</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-bold">
                <Star size={16} fill="currentColor" className="text-galactic-red" /> {property.rating} resident rating
              </div>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl">{property.name}</h1>
              <p className="mt-4 flex items-center gap-2 text-white/62"><MapPin size={18} /> {property.location}</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-white/46">Starts from</p>
              <p className="mt-1 text-4xl font-black">₹{property.price.toLocaleString("en-IN")} <span className="text-base text-white/48">/mo</span></p>
              <Link href="#booking" className="mt-5 flex h-[52px] items-center justify-center rounded-2xl bg-galactic-red font-bold text-white">
                Book Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container-lux -mt-1 py-8">
        <div className="grid gap-3 md:grid-cols-4">
          {property.gallery.map((image, index) => (
            <div key={image} className={`relative overflow-hidden rounded-[26px] ${index === 0 ? "aspect-[16/10] md:col-span-2 md:row-span-2" : "aspect-[4/3]"}`}>
              <Image src={image} alt={`${property.name} gallery ${index + 1}`} fill className="object-cover" priority={index === 0} />
            </div>
          ))}
        </div>
      </section>
      <section className="container-lux grid gap-8 pb-20 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-8">
          <div>
            <h2 className="text-3xl font-black">About this home</h2>
            <p className="mt-4 text-lg leading-8 text-black/58">{property.description}</p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Amenities</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {amenities.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-galactic-mist p-4 font-bold">
                  <CheckCircle2 className="text-galactic-red" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black">Room types and pricing</h2>
            <div className="mt-5 grid gap-4">
              {property.roomTypes.map((room) => (
                <div key={room.name} className="rounded-[24px] border border-black/8 bg-white p-5 shadow-[0_14px_50px_rgba(0,0,0,0.05)]">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black">{room.name}</h3>
                      <p className="mt-2 text-black/55">{room.features.join(" · ")}</p>
                    </div>
                    <p className="text-2xl font-black">₹{room.price.toLocaleString("en-IN")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] bg-galactic-black p-6 text-white">
            <ShieldCheck className="text-galactic-red" size={28} />
            <h2 className="mt-4 text-3xl font-black">Food, facilities, and nearby places</h2>
            <p className="mt-3 text-white/62">Chef-led meals, laundry, biometric entry, CCTV coverage, study lounges, and easy commute access.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {property.nearby.map((place) => (
                <span key={place} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">{place}</span>
              ))}
            </div>
          </div>
        </div>
        <aside id="booking" className="h-max rounded-[30px] border border-black/8 bg-white p-5 shadow-luxury lg:sticky lg:top-24">
          <h2 className="text-2xl font-black">Book a visit</h2>
          <p className="mt-2 text-sm text-black/55">Get availability, deposit, and move-in details.</p>
          <div className="mt-5">
            <InquiryForm property={property.name} />
          </div>
        </aside>
      </section>
    </main>
  );
}
