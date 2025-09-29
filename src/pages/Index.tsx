import HeroSection from "@/components/HeroSection";
import HolidaysSection from "@/components/HolidaysSection";
import HistorySection from "@/components/HistorySection";
import QuoteSection from "@/components/QuoteSection";
import TrendingSection from "@/components/TrendingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HolidaysSection />
      <HistorySection />
      <QuoteSection />
      <TrendingSection />
      <Footer />
    </main>
  );
};

export default Index;
