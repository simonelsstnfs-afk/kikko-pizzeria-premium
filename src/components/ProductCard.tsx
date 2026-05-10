import { Product } from '../types';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const { t, language } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#141414]/80 backdrop-blur-md rounded-[2rem] overflow-hidden flex flex-col border border-white/5 group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent opacity-80" />
        {product.popular && (
          <div className="absolute top-4 right-4 bg-accent-olive/90 backdrop-blur-md text-cream text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-xl border border-white/10">
            {t('popular')}
          </div>
        )}
      </div>
      
      <div className="p-6 pt-5 flex-1 flex flex-col relative z-10">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="font-serif text-2xl font-bold text-cream/90 leading-tight">
            {product.name}
          </h3>
          <span className="font-sans text-xl font-light text-accent-terracotta whitespace-nowrap tracking-wide mt-1">
            {product.price.toFixed(2)} €
          </span>
        </div>
        
        <p className="font-sans text-cream/60 text-sm leading-relaxed mb-6 flex-1 font-light tracking-wide line-clamp-3">
          {product.description[language] || product.description.es}
        </p>

        <button 
          onClick={() => onAdd(product)}
          className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:border-accent-terracotta/50 hover:bg-accent-terracotta/10 text-white font-medium py-3 rounded-2xl transition-all duration-300 group/btn"
        >
          <Plus className="w-5 h-5 text-white/50 group-hover/btn:text-accent-terracotta transition-colors" />
          <span className="tracking-wide text-sm">{t('btnAdd')}</span>
        </button>
      </div>
    </motion.div>
  );
}
