'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DemoOne } from '@/components/ui/demo';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import HelloWorld from '../components/HelloWorld';
import HowItWorks from '../components/HowItWorks';
import PlayAndLearn from '../components/PlayAndLearn';
import ValueProps from '../components/ValueProps';
import TargetAudience from '../components/TargetAudience';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navbar />
          <main className="flex flex-col w-full">
            {/* HelloWorld is now the Hero section */}
            <HelloWorld />
            
            {/* Other Sections */}
            <Stats />
            <HowItWorks />
            <PlayAndLearn />
            <ValueProps />
            <TargetAudience />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
