import Template from "@/components/layout/template";
import HeroSection from "@/components/layout/hompage/HeroSaction";
import QuickServicesSection from "@/components/layout/hompage/QuickServicesSection";
import NewsPreviewSection from "@/components/layout/hompage/NewsPreviewSection";

export default function Home() {
  return (
    <>
      <Template>
        <HeroSection />
        <QuickServicesSection />
        <NewsPreviewSection />

         {/* dummy content */}
         <div className="min-w-full h-screen bg-gray-100"></div>
        <div className="min-w-full h-screen bg-gray-100"></div>
        <div className="min-w-full h-screen bg-blue-500"></div>
      </Template>
    </>
  );
}
