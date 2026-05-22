import { motion } from 'motion/react';

const skills = [
  { name: 'Adobe Photoshop', level: 80, category: 'Design' },
  { name: 'Adobe Illustrator', level: 75, category: 'Design' },
  { name: 'Premiere Pro', level: 78, category: 'Video' },
  { name: 'CorelDRAW', level: 85, category: 'Print' },
  { name: 'Canva', level: 95, category: 'Design' },
  { name: 'Figma', level: 60, category: 'UI/UX' },
  { name: 'Video Editing', level: 80, category: 'Motion' },
  { name: 'Motion Graphics', level: 60, category: 'Motion' },
  { name: 'Branding Design', level: 92, category: 'Branding' },
  { name: 'Social Media Design', level: 96, category: 'Marketing' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-black/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-neon-green" />
            <span className="text-neon-green font-mono tracking-widest text-sm">TECHNICAL_STACK</span>
          </div>
          <h2 className="text-5xl font-display font-bold">WIELDING THE <span className="text-white/40">TOOLS.</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-4 group-hover:translate-x-0 group-hover:opacity-10 transition-all duration-500 font-display text-4xl font-bold italic">
                {String(i + 1).padStart(2, '0')}
              </div>
              
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-neon-green/60 uppercase tracking-widest mb-2 block">{skill.category}</span>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-neon-green transition-colors mb-6">{skill.name}</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-white/40">
                    <span>PROFICIENCY</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-neon-green shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-neon-green/5 rounded-full blur-2xl group-hover:bg-neon-green/20 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* AI Tools Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="border-t border-white/10 pt-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-neon-green" />
            <span className="text-neon-green font-mono tracking-widest text-sm">AI_TOOLS</span>
          </div>
          <h2 className="text-4xl font-display font-bold mb-8">POWERING CREATIVITY WITH <span className="text-white/40">NEXT-GEN AI.</span></h2>
          <div className="flex flex-wrap gap-4 font-mono text-xs tracking-widest">
            {["Google AI Studio", "Microsoft Copilot", "Higgsfield AI", "ChatGPT", "Gemini AI", "Magnific AI", "Kling AI", "Meta AI"].map((tool) => (
              <span 
                key={tool} 
                className="px-4 py-2 border border-white/10 rounded-sm text-white/60 hover:border-neon-green hover:text-neon-green transition-all cursor-default bg-white/5 active:scale-95"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
