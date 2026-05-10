import { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Header({ cartCount, onOpenCart }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const menuItems = [
    { label: t.menuHome, href: '#' },
    { label: t.menuOurMenu, href: '#menu' },
    { label: t.menuReviews, href: '#reviews' },
    { label: t.menuContact, href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Column: Menu Icon */}
        <div className="flex-1 flex justify-start">
          <button 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            className="p-2 rounded-full hover:bg-white/5 transition-colors group relative z-[60]"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>

        {/* Center Column: Logo/Brand */}
        <div className="flex-1 flex flex-col items-center justify-center cursor-pointer group">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center leading-none"
          >
            <span className="font-serif text-3xl font-bold tracking-tight text-white italic">
              Kikko
            </span>
            <span className="font-sans text-[10px] tracking-[0.5em] text-accent-terracotta uppercase font-bold mt-1 ml-1">
              Pizzeria
            </span>
          </motion.div>
        </div>

        {/* Right Column: Actions */}
        <div className="flex-1 flex justify-end items-center gap-6">
          {/* Language selector (Desktop) */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            {(['es', 'en', 'it'] as const).map((lang) => (
              <button 
                key={lang}
                onClick={() => setLanguage(lang)} 
                className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                  language === lang ? 'bg-accent-terracotta text-white shadow-lg' : 'text-cream/40 hover:text-cream/70'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Cart Button */}
          <button 
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5 text-cream/90" />
            {cartCount > 0 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-accent-terracotta rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-dark-bg"
              >
                {cartCount}
              </motion.div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-0 left-0 w-full h-screen bg-dark-bg backdrop-blur-xl z-[55] flex flex-col pt-32 px-10"
          >
            <nav className="flex flex-col gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-serif text-4xl text-cream/90 hover:text-accent-terracotta transition-colors italic"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-20 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 text-cream/40">
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold tracking-widest uppercase">Seleccionar Idioma</span>
              </div>
              <div className="flex gap-4">
                {(['es', 'en', 'it'] as const).map((lang) => (
                  <button 
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsMenuOpen(false);
                    }}
                    className={`text-2xl font-serif italic transition-all ${
                      language === lang ? 'text-accent-terracotta underline decoration-accent-terracotta/30 underline-offset-8' : 'text-cream/30 hover:text-cream/60'
                    }`}
                  >
                    {lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Italiano'}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
