import { motion } from 'motion/react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export function Hero() {
  const { language, t: tFn } = useLanguage();
  const t = translations[language];

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-bg">
      {/* Background with advanced overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=2000" 
          alt="Gourmet Pizza Close-up" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Social Proof Tag - Top Position to avoid scroll overlap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 mb-8"
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="relative w-3.5 h-3.5">
                    {/* Empty Star */}
                    <svg className="absolute inset-0 w-full h-full fill-white/20" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Filled Star with partial logic for 4.7 */}
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ 
                        width: i <= 4 ? '100%' : i === 5 ? '70%' : '0%' 
                      }}
                    >
                      <svg className="w-3.5 h-3.5 fill-accent-terracotta" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-bold tracking-wider text-white/90 uppercase">
                {tFn('heroOrders')} <span className="text-white/40 mx-2">|</span> {tFn('heroZone')}
              </span>
            </motion.div>

            {/* Editorial Header Layout */}
            <div className="relative mb-8">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block font-sans text-xs sm:text-sm font-bold tracking-[0.4em] text-accent-terracotta uppercase mb-4"
              >
                Premium Delivery Experience
              </motion.span>
              
              <h1 className="flex flex-col gap-2 sm:gap-4">
                <span className="font-serif text-7xl sm:text-[130px] font-bold leading-[0.75] text-white tracking-tighter">
                  {t.heroSabor}
                </span>
                <div className="flex items-center gap-6 ml-4 sm:ml-20">
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: 100 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="hidden lg:block h-[1px] bg-accent-terracotta/40"
                  />
                  <span className="font-serif italic font-normal text-cream/90 text-5xl sm:text-[100px] leading-none">
                    {t.heroAutentico}
                  </span>
                </div>
                <span className="font-sans text-4xl sm:text-[60px] font-light uppercase tracking-[0.4em] text-accent-terracotta/80 mt-4 sm:mt-6 ml-4 sm:ml-12">
                  {t.heroPuerta}
                </span>
              </h1>
            </div>
            
            <p className="font-sans text-lg sm:text-xl text-cream/60 mb-12 max-w-lg leading-relaxed font-light tracking-wide border-l-2 border-accent-terracotta/20 pl-6">
              {t.heroSub}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button 
                onClick={scrollToMenu}
                className="group relative inline-flex items-center gap-3 bg-accent-terracotta text-white font-bold px-10 py-5 rounded-full overflow-hidden transition-all hover:pr-12 shadow-2xl shadow-accent-terracotta/20"
              >
                <span className="relative z-10">{t.heroBtn}</span>
                <ChevronRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToMenu}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cream/30 group-hover:text-cream/60 transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-accent-terracotta" />
        </motion.div>
      </motion.div>
    </section>
  );
}
