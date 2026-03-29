import Template from "@/components/layout/template";
import HerroSaction from "@/components/layout/hompage/heroSaction";

export default function Home() {
  return (
    <>
      <Template>
        <HerroSaction />
         {/* dummy content */}
         <div className="min-w-full h-screen bg-gray-100"></div>
        <div className="min-w-full h-screen bg-gray-100"></div>
        <div className="min-w-full h-screen bg-blue-500"></div>
      </Template>
    </>
  );
}
