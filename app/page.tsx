import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Camera, ChevronRight, ShieldCheck, Sparkles, Utensils, WashingMachine, Wifi } from "lucide-react";
import { FadeUp, PageTransition } from "@/components/ui/Motion";
import { PropertyCard } from "@/components/PropertyCard";
import { amenities, properties } from "@/lib/data";

const iconMap = [Wifi, Utensils, WashingMachine, ShieldCheck, Sparkles, Building2];

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative min-h-[88svh] bg-galactic-black pt-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
          alt="Luxury Galactic Living residence"
          fill
          className="object-cover opacity-54"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.38),rgba(0,0,0,.12))]" />
        <div className="container-lux relative z-10 grid min-h-[calc(88svh-96px)] content-center py-16">
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
                <Link href="/properties" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white hover:text-black">
                  Explore Rooms <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="container-lux pt-16 md:pt-20">
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
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <FadeUp>
            <div className="sticky top-28 rounded-[36px] bg-galactic-black p-7 text-white shadow-luxury md:p-9">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Best PG in Ahmedabad</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">What you need to know before choosing a PG.</h2>
              <p className="mt-5 text-white/64">
                Ahmedabad has become a popular city for students and working professionals. Finding a PG is easy, but finding a good one needs a closer look at real daily comfort, not just photos or rent.
              </p>
              <div className="mt-7 rounded-[26px] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/46">Final thought</p>
                <p className="mt-3 text-white/76">
                  A good PG should make your life simpler. If you constantly deal with food, cleaning, or security problems, it is not worth it, no matter how cheap or fancy it looks.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="grid gap-5">
            <FadeUp>
              <div className="rounded-[30px] border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.07)] md:p-7">
                <h3 className="text-2xl font-black">Why Galactic Living is different</h3>
                <p className="mt-3 leading-7 text-black/58">
                  Most PGs just give you a room and leave the rest to you. Galactic Living makes the whole experience easier, cleaner, safer, and more structured than typical inconsistent PG setups.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {["24/7 security with CCTV and controlled access", "Clean spaces with regular housekeeping", "Daily meals that are simple and consistent", "Reliable Wi-Fi for work or study", "Common areas to relax or hang out"].map((item) => (
                    <div key={item} className="rounded-2xl bg-galactic-mist p-4 text-sm font-bold text-black/74">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <div className="grid gap-5 md:grid-cols-2">
              <FadeUp>
                <div className="h-full rounded-[30px] bg-galactic-mist p-6 md:p-7">
                  <h3 className="text-2xl font-black">What to check before choosing</h3>
                  <div className="mt-5 grid gap-3">
                    {["What is included in the cost: food, Wi-Fi, cleaning", "Furniture, ventilation, and everyday comfort", "Food quality and hygiene", "Security measures", "Distance from college or workplace"].map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-black/72">
                        <span className="mt-1 size-2 shrink-0 rounded-full bg-galactic-red" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.08}>
                <div className="h-full rounded-[30px] bg-[linear-gradient(135deg,#111,#2a0205)] p-6 text-white md:p-7">
                  <h3 className="text-2xl font-black">What you typically get</h3>
                  <div className="mt-5 grid gap-3">
                    {["Furnished rooms with AC and attached washrooms", "Meals and clean drinking water", "Wi-Fi and power backup", "Housekeeping and laundry", "Security systems", "Lounges and activity areas"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-bold text-white/78">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
