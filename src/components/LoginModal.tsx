import { useState } from 'react';

type Role = 'farmer' | 'vendor';
type Step = 'role' | 'phone' | 'otp';

interface Props {
  onClose: () => void;
  onLogin: (role: Role) => void;
}

const DEMO_OTP = '429184';

export default function LoginModal({ onClose, onLogin }: Props) {
  const [step, setStep] = useState<Step>('role');
  const [role, setRole] = useState<Role | null>(null);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [demoHint, setDemoHint] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRoleSelect = (r: Role) => {
    setRole(r);
    setStep('phone');
  };

  const handleSendOtp = () => {
    if (phone.length < 10) { setError('Enter a valid 10-digit mobile number'); return; }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setStep('otp');
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (otp !== DEMO_OTP) { setError('Incorrect OTP. Try ' + DEMO_OTP); return; }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(role!);
    }, 800);
  };

  const handleDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(role ?? 'farmer');
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(26,26,24,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[#F5EFE0] rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-fadeUp">
        {/* Top bar */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-black/5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#E8960C] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A18]" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">MITTI</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/6 flex items-center justify-center text-[#1A1A18]/50 hover:bg-black/10 transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        <div className="px-7 py-7">
          {/* ── STEP 1: Role selection ── */}
          {step === 'role' && (
            <div className="animate-fadeIn">
              <h2 className="font-display text-3xl font-semibold mb-1">Welcome back.</h2>
              <p className="text-[#1A1A18]/50 text-sm mb-8">Choose how you want to continue.</p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleRoleSelect('farmer')}
                  className="group flex items-center justify-between bg-white rounded-2xl px-6 py-5 border border-black/8 hover:border-[#E8960C] hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8960C]/10 flex items-center justify-center text-2xl">🌾</div>
                    <div className="text-left">
                      <div className="font-semibold text-[#1A1A18]">Continue as Farmer</div>
                      <div className="text-xs text-[#1A1A18]/45 mt-0.5">Access your fields, crop data & advisory</div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-[#1A1A18]/25 group-hover:text-[#E8960C] transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => handleRoleSelect('vendor')}
                  className="group flex items-center justify-between bg-white rounded-2xl px-6 py-5 border border-black/8 hover:border-[#E8960C] hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A18]/6 flex items-center justify-center text-2xl">🏪</div>
                    <div className="text-left">
                      <div className="font-semibold text-[#1A1A18]">Continue as Vendor</div>
                      <div className="text-xs text-[#1A1A18]/45 mt-0.5">Manage listings, orders & farmer connections</div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-[#1A1A18]/25 group-hover:text-[#E8960C] transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Phone number ── */}
          {step === 'phone' && (
            <div className="animate-fadeIn">
              <button
                onClick={() => setStep('role')}
                className="flex items-center gap-1.5 text-xs text-[#1A1A18]/45 hover:text-[#1A1A18] mb-6 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#E8960C]/10 flex items-center justify-center text-xl">
                  {role === 'farmer' ? '🌾' : '🏪'}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold">
                    {role === 'farmer' ? 'Farmer Login' : 'Vendor Login'}
                  </h2>
                  <p className="text-xs text-[#1A1A18]/40">We'll send a one-time password to your number.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <label className="font-mono text-[10px] text-[#1A1A18]/40 uppercase tracking-widest">Mobile Number</label>
                <div className="flex items-center bg-white rounded-xl border border-black/10 overflow-hidden focus-within:border-[#E8960C] transition-colors">
                  <span className="px-4 py-3.5 font-mono text-sm text-[#1A1A18]/50 border-r border-black/10 flex-shrink-0">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '')); setError(''); }}
                    placeholder="98765 43210"
                    className="flex-1 px-4 py-3.5 font-mono text-sm text-[#1A1A18] outline-none bg-transparent placeholder-[#1A1A18]/25 tracking-wider"
                  />
                </div>
                {error && <p className="text-xs text-red-500 font-mono">{error}</p>}

                <button
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="w-full bg-[#1A1A18] text-white py-4 rounded-xl font-medium text-sm hover:bg-[#E8960C] transition-colors disabled:opacity-50 mt-2"
                >
                  {loading ? 'Sending…' : 'Send OTP'}
                </button>

                <div className="flex items-center gap-3 my-1">
                  <div className="flex-1 h-px bg-black/8" />
                  <span className="font-mono text-xs text-[#1A1A18]/30">or</span>
                  <div className="flex-1 h-px bg-black/8" />
                </div>

                <button
                  onClick={handleDemoLogin}
                  disabled={loading}
                  className="w-full border border-black/10 text-[#1A1A18]/70 py-4 rounded-xl font-medium text-sm hover:bg-white hover:border-[#E8960C] hover:text-[#E8960C] transition-all disabled:opacity-50"
                >
                  Demo Login — skip verification
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: OTP entry ── */}
          {step === 'otp' && (
            <div className="animate-fadeIn">
              <button
                onClick={() => { setStep('phone'); setOtp(''); setError(''); }}
                className="flex items-center gap-1.5 text-xs text-[#1A1A18]/45 hover:text-[#1A1A18] mb-6 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <h2 className="font-display text-2xl font-semibold mb-1">Enter OTP</h2>
              <p className="text-sm text-[#1A1A18]/50 mb-8">
                Sent to <span className="font-mono text-[#1A1A18]/80">+91 {phone}</span>
              </p>

              <div className="flex flex-col gap-3">
                <label className="font-mono text-[10px] text-[#1A1A18]/40 uppercase tracking-widest">6-Digit OTP</label>
                <input
                  type="tel"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => { setOtp(e.target.value.replace(/\D/g, '')); setError(''); }}
                  placeholder="— — — — — —"
                  className="w-full bg-white rounded-xl border border-black/10 focus:border-[#E8960C] px-5 py-4 font-mono text-xl text-[#1A1A18] tracking-[0.5em] text-center outline-none transition-colors placeholder-[#1A1A18]/20"
                />
                {error && <p className="text-xs text-red-500 font-mono text-center">{error}</p>}

                {/* Demo hint */}
                <button
                  onClick={() => setDemoHint(!demoHint)}
                  className="text-xs text-[#E8960C] font-mono text-center hover:underline"
                >
                  {demoHint ? `Demo OTP: ${DEMO_OTP}` : "Show demo OTP →"}
                </button>

                <button
                  onClick={handleVerifyOtp}
                  disabled={loading || otp.length < 6}
                  className="w-full bg-[#1A1A18] text-white py-4 rounded-xl font-medium text-sm hover:bg-[#E8960C] transition-colors disabled:opacity-40 mt-2"
                >
                  {loading ? 'Verifying…' : 'Verify & Continue'}
                </button>

                <div className="flex items-center gap-3 my-1">
                  <div className="flex-1 h-px bg-black/8" />
                  <span className="font-mono text-xs text-[#1A1A18]/30">or</span>
                  <div className="flex-1 h-px bg-black/8" />
                </div>

                <button
                  onClick={handleDemoLogin}
                  disabled={loading}
                  className="w-full border border-black/10 text-[#1A1A18]/70 py-4 rounded-xl font-medium text-sm hover:bg-white hover:border-[#E8960C] hover:text-[#E8960C] transition-all disabled:opacity-50"
                >
                  Demo Login — skip verification
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
