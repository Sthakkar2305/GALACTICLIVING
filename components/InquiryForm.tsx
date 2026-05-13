"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function InquiryForm({ property = "" }: { property?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function submit(formData: FormData) {
    setStatus("loading");
    await fetch("/api/inquiries", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" }
    });
    setStatus("done");
  }

  return (
    <form action={submit} className="grid gap-3">
      <input name="property" type="hidden" defaultValue={property} />
      <input name="name" required placeholder="Your name" className="h-[52px] rounded-2xl border border-black/10 px-4 outline-none focus:border-galactic-red" />
      <input name="phone" required placeholder="Phone number" className="h-[52px] rounded-2xl border border-black/10 px-4 outline-none focus:border-galactic-red" />
      <input name="email" type="email" placeholder="Email address" className="h-[52px] rounded-2xl border border-black/10 px-4 outline-none focus:border-galactic-red" />
      <textarea name="message" placeholder="Tell us your move-in date" rows={4} className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-galactic-red" />
      <button disabled={status === "loading"} className="inline-flex h-[52px] items-center justify-center gap-2 rounded-2xl bg-galactic-red px-5 font-bold text-white transition hover:bg-black disabled:opacity-60">
        <Send size={18} /> {status === "done" ? "Request Sent" : status === "loading" ? "Sending..." : "Request Callback"}
      </button>
    </form>
  );
}
