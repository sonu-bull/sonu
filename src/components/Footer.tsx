import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-bold">
          SONU<span className="text-neon-green">.</span>KUMAR
        </div>
        
        <div className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">
          Designed with <span className="text-neon-green">Passion</span> &copy; 2024
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-widest font-mono">Privacy</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-widest font-mono">Terms</a>
        </div>
      </div>
      
      {/* Animated line at the bottom */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon-green/30 origin-left"
      />
    </footer>
  );
}
