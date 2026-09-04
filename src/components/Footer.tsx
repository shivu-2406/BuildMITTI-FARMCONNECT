const LINKS = {
  Platform: ['Dashboard', 'Soil Health', 'Water & Climate', 'Market Prices', 'Inventory'],
  Support: ['Documentation', 'Helpline (Toll-free)', 'Community Forum', 'Video Tutorials'],
  Company: ['About MITTI', 'Blog', 'Careers', 'Press Kit'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Data Usage'],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] px-6 lg:px-10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#E8960C] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#1A1A18]" />
              </div>
              <span className="font-display text-xl font-semibold text-white">MITTI</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Precision agriculture for the modern Indian farmer. Real-time telemetry, AI-driven decisions, and a connected farming ecosystem.
            </p>
            <div className="flex items-center gap-4">
              {['📱', '🐦', '📘', '▶️'].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-sm hover:bg-white/15 transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-4">{section}</div>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <button key={link} className="text-left text-sm text-white/50 hover:text-white transition-colors">
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 border border-white/8 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white mb-1">Weekly farm intelligence.</h3>
            <p className="text-white/45 text-sm">Crop advisories, market updates, and weather alerts — in your inbox.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@farm.com"
              className="flex-1 md:w-64 bg-white/8 border border-white/12 rounded-full px-5 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#E8960C] transition-colors font-mono"
            />
            <button className="bg-[#E8960C] text-[#1A1A18] px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap hover:bg-[#F5B83D] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/8">
          <p className="font-mono text-xs text-white/25">
            © 2025 MITTI Farm Connect. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#5CB85C] animate-pulse" />
            <span className="font-mono text-xs text-white/25">All systems operational</span>
          </div>
          <p className="font-mono text-xs text-white/25">Made with care for Indian farmers 🌾</p>
        </div>
      </div>
    </footer>
  );
}
