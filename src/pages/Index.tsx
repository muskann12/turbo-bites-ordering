import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DealsSlider from "@/components/DealsSlider";
import MegaCategories from "@/components/MegaCategories";
import ComboBuilder from "@/components/ComboBuilder";
import AppBanner from "@/components/AppBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DealsSlider />
        <MegaCategories />
        <ComboBuilder />
        <AppBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
