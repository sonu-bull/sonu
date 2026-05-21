import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Clapperboard,
  Gem,
  Layers3,
  Megaphone,
  Palette,
  PenTool,
  Shirt,
  Sparkles,
} from 'lucide-react';

const workTypes = [
  {
    label: 'Edit Reel',
    icon: Clapperboard,
    href: 'https://drive.google.com/drive/folders/1OVorDov7AVa5l5o_oU23aDVoB3RdXEYh?usp=sharing',
  },
  {
    label: 'Social Media Creative',
    icon: Sparkles,
    href: 'https://drive.google.com/drive/folders/1I6QKZ-2WFE5G4k0hqQ8pLlI5x9UEAMmg?usp=sharing',
  },
  {
    label: 'Ad Creative',
    icon: Megaphone,
    href: 'https://drive.google.com/drive/folders/1Xacwm9huT7i_OyyDb2Rj06oeuidi6aRG?usp=sharing',
  },
  {
    label: 'Fashion Creatives',
    icon: Shirt,
    href: 'https://drive.google.com/drive/folders/1vkwfrISH4T6sMOw4wpaN3R9bDb0hg19o?usp=sharing',
  },
  {
    label: 'Print Media',
    icon: Palette,
    href: 'https://drive.google.com/drive/folders/1_McWgf8scYfRc_oHhmtZjr3ZdVLsqPQc?usp=drive_link',
  },
  {
    label: 'Logo Design',
    icon: PenTool,
    href: 'https://drive.google.com/file/d/1AqfUsuQDEIW43uwUSg5nGj9AtqemTpjk/view?usp=sharing',
  },
];

export default function SelectedWorks() {
  return (
    <section id="works" className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-36">
      <div className="noise-bg pointer-events-none absolute inset-0" />
      <div className="cyber-grid pointer-events-none absolute inset-0 opacity-30" />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.22, 0.48, 0.22], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-28 top-16 h-72 w-72 rounded-full bg-neon-green/15 blur-[90px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: ['-18%', '8%', '-18%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-neon-green/70 to-transparent"
      />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-neon-green" />
            <span className="font-mono text-xs uppercase tracking-[0.45em] text-neon-green text-glow">
              WORK_SHOWCASE
            </span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-neon-green" />
          </div>
          <h2 className="mx-auto max-w-5xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Designing visual stories that drive{' '}
            <span className="text-neon-green text-glow">attention</span> & engagement.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-xs uppercase leading-6 tracking-[0.28em] text-white/42">
            Premium creative systems, video edits, campaign visuals, and identity work engineered for impact.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3">
          {workTypes.map((work, index) => {
            const Icon = work.icon;

            return (
              <motion.a
                key={work.label}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 34, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                className="group relative flex min-h-56 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] outline-none backdrop-blur-2xl transition-all duration-500 hover:border-neon-green/70 hover:bg-neon-green/[0.07] hover:shadow-[0_26px_90px_rgba(0,255,0,0.18)] focus-visible:border-neon-green focus-visible:ring-2 focus-visible:ring-neon-green/60"
              >
                <div className="pointer-events-none absolute inset-0 rounded-lg border border-neon-green/0 transition-colors duration-500 group-hover:border-neon-green/35" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-neon-green shadow-[0_0_18px_rgba(0,255,0,0.9)] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-px origin-top scale-y-0 bg-neon-green/80 shadow-[0_0_18px_rgba(0,255,0,0.8)] transition-transform delay-100 duration-500 group-hover:scale-y-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-neon-green/70 transition-transform delay-200 duration-500 group-hover:scale-x-100" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-neon-green/0 blur-2xl transition-colors duration-500 group-hover:bg-neon-green/25" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_58%)] opacity-0 transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100" />

                <div className="relative z-10 flex w-full flex-col justify-between gap-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neon-green/30 bg-neon-green/10 text-neon-green shadow-[0_0_28px_rgba(0,255,0,0.16)] transition-all duration-500 group-hover:scale-105 group-hover:bg-neon-green group-hover:text-black group-hover:shadow-[0_0_38px_rgba(0,255,0,0.48)]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.35em] text-white/28 transition-colors duration-500 group-hover:text-neon-green">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-2 text-white/28">
                      <Gem className="h-3.5 w-3.5 text-neon-green/70" strokeWidth={1.7} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.34em]">Open Archive</span>
                    </div>
                    <div className="flex items-end justify-between gap-5">
                      <h3 className="max-w-[13rem] font-display text-2xl font-bold uppercase leading-none tracking-normal text-white transition-colors duration-500 group-hover:text-neon-green sm:text-3xl">
                        {work.label}
                      </h3>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-neon-green/70 group-hover:text-neon-green">
                        <ArrowUpRight className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
          className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-white/35"
        >
          <Layers3 className="h-4 w-4 text-neon-green/70" strokeWidth={1.7} />
          Curated visual systems for scroll-stopping brands
        </motion.div>
      </div>
    </section>
  );
}
