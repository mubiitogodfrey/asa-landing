'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ContentHubSection } from '@/components/sections/ContentHubSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { NavigationMenu } from '@/components/sections/NavigationMenu';

export default function Home() {
  return (
    <main className="w-full bg-cyber-black overflow-hidden">
      {/* Navigation Menu */}
      <NavigationMenu />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Hub Section */}
      <ContentHubSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
