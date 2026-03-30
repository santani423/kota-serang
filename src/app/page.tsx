import Template from "@/components/layout/template";
import HeroSection from "@/components/layout/hompage/heroSaction";

export default function Home() {
  return (
    <>
      <Template>
        <HeroSection />
         {/* dummy content */}
         <div className="min-w-full h-screen bg-gray-100"></div>
        <div className="min-w-full h-screen bg-gray-100"></div>
        <div className="min-w-full h-screen bg-blue-500"></div>
      </Template>
    </>
  );
}
