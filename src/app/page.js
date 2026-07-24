import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import PromotionServices from "@/components/PromotionServices";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromotionServices />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
