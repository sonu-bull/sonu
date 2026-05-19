import { motion } from 'motion/react';
import { ChevronDown, Play, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dark-green/20 rounded-full blur-[128px] animate-bounce" />
        <div className="noise-bg absolute inset-0 opacity-20" />
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neon-green font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Sr. Graphic Designer & Video Editor
          </motion.p>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-6 tracking-tighter">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block"
              >
                SONU
              </motion.span>
            </span>
            <span className="block overflow-hidden text-transparent transition-all hover:text-white stroke-white stroke-2" style={{ WebkitTextStroke: '1px white' }}>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
              >
                KUMAR
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/60 text-lg max-w-md mb-10 leading-relaxed font-sans"
          >
            Passionate about creating visually powerful content with modern aesthetics and storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="https://www.instagram.com/hallstattclothing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="interactive group relative px-8 py-4 bg-white text-black font-bold flex items-center gap-2 overflow-hidden rounded-sm transition-all hover:pr-12"
            >
              <span className="relative z-10 transition-all group-hover:-translate-x-2">View Project</span>
              <ExternalLink className="absolute right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 w-4 h-4" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1YnG7F2tUeZRvF9Q_dFhisPzP8pPpjgHK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive px-8 py-4 border border-white/20 hover:border-neon-green hover:text-neon-green transition-all flex items-center gap-2 rounded-sm text-sm font-medium uppercase tracking-widest"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-12 md:mt-0"
        >
          {/* Portrait Illustration */}
          <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-2xl group">
            <img 
              src="https://lh3.googleusercontent.com/d/1WBbjVmoFJztGCbYwnLMu0tIF6kwxwbIM" 
              alt="Sonu Kumar" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            {/* Animated Glow Border */}
            <div className="absolute inset-0 border border-neon-green/20 rounded-2xl group-hover:border-neon-green/50 transition-all duration-500" />
            
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 p-6 glass rounded-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span className="text-xs font-mono tracking-widest">CREATIVE_MODE::ON</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}
