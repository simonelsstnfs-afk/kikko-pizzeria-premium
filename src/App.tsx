import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { CartSheet } from './components/CartSheet';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Product, CartItem } from './types';

import { LanguageProvider } from './LanguageContext';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('kikko_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastProduct, setToastProduct] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setToastProduct(product.name);
    if (cart.length === 0) {
      setIsCartOpen(true);
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const clearCart = () => setCart([]);

  useEffect(() => {
    localStorage.setItem('kikko_cart', JSON.stringify(cart));
  }, [cart]);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0F0F0F] text-[#F3F4F6] font-sans selection:bg-red-500/30">
        <Header cartCount={totalCartItems} onOpenCart={() => setIsCartOpen(true)} />
        
        <main>
          <Hero />
          <Menu onAddToCart={handleAddToCart} />
          <Reviews />
        </main>

        <Footer />

        <CartSheet 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
        <Toast productName={toastProduct} onClose={() => setToastProduct(null)} />
      </div>
    </LanguageProvider>
  );
}
