import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

type PropertyCardProps = {
  property: {
    id: string;
    name: string;
    location: string;
    price: number;
    gender: string;
    rating: number;
    occupancy: string[];
    image: string;
  };
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-luxury">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={property.image} alt={property.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-galactic-red shadow">
          Preferred by residents
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/72 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          <Star size={13} fill="currentColor" /> {property.rating}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black tracking-tight">{property.name}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-black/55">
          <MapPin size={16} /> {property.location}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">{property.gender}</span>
          {property.occupancy.slice(0, 3).map((item) => (
            <span key={item} className="rounded-full bg-galactic-mist px-3 py-1 text-xs font-bold text-black/65">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">Starts from</p>
            <p className="text-2xl font-black">₹{property.price.toLocaleString("en-IN")}<span className="text-sm font-semibold text-black/46"> /mo</span></p>
          </div>
          <Link href={`/properties/${property.id}`} className="rounded-full bg-galactic-red px-4 py-3 text-sm font-bold text-white transition hover:bg-black">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
