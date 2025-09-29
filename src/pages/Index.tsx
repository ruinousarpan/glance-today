import HeroSection from "@/components/HeroSection";
import HolidaysSection from "@/components/HolidaysSection";
import HistorySection from "@/components/HistorySection";
import QuoteSection from "@/components/QuoteSection";
import TrendingSection from "@/components/TrendingSection";
import WeatherSection from "@/components/WeatherSection";
import HoroscopeSection from "@/components/HoroscopeSection";
import NewsSection from "@/components/NewsSection";
import FunFactsSection from "@/components/FunFactsSection";
import ShareSection from "@/components/ShareSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HolidaysSection />
      <WeatherSection />
      <HistorySection />
      <QuoteSection />
      <HoroscopeSection />
      <NewsSection />
      <TrendingSection />
      <FunFactsSection />
      <ShareSection />
      <Footer />
    </main>
  );
};

export default Index;
