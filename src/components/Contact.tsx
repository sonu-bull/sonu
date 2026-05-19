import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Share2 } from 'lucide-react';

const Pinterest = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.992 3.992-.283 1.194.599 2.169 1.775 2.169 2.128 0 3.768-2.244 3.768-5.483 0-2.868-2.062-4.871-5.003-4.871-3.41 0-5.411 2.558-5.411 5.199 0 1.03.397 2.135.892 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.377l-.748 2.853c-.271 1.042-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const socials = [
  { name: 'Pinterest', icon: Pinterest, href: 'https://in.pinterest.com/designersonukumar/', color: 'hover:text-[#BD081C]' },
  { name: 'Behance', icon: Share2, href: '#', color: 'hover:text-[#0057ff]' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sonu-kumar-1b2352242/', color: 'hover:text-[#0077b5]' },
  { name: 'Email', icon: Mail, href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new', color: 'hover:text-neon-green' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-black relative">
       {/* Background Text Overlay */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[20vw] font-display font-black whitespace-nowrap leading-none">LET'S TALK</h2>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-neon-green/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 rounded-full blur-[100px]" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
               WANT TO CREATE <br/> <span className="text-neon-green italic underline decoration-white/20 underline-offset-8">SOMETHING EPIC?</span>
            </h2>
            
            <p className="text-white/60 text-lg mb-12 max-w-xl">
              I'm always open to new projects, creative collaborations, and cinematic challenges. Let's turn your vision into a visual masterpiece.
            </p>

            <div className="flex flex-col items-center gap-16">
               <div className="grid gap-8 w-full max-w-lg">
                  <a href="mailto:sonukumar10072004@gmail.com" className="flex flex-col sm:flex-row items-center gap-6 text-white/80 group cursor-pointer hover:text-neon-green transition-colors w-full">
                    <div className="flex-shrink-0 p-5 glass rounded-2xl group-hover:bg-neon-green group-hover:text-black transition-all group-hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="text-center sm:text-left min-w-0">
                      <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] block mb-1">Email Me</p>
                      <p className="text-lg md:text-xl font-medium break-all">sonukumar10072004@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+917251851504" className="flex flex-col sm:flex-row items-center gap-6 text-white/80 group cursor-pointer hover:text-neon-green transition-colors w-full">
                    <div className="flex-shrink-0 p-5 glass rounded-2xl group-hover:bg-neon-green group-hover:text-black transition-all group-hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="text-center sm:text-left min-w-0">
                      <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] block mb-1">Call Me</p>
                      <p className="text-lg md:text-xl font-medium">+91 72518 51504</p>
                    </div>
                  </a>
               </div>

               <div className="w-full flex justify-center">
                  <div className="flex flex-wrap justify-center gap-4">
                    {socials.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -8, scale: 1.1 }}
                        className={`p-5 glass rounded-2xl text-white/60 transition-all ${social.color} hover:border-white/20`}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
