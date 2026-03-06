import { useState, useCallback } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import OrdersSection from "@/components/OrdersSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LanguageProvider>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <OrdersSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
