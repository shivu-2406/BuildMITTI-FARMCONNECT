import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Nutrients', href: '#nutrients' },
  { label: 'Water & Climate', href: '#water' },
  { label: 'Vendors', href: '#vendors' },
  { label: 'Stock', href: '#stock' },
];

interface Props {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5EFE0]/95 backdrop-blur-md shadow-sm border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleNav('Home', '#hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-full bg-[#E8960C] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#1A1A18]" />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight text-[#1A1A18]">
            MITTI
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className={`text-sm font-medium transition-colors duration-200 ${
                active === link.label
                  ? 'text-[#E8960C]'
                  : 'text-[#1A1A18]/60 hover:text-[#1A1A18]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="flex items-center gap-2 border border-[#1A1A18]/15 text-[#1A1A18]/70 text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#E8960C] hover:text-[#E8960C] transition-all duration-200"
          >
            Login
          </button>
          <button
            onClick={() => document.querySelector('#dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-[#1A1A18] text-[#F5EFE0] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#E8960C] transition-colors duration-200"
          >
            Open Dashboard
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Mobile: Login + Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="text-sm font-medium text-[#1A1A18]/70 border border-[#1A1A18]/15 px-4 py-2 rounded-full hover:border-[#E8960C] hover:text-[#E8960C] transition-all"
          >
            Login
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-5 h-0.5 bg-[#1A1A18] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#1A1A18] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#1A1A18] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } bg-[#F5EFE0]/98 backdrop-blur-md border-t border-black/5`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className={`text-left text-base font-medium py-1 transition-colors ${
                active === link.label ? 'text-[#E8960C]' : 'text-[#1A1A18]/70'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
