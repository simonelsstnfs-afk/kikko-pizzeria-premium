import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-white/5 py-24 relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-terracotta/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-olive/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-white/60">
          
          <div className="md:col-span-4">
            <div className="flex flex-col items-start leading-none mb-8">
              <span className="font-serif text-4xl font-bold tracking-tight text-cream italic">
                Kikko
              </span>
              <span className="font-sans text-[11px] tracking-[0.5em] text-accent-terracotta uppercase font-bold mt-1 ml-1">
                Pizzeria
              </span>
            </div>
            <p className="mb-8 text-sm leading-relaxed max-w-sm font-light tracking-wide text-cream/60">
              {t('footerSub')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kikkopizzeria" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Kikko Pizzeria" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-terracotta hover:border-transparent hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/kikkopizzeria" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Kikko Pizzeria" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-terracotta hover:border-transparent hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-4 md:col-start-6">
            <h4 className="font-serif text-xl text-white/90 mb-6 tracking-wide">{t('footerContact')}</h4>
            <ul className="space-y-5 text-sm font-light tracking-wide text-cream/70">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">C. los Ángeles, 48, 38683<br/>Puerto de Santiago, Santa Cruz de Tenerife</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-accent-terracotta shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:611873391" className="hover:text-white transition-colors">611 87 33 91</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-serif text-xl text-white/90 mb-6 tracking-wide">{t('footerHours')}</h4>
            <ul className="space-y-5 text-sm font-light tracking-wide text-cream/70">
              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="block text-white/90 font-medium mb-1">{t('footerWeek')} / {t('footerWeekend')}</strong> 
                  12:30 - 21:30
                </span>
              </li>
              <li className="flex items-start gap-4 opacity-75">
                <Clock className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="block text-white/90 font-medium mb-1">{t('footerThursday')}</strong> 
                  {t('footerClosed')}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-20 pt-8 text-xs text-white/40 flex flex-col sm:flex-row justify-between items-center gap-4 font-light tracking-wider uppercase">
          <p>© {new Date().getFullYear()} {t('footerRights')}</p>
          <p>{t('footerBuilt')}</p>
        </div>
      </div>
    </footer>
  );
}
