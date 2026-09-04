import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FarmOverview from './components/FarmOverview';
import DashboardPanels from './components/DashboardPanels';
import NutrientSection from './components/NutrientSection';
import WaterClimate from './components/WaterClimate';
import VendorSection from './components/VendorSection';
import StockSection from './components/StockSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import FarmerDashboard from './components/FarmerDashboard';
import VendorDashboard from './components/VendorDashboard';

type AuthState = { role: 'farmer' | 'vendor' } | null;

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [auth, setAuth] = useState<AuthState>(null);

  const handleLogin = (role: 'farmer' | 'vendor') => {
    setShowLogin(false);
    setAuth({ role });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setAuth(null);
    window.scrollTo({ top: 0 });
  };

  // Logged-in views
  if (auth?.role === 'farmer') {
    return <FarmerDashboard onLogout={handleLogout} />;
  }
  if (auth?.role === 'vendor') {
    return <VendorDashboard onLogout={handleLogout} />;
  }

  // Public site
  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <Hero onLoginClick={() => setShowLogin(true)} />
      <FarmOverview />
      <DashboardPanels />
      <NutrientSection />
      <WaterClimate />
      <VendorSection />
      <StockSection />
      <Footer />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}
