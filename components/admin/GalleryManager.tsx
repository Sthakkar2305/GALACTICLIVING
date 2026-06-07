"use client";

import { useState, useEffect } from "react";
import { Trash2, Edit2, Plus, Check, X, ImageIcon } from "lucide-react";

type GalleryItemType = {
  _id?: string;
  id?: string;
  image: string;
  order?: number;
  propertyName?: string;
  title?: string;
  category?: string;
};

export function GalleryManager({ initialItems }: { initialItems: GalleryItemType[] }) {
  const [items, setItems] = useState<GalleryItemType[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [order, setOrder] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editUrl, setEditUrl] = useState("");
  const [editOrder, setEditOrder] = useState<number>(0);
  const [statusMsg, setStatusMsg] = useState("");

  const loadAllItems = async () => {
    try {
      const res = await fetch("/api/gallery");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          const localSaved = localStorage.getItem("local_gallery_items");
          const localItems = localSaved ? JSON.parse(localSaved) : [];
          setItems([...localItems, ...data]);
        }
      }
    } catch {
      const localSaved = localStorage.getItem("local_gallery_items");
      const localItems = localSaved ? JSON.parse(localSaved) : [];
      setItems([...localItems, ...initialItems]);
    }
  };

  useEffect(() => {
    loadAllItems();
  }, [initialItems]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) return;

    setLoading(true);
    setStatusMsg("");

    const newItem = {
      image: imageUrl,
      order: Number(order) || 0,
      propertyName: "Uploaded Image",
      title: "Uploaded Image",
      category: "All"
    };

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem)
      });

      if (res.ok) {
        setStatusMsg("Successfully added to MongoDB!");
        setImageUrl("");
        setOrder(0);
        loadAllItems();
      } else {
        const localSaved = localStorage.getItem("local_gallery_items");
        const localItems = localSaved ? JSON.parse(localSaved) : [];
        const localNewItem = {
          ...newItem,
          id: "local-" + Date.now()
        };
        const updatedLocal = [localNewItem, ...localItems];
        localStorage.setItem("local_gallery_items", JSON.stringify(updatedLocal));
        window.dispatchEvent(new Event("storage"));
        setStatusMsg("Saved locally (MongoDB not configured).");
        setImageUrl("");
        setOrder(0);
        loadAllItems();
      }
    } catch {
      const localSaved = localStorage.getItem("local_gallery_items");
      const localItems = localSaved ? JSON.parse(localSaved) : [];
      const localNewItem = {
        ...newItem,
        id: "local-" + Date.now()
      };
      const updatedLocal = [localNewItem, ...localItems];
      localStorage.setItem("local_gallery_items", JSON.stringify(updatedLocal));
      window.dispatchEvent(new Event("storage"));
      setStatusMsg("Saved locally (MongoDB not configured).");
      setImageUrl("");
      setOrder(0);
      loadAllItems();
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item: GalleryItemType) => {
    const id = item._id || item.id;
    if (!id) return;

    if (!confirm("Are you sure you want to delete this gallery image?")) return;

    if (id.startsWith("local-")) {
      const localSaved = localStorage.getItem("local_gallery_items");
      if (localSaved) {
        const localItems: GalleryItemType[] = JSON.parse(localSaved);
        const filtered = localItems.filter(x => (x.id !== id && x._id !== id));
        localStorage.setItem("local_gallery_items", JSON.stringify(filtered));
        window.dispatchEvent(new Event("storage"));
        setStatusMsg("Deleted local image.");
        loadAllItems();
      }
      return;
    }

    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        setStatusMsg("Deleted from MongoDB.");
        loadAllItems();
      } else {
        alert("Failed to delete from MongoDB.");
      }
    } catch {
      alert("Error deleting image.");
    }
  };

  const startEdit = (item: GalleryItemType) => {
    const id = item._id || item.id;
    if (!id) return;
    setEditingId(id);
    setEditUrl(item.image);
    setEditOrder(item.order || 0);
  };

  const handleUpdate = async (item: GalleryItemType) => {
    const id = item._id || item.id;
    if (!id) return;

    if (id.startsWith("local-")) {
      const localSaved = localStorage.getItem("local_gallery_items");
      if (localSaved) {
        const localItems: GalleryItemType[] = JSON.parse(localSaved);
        const updated = localItems.map(x => {
          if (x.id === id || x._id === id) {
            return { ...x, image: editUrl, order: Number(editOrder) };
          }
          return x;
        });
        localStorage.setItem("local_gallery_items", JSON.stringify(updated));
        window.dispatchEvent(new Event("storage"));
        setStatusMsg("Updated local image.");
        setEditingId(null);
        loadAllItems();
      }
      return;
    }

    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: editUrl,
          order: Number(editOrder),
          propertyName: "Uploaded Image",
          title: "Uploaded Image",
          category: "All"
        })
      });
      if (res.ok) {
        setStatusMsg("Updated in MongoDB.");
        setEditingId(null);
        loadAllItems();
      } else {
        alert("Failed to update in MongoDB.");
      }
    } catch {
      alert("Error updating image.");
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6">
        <h2 className="text-2xl font-black flex items-center gap-2">
          <ImageIcon className="text-galactic-red" size={24} />
          Add Gallery Image
        </h2>
        <form onSubmit={handleAdd} className="mt-5 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-white/70">Image URL</label>
            <input
              type="url"
              required
              placeholder="https://images.unsplash.com/..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1.5 w-full h-[52px] rounded-2xl border border-white/10 bg-black/40 px-4 outline-none focus:border-galactic-red text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/70">Sort Order</label>
            <input
              type="number"
              value={order}
              onChange={(e) => setOrder(Number(e.target.value))}
              className="mt-1.5 w-full h-[52px] rounded-2xl border border-white/10 bg-black/40 px-4 outline-none focus:border-galactic-red text-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-galactic-red px-5 py-4 font-bold text-white transition hover:bg-black"
          >
            <Plus size={18} />
            {loading ? "Adding..." : "Add Image"}
          </button>
          {statusMsg && <p className="mt-2 text-sm font-bold text-galactic-red">{statusMsg}</p>}
        </form>
      </div>

      <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6">
        <h2 className="text-2xl font-black">Manage Gallery Images ({items.length})</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const id = item._id || item.id;
            const isEditing = editingId === id;
            return (
              <div key={id || index} className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4 space-y-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/50">
                  <img src={item.image} alt="Gallery" className="object-cover w-full h-full" />
                  {id?.startsWith("local-") && (
                    <span className="absolute left-2 top-2 rounded bg-yellow-500/80 px-2 py-0.5 text-[10px] font-black text-black">
                      Local
                    </span>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-2">
                    <input
                      type="url"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      className="w-full h-10 rounded-lg border border-white/20 bg-black/40 px-3 text-xs text-white"
                    />
                    <input
                      type="number"
                      value={editOrder}
                      onChange={(e) => setEditOrder(Number(e.target.value))}
                      className="w-full h-10 rounded-lg border border-white/20 bg-black/40 px-3 text-xs text-white"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdate(item)}
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-green-600 py-2 text-xs font-bold text-white"
                      >
                        <Check size={14} /> Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-white/10 py-2 text-xs font-bold text-white"
                      >
                        <X size={14} /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-white/50">Order: {item.order || 0}</div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => startEdit(item)}
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-galactic-red transition"
                        title="Edit image"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className="p-2 rounded-full bg-galactic-red/20 text-galactic-red hover:bg-galactic-red hover:text-white transition"
                        title="Delete image"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
