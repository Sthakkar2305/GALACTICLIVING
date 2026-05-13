import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Camera, ChevronRight, ShieldCheck, Sparkles, Utensils, WashingMachine, Wifi } from "lucide-react";
import { FadeUp, PageTransition } from "@/components/ui/Motion";
import { PropertyCard } from "@/components/PropertyCard";
import { amenities, faqs, properties, testimonials } from "@/lib/data";

const iconMap = [Wifi, Utensils, WashingMachine, ShieldCheck, Sparkles, Building2];

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative min-h-[92svh] bg-galactic-black pt-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
          alt="Luxury Galactic Living residence"
          fill
          className="object-cover opacity-54"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.38),rgba(0,0,0,.12))]" />
        <div className="container-lux relative z-10 grid min-h-[calc(92svh-96px)] content-center py-16">
          <FadeUp>
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                Premium PG homes in Ahmedabad
              </div>
              <h1 className="font-display text-5xl font-black leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                Move into a smarter kind of hostel life.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
                Fully managed luxury PG living with chef-led meals, hotel-grade housekeeping, smart security, fast WiFi, and rooms built for real student and professional life.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-galactic-red px-7 py-4 font-bold text-white shadow-redglow transition hover:-translate-y-1 hover:bg-white hover:text-black">
                  Book Visit <ArrowRight size={18} />
                </Link>
                <Link href="/properties" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white hover:text-black">
                  Explore Rooms <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
        <div className="container-lux relative z-10 -mb-16">
          <div className="glass grid gap-3 rounded-[30px] p-4 text-black shadow-luxury md:grid-cols-[1fr_1fr_1fr_auto]">
            {["City or location", "PG type", "Budget"].map((placeholder) => (
              <input key={placeholder} placeholder={placeholder} className="h-[54px] rounded-2xl border border-black/8 bg-white px-4 text-sm font-semibold outline-none focus:border-galactic-red" />
            ))}
            <Link href="/properties" className="inline-flex h-[54px] items-center justify-center rounded-2xl bg-black px-6 text-sm font-bold text-white transition hover:bg-galactic-red">
              Search
            </Link>
          </div>
        </div>
      </section>

      <section className="container-lux pt-28 md:pt-32">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <FadeUp>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Featured homes</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">Premium properties designed for everyday ease.</h2>
          </FadeUp>
          <Link href="/properties" className="inline-flex items-center gap-2 font-bold text-galactic-red">
            View all properties <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {properties.map((property, index) => (
            <FadeUp key={property.id} delay={index * 0.08}>
              <PropertyCard property={property} />
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container-lux py-20">
        <div className="rounded-[36px] bg-galactic-black p-6 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeUp>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Why choose us</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Managed living that feels quietly expensive.</h2>
              <p className="mt-5 text-white/62">Every detail is engineered around safety, comfort, community, and predictable service.</p>
            </FadeUp>
            <div className="grid gap-3 sm:grid-cols-2">
              {amenities.slice(0, 6).map((item, index) => {
                const Icon = iconMap[index] ?? BadgeCheck;
                return (
                  <FadeUp key={item} delay={index * 0.05}>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5">
                      <Icon className="text-galactic-red" size={24} />
                      <h3 className="mt-4 font-bold">{item}</h3>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-galactic-mist py-20">
        <div className="container-lux grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <FadeUp>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-luxury">
              <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85" alt="Galactic Living lounge" fill className="object-cover" />
            </div>
          </FadeUp>
          <FadeUp>
            <Camera className="text-galactic-red" size={34} />
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">A lifestyle gallery worth showing your parents.</h2>
            <p className="mt-5 text-lg leading-8 text-black/58">Explore rooms, lounges, meals, community zones, and property details in a dynamic gallery that updates from the admin dashboard.</p>
            <Link href="/gallery" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-4 font-bold text-white transition hover:bg-galactic-red">
              Open Gallery <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="container-lux py-20">
        <div className="mb-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Resident voices</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Move-in stories with less drama.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <FadeUp key={item.name}>
              <div className="h-full rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
                <p className="text-lg leading-8 text-black/70">“{item.quote}”</p>
                <div className="mt-8">
                  <p className="font-black">{item.name}</p>
                  <p className="text-sm text-black/45">{item.role}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="container-lux pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">FAQ</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Quick answers before you visit.</h2>
          </div>
          <div className="grid gap-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-[24px] border border-black/8 bg-white p-5 shadow-[0_14px_50px_rgba(0,0,0,0.05)]">
                <summary className="cursor-pointer list-none font-bold">{question}</summary>
                <p className="mt-3 text-black/58">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
