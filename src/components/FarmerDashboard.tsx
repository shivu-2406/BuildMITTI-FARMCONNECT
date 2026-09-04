import DashboardPanels from './DashboardPanels';
import FarmOverview from './FarmOverview';

interface Props {
  onLogout: () => void;
}

export default function FarmerDashboard({ onLogout }: Props) {
  return (
    <div className="min-h-screen bg-[#F5EFE0]">
      {/* Dashboard topbar */}
      <div className="sticky top-0 z-40 bg-[#F5EFE0]/95 backdrop-blur-md border-b border-black/5 px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#E8960C] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A18]" />
          </div>
          <span className="font-display text-lg font-semibold">MITTI</span>
          <span className="ml-2 font-mono text-xs text-[#1A1A18]/40 uppercase tracking-widest bg-[#E8960C]/10 text-[#E8960C] px-2.5 py-1 rounded-full">
            Farmer
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#5CB85C] animate-pulse" />
            <span className="font-mono text-xs text-[#1A1A18]/40">Live · Jalgaon, MH</span>
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
      </div>

      {/* Welcome strip */}
      <div className="bg-[#1A1A18] px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-white/30 uppercase tracking-widest mb-2">Good morning, Farmer</div>
            <h1 className="font-display text-4xl font-semibold text-white">Your farm is <em className="not-italic text-[#E8960C]">healthy.</em></h1>
          </div>
          <div className="flex gap-5">
            {[
              { label: 'Overall Health', value: '94%', color: '#5CB85C' },
              { label: 'Plots Active', value: '3', color: '#E8960C' },
              { label: 'Alerts', value: '2', color: '#ef4444' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-semibold" style={{ color: s.color }}>{s.value}</div>
                <div className="font-mono text-[10px] text-white/35 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reuse the existing sections */}
      <FarmOverview />
      <DashboardPanels />
    </div>
  );
}
