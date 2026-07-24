import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import PromotionServices from "@/components/PromotionServices";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcess from "@/components/WorkingProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromotionServices />
      <AboutSection />
      <ServicesSection />
      <WorkingProcess />
    </main>
  );
}
