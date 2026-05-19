import { motion } from 'motion/react';
import { MapPin, Briefcase, User, Mail } from 'lucide-react';

const stats = [
  { label: 'Location', value: 'Noida, UP', icon: MapPin },
  { label: 'Role', value: 'Sr. Graphic Designer', icon: Briefcase },
  { label: 'Expertise', value: 'Graphic Designing & Video Editing', icon: User },
  { label: 'Contact', value: 'Direct DM', icon: Mail },
];

export default function About() {
  return (
    <section id="about" className="py-12 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">THE STORY <span className="text-neon-green">SO FAR</span></h2>
          <div className="w-20 h-1 bg-neon-green mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-semibold text-white/90">Sonu Kumar</h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Creative and detail-oriented Graphic Designer & Video Editor with experience in branding, social media creatives, banners, print media, and cinematic editing. Passionate about creating visually powerful content with modern aesthetics and storytelling.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl hover:border-neon-green/30 transition-all group"
                >
                  <stat.icon className="w-6 h-6 text-neon-green mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-md font-semibold text-white/90">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-4">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Z3Py8xb16mMP08edfprR7IfKScHNordA" 
                  alt="Sonu Kumar Workspace" 
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
             </div>
             
             {/* Floating Experience Bubble */}
             <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
               className="absolute -bottom-10 -left-10 p-8 glass rounded-3xl backdrop-blur-xl border-neon-green/20"
             >
                <div className="text-4xl font-display font-bold text-neon-green mb-1">3.5+</div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/60">Years Of Magic</div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
