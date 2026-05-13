"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Properties", "/properties"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/82 backdrop-blur-xl">
      <div className="container-lux flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Galactic Living home">
          <Image src="/brand/logo.svg" width={176} height={44} alt="Galactic Living" priority />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-black/70 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-galactic-red">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+919999999999" className="rounded-full border border-black/10 p-3 transition hover:border-galactic-red hover:text-galactic-red" aria-label="Call Galactic Living">
            <Phone size={18} />
          </a>
          <Link href="/contact" className="rounded-full bg-galactic-red px-5 py-3 text-sm font-bold text-white shadow-redglow transition hover:-translate-y-0.5 hover:bg-black">
            Book Visit
          </Link>
        </div>
        <button className="rounded-full border border-black/10 p-3 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="container-lux pb-5 lg:hidden">
          <div className="rounded-[28px] bg-galactic-black p-5 text-white shadow-luxury">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg font-semibold hover:bg-white/10">
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 block rounded-2xl bg-galactic-red px-4 py-4 text-center font-bold">
              Book a Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
