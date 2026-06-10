import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowRightCircle, Camera, ChevronRight } from "lucide-react";
import { FadeUp, PageTransition } from "@/components/ui/Motion";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/data";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative min-h-[88svh] bg-galactic-black pt-20 text-white">
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
              {/* <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                Premium PG homes in Ahmedabad
              </div> */}
              <h1 className="font-display text-5xl font-black leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                Move into a smarter kind of hostel life.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
                Fully managed luxury PG living with chef-led meals, hotel-grade housekeeping, smart security, fast WiFi, and rooms built for real student and professional life.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* <Link href="/properties" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white hover:text-black">
                  Explore Rooms <ChevronRight size={18} />
                </Link> */}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="container-lux pt-16 md:pt-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <FadeUp>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Featured homes</p>
            {/* <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">Premium properties designed for everyday ease.</h2> */}
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

      <section className="bg-white py-20">
        <div className="container-lux max-w-4xl">
          <FadeUp>
            <article className="prose prose-lg max-w-none">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Best PG in Ahmedabad</p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-black md:text-5xl">What you need to know before choosing a PG.</h2>
              <p className="mt-6 text-lg leading-8 text-black/72">
                Ahmedabad has become a popular city for students and working professionals. Finding a PG is easy, but finding a good one needs a closer look at real daily comfort, not just photos or rent.
              </p>

              <h3 className="mt-12 text-3xl font-black tracking-tight text-black">Why Galactic Living is different</h3>
              <p className="mt-4 text-lg leading-8 text-black/72">
                Most PGs just give you a room and leave the rest to you. Galactic Living makes the whole experience easier, cleaner, safer, and more structured than typical inconsistent PG setups.
              </p>
              <div className="mt-5 grid gap-4">
                {["24/7 security with CCTV and controlled access", "Clean spaces with regular housekeeping", "Daily meals that are simple and consistent", "Reliable Wi-Fi for work or study", "Common areas to relax or hang out"].map((item) => (
                  <div key={item} className="flex gap-4 text-lg leading-8 text-black/78">
                    <ArrowRightCircle className="mt-1 shrink-0 text-galactic-red" size={22} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-12 text-3xl font-black tracking-tight text-black">What to check before choosing</h3>
              <div className="mt-5 grid gap-4">
                {["What is included in the cost: food, Wi-Fi, cleaning", "Furniture, ventilation, and everyday comfort", "Food quality and hygiene", "Security measures", "Distance from college or workplace"].map((item) => (
                  <div key={item} className="flex gap-4 text-lg leading-8 text-black/78">
                    <ArrowRightCircle className="mt-1 shrink-0 text-galactic-red" size={22} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-12 text-3xl font-black tracking-tight text-black">What you typically get</h3>
              <p className="mt-4 text-lg leading-8 text-black/72">
                Furnished rooms with AC and attached washrooms, meals and clean drinking water, Wi-Fi and power backup, housekeeping and laundry, security systems, lounges, and activity areas.
              </p>
              <p className="mt-8 text-lg leading-8 text-black/72">
                A good PG should make your life simpler. If you constantly deal with food, cleaning, or security problems, it is not worth it, no matter how cheap or fancy it looks.
              </p>
            </article>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  );
}
