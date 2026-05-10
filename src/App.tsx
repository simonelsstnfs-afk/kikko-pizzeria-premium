import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { CartSheet } from './components/CartSheet';
import { Toast } from './components/Toast';
import { Product, CartItem } from './types';
import { LanguageProvider } from './LanguageContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('kikko-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('kikko-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setAddedProduct(product.name);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-bg text-cream selection:bg-accent-terracotta/30 selection:text-white">
        <Header 
          cartCount={cartCount} 
          onOpenCart={() => setIsCartOpen(true)} 
        />
        
        <main>
          <Hero />
          <Menu onAddToCart={addToCart} />
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

        <Toast 
          productName={addedProduct} 
          onClose={() => setAddedProduct(null)} 
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
