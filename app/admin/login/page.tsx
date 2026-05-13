"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function submit(formData: FormData) {
    setError("");
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      setError("Invalid admin credentials");
      return;
    }
    router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-black-silk px-4 pt-28 text-white">
      <form action={submit} className="mx-auto max-w-md rounded-[32px] border border-white/10 bg-white/[0.06] p-6 shadow-luxury backdrop-blur">
        <div className="grid size-14 place-items-center rounded-2xl bg-galactic-red">
          <Lock />
        </div>
        <h1 className="mt-6 text-4xl font-black">Admin login</h1>
        <p className="mt-2 text-white/56">Default demo password is admin12345 until ADMIN_PASSWORD_HASH is configured.</p>
        <div className="mt-7 grid gap-3">
          <input name="email" type="email" defaultValue="admin@galacticliving.com" className="h-[52px] rounded-2xl border border-white/10 bg-white/10 px-4 outline-none focus:border-galactic-red" />
          <input name="password" type="password" placeholder="Password" className="h-[52px] rounded-2xl border border-white/10 bg-white/10 px-4 outline-none focus:border-galactic-red" />
          {error && <p className="text-sm font-bold text-galactic-red">{error}</p>}
          <button className="h-[52px] rounded-2xl bg-galactic-red font-bold transition hover:bg-white hover:text-black">Enter Dashboard</button>
        </div>
      </form>
    </main>
  );
}
