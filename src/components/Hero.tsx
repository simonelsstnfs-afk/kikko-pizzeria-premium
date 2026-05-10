import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Star, ArrowRight, Pizza } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          const isFull = i < Math.floor(rating);
          const isPartial = i === Math.floor(rating);
          const partialWidth = (rating % 1) * 100;

          return (
            <div key={i} className="relative">
              <Star className="w-3.5 h-3.5 text-white/20" />
              {isFull && (
                <Star className="w-3.5 h-3.5 fill-accent-terracotta text-accent-terracotta absolute inset-0" />
              )}
              {isPartial && (
                <div 
                  className="absolute inset-0 overflow-hidden" 
                  style={{ width: `${partialWidth}%` }}
                >
                  <Star className="w-3.5 h-3.5 fill-accent-terracotta text-accent-terracotta" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-bg">
      {/* Background with real texture and premium gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000" 
          alt="Pizza Hero Background" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/90 to-dark-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-transparent opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Featured Badge - Real Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 hover:bg-white/10 transition-all cursor-default"
          >
            {renderStars(4.7)}
            <div className="w-px h-4 bg-white/10" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-cream/90">
              {t('heroBadgeRating')} <span className="text-white/40 ml-1">({t('heroBadgeReviews')})</span>
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-8xl font-serif font-bold text-white mb-8 leading-[0.95] italic">
            <span className="block text-accent-terracotta not-italic font-sans text-xl tracking-[0.4em] uppercase mb-4 opacity-80">Kikko Pizzeria</span>
            {t('heroTitle').split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          
          <p className="text-cream/60 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-lg font-sans tracking-wide">
            {t('heroSub')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#menu" 
              className="group flex items-center justify-center gap-3 bg-accent-terracotta text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-accent-terracotta/90 hover:scale-105 shadow-2xl shadow-accent-terracotta/20"
            >
              <Pizza className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {t('btnOrder')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#menu" 
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-white/20 font-bold text-lg hover:bg-white/5 transition-all text-cream/90"
            >
              {t('btnMenu')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="relative">
             {/* Main Pizza Image with floating effect */}
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1604068549290-dea0e4a30536?auto=format&fit=crop&q=80&w=1000" 
                alt="Signature Margherita" 
                className="w-full h-auto rounded-[3rem] shadow-2xl border-4 border-white/5 relative z-10"
              />
            </div>
            
            {/* Glass Overlay Badges */}
            <div className="absolute -top-10 -right-10 glass-panel p-8 rounded-[2rem] border border-white/10 z-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex flex-col gap-2">
                <span className="text-accent-terracotta font-serif text-3xl font-bold">48h</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cream/60">Fermentación</span>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 glass-panel p-8 rounded-[2rem] border border-white/10 z-20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex flex-col gap-2">
                <span className="text-accent-olive font-serif text-3xl font-bold">100%</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cream/60">Natural</span>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-terracotta/10 rounded-full blur-[120px] -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
