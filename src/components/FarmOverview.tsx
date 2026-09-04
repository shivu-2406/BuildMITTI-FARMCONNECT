const PLOTS = [
  {
    id: 'A',
    name: 'Wheat',
    variety: 'GW-322',
    area: '82 Ha',
    stage: 'Flowering',
    stageColor: '#E8960C',
    health: 94,
    healthColor: '#E8960C',
    advice: 'On track. Peak flowering phase — maintain current fertilizer regime.',
    temp: '28°C',
    moisture: '62%',
    wind: '12 km/h',
    lastIrrigated: 'Yesterday',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=500&fit=crop&auto=format&q=80',
  },
  {
    id: 'B',
    name: 'Rice',
    variety: 'IR-64',
    area: '31 Ha',
    stage: 'Vegetative',
    stageColor: '#5CB85C',
    health: 87,
    healthColor: '#5CB85C',
    advice: 'Moisture slightly high. Consider pausing irrigation for 24 h.',
    temp: '31°C',
    moisture: '78%',
    wind: '8 km/h',
    lastIrrigated: 'Today 6 AM',
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=800&h=500&fit=crop&auto=format&q=80',
  },
  {
    id: 'C',
    name: 'Cotton',
    variety: 'Bt-11',
    area: '45 Ha',
    stage: 'Boll Formation',
    stageColor: '#8B6B47',
    health: 79,
    healthColor: '#8B6B47',
    advice: 'Aphid pressure detected in sector C-3. Apply neem oil spray within 48 h.',
    temp: '34°C',
    moisture: '48%',
    wind: '14 km/h',
    lastIrrigated: '2 days ago',
    image: 'https://images.unsplash.com/photo-1601303516534-bf4c9eddddbb?w=800&h=500&fit=crop&auto=format&q=80',
  },
];

export default function FarmOverview() {
  return (
    <section id="farm-overview" className="bg-[#F5EFE0] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-[#1A1A18]/40 tracking-[0.2em] uppercase mb-4">
            Farm Overview · 3 Plots
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-display text-5xl lg:text-6xl font-semibold leading-tight">
              Your fields,
              <br />
              <em className="not-italic text-[#1A1A18]/60">this morning.</em>
            </h2>
            <p className="text-[#1A1A18]/50 text-sm max-w-xs leading-relaxed">
              Refreshed every 15 min from 18 field sensors and Sentinel-2 satellite pass.
            </p>
          </div>
        </div>

        {/* Plot cards */}
        <div className="flex flex-col gap-6">
          {PLOTS.map((plot) => (
            <div key={plot.id} className="bg-white rounded-3xl overflow-hidden shadow-sm card-hover">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-72 xl:w-80 h-52 lg:h-auto flex-shrink-0 bg-[#EDE6D3]">
                  <img
                    src={plot.image}
                    alt={`${plot.name} field`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Stage badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#1A1A18] tracking-wider"
                    style={{ backgroundColor: plot.stageColor }}
                  >
                    {plot.stage.toUpperCase()}
                  </div>
                  {/* Plot name overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="font-display text-3xl font-semibold text-white leading-tight">
                        {plot.name}
                      </div>
                      <div className="font-mono text-xs text-white/60">
                        Plot {plot.id} · {plot.variety} · {plot.area}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-4xl font-semibold text-white">
                        {plot.health}
                        <span className="text-lg font-mono" style={{ color: plot.healthColor }}>%</span>
                      </div>
                      <div className="font-mono text-xs text-white/50">Health</div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 p-7 flex flex-col justify-between">
                  <div>
                    <p className="text-[#1A1A18]/70 text-base leading-relaxed mb-6">
                      {plot.advice}
                    </p>
                    {/* Progress bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-xs text-[#1A1A18]/40 uppercase tracking-wider">Field Health</span>
                        <span className="font-mono text-sm font-medium text-[#1A1A18]">{plot.health}%</span>
                      </div>
                      <div className="w-full bg-[#F5EFE0] rounded-full h-1.5">
                        <div
                          className="progress-fill rounded-full"
                          style={{ width: `${plot.health}%`, backgroundColor: plot.healthColor }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 border-t border-black/5">
                    {[
                      { label: 'Temp', value: plot.temp },
                      { label: 'Moisture', value: plot.moisture },
                      { label: 'Wind', value: plot.wind },
                      { label: 'Last Irrigated', value: plot.lastIrrigated },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider mb-1">
                          {stat.label}
                        </div>
                        <div className="font-medium text-[#1A1A18] text-sm">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
