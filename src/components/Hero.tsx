import { useEffect, useState } from 'react';

interface Props {
  onLoginClick: () => void;
}

export default function Hero({ onLoginClick }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#F5EFE0] overflow-hidden flex flex-col"
    >
      {/* Background wheat image — right side editorial crop */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 lg:ml-auto h-full relative">
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&h=1400&fit=crop&auto=format&q=80"
            alt="Golden wheat field at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE0] via-[#F5EFE0]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE0]/50 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 flex flex-col min-h-screen justify-center">
        <div className="max-w-xl">
          {/* Label */}
          <div
            className={`flex items-center gap-2 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#1A1A18]/40 uppercase">
              Precision Agriculture Platform
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-6xl lg:text-7xl xl:text-8xl leading-[0.95] font-semibold mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Grow smarter.
            <br />
            Farm with
            <br />
            <em className="text-[#E8960C] not-italic">intelligence.</em>
          </h1>

          {/* Subtext */}
          <p
            className={`text-[#1A1A18]/55 text-lg leading-relaxed mb-10 max-w-sm transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Real-time soil telemetry, precision irrigation scheduling, and AI-driven crop decisions — built for the modern Indian farmer.
          </p>

          {/* CTAs */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <button
              onClick={() => document.querySelector('#dashboard')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 bg-[#1A1A18] text-[#F5EFE0] px-7 py-4 rounded-full font-medium text-base hover:bg-[#E8960C] transition-all duration-300 group"
            >
              Open Dashboard
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 border border-[#1A1A18]/20 text-[#1A1A18]/70 px-7 py-4 rounded-full font-medium text-base hover:border-[#E8960C] hover:text-[#E8960C] transition-all duration-300"
            >
              Login
            </button>
          </div>
        </div>

        {/* Floating stats cards */}
        <div
          className={`mt-16 lg:mt-0 lg:absolute lg:bottom-20 lg:right-10 xl:right-16 flex flex-col gap-4 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Health card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl w-full lg:w-64 animate-float">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-[#1A1A18]/40 tracking-widest uppercase">Overall Health</span>
              <span className="live-dot font-mono text-xs text-[#5CB85C]">Live</span>
            </div>
            <div className="flex items-end gap-1 mb-2">
              <span className="stat-number text-5xl font-semibold text-[#1A1A18]">94</span>
              <span className="text-[#E8960C] text-2xl font-display mb-1">%</span>
            </div>
            <div className="w-full bg-[#F5EFE0] rounded-full h-1.5 mb-2">
              <div className="progress-fill bg-[#E8960C] rounded-full" style={{ width: '94%' }} />
            </div>
            <p className="text-xs text-[#5CB85C] font-medium">↑ 3.2% from last week</p>
          </div>

          {/* AI Advisory card */}
          <div className="bg-[#E8960C] rounded-2xl p-5 shadow-xl w-full lg:w-64">
            <div className="font-mono text-xs text-[#1A1A18]/60 tracking-widest uppercase mb-3">AI Advisory · Now</div>
            <p className="text-[#1A1A18] font-medium text-sm leading-relaxed">
              "Reduce irrigation by 15% — moisture optimal across Plot A."
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-[#1A1A18]/30 tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#1A1A18]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
