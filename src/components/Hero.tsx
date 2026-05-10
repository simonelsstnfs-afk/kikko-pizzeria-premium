import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=2000" 
          alt="Gourmet Pizza Close-up" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 md:pt-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Main Title Group */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex flex-col items-center md:items-start leading-[0.8] mb-2 md:mb-4">
              <span className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-white italic drop-shadow-lg">
                Auténtico
              </span>
              <span className="font-sans text-[clamp(1rem,3vw,1.5rem)] tracking-[0.6em] text-accent-terracotta uppercase font-black mt-2 md:mt-4 ml-2 drop-shadow-md">
                Sabor Italiano
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-xl flex flex-col items-center md:items-start mt-4 md:mt-0"
          >
            <p className="text-white text-lg md:text-xl font-normal leading-relaxed tracking-wide opacity-90 drop-shadow-md text-center md:text-left px-4 md:px-0">
              {t.heroSub}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full sm:w-auto items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-accent-terracotta text-white font-bold tracking-widest uppercase text-xs rounded-full shadow-[0_10px_30px_rgba(196,65,48,0.3)] hover:shadow-[0_15px_40px_rgba(196,65,48,0.4)] transition-all"
              >
                {t.heroCta}
              </motion.button>
              
              <button className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/20 pb-1 group-hover:border-white transition-all">
                  {translations[language].orderNow}
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Side Text (Desktop) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12">
        <div className="h-24 w-px bg-white/10" />
        <span className="rotate-90 font-sans text-[10px] tracking-[0.8em] text-white/20 uppercase whitespace-nowrap font-bold">
          EST. 2024 • PUERTO DE SANTIAGO
        </span>
        <div className="h-24 w-px bg-white/10" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pb-4 md:pb-0"
      >
        <span className="font-sans text-[8px] md:text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold">
          {t.heroScroll}
        </span>
        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-accent-terracotta/60" />
      </motion.div>
    </section>
  );
}
