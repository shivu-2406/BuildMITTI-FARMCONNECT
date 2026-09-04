const VENDORS = [
  {
    name: 'AgroPlus Supplies',
    category: 'Fertilizers & Seeds',
    location: 'Jalgaon, MH',
    rating: 4.8,
    reviews: 243,
    badge: 'Verified',
    distance: '8 km',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop&auto=format&q=80',
    tags: ['DAP', 'Urea', 'Hybrid Seeds'],
    color: '#5CB85C',
  },
  {
    name: 'Kisaan Kendra',
    category: 'Equipment Rental',
    location: 'Dhule, MH',
    rating: 4.6,
    reviews: 189,
    badge: 'Top Rated',
    distance: '22 km',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&auto=format&q=80',
    tags: ['Tractors', 'Harvesters', 'Sprayers'],
    color: '#E8960C',
  },
  {
    name: 'BioGrow Organics',
    category: 'Organic Inputs',
    location: 'Nashik, MH',
    rating: 4.9,
    reviews: 312,
    badge: 'Organic Certified',
    distance: '45 km',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format&q=80',
    tags: ['Compost', 'Bio-pest', 'Neem Oil'],
    color: '#8B6B47',
  },
  {
    name: 'HydroTech Irrigation',
    category: 'Irrigation Systems',
    location: 'Pune, MH',
    rating: 4.7,
    reviews: 156,
    badge: 'Verified',
    distance: '128 km',
    image: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=400&h=300&fit=crop&auto=format&q=80',
    tags: ['Drip', 'Sprinkler', 'Pumps'],
    color: '#5CB85C',
  },
];

export default function VendorSection() {
  return (
    <section id="vendors" className="bg-[#F5EFE0] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-xs text-[#1A1A18]/40 tracking-[0.2em] uppercase mb-4">
              Verified Vendors
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold leading-tight">
              Trusted
              <br />
              <em className="not-italic text-[#E8960C]">farm partners.</em>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-white border border-black/10 rounded-full px-5 py-2.5 text-sm font-medium text-[#1A1A18]/70 hover:border-[#E8960C] hover:text-[#E8960C] transition-all">
              All Categories
            </button>
            <button className="bg-[#1A1A18] text-[#F5EFE0] rounded-full px-5 py-2.5 text-sm font-medium hover:bg-[#E8960C] transition-all">
              Find Nearby →
            </button>
          </div>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden mb-12 py-3 border-t border-b border-black/8">
          <div className="flex animate-ticker whitespace-nowrap gap-12">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {['DAP: ₹1,350/bag', 'Urea: ₹267/bag', 'MOP: ₹900/bag', 'Neem Cake: ₹48/kg', 'Cotton Seeds: ₹750/pkt', 'Hybrid Rice: ₹340/pkt', 'Drip Kit: ₹14,000/Ha'].map((item) => (
                  <span key={item} className="font-mono text-sm text-[#1A1A18]/50 flex-shrink-0">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Vendor cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {VENDORS.map((vendor) => (
            <div key={vendor.name} className="bg-white rounded-2xl overflow-hidden card-hover group">
              {/* Image */}
              <div className="relative h-40 bg-[#EDE6D3]">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                  className="absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded-full text-white"
                  style={{ backgroundColor: vendor.color + 'CC' }}
                >
                  {vendor.badge}
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-xs text-white/70">
                  📍 {vendor.distance}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="font-display text-base font-semibold mb-0.5">{vendor.name}</div>
                <div className="font-mono text-xs text-[#1A1A18]/40 mb-3">{vendor.category} · {vendor.location}</div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-3 h-3" fill={s <= Math.round(vendor.rating) ? '#E8960C' : '#EDE6D3'} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-[#1A1A18]/50">{vendor.rating} ({vendor.reviews})</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {vendor.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono bg-[#F5EFE0] text-[#1A1A18]/60 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2.5 rounded-xl border border-black/10 text-sm font-medium text-[#1A1A18]/70 hover:bg-[#1A1A18] hover:text-white hover:border-[#1A1A18] transition-all duration-200">
                  Contact Vendor
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
