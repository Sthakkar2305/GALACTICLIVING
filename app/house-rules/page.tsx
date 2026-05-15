import type { Metadata } from "next";
import { AlertTriangle, BadgeIndianRupee, ClipboardCheck, DoorOpen, Flame, HeartPulse, KeyRound, ShieldCheck, Sparkles, Utensils, Users, Wifi, Wrench } from "lucide-react";
import { PageTransition } from "@/components/ui/Motion";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "House Rules",
  description: "Galactic Living house rules for residents, visitors, safety, food, housekeeping, payments, and penalties."
};

const rules = [
  {
    title: "Care of building, common areas and rooms",
    icon: Sparkles,
    text: "Residents must protect the property, rooms, furniture, fittings, and shared amenities. Vandalism, damage, or misuse can lead to eviction and recovery of repair costs. Room and wardrobe keys must be kept safely, and locks cannot be changed without approval."
  },
  {
    title: "Conduct and behaviour",
    icon: Users,
    text: "Ragging, harassment, offensive behaviour, and disturbance to neighbours are strictly prohibited. Residents must respect staff, vendors, roommates, personal beliefs, privacy, and quiet hours between 10:30 PM and 6:00 AM."
  },
  {
    title: "Intoxication, betting and gambling",
    icon: AlertTriangle,
    text: "Possession, distribution, or consumption of illegal substances is strictly prohibited. Betting and gambling are not allowed inside the house and may lead to immediate termination of the resident agreement."
  },
  {
    title: "Pantry and food services",
    icon: Utensils,
    text: "Cooking is allowed only in the pantry area. Food should be consumed in designated spaces, common cutlery must not be taken to rooms, leftovers must be disposed of properly, and meal attendance may be marked through QR or app-based systems."
  },
  {
    title: "Water and electricity consumption",
    icon: Wrench,
    text: "Water and electricity must be used responsibly. Residents must report leakages and follow prepaid meter or actual-usage billing rules wherever applicable. Roommates must resolve internal electricity cost division privately."
  },
  {
    title: "Security and safety",
    icon: ShieldCheck,
    text: "Residents may enter or exit freely except in special safety circumstances. Personal belongings must be locked securely. Firearms, weapons, hazardous material, illegal substances, and tampering with security or fire equipment are strictly prohibited."
  },
  {
    title: "Housekeeping and laundry",
    icon: ClipboardCheck,
    text: "Regular housekeeping helps maintain hygiene. Residents should keep valuables secured, cooperate during pest control and maintenance, avoid littering, and collect laundry promptly after machine use."
  },
  {
    title: "Internet usage",
    icon: Wifi,
    text: "Internet access depends on the service provider and house location. Fair usage policies may apply. Residents must not access prohibited content, use fake accounts, download pirated content, fake IPs, or use another resident's credentials."
  },
  {
    title: "Electrical appliances",
    icon: Flame,
    text: "Heaters, coils, irons, cooking gadgets, electric cookers, coffee makers, roti makers, and combustible materials are not allowed inside rooms unless explicitly permitted. Residents must switch off lights, fans, ACs, geysers, and appliances before leaving."
  },
  {
    title: "Health, privacy and filming",
    icon: HeartPulse,
    text: "Residents must immediately inform Galactic Living if a critical or transferable illness is detected. Photography and filming are allowed only with respect for resident privacy and CCTV safety coverage."
  },
  {
    title: "Visitors and guests",
    icon: DoorOpen,
    text: "All visitors must register at reception and provide required details. Room access depends on property type, roommate consent, and management rules. Overnight guests require advance paid booking and approval."
  },
  {
    title: "Rent, payments and complaints",
    icon: BadgeIndianRupee,
    text: "Rent and charges must be paid on time. Continuous payment default may lead to termination and eviction. Complaints, suggestions, and feedback should be shared through the official resident app or Galactic Living team."
  }
];

const penalties = [
  ["Smoking in the property", "Rs. 700 per instance"],
  ["Drinking in the property", "Rs. 2,000 per instance"],
  ["Bringing visitors of opposite gender to the room", "Rs. 2,000 per instance"],
  ["Bringing visitor without registering with security", "Rs. 2,000 per instance"],
  ["Obstructing or changing view of CCTV cameras", "Rs. 2,000 per instance"],
  ["Taking utensils to the room without permission", "Rs. 500 per instance"],
  ["Lost key replacement", "Rs. 500 per instance"],
  ["Leaving lights or water taps open in absence", "Rs. 500 per instance"],
  ["Using non-mandated electrical appliances in rooms", "Rs. 1,000 per instance"]
];

export default function HouseRulesPage() {
  return (
    <PageTransition>
      <section className="bg-galactic-black pb-16 pt-32 text-white">
        <div className="container-lux">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold">
            <KeyRound size={16} className="text-galactic-red" /> Resident policy
          </div>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">House Rules for Galactic Living residents.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/64">
            These rules apply to all residents staying in any Galactic Living property. Any violation can be treated as a breach of the resident agreement and may lead to penalties, recovery of costs, or termination.
          </p>
        </div>
      </section>

      <section className="container-lux py-14">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rules.map((rule) => {
            const Icon = rule.icon;
            return (
              <article key={rule.title} className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.07)]">
                <div className="grid size-12 place-items-center rounded-2xl bg-galactic-red/10 text-galactic-red">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 text-xl font-black">{rule.title}</h2>
                <p className="mt-3 leading-7 text-black/58">{rule.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-lux pb-16">
        <div className="overflow-hidden rounded-[34px] bg-galactic-black text-white shadow-luxury">
          <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Penalties and fines</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Important charges residents should know.</h2>
              <p className="mt-4 text-white/58">Penalties may be revised by the Galactic Living team as per the resident agreement and official notices.</p>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04]">
              {penalties.map(([action, penalty], index) => (
                <div key={action} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/10 p-4 text-sm last:border-b-0">
                  <span className="font-semibold text-white/76">{index + 1}. {action}</span>
                  <span className="font-black text-galactic-red">{penalty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-lux pb-20">
        <div className="rounded-[30px] border border-galactic-red/15 bg-galactic-mist p-6 md:p-8">
          <h2 className="text-3xl font-black">General policy</h2>
          <p className="mt-4 leading-8 text-black/62">
            Galactic Living residences are apolitical and areligious. Political or religious gatherings require approval from local residence management. Residents must coordinate parcel collection themselves, cooperate during maintenance work, respect privacy, and follow rule updates shared through official communication channels.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:+91${contact.phone}`} className="inline-flex items-center justify-center rounded-full bg-galactic-red px-6 py-4 font-bold text-white">Call +91 {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 font-bold text-black">Email support</a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
