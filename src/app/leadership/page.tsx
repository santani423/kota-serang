import React from 'react'; 
import Template from "@/components/layout/template";
import LeadershipHero from '@/components/layout/Leadership/LeadershipHero';
import LeadershipGrid from '@/components/layout/Leadership/LeadershipGrid';
export default function LeadershipListPage() {
  return (
    <Template>
       <LeadershipHero />
       <LeadershipGrid />
    </Template>
  );
}