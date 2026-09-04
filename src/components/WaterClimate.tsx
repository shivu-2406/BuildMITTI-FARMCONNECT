export default function WaterClimate() {
  const stats = [
    { label: 'Avg Daily Usage', value: '4,200', unit: 'L/Ha', delta: '−8% vs last week', good: true },
    { label: 'Rainfall (7 days)', value: '12', unit: 'mm', delta: '3x expected', good: true },
    { label: 'Soil Moisture', value: '62', unit: '%', delta: '+4% optimal', good: true },
    { label: 'Next Rain', value: '3', unit: 'days', delta: 'Wednesday forecast', good: null },
  ];

  const bars = [
    { day: 'M', usage: 60, rain: 0 },
    { day: 'T', usage: 55, rain: 0 },
    { day: 'W', usage: 45, rain: 5 },
    { day: 'T', usage: 70, rain: 0 },
    { day: 'F', usage: 50, rain: 7 },
    { day: 'S', usage: 30, rain: 0 },
    { day: 'S', usage: 40, rain: 0 },
  ];

  return (
    <section id="water" className="bg-[#1A1A18] py-24 px-6 lg:px-10 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8960C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-6">
              Water & Climate
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Smart water,
              <br />
              <em className="not-italic text-[#E8960C]">zero waste.</em>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-sm">
              AI-optimized irrigation reduces water consumption by up to 35% while maintaining ideal soil moisture for every crop stage.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/6 border border-white/8 rounded-2xl p-5">
                  <div className="font-mono text-[10px] text-white/35 uppercase tracking-wider mb-3">{s.label}</div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="font-display text-3xl font-semibold text-white">{s.value}</span>
                    <span className="text-[#E8960C] font-mono text-sm mb-1">{s.unit}</span>
                  </div>
                  <div className={`text-xs font-mono ${s.good === true ? 'text-[#5CB85C]' : s.good === false ? 'text-red-400' : 'text-white/40'}`}>
                    {s.delta}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — chart + image */}
          <div className="flex flex-col gap-4">
            {/* Irrigation bar chart */}
            <div className="bg-white/6 border border-white/8 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg font-semibold text-white">Weekly Water Usage</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#E8960C]" />
                    <span className="font-mono text-xs text-white/40">Irrigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#5CB85C]" />
                    <span className="font-mono text-xs text-white/40">Rain</span>
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-3 h-32">
                {bars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col gap-0.5 justify-end" style={{ height: '96px' }}>
                      {bar.rain > 0 && (
                        <div
                          className="w-full rounded-t bg-[#5CB85C] transition-all"
                          style={{ height: `${(bar.rain / 10) * 100}%`, minHeight: '6px' }}
                        />
                      )}
                      <div
                        className="w-full rounded bg-[#E8960C]/60 hover:bg-[#E8960C] transition-colors"
                        style={{ height: `${bar.usage}%` }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-white/30">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo card */}
            <div className="relative rounded-2xl overflow-hidden h-52 bg-[#252521]">
              <img
                src="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=800&h=400&fit=crop&auto=format&q=80"
                alt="Drip irrigation system in field"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A18]/80 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="font-mono text-xs text-white/40 uppercase tracking-wider mb-1">Drip System — Plot A</div>
                <div className="font-display text-2xl font-semibold text-white">Running</div>
                <div className="text-sm text-[#5CB85C]">Optimal flow 4.2 L/min/Ha</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
