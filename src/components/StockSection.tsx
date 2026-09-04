import { useState } from 'react';

const CATEGORIES = ['All', 'Seeds', 'Fertilizers', 'Pesticides', 'Equipment'];

const STOCK_ITEMS = [
  { name: 'Wheat GW-322 Seeds', category: 'Seeds', qty: 420, unit: 'kg', threshold: 200, cost: '₹28/kg', supplier: 'AgroPlus Supplies', expiry: 'Mar 2026' },
  { name: 'Rice IR-64 Seeds', category: 'Seeds', qty: 180, unit: 'kg', threshold: 250, cost: '₹45/kg', supplier: 'Kisaan Kendra', expiry: 'Feb 2026' },
  { name: 'Cotton Bt-11 Seeds', category: 'Seeds', qty: 85, unit: 'kg', threshold: 150, cost: '₹750/pkt', supplier: 'AgroPlus Supplies', expiry: 'Apr 2026' },
  { name: 'Urea (46-0-0)', category: 'Fertilizers', qty: 1200, unit: 'kg', threshold: 500, cost: '₹267/bag', supplier: 'AgroPlus Supplies', expiry: 'Stable' },
  { name: 'DAP (18-46-0)', category: 'Fertilizers', qty: 340, unit: 'kg', threshold: 500, cost: '₹1,350/bag', supplier: 'Kisaan Kendra', expiry: 'Stable' },
  { name: 'MOP (0-0-60)', category: 'Fertilizers', qty: 520, unit: 'kg', threshold: 300, cost: '₹900/bag', supplier: 'BioGrow Organics', expiry: 'Stable' },
  { name: 'Neem Oil Spray', category: 'Pesticides', qty: 24, unit: 'L', threshold: 20, cost: '₹480/L', supplier: 'BioGrow Organics', expiry: 'Nov 2025' },
  { name: 'Chlorpyrifos 20EC', category: 'Pesticides', qty: 8, unit: 'L', threshold: 15, cost: '₹380/L', supplier: 'AgroPlus Supplies', expiry: 'Aug 2025' },
  { name: 'Drip Tape Rolls', category: 'Equipment', qty: 12, unit: 'rolls', threshold: 5, cost: '₹2,400/roll', supplier: 'HydroTech Irrigation', expiry: 'N/A' },
];

function getStatus(qty: number, threshold: number) {
  const ratio = qty / threshold;
  if (ratio < 0.6) return { label: 'Critical', color: '#ef4444', bg: '#ef444415' };
  if (ratio < 1) return { label: 'Low', color: '#E8960C', bg: '#E8960C15' };
  return { label: 'Good', color: '#5CB85C', bg: '#5CB85C15' };
}

export default function StockSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? STOCK_ITEMS
    : STOCK_ITEMS.filter((item) => item.category === activeCategory);

  const criticalCount = STOCK_ITEMS.filter((i) => getStatus(i.qty, i.threshold).label === 'Critical').length;
  const lowCount = STOCK_ITEMS.filter((i) => getStatus(i.qty, i.threshold).label === 'Low').length;

  return (
    <section id="stock" className="bg-[#EDE6D3] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs text-[#1A1A18]/40 tracking-[0.2em] uppercase mb-4">
              Inventory Management
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold leading-tight">
              Stock at a
              <br />
              <em className="not-italic text-[#E8960C]">glance.</em>
            </h2>
          </div>

          {/* Alert badges */}
          <div className="flex gap-3">
            {criticalCount > 0 && (
              <div className="bg-red-50 border border-red-100 rounded-2xl px-5 py-3">
                <div className="font-display text-2xl font-semibold text-red-500">{criticalCount}</div>
                <div className="font-mono text-xs text-red-400">Critical</div>
              </div>
            )}
            {lowCount > 0 && (
              <div className="bg-[#E8960C]/10 border border-[#E8960C]/20 rounded-2xl px-5 py-3">
                <div className="font-display text-2xl font-semibold text-[#E8960C]">{lowCount}</div>
                <div className="font-mono text-xs text-[#E8960C]/70">Low Stock</div>
              </div>
            )}
            <div className="bg-[#5CB85C]/10 border border-[#5CB85C]/20 rounded-2xl px-5 py-3">
              <div className="font-display text-2xl font-semibold text-[#5CB85C]">{STOCK_ITEMS.length - criticalCount - lowCount}</div>
              <div className="font-mono text-xs text-[#5CB85C]/70">Healthy</div>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#1A1A18] text-white'
                  : 'bg-white/70 text-[#1A1A18]/60 hover:bg-white hover:text-[#1A1A18]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table — overflow-x-auto prevents column collision on all screen sizes */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse">
              <thead>
                <tr className="border-b border-black/5">
                  <th className="text-left px-6 py-4 font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider w-[220px]">Item</th>
                  <th className="text-left px-4 py-4 font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider w-[100px]">Category</th>
                  <th className="text-left px-4 py-4 font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider w-[100px]">Quantity</th>
                  <th className="text-left px-4 py-4 font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider w-[100px]">Threshold</th>
                  <th className="text-left px-4 py-4 font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider w-[110px]">Unit Cost</th>
                  <th className="text-left px-4 py-4 font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider w-[160px]">Supplier</th>
                  <th className="text-left px-4 py-4 font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider w-[90px]">Expiry</th>
                  <th className="text-left px-6 py-4 font-mono text-[10px] text-[#1A1A18]/35 uppercase tracking-wider w-[90px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, i) => {
                  const status = getStatus(item.qty, item.threshold);
                  const fillPct = Math.min(100, (item.qty / item.threshold) * 100);
                  return (
                    <tr
                      key={item.name}
                      className={`hover:bg-[#F5EFE0]/50 transition-colors ${
                        i < filtered.length - 1 ? 'border-b border-black/5' : ''
                      }`}
                    >
                      {/* Item name + mini bar */}
                      <td className="px-6 py-4 align-middle">
                        <div className="font-medium text-sm text-[#1A1A18] whitespace-nowrap">{item.name}</div>
                        <div className="w-20 bg-[#F5EFE0] rounded-full h-1 mt-1.5">
                          <div
                            className="h-1 rounded-full"
                            style={{ width: `${fillPct}%`, backgroundColor: status.color }}
                          />
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-4 py-4 align-middle">
                        <span className="font-mono text-xs text-[#1A1A18]/45 whitespace-nowrap">{item.category}</span>
                      </td>

                      {/* Quantity */}
                      <td className="px-4 py-4 align-middle">
                        <span className="font-mono text-sm font-medium text-[#1A1A18] whitespace-nowrap">
                          {item.qty.toLocaleString()}
                          <span className="text-[#1A1A18]/35 text-xs ml-1">{item.unit}</span>
                        </span>
                      </td>

                      {/* Threshold */}
                      <td className="px-4 py-4 align-middle">
                        <span className="font-mono text-xs text-[#1A1A18]/40 whitespace-nowrap">
                          {item.threshold} {item.unit}
                        </span>
                      </td>

                      {/* Cost */}
                      <td className="px-4 py-4 align-middle">
                        <span className="font-mono text-sm text-[#1A1A18]/65 whitespace-nowrap">{item.cost}</span>
                      </td>

                      {/* Supplier */}
                      <td className="px-4 py-4 align-middle">
                        <span className="text-sm text-[#1A1A18]/60">{item.supplier}</span>
                      </td>

                      {/* Expiry */}
                      <td className="px-4 py-4 align-middle">
                        <span className="font-mono text-xs text-[#1A1A18]/40 whitespace-nowrap">{item.expiry}</span>
                      </td>

                      {/* Status badge */}
                      <td className="px-6 py-4 align-middle">
                        <span
                          className="text-xs font-mono px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{ backgroundColor: status.bg, color: status.color }}
                        >
                          {status.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
