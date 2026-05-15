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

export const contact = {
  email: "galacticstay@gmail.com",
  phone: "9265964547",
  instagram: "https://www.instagram.com/galacticliving.in?igsh=ZDd3cm92ZjlsbDN2"
};

export const occupancyPricing = [
  { name: "2X Double Occupancy", beds: "x 2", price: 22700, features: ["Shared premium room", "AC comfort", "Attached washroom"] },
  { name: "3X Triple Occupancy", beds: "x 3", price: 16700, features: ["Smart shared room", "Study-friendly setup", "Daily housekeeping"] },
  { name: "4X Quadruple Occupancy", beds: "x 4", price: 14700, features: ["Value living", "Meals included", "Reliable Wi-Fi"] },
  { name: "5X Quintuple Occupancy", beds: "x 5", price: 12700, features: ["Budget-friendly plan", "Clean common spaces", "Security access"] }
];

export const propertyAmenities = ["Attached washrooms", "Air Conditioning", "Spacious Cupboards"];

export const propertyServices = [
  "Hot & Delicious Meals",
  "High Speed WIFI",
  "Laundry Service",
  "Professional Housekeeping",
  "24*7 Security Surveillance"
];

export const properties = [
  {
    id: "galactic-alpha",
    name: "Galactic Alpha House",
    location: "Navrangpura, Ahmedabad",
    city: "Ahmedabad",
    type: "Premium PG",
    gender: "Unisex",
    price: 12700,
    rating: 4.9,
    occupancy: ["2X Double", "3X Triple", "4X Quad", "5X Quint"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    ],
    description:
      "A flagship luxury co-living address with smart access, bright rooms, curated meals, and a polished resident experience.",
    nearby: ["CEPT University", "HL College", "Vijay Cross Road", "CG Road"],
    roomTypes: occupancyPricing
  },
  {
    id: "galactic-orion",
    name: "Galactic Orion House",
    location: "Gota, Ahmedabad",
    city: "Ahmedabad",
    type: "Student Living",
    gender: "Male",
    price: 12700,
    rating: 4.8,
    occupancy: ["2X Double", "3X Triple", "4X Quad", "5X Quint"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A calm, high-service home for students who want predictable meals, fast WiFi, and excellent commute access.",
    nearby: ["Nirma University", "SG Highway", "Gota Circle"],
    roomTypes: occupancyPricing
  },
  {
    id: "galactic-nova",
    name: "Galactic Nova Residence",
    location: "Vastrapur, Ahmedabad",
    city: "Ahmedabad",
    type: "Working Pro",
    gender: "Female",
    price: 12700,
    rating: 4.9,
    occupancy: ["2X Double", "3X Triple", "4X Quad", "5X Quint"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "Elegant women-first PG living near cafes, offices, and universities with premium security and concierge care.",
    nearby: ["IIM Ahmedabad", "Alpha One Mall", "Drive-In Road"],
    roomTypes: occupancyPricing
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
