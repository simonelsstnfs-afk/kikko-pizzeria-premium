import { REVIEWS } from '../data';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 bg-[#141414] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-cream mb-2">{t('reviewsTitle')}</h2>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-cream">4.7</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-accent-terracotta text-accent-terracotta' : 'text-accent-terracotta/30'}`} />
                ))}
              </div>
              <span className="text-cream/50 text-sm ml-2">{t('googleReviews')} (365+)</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.google.com/maps/place/KIKKO+-+Restaurante+Pizzeria+Italiano/@28.2391965,-16.8408414,17z/data=!4b1!4m6!3m5!1s0xc6a8d9cdd59661d:0x10f38d1e56ef0f39!8m2!3d28.2391965!4d-16.8408414!16s%2Fg%2F11tc3nz9qk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-accent-terracotta border border-transparent rounded-full text-sm font-semibold text-white hover:bg-accent-terracotta/90 transition-all shadow-lg shadow-accent-terracotta/20">
              <MapPin className="w-4 h-4" />
              {t('btnRoute')}
            </a>
            <a href="https://www.google.com/maps/place/KIKKO+-+Restaurante+Pizzeria+Italiano/@28.2391965,-16.8408414,17z/data=!4m8!3m7!1s0xc6a8d9cdd59661d:0x10f38d1e56ef0f39!8m2!3d28.2391965!4d-16.8408414!9m1!1b1!16s%2Fg%2F11tc3nz9qk" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 rounded-full text-sm font-semibold hover:bg-white/5 transition-colors text-center w-full sm:w-auto">
              {t('btnReview')}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {REVIEWS.slice(0, 5).map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-[#141414]/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors ${
                idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="absolute -top-6 -right-6 text-white/[0.02] transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={review.profilePhotoUrl} 
                    alt={review.authorName} 
                    className="w-14 h-14 rounded-full border-2 border-white/10"
                  />
                  <div>
                    <h4 className="font-bold text-white/90 font-serif tracking-wide">{review.authorName}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                           <Star key={i} className="w-3.5 h-3.5 fill-accent-terracotta text-accent-terracotta" />
                        ))}
                      </div>
                      <span className="text-xs text-white/40 font-light tracking-wider uppercase">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-cream/70 italic text-base leading-relaxed font-serif font-light flex-1">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
