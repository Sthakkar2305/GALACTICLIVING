import type { Metadata } from "next";
import { PropertyCard } from "@/components/PropertyCard";
import { FadeUp, PageTransition } from "@/components/ui/Motion";
import { properties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Properties",
  description: "Explore premium Galactic Living PG and hostel properties in Ahmedabad."
};

export default function PropertiesPage() {
  return (
    <PageTransition>
      <section className="bg-galactic-black pb-16 pt-32 text-white">
        <div className="container-lux">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Find your room</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight md:text-7xl">Premium stays across Ahmedabad.</h1>
          <p className="mt-5 max-w-2xl text-white/62">Compare price, occupancy, gender type, and location before booking a visit.</p>
        </div>
      </section>
      <section className="container-lux py-14">
        <div className="mb-8 grid gap-3 rounded-[28px] bg-galactic-mist p-4 md:grid-cols-4">
          {["Location", "Gender", "Occupancy", "Budget"].map((item) => (
            <select key={item} className="h-[52px] rounded-2xl border border-black/8 bg-white px-4 text-sm font-bold outline-none">
              <option>{item}</option>
            </select>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {properties.map((property, index) => (
            <FadeUp key={property.id} delay={index * 0.06}>
              <PropertyCard property={property} />
            </FadeUp>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
