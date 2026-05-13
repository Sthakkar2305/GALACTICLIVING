export const amenities = [
  "High-speed WiFi",
  "Chef-led meals",
  "Laundry care",
  "24/7 security",
  "Daily housekeeping",
  "AC rooms",
  "Smart access",
  "Study lounges"
];

export const properties = [
  {
    id: "galactic-alpha",
    name: "Galactic Alpha House",
    location: "Navrangpura, Ahmedabad",
    city: "Ahmedabad",
    type: "Premium PG",
    gender: "Unisex",
    price: 14999,
    rating: 4.9,
    occupancy: ["Single", "Double", "Triple"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    ],
    description:
      "A flagship luxury co-living address with smart access, bright rooms, curated meals, and a polished resident experience.",
    nearby: ["CEPT University", "HL College", "Vijay Cross Road", "CG Road"],
    roomTypes: [
      { name: "Single Suite", price: 24999, features: ["Private room", "Work desk", "Attached bath"] },
      { name: "Double Comfort", price: 17999, features: ["Shared room", "Balcony", "Storage"] },
      { name: "Triple Smart", price: 14999, features: ["Value plan", "AC", "Study corner"] }
    ]
  },
  {
    id: "galactic-orion",
    name: "Galactic Orion House",
    location: "Gota, Ahmedabad",
    city: "Ahmedabad",
    type: "Student Living",
    gender: "Male",
    price: 11999,
    rating: 4.8,
    occupancy: ["Double", "Triple", "Quad"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A calm, high-service home for students who want predictable meals, fast WiFi, and excellent commute access.",
    nearby: ["Nirma University", "SG Highway", "Gota Circle"],
    roomTypes: [
      { name: "Double Plus", price: 14999, features: ["AC room", "Meals", "Laundry"] },
      { name: "Triple Essential", price: 11999, features: ["Storage", "WiFi", "Housekeeping"] }
    ]
  },
  {
    id: "galactic-nova",
    name: "Galactic Nova Residence",
    location: "Vastrapur, Ahmedabad",
    city: "Ahmedabad",
    type: "Working Pro",
    gender: "Female",
    price: 16499,
    rating: 4.9,
    occupancy: ["Single", "Double"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Elegant women-first PG living near cafes, offices, and universities with premium security and concierge care.",
    nearby: ["IIM Ahmedabad", "Alpha One Mall", "Drive-In Road"],
    roomTypes: [
      { name: "Single Elite", price: 26999, features: ["Private bath", "Premium meals", "Smart lock"] },
      { name: "Double Studio", price: 16499, features: ["Bright room", "AC", "Study desk"] }
    ]
  }
];

export const galleryItems = properties.flatMap((property, propertyIndex) =>
  property.gallery.map((image, index) => ({
    id: `${property.id}-${index}`,
    propertyId: property.id,
    propertyName: property.name,
    title: index === 0 ? "Signature room" : index === 1 ? "Resident lounge" : "Premium facade",
    category: index === 0 ? "Rooms" : index === 1 ? "Lifestyle" : "Exteriors",
    price: property.price,
    image,
    order: propertyIndex * 10 + index,
    description: property.description
  }))
);

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Design student",
    quote: "The move-in felt like a boutique hotel. Clean rooms, quick support, and the food is genuinely dependable."
  },
  {
    name: "Riya Shah",
    role: "Product analyst",
    quote: "I wanted safety without compromising on style. Galactic Living feels polished, calm, and very well managed."
  },
  {
    name: "Dev Patel",
    role: "Engineering intern",
    quote: "WiFi, laundry, meals, visits, payments: everything is organized. It made relocating to Ahmedabad frictionless."
  }
];

export const faqs = [
  ["Can I schedule a same-day visit?", "Yes. Use Book Visit or WhatsApp and our team will confirm the fastest available slot."],
  ["Are meals included?", "Most plans include breakfast and dinner, with upgrades available per property."],
  ["Is there a security deposit?", "Yes, deposits vary by room type and are shown before booking confirmation."],
  ["Can I choose occupancy?", "Single, double, triple, and quad options are available depending on property inventory."]
];
