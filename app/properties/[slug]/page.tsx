import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AirVent, Archive, Bath, BedDouble, Bolt, ChefHat, MapPin, ShieldCheck, Sparkles, Star, WashingMachine, Wifi } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { properties, propertyAmenities, propertyServices } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((item) => item.id === slug);
  if (!property) return {};
  return {
    title: property.name,
    description: property.description,
    openGraph: { title: property.name, description: property.description, images: [property.image] }
  };
}

export default async function DynamicPropertyDetailsPage({ params }: Props) {
  const { slug } = await params;
  const property = properties.find((item) => item.id === slug);
  if (!property) notFound();

  const amenityIcons = [AirVent, Bath, Archive];
  const serviceIcons = [ChefHat, Wifi, WashingMachine, Sparkles, ShieldCheck];
  const sliderImages = Array.from({ length: 3 }, (_, index) => property.gallery[index % property.gallery.length]);

  return (
    <main className="overflow-hidden">
      <section className="bg-galactic-black pb-10 pt-28 text-white">
        <div className="container-lux">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-bold text-white/65">
            <Link href="/properties" className="hover:text-white">Properties</Link>
            <span>/</span>
            <span>{property.name}</span>
          </div>
          <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-bold">
                <Star size={16} fill="currentColor" className="text-galactic-red" /> {property.rating} resident rating
              </div>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl">{property.name}</h1>
              <p className="mt-4 flex items-center gap-2 text-white/62"><MapPin size={18} /> {property.location}</p>
          </div>
        </div>
      </section>

      <section className="container-lux py-8">
        <div className="flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {sliderImages.map((image, index) => (
            <div key={`${image}-${index}`} className="relative aspect-[4/3] min-w-[82%] snap-center overflow-hidden rounded-[26px] shadow-luxury sm:min-w-[54%] md:min-w-0">
              <Image src={image} alt={`${property.name} gallery ${index + 1}`} fill className="object-cover" priority={index === 0} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
                <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-black text-galactic-red">
                  {index + 1} / 3
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux grid gap-8 pb-20 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-8">
          <div id="details" className="scroll-mt-28">
            <h2 className="text-3xl font-black">About this home</h2>
            <p className="mt-4 text-lg leading-8 text-black/58">{property.description}</p>
          </div>

          <div id="occupancy" className="scroll-mt-28 overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-luxury">
            <div className="border-b border-black/8 bg-galactic-mist/70 px-5 pt-5">
              <div className="grid grid-cols-3 text-center text-sm font-black text-black/54">
                <a href="#occupancy" className="border-b-2 border-galactic-red pb-4 text-galactic-red transition hover:text-black">Occupancy</a>
                <a href="#amenities" className="pb-4 transition hover:text-galactic-red">Amenities</a>
                <a href="#details" className="pb-4 transition hover:text-galactic-red">Details</a>
              </div>
            </div>
            <div className="p-5 md:p-7">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-galactic-red">Available occupancies</p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight">Choose your room plan</h2>
                </div>
                <p className="text-sm font-semibold text-black/46">*Starting price inclusive of standard services.</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                {property.roomTypes.map((room) => (
                  <div key={room.name} className="group rounded-2xl border border-galactic-red/15 bg-white p-3 text-center shadow-[0_14px_45px_rgba(229,9,20,0.08)] transition hover:-translate-y-1 hover:border-galactic-red hover:shadow-redglow">
                    <div className="mx-auto flex w-max items-center gap-1.5 rounded-full bg-galactic-red/10 px-2 py-1 text-galactic-red">
                      <div className="grid size-6 place-items-center rounded-full bg-white text-galactic-red shadow-sm">
                        <BedDouble size={14} />
                      </div>
                      <span className="text-xs font-black">{room.beds}</span>
                    </div>
                    <h3 className="mt-2 text-[11px] font-black uppercase leading-tight tracking-tight sm:text-xs">{room.name.replace(/^\dX\s/, "")}</h3>
                    {/* <p className="mt-1.5 min-h-[32px] text-[10px] leading-4 text-black/52 sm:min-h-[36px] sm:text-xs">{room.features.slice(0, 2).join(" / ")}</p> */}
                    <p className="mt-2 text-sm font-black text-galactic-red sm:text-base">Rs. {room.price.toLocaleString("en-IN")}<span className="text-[10px] text-black/42">/mo*</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="amenities" className="scroll-mt-28 grid gap-8">
            <div>
              <h2 className="text-3xl font-black">Amenities</h2>
              <div className="mt-5 rounded-[28px] border border-black/15 bg-white p-5 md:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                {propertyAmenities.map((item, index) => {
                  const Icon = amenityIcons[index] ?? Sparkles;
                  return (
                    <div key={item} className="flex min-h-[64px] items-center gap-4 rounded-2xl border border-black/20 bg-white px-5 py-4 text-lg font-semibold text-black/80">
                      <Icon size={26} className="shrink-0 text-galactic-red" /> {item}
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black">Services</h2>
              <div className="mt-5 rounded-[28px] border border-black/15 bg-white p-5 md:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                {propertyServices.map((item, index) => {
                  const Icon = serviceIcons[index] ?? ShieldCheck;
                  return (
                    <div key={item} className="flex min-h-[64px] items-center gap-4 rounded-2xl border border-black/20 bg-white px-5 py-4 text-lg font-semibold text-black/80">
                      <Icon size={26} className="shrink-0 text-galactic-red" /> {item}
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-black/15 bg-white p-6">
              <div className="flex items-center gap-5">
                <Bolt size={42} className="shrink-0 text-galactic-red" />
                <p className="text-xl font-semibold leading-8 text-black/78">
                  Electricity charges will be applied separately based on individual usage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <aside id="booking" className="h-max rounded-[30px] border border-black/8 bg-white p-5 shadow-luxury lg:sticky lg:top-24">
          <h2 className="text-2xl font-black">Book a visit</h2>
          <p className="mt-2 text-sm text-black/55">Get availability, deposit, and move-in details.</p>
          <div className="mt-5"><InquiryForm property={property.name} /></div>
        </aside>
      </section>
    </main>
  );
}
