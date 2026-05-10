import { useState } from 'react';
import { PIZZAS, COMBOS } from '../data';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export function Menu({ onAddToCart }: MenuProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pizzas' | 'combos'>('pizzas');

  const displayedProducts = activeTab === 'pizzas' 
    ? [...PIZZAS].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)) 
    : COMBOS;

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-4 text-cream tracking-tight">{t('menuTitle')}</h2>
          <p className="text-cream/50 font-sans tracking-wide text-lg">{t('menuSub')}</p>
        </div>
        
        {/* Tabs */}
        <div className="flex bg-[#141414]/80 backdrop-blur-md rounded-full p-1.5 border border-white/10 self-start shadow-2xl">
          <button
            onClick={() => setActiveTab('pizzas')}
            className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
              activeTab === 'pizzas' 
                ? 'bg-accent-terracotta text-white shadow-lg' 
                : 'text-cream/60 hover:text-cream hover:bg-white/5'
            }`}
          >
            {t('tabPizzas')}
          </button>
          <button
            onClick={() => setActiveTab('combos')}
            className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
              activeTab === 'combos' 
                ? 'bg-accent-terracotta text-white shadow-lg' 
                : 'text-cream/60 hover:text-cream hover:bg-white/5'
            }`}
          >
            {t('tabCombos')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAdd={onAddToCart} 
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
