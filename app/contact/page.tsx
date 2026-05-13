import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { PageTransition } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Galactic Living to book a PG visit, request a callback, or ask about rooms."
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="bg-galactic-black pb-16 pt-32 text-white">
        <div className="container-lux">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Book a visit</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight md:text-7xl">Let’s find your room this week.</h1>
        </div>
      </section>
      <section className="container-lux grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] bg-galactic-mist p-6 md:p-8">
          <h2 className="text-3xl font-black">Contact support</h2>
          <div className="mt-7 grid gap-4">
            <a href="tel:+919999999999" className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold"><Phone className="text-galactic-red" /> +91 99999 99999</a>
            <a href="mailto:hello@galacticliving.com" className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold"><Mail className="text-galactic-red" /> hello@galacticliving.com</a>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold"><MapPin className="text-galactic-red" /> Ahmedabad, Gujarat</div>
          </div>
          <div className="mt-6 aspect-[16/10] rounded-[24px] bg-[linear-gradient(135deg,#111,#E50914)] p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/65">Location map</p>
            <p className="mt-3 text-2xl font-black">Interactive Google Maps embed placeholder</p>
          </div>
        </div>
        <div className="rounded-[32px] border border-black/8 bg-white p-6 shadow-luxury md:p-8">
          <h2 className="text-3xl font-black">Request a callback</h2>
          <p className="mt-2 text-black/55">Share your move-in preferences and our team will call you.</p>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
