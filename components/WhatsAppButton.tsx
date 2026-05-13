import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
  return (
    <>
      <a
        href={`https://wa.me/${number}?text=Hi%20Galactic%20Living%2C%20I%20want%20to%20book%20a%20visit.`}
        className="fixed bottom-24 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxury transition hover:-translate-y-1 md:bottom-6"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/92 p-3 backdrop-blur md:hidden">
        <a href="/contact" className="flex h-12 items-center justify-center rounded-full bg-galactic-red text-sm font-bold text-white">
          Book Visit Now
        </a>
      </div>
    </>
  );
}
