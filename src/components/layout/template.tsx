import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import AccessibilityComponent from "@/components/layout/Accessibility/accessibility";
import { Accessibility } from "lucide-react";


export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <AccessibilityComponent />
      <Footer />
    </>
  );
}
