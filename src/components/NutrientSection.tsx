export default function NutrientSection() {
  const nutrients = [
    {
      name: 'Nitrogen',
      symbol: 'N',
      value: 82,
      desc: 'Critical for leaf growth and photosynthesis. Current levels optimal for wheat flowering stage.',
      color: '#5CB85C',
      bg: '#5CB85C15',
    },
    {
      name: 'Phosphorus',
      symbol: 'P',
      value: 64,
      desc: 'Root development and energy transfer. Below optimal threshold — supplement recommended.',
      color: '#E8960C',
      bg: '#E8960C15',
    },
    {
      name: 'Potassium',
      symbol: 'K',
      value: 78,
      desc: 'Disease resistance and water regulation. Good levels across all three plots.',
      color: '#8B6B47',
      bg: '#8B6B4715',
    },
    {
      name: 'Calcium',
      symbol: 'Ca',
      value: 91,
      desc: 'Cell wall strength and nutrient uptake. Excellent levels — no intervention needed.',
      color: '#5CB85C',
      bg: '#5CB85C15',
    },
    {
      name: 'Magnesium',
      symbol: 'Mg',
      value: 55,
      desc: 'Chlorophyll production and enzyme activation. Moderate deficiency in Plot B detected.',
      color: '#E8960C',
      bg: '#E8960C15',
    },
    {
      name: 'Sulfur',
      symbol: 'S',
      value: 70,
      desc: 'Protein synthesis and enzyme function. Within acceptable range for current growth stage.',
      color: '#5CB85C',
      bg: '#5CB85C15',
    },
  ];

  return (
    <section id="nutrients" className="bg-[#F5EFE0] py-24 px-6 lg:px-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8960C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading + image */}
          <div>
            <div className="font-mono text-xs text-[#1A1A18]/40 tracking-[0.2em] uppercase mb-6">
              Soil Nutrients
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Know your
              <br />
              <em className="not-italic text-[#E8960C]">soil deeply.</em>
            </h2>
            <p className="text-[#1A1A18]/55 text-lg leading-relaxed mb-10 max-w-sm">
              Real-time nutrient monitoring from embedded sensors and weekly lab analysis. Precision supplementation, zero guesswork.
            </p>

            {/* Big photo card */}
            <div className="relative rounded-3xl overflow-hidden h-72 bg-[#EDE6D3]">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&auto=format&q=80"
                alt="Rich fertile soil with organic matter"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18]/70 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-1">Organic Matter</div>
                <div className="font-display text-3xl font-semibold text-white">3.2%</div>
                <div className="text-sm text-[#E8960C]">Above regional average</div>
              </div>
            </div>
          </div>

          {/* Right — nutrient cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nutrients.map((n) => (
              <div
                key={n.symbol}
                className="bg-white rounded-2xl p-5 card-hover group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-display text-lg font-bold"
                    style={{ backgroundColor: n.bg, color: n.color }}
                  >
                    {n.symbol}
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-semibold">{n.value}</div>
                    <div className="font-mono text-[10px] text-[#1A1A18]/35">of 100</div>
                  </div>
                </div>
                <div className="w-full bg-[#F5EFE0] rounded-full h-1.5 mb-3">
                  <div className="progress-fill rounded-full" style={{ width: `${n.value}%`, backgroundColor: n.color }} />
                </div>
                <div className="font-medium text-sm text-[#1A1A18] mb-1">{n.name}</div>
                <p className="text-xs text-[#1A1A18]/45 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {n.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
