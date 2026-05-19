import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Codingexpo Technology Pvt. Ltd.',
    role: 'Internship',
    period: 'June 2021 – March 2023',
    description: 'Developed core design skills and assisted in social media asset creation and video post-production.',
    tags: ['Design', 'Editing', 'Social Media']
  },
  {
    company: 'Zenith Forex (Zenith Go Digital)',
    role: 'Graphic Designer',
    period: 'April 2023 – May 2024',
    description: 'Led visual design for digital marketing campaigns and managed brand identity across multiple platforms.',
    tags: ['Branding', 'Digital Marketing', 'Print']
  },
  {
    company: 'KVISS Apparels Pvt. Ltd. (Hallstatt)',
    role: 'Visual Content Lead',
    period: 'Present',
    description: 'Currently shaping the visual narrative for premium apparel brands, focusing on high-end motion visuals and fashion branding.',
    tags: ['Apparel', 'Motion Graphics', 'Directing']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold">PROFESSIONAL <span className="text-neon-green italic">ODYSSEY.</span></h2>
          <p className="text-white/40 font-mono text-sm mt-4 tracking-widest uppercase">The path of creative evolution</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neon-green/30 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot in Middle */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-8 w-4 h-4 bg-black border-2 border-neon-green rounded-full transform -translate-x-1/2 z-10 hidden md:block" />

                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass p-8 rounded-2xl hover:border-neon-green/40 transition-all group">
                    <span className="text-xs font-mono text-neon-green uppercase tracking-tighter block mb-2">{exp.period}</span>
                    <h3 className="text-2xl font-display font-bold text-white mb-1">{exp.company}</h3>
                    <p className="text-white/60 font-medium mb-4">{exp.role}</p>
                    <p className="text-sm text-white/40 leading-relaxed mb-6">{exp.description}</p>
                    
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/60 uppercase font-mono tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
