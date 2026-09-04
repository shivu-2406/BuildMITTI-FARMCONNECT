import { useState } from 'react';

const PANELS = [
  { id: 'soil', label: 'Soil Health', icon: '🌱' },
  { id: 'water', label: 'Water & Environment', icon: '💧' },
  { id: 'market', label: 'Market', icon: '📈' },
  { id: 'inventory', label: 'Inventory', icon: '📦' },
  { id: 'schemes', label: 'Government Schemes', icon: '🏛️' },
];

function SoilHealth() {
  const nutrients = [
    { label: 'Nitrogen (N)', value: 82, unit: 'kg/Ha', status: 'Optimal', color: '#5CB85C' },
    { label: 'Phosphorus (P)', value: 64, unit: 'kg/Ha', status: 'Low', color: '#E8960C' },
    { label: 'Potassium (K)', value: 78, unit: 'kg/Ha', status: 'Optimal', color: '#5CB85C' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* NPK panel */}
      <div className="bg-white rounded-2xl p-7">
        <h3 className="font-display text-xl font-semibold mb-6">NPK Levels</h3>
        <div className="flex flex-col gap-5">
          {nutrients.map((n) => (
            <div key={n.label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#1A1A18]/70">{n.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-medium">{n.value}%</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-mono" style={{ backgroundColor: n.color + '20', color: n.color }}>
                    {n.status}
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#F5EFE0] rounded-full h-2">
                <div className="progress-fill rounded-full" style={{ width: `${n.value}%`, backgroundColor: n.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soil metrics */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Soil pH', value: '6.8', note: 'Optimal range', icon: '⚗️' },
            { label: 'Organic Matter', value: '3.2%', note: 'Good', icon: '🍂' },
            { label: 'Soil Temp', value: '24°C', note: '18cm depth', icon: '🌡️' },
            { label: 'Compaction', value: 'Low', note: 'No risk', icon: '🔩' },
          ].map((m) => (
            <div key={m.label} className="bg-white rounded-2xl p-5">
              <div className="text-2xl mb-3">{m.icon}</div>
              <div className="font-display text-2xl font-semibold mb-1">{m.value}</div>
              <div className="font-mono text-[10px] text-[#1A1A18]/40 uppercase tracking-wider">{m.label}</div>
              <div className="text-xs text-[#5CB85C] mt-1">{m.note}</div>
            </div>
          ))}
        </div>
        {/* Recommendation */}
        <div className="bg-[#E8960C]/10 border border-[#E8960C]/20 rounded-2xl p-5">
          <div className="font-mono text-xs text-[#E8960C] tracking-widest uppercase mb-2">AI Recommendation</div>
          <p className="text-sm text-[#1A1A18]/80 leading-relaxed">
            Apply 25 kg/Ha of DAP fertilizer to Plot B within the next 3 days. Phosphorus levels are borderline — early intervention prevents yield loss during grain fill.
          </p>
        </div>
      </div>
    </div>
  );
}

function WaterEnvironment() {
  const forecast = [
    { day: 'Mon', icon: '☀️', high: 32, low: 22 },
    { day: 'Tue', icon: '⛅', high: 30, low: 21 },
    { day: 'Wed', icon: '🌧️', high: 26, low: 19 },
    { day: 'Thu', icon: '🌧️', high: 24, low: 18 },
    { day: 'Fri', icon: '⛅', high: 28, low: 20 },
    { day: 'Sat', icon: '☀️', high: 33, low: 23 },
    { day: 'Sun', icon: '☀️', high: 35, low: 24 },
  ];

  const irrigationSchedule = [
    { plot: 'Plot A — Wheat', nextRun: 'Tomorrow 5:30 AM', duration: '45 min', status: 'Scheduled' },
    { plot: 'Plot B — Rice', nextRun: 'Paused', duration: '—', status: 'Paused' },
    { plot: 'Plot C — Cotton', nextRun: 'Today 7:00 PM', duration: '30 min', status: 'Due Today' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Weather forecast */}
      <div className="bg-white rounded-2xl p-7">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-semibold">7-Day Forecast</h3>
          <div className="font-mono text-xs text-[#1A1A18]/40">Jalgaon, MH</div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {forecast.map((f) => (
            <div key={f.day} className="flex flex-col items-center gap-2 py-3 px-1 rounded-xl hover:bg-[#F5EFE0] transition-colors">
              <span className="font-mono text-[10px] text-[#1A1A18]/40 uppercase">{f.day}</span>
              <span className="text-xl">{f.icon}</span>
              <span className="font-medium text-xs text-[#1A1A18]">{f.high}°</span>
              <span className="font-mono text-[10px] text-[#1A1A18]/35">{f.low}°</span>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-5 border-t border-black/5 grid grid-cols-3 gap-4">
          {[
            { label: 'Humidity', value: '65%' },
            { label: 'Rain (7d)', value: '12mm' },
            { label: 'UV Index', value: '8 High' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider mb-1">{s.label}</div>
              <div className="font-medium text-sm">{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Irrigation */}
      <div className="bg-white rounded-2xl p-7">
        <h3 className="font-display text-xl font-semibold mb-6">Irrigation Schedule</h3>
        <div className="flex flex-col gap-3">
          {irrigationSchedule.map((item) => (
            <div key={item.plot} className="flex items-center justify-between py-3 border-b border-black/5 last:border-0">
              <div>
                <div className="font-medium text-sm text-[#1A1A18]">{item.plot}</div>
                <div className="font-mono text-xs text-[#1A1A18]/40 mt-0.5">{item.nextRun} · {item.duration}</div>
              </div>
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor:
                    item.status === 'Paused' ? '#F5EFE0' :
                    item.status === 'Due Today' ? '#E8960C20' : '#5CB85C20',
                  color:
                    item.status === 'Paused' ? '#1A1A18' :
                    item.status === 'Due Today' ? '#E8960C' : '#5CB85C',
                }}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-[#1A1A18] rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="font-mono text-xs text-white/40 uppercase tracking-wider">Total water saved</div>
            <div className="font-display text-2xl font-semibold text-white mt-1">1,240 <span className="text-sm text-[#E8960C]">litres</span></div>
          </div>
          <div className="text-3xl">💧</div>
        </div>
      </div>
    </div>
  );
}

function Market() {
  const commodities = [
    { name: 'Wheat', variety: 'GW-322', msp: 2275, market: 2340, change: +2.9, unit: '₹/q' },
    { name: 'Rice', variety: 'IR-64', msp: 2183, market: 2100, change: -3.8, unit: '₹/q' },
    { name: 'Cotton', variety: 'Bt-11', msp: 6620, market: 6890, change: +4.1, unit: '₹/q' },
    { name: 'Soybean', variety: 'JS-335', msp: 4600, market: 4820, change: +4.8, unit: '₹/q' },
    { name: 'Maize', variety: 'Hybrid', msp: 2090, market: 1980, change: -5.3, unit: '₹/q' },
  ];

  const mandis = [
    { name: 'Jalgaon APMC', distance: '12 km', wheat: '₹2,340', rice: '₹2,100' },
    { name: 'Dhule Mandi', distance: '34 km', wheat: '₹2,280', rice: '₹2,080' },
    { name: 'Nashik APMC', distance: '58 km', wheat: '₹2,390', rice: '₹2,140' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Commodity prices */}
      <div className="bg-white rounded-2xl p-7">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-semibold">Commodity Prices</h3>
          <div className="font-mono text-xs text-[#1A1A18]/40 live-dot">Live</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-4 pb-3 border-b border-black/5">
            {['Crop', 'MSP', 'Market', 'Δ'].map((h) => (
              <div key={h} className="font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider">{h}</div>
            ))}
          </div>
          {commodities.map((c) => (
            <div key={c.name} className="grid grid-cols-4 py-3 border-b border-black/5 last:border-0 hover:bg-[#F5EFE0]/50 rounded-lg px-1 -mx-1 transition-colors">
              <div>
                <div className="font-medium text-sm">{c.name}</div>
                <div className="font-mono text-[10px] text-[#1A1A18]/35">{c.variety}</div>
              </div>
              <div className="font-mono text-sm text-[#1A1A18]/60">₹{c.msp.toLocaleString()}</div>
              <div className="font-mono text-sm font-medium">₹{c.market.toLocaleString()}</div>
              <div className={`font-mono text-sm font-medium ${c.change > 0 ? 'text-[#5CB85C]' : 'text-red-500'}`}>
                {c.change > 0 ? '+' : ''}{c.change}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearest mandis */}
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl p-7">
          <h3 className="font-display text-xl font-semibold mb-5">Nearest Mandis</h3>
          <div className="flex flex-col gap-4">
            {mandis.map((m, i) => (
              <div key={m.name} className={`flex items-center justify-between py-3 ${i < mandis.length - 1 ? 'border-b border-black/5' : ''}`}>
                <div>
                  <div className="font-medium text-sm">{m.name}</div>
                  <div className="font-mono text-xs text-[#1A1A18]/40 mt-0.5">{m.distance}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-[#1A1A18]/50">Wheat {m.wheat}</div>
                  <div className="font-mono text-xs text-[#1A1A18]/50">Rice {m.rice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1A1A18] rounded-2xl p-6">
          <div className="font-mono text-xs text-white/40 uppercase tracking-wider mb-3">Best Sell Signal</div>
          <div className="font-display text-2xl font-semibold text-white mb-1">Cotton · Plot C</div>
          <p className="text-sm text-white/60 leading-relaxed">Market price 4.1% above MSP. Consider selling 40% of stock at Nashik APMC this week.</p>
          <button className="mt-4 text-xs font-mono bg-[#E8960C] text-[#1A1A18] px-4 py-2 rounded-full hover:bg-[#F5B83D] transition-colors">
            View Transport Options →
          </button>
        </div>
      </div>
    </div>
  );
}

function Inventory() {
  const categories = [
    {
      label: 'Seeds',
      items: [
        { name: 'Wheat GW-322', qty: '420 kg', status: 'Good', color: '#5CB85C' },
        { name: 'Rice IR-64', qty: '180 kg', status: 'Low', color: '#E8960C' },
        { name: 'Cotton Bt-11', qty: '85 kg', status: 'Critical', color: '#ef4444' },
      ],
    },
    {
      label: 'Fertilizers',
      items: [
        { name: 'Urea (46-0-0)', qty: '1,200 kg', status: 'Good', color: '#5CB85C' },
        { name: 'DAP (18-46-0)', qty: '340 kg', status: 'Low', color: '#E8960C' },
        { name: 'MOP (0-0-60)', qty: '520 kg', status: 'Good', color: '#5CB85C' },
      ],
    },
    {
      label: 'Pesticides',
      items: [
        { name: 'Neem Oil Spray', qty: '24 L', status: 'Good', color: '#5CB85C' },
        { name: 'Chlorpyrifos', qty: '8 L', status: 'Low', color: '#E8960C' },
      ],
    },
  ];

  const equipment = [
    { name: 'Tractor (MF-241)', status: 'Operational', next: 'Service in 120 hr' },
    { name: 'Drip Irrigation Pump', status: 'Operational', next: 'Filter clean due' },
    { name: 'Sprayer Unit', status: 'Maintenance', next: 'Under repair' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Stock items */}
      <div className="bg-white rounded-2xl p-7">
        <h3 className="font-display text-xl font-semibold mb-6">Stock Levels</h3>
        <div className="flex flex-col gap-5">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider mb-3">{cat.label}</div>
              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-2 border-b border-black/5 last:border-0">
                    <span className="text-sm text-[#1A1A18]/80">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-[#1A1A18]">{item.qty}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ backgroundColor: item.color + '15', color: item.color }}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment */}
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-2xl p-7">
          <h3 className="font-display text-xl font-semibold mb-5">Equipment Status</h3>
          <div className="flex flex-col gap-4">
            {equipment.map((eq) => (
              <div key={eq.name} className="flex items-start gap-4 py-3 border-b border-black/5 last:border-0">
                <div
                  className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: eq.status === 'Operational' ? '#5CB85C' : '#E8960C' }}
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">{eq.name}</div>
                  <div className="font-mono text-xs text-[#1A1A18]/40 mt-0.5">{eq.next}</div>
                </div>
                <span className="text-xs font-mono text-[#1A1A18]/50">{eq.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#E8960C] rounded-2xl p-6">
          <div className="font-mono text-xs text-[#1A1A18]/60 uppercase tracking-wider mb-2">Reorder Alert</div>
          <div className="font-display text-xl font-semibold text-[#1A1A18] mb-1">3 items critically low</div>
          <p className="text-sm text-[#1A1A18]/70">Cotton Bt-11 seeds, DAP fertilizer, and Chlorpyrifos need restocking before next cycle.</p>
          <button className="mt-4 text-xs font-mono bg-[#1A1A18] text-white px-4 py-2 rounded-full hover:bg-[#252521] transition-colors">
            Contact Vendors →
          </button>
        </div>
      </div>
    </div>
  );
}

function GovernmentSchemes() {
  const schemes = [
    {
      name: 'PM-KISAN',
      desc: 'Pradhan Mantri Kisan Samman Nidhi',
      benefit: '₹6,000 / year',
      status: 'Active',
      statusColor: '#5CB85C',
      nextAction: 'Next installment in 43 days',
      progress: 67,
    },
    {
      name: 'PMFBY',
      desc: 'Pradhan Mantri Fasal Bima Yojana',
      benefit: 'Crop Insurance',
      status: 'Enrolled',
      statusColor: '#5CB85C',
      nextAction: 'Rabi season coverage active',
      progress: 100,
    },
    {
      name: 'PMKSY',
      desc: 'PM Krishi Sinchai Yojana',
      benefit: 'Drip subsidy 90%',
      status: 'Pending',
      statusColor: '#E8960C',
      nextAction: 'Document verification pending',
      progress: 45,
    },
    {
      name: 'Soil Health Card',
      desc: 'Government Soil Testing Scheme',
      benefit: 'Free soil analysis',
      status: 'Renewal Due',
      statusColor: '#E8960C',
      nextAction: 'Card expires in 18 days',
      progress: 20,
    },
    {
      name: 'e-NAM',
      desc: 'National Agriculture Market Portal',
      benefit: 'Direct market access',
      status: 'Not Enrolled',
      statusColor: '#1A1A18',
      nextAction: 'Register with Aadhaar + land records',
      progress: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {schemes.map((scheme) => (
        <div key={scheme.name} className="bg-white rounded-2xl p-6 card-hover">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="font-display text-lg font-semibold">{scheme.name}</div>
              <div className="font-mono text-xs text-[#1A1A18]/40 mt-0.5">{scheme.desc}</div>
            </div>
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: scheme.statusColor + '15', color: scheme.statusColor }}
            >
              {scheme.status}
            </span>
          </div>
          <div className="font-display text-2xl font-semibold text-[#1A1A18] mb-1">{scheme.benefit}</div>
          {scheme.progress > 0 && (
            <div className="w-full bg-[#F5EFE0] rounded-full h-1.5 my-3">
              <div
                className="progress-fill rounded-full"
                style={{ width: `${scheme.progress}%`, backgroundColor: scheme.statusColor }}
              />
            </div>
          )}
          <p className="text-xs text-[#1A1A18]/50 mt-2 font-mono">{scheme.nextAction}</p>
        </div>
      ))}
      <div className="bg-[#1A1A18] rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div className="font-mono text-xs text-white/40 uppercase tracking-wider mb-3">Total Benefits Active</div>
          <div className="font-display text-4xl font-semibold text-white">₹12,400</div>
          <div className="text-sm text-white/50 mt-1">Annual entitlements secured</div>
        </div>
        <button className="mt-6 text-xs font-mono bg-[#E8960C] text-[#1A1A18] px-4 py-2.5 rounded-full hover:bg-[#F5B83D] transition-colors self-start">
          Apply for more schemes →
        </button>
      </div>
    </div>
  );
}

export default function DashboardPanels() {
  const [activePanel, setActivePanel] = useState('soil');

  const renderPanel = () => {
    switch (activePanel) {
      case 'soil': return <SoilHealth />;
      case 'water': return <WaterEnvironment />;
      case 'market': return <Market />;
      case 'inventory': return <Inventory />;
      case 'schemes': return <GovernmentSchemes />;
      default: return null;
    }
  };

  return (
    <section id="dashboard" className="bg-[#1A1A18] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-4">
            Smart Dashboard
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Everything your
            <br />
            <em className="not-italic text-[#E8960C]">farm needs.</em>
          </h2>
        </div>

        {/* Panel tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 hide-scrollbar">
          {PANELS.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanel(panel.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activePanel === panel.id
                  ? 'bg-[#E8960C] text-[#1A1A18]'
                  : 'bg-white/8 text-white/60 hover:bg-white/12 hover:text-white'
              }`}
            >
              <span>{panel.icon}</span>
              {panel.label}
            </button>
          ))}
        </div>

        {/* Panel content */}
        <div className="animate-fadeIn" key={activePanel}>
          {renderPanel()}
        </div>
      </div>
    </section>
  );
}
