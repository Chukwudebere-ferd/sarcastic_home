'use client';

import { DemoOne } from '@/components/ui/demo';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import HelloWorld from '../components/HelloWorld';
import HowItWorks from '../components/HowItWorks';
import PlayAndLearn from '../components/PlayAndLearn';
import ValueProps from '../components/ValueProps';
import TargetAudience from '../components/TargetAudience';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        {/* New 3D Horizon Hero Section */}
        <DemoOne />
        
        {/* Existing Content */}
        <Hero />
        <Stats />
        <HelloWorld />
        <HowItWorks />
        <PlayAndLearn />
        <ValueProps />
        <TargetAudience />
      </main>
      <Footer />
    </>
  );
}
