/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SelectedWorks from './components/SelectedWorks';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Smooth Scrolling
    const lenis = new Lenis();
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Simulate Loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-black font-sans selection:bg-neon-green selection:text-black">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-display font-bold tracking-tighter mb-4"
              >
                SONU<span className="text-neon-green">.</span>KUMAR
              </motion.div>
              <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-24 bg-neon-green"
                />
              </div>
              <p className="mt-4 font-mono text-[10px] text-white/30 tracking-[0.5em] uppercase">Initializing Creative Sequence</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isLoading && <CustomCursor />}
      
      <main className="relative">
        <Navbar />
        <Hero />
        <div className="relative">
          <About />
          <Skills />
          <SelectedWorks />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

