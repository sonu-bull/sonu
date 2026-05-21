import { motion } from 'motion/react';
import { ChevronDown, Play, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-start justify-center overflow-hidden bg-black px-0 pt-24 pb-14 md:h-screen md:items-center md:pt-[10px] md:pb-0">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dark-green/20 rounded-full blur-[128px] animate-bounce" />
        <div className="noise-bg absolute inset-0 opacity-20" />
      </div>

      <div className="container mx-auto px-5 z-10 grid items-center gap-8 md:grid-cols-2 md:gap-12 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neon-green font-mono text-xs tracking-[0.18em] uppercase mb-3 md:text-sm md:tracking-[0.3em] md:mb-4"
          >
            Sr. Graphic Designer & Video Editor
          </motion.p>
          
          <h1 className="text-[2.65rem] sm:text-5xl md:text-8xl font-display font-bold leading-[0.88] mb-4 tracking-normal md:mb-6">
            <span className="inline-block overflow-hidden md:block">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block"
              >
                SONU
              </motion.span>
            </span>
            <span className="ml-2 inline-block overflow-hidden text-transparent transition-all hover:text-white stroke-white stroke-2 md:ml-0 md:block" style={{ WebkitTextStroke: '1px white' }}>
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
            className="mx-auto max-w-sm text-base text-white/65 mb-7 leading-relaxed font-sans md:mx-0 md:max-w-md md:text-lg md:mb-10"
          >
            Passionate about creating visually powerful content with modern aesthetics and storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:flex md:flex-wrap md:gap-4"
          >
            <a 
              href="https://www.instagram.com/hallstattclothing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="interactive group relative w-full justify-center px-5 py-3.5 bg-white text-black font-bold flex items-center gap-2 overflow-hidden rounded-sm transition-all hover:pr-10 md:w-auto md:px-8 md:py-4 md:hover:pr-12"
            >
              <span className="relative z-10 transition-all group-hover:-translate-x-2">View Project</span>
              <ExternalLink className="absolute right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 w-4 h-4" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1YnG7F2tUeZRvF9Q_dFhisPzP8pPpjgHK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive w-full justify-center px-5 py-3.5 border border-white/20 hover:border-neon-green hover:text-neon-green transition-all flex items-center gap-2 rounded-sm text-sm font-medium uppercase tracking-widest md:w-auto md:px-8 md:py-4"
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
          className="relative mt-4 md:mt-0"
        >
          {/* Portrait Illustration */}
          <div className="relative aspect-[3/4] w-full max-w-[260px] mx-auto overflow-hidden rounded-2xl group sm:max-w-xs md:max-w-sm">
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
              className="absolute top-3 right-3 p-3 glass rounded-xl backdrop-blur-2xl md:-top-4 md:-right-4 md:p-6 md:rounded-2xl"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-2.5 h-2.5 bg-neon-green rounded-full animate-pulse md:w-3 md:h-3" />
                <span className="text-[10px] font-mono tracking-wider md:text-xs md:tracking-widest">CREATIVE_MODE::ON</span>
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
