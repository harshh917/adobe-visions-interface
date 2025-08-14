import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ChallengesSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
