import { useState } from 'react';

interface Props {
  onLogout: () => void;
}

const ORDERS = [
  { id: '#ORD-2841', farmer: 'Ramesh Patil', item: 'DAP Fertilizer 5 bags', date: 'Today 9:15 AM', amount: '₹6,750', status: 'New', statusColor: '#E8960C' },
  { id: '#ORD-2840', farmer: 'Suresh Jadhav', item: 'Urea 10 bags', date: 'Today 7:30 AM', amount: '₹2,670', status: 'Confirmed', statusColor: '#5CB85C' },
  { id: '#ORD-2838', farmer: 'Meena Kulkarni', item: 'Neem Oil Spray 10L', date: 'Yesterday', amount: '₹4,800', status: 'Dispatched', statusColor: '#5CB85C' },
  { id: '#ORD-2835', farmer: 'Anil Sharma', item: 'Cotton Seeds 3 pkt', date: '2 days ago', amount: '₹2,250', status: 'Delivered', statusColor: '#1A1A18' },
];

const LISTINGS = [
  { name: 'DAP (18-46-0)', stock: '2,400 kg', price: '₹1,350/bag', sold: 34, color: '#5CB85C' },
  { name: 'Urea (46-0-0)', stock: '5,000 kg', price: '₹267/bag', sold: 82, color: '#5CB85C' },
  { name: 'Hybrid Cotton Seeds', stock: '240 pkt', price: '₹750/pkt', sold: 15, color: '#E8960C' },
  { name: 'Neem Oil Spray', stock: '120 L', price: '₹480/L', sold: 28, color: '#5CB85C' },
];

export default function VendorDashboard({ onLogout }: Props) {
  const [activeTab, setActiveTab] = useState<'orders' | 'listings' | 'farmers'>('orders');

  return (
    <div className="min-h-screen bg-[#F5EFE0]">
      {/* Topbar */}
      <div className="sticky top-0 z-40 bg-[#F5EFE0]/95 backdrop-blur-md border-b border-black/5 px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#E8960C] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A18]" />
          </div>
          <span className="font-display text-lg font-semibold">MITTI</span>
          <span className="ml-2 font-mono text-xs bg-[#1A1A18]/8 text-[#1A1A18]/60 px-2.5 py-1 rounded-full">
            Vendor
          </span>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-sm font-medium text-[#1A1A18]/60 hover:text-[#1A1A18] border border-black/10 hover:border-[#1A1A18]/30 px-4 py-2 rounded-full transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          Logout
        </button>
      </div>

      {/* Header */}
      <div className="bg-[#1A1A18] px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-white/30 uppercase tracking-widest mb-2">Vendor Portal</div>
            <h1 className="font-display text-4xl font-semibold text-white">AgroPlus <em className="not-italic text-[#E8960C]">Supplies.</em></h1>
            <p className="text-white/40 text-sm mt-1">Jalgaon, Maharashtra · Verified Vendor</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { label: 'Orders Today', value: '2', color: '#E8960C' },
              { label: 'Revenue (Month)', value: '₹1.4L', color: '#5CB85C' },
              { label: 'Active Listings', value: '4', color: 'white' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white/6 rounded-2xl p-4">
                <div className="font-display text-2xl font-semibold" style={{ color: s.color }}>{s.value}</div>
                <div className="font-mono text-[10px] text-white/35 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs + content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex gap-2 mb-8">
          {(['orders', 'listings', 'farmers'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all ${
                activeTab === tab ? 'bg-[#1A1A18] text-white' : 'bg-white text-[#1A1A18]/60 hover:text-[#1A1A18]'
              }`}
            >
              {tab === 'orders' ? 'Orders' : tab === 'listings' ? 'My Listings' : 'Connected Farmers'}
            </button>
          ))}
        </div>

        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm animate-fadeIn">
            <div className="px-6 py-5 border-b border-black/5">
              <h2 className="font-display text-xl font-semibold">Recent Orders</h2>
            </div>
            <div className="divide-y divide-black/5">
              {ORDERS.map((order) => (
                <div key={order.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 hover:bg-[#F5EFE0]/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EFE0] flex items-center justify-center font-display text-lg flex-shrink-0">📦</div>
                    <div>
                      <div className="font-medium text-sm">{order.item}</div>
                      <div className="font-mono text-xs text-[#1A1A18]/40 mt-0.5">{order.farmer} · {order.id}</div>
                      <div className="font-mono text-xs text-[#1A1A18]/35 mt-0.5">{order.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-14 sm:ml-0">
                    <div className="font-display text-lg font-semibold">{order.amount}</div>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: order.statusColor + '15', color: order.statusColor }}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'listings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fadeIn">
            {LISTINGS.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-display text-lg font-semibold">{item.name}</div>
                    <div className="font-mono text-xs text-[#1A1A18]/40 mt-1">In stock: {item.stock}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-xl font-semibold text-[#E8960C]">{item.price}</div>
                    <div className="font-mono text-xs text-[#1A1A18]/35 mt-1">{item.sold} sold this month</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-xl border border-black/10 text-sm font-medium text-[#1A1A18]/70 hover:bg-[#1A1A18] hover:text-white hover:border-[#1A1A18] transition-all">
                    Edit Listing
                  </button>
                  <button className="flex-1 py-2 rounded-xl bg-[#E8960C]/10 text-sm font-medium text-[#E8960C] hover:bg-[#E8960C] hover:text-[#1A1A18] transition-all">
                    View Orders
                  </button>
                </div>
              </div>
            ))}
            <button className="bg-[#F5EFE0] border-2 border-dashed border-black/15 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:border-[#E8960C] hover:bg-[#E8960C]/5 transition-all group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">+</div>
              <div className="font-medium text-sm text-[#1A1A18]/50 group-hover:text-[#E8960C]">Add New Listing</div>
            </button>
          </div>
        )}

        {activeTab === 'farmers' && (
          <div className="bg-white rounded-3xl p-8 animate-fadeIn">
            <h2 className="font-display text-xl font-semibold mb-6">Connected Farmers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Ramesh Patil', location: 'Jalgaon', plots: 3, orders: 8 },
                { name: 'Suresh Jadhav', location: 'Dhule', plots: 2, orders: 5 },
                { name: 'Meena Kulkarni', location: 'Nashik', plots: 4, orders: 12 },
                { name: 'Anil Sharma', location: 'Aurangabad', plots: 1, orders: 3 },
                { name: 'Priya Deshmukh', location: 'Jalgaon', plots: 2, orders: 7 },
              ].map((farmer) => (
                <div key={farmer.name} className="bg-[#F5EFE0] rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-[#E8960C]/15 flex items-center justify-center font-display font-semibold text-[#E8960C] text-lg mb-3">
                    {farmer.name[0]}
                  </div>
                  <div className="font-medium text-sm mb-0.5">{farmer.name}</div>
                  <div className="font-mono text-xs text-[#1A1A18]/40">{farmer.location} · {farmer.plots} plots</div>
                  <div className="font-mono text-xs text-[#E8960C] mt-2">{farmer.orders} orders lifetime</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
