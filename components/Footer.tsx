import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-galactic-black text-white">
      <div className="container-lux grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="text-3xl font-black tracking-tight">GALACTIC LIVING</div>
          <p className="mt-4 max-w-sm text-white/62">
            Premium PG and hostel living designed for students, creators, and working professionals who want comfort without chaos.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Mail].map((Icon, index) => (
              <span key={index} className="grid size-11 place-items-center rounded-full bg-white/8 text-white/80">
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Quick links</h3>
          <div className="mt-4 grid gap-3 text-white/62">
            <Link href="/properties">Properties</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/admin/login">Admin</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 grid gap-3 text-white/62">
            <span className="flex gap-2"><Phone size={17} /> +91 99999 99999</span>
            <span className="flex gap-2"><Mail size={17} /> galacticstay@gmail.com</span>
            <span className="flex gap-2"><MapPin size={17} /> Ahmedabad, Gujarat</span>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
          <h3 className="font-bold">Move in this week</h3>
          <p className="mt-3 text-sm text-white/62">Schedule a visit and get real-time room availability.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-galactic-red px-5 py-3 text-sm font-bold">
            Request Callback
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/46">
        © 2026 Galactic Living. All rights reserved.
      </div>
    </footer>
  );
}
