import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop"
          alt="Coastal restaurant atmosphere in Mielno"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-sea-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-sea-900/30 via-transparent to-sea-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sand-200 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6 block"
        >
          Mielno, Wybrzeże Bałtyku
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-sand-50 drop-shadow-lg leading-tight mb-8"
        >
          Poczuj nadmorski <br className="hidden md:block" /> klimat.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sand-100 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Świeże ryby, naturalna gościnność i swobodna atmosfera.<br className="hidden md:block"/>
          Twoja przystań po dniu spędzonym na plaży.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#contact" 
            className="px-8 py-4 bg-sand-50 text-sea-900 font-medium tracking-wide hover:bg-white transition-colors text-center rounded-full shadow-sm"
          >
            ZAREZERWUJ STOLIK
          </a>
          <a 
            href="#menu" 
            className="px-8 py-4 bg-transparent border border-sand-50/50 text-sand-50 font-medium tracking-wide hover:bg-sand-50/10 transition-colors text-center rounded-full"
          >
            ZOBACZ MENU
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sand-200 text-xs tracking-widest uppercase">Odkryj więcej</span>
        <div className="w-[1px] h-12 bg-sand-200/30 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-sand-200"
          />
        </div>
      </motion.div>
    </section>
  );
}
