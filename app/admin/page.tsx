import { BarChart3, BedDouble, Camera, MessageSquare, Plus, Upload } from "lucide-react";
import { getAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { galleryItems, properties, testimonials } from "@/lib/data";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const stats = [
    ["Properties", properties.length, BedDouble],
    ["Gallery assets", galleryItems.length, Camera],
    ["Testimonials", testimonials.length, MessageSquare],
    ["Occupancy", "92%", BarChart3]
  ] as const;

  return (
    <main className="min-h-screen bg-[#070707] pt-20 text-white">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 p-6 lg:min-h-[calc(100vh-80px)]">
          <div className="text-2xl font-black">GALACTIC ADMIN</div>
          <nav className="mt-8 grid gap-2 text-white/70">
            {["Dashboard", "Properties", "Gallery", "Pricing", "Amenities", "Testimonials", "FAQs", "Inquiries"].map((item, index) => (
              <span key={item} className={`rounded-2xl px-4 py-3 font-bold ${index === 0 ? "bg-galactic-red text-white" : "hover:bg-white/8"}`}>
                {item}
              </span>
            ))}
          </nav>
        </aside>
        <section className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-galactic-red">Control center</p>
              <h1 className="mt-2 text-4xl font-black">Dashboard analytics</h1>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-galactic-red px-5 py-3 font-bold">
              <Plus size={18} /> Add Property
            </button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {stats.map(([label, value, Icon]) => (
              <div key={label} className="rounded-[26px] border border-white/10 bg-white/[0.06] p-5">
                <Icon className="text-galactic-red" />
                <p className="mt-6 text-3xl font-black">{value}</p>
                <p className="text-sm text-white/50">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-5">
              <h2 className="text-2xl font-black">Manage properties</h2>
              <div className="mt-5 grid gap-3">
                {properties.map((property) => (
                  <div key={property.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-black/30 p-4">
                    <div>
                      <p className="font-black">{property.name}</p>
                      <p className="text-sm text-white/48">{property.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">Edit</button>
                      <button className="rounded-full bg-galactic-red px-4 py-2 text-sm font-bold text-white">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-dashed border-white/20 bg-white/[0.04] p-5">
              <div className="grid min-h-[260px] place-items-center rounded-[24px] border border-dashed border-galactic-red/50 bg-black/30 p-6 text-center">
                <div>
                  <Upload className="mx-auto text-galactic-red" size={34} />
                  <h2 className="mt-4 text-2xl font-black">Drag & drop gallery upload</h2>
                  <p className="mt-2 text-white/50">Upload images, add title, category, price, description, and sort order. API endpoints are ready for Cloudinary + MongoDB.</p>
                  <button className="mt-5 rounded-full bg-white px-5 py-3 font-bold text-black">Choose Images</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
