import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Works', href: '#works' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          SONU<span className="text-neon-green">.</span>KUMAR
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-neon-green transition-colors uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-neon-green text-black font-bold rounded-full text-xs uppercase tracking-tighter hover:shadow-[0_0_20px_rgba(0,255,0,0.4)] transition-shadow"
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
