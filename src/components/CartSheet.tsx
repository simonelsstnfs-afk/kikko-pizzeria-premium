import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';
import { useLanguage } from '../LanguageContext';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
}

export function CartSheet({ isOpen, onClose, cart, updateQuantity, clearCart }: CartSheetProps) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [locationUrl, setLocationUrl] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

  const MIN_ORDER = 12;

  useEffect(() => {
    if (isOpen) {
      setOrderSuccess(false);
    }
  }, [isOpen]);
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 && orderType === 'delivery' ? 2.50 : 0;
  const total = subtotal + deliveryFee;

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('La geolocalización no es soportada por tu navegador');
      return;
    }
    
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocationUrl(`https://maps.google.com/?q=${latitude},${longitude}`);
        setIsLocating(false);
      },
      (error) => {
        console.error(error);
        alert('No se pudo obtener la ubicación. Por favor, asegúrate de dar permisos a tu navegador.');
        setIsLocating(false);
      }
    );
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 && !orderSuccess) return;

    const translatePayment = (method: string) => {
      if (method === 'cash') return t('cartCash');
      if (method === 'card') return t('cartCard');
      return t('cartTransfer');
    };

    let msg = `🍕 *${t('waNewOrder')}* 🍕\n\n`;
    msg += `*${t('cartDeliveryType')}:* ${orderType === 'delivery' ? t('cartDeliveryOption') : t('cartPickupOption')}\n`;
    msg += `*${t('waClient')}:* ${name}\n`;
    msg += `*${t('waPhone')}:* ${phone}\n`;
    
    if (orderType === 'delivery') {
      msg += `*${t('waAddress')}:* ${address}\n`;
      if (locationUrl) {
        msg += `*${t('waLocation')}:* ${locationUrl}\n`;
      }
    }
    
    msg += `*${t('waPayment')}:* ${translatePayment(paymentMethod)}\n\n`;
    if (notes.trim()) {
      msg += `*${t('waNotes')}:* ${notes}\n\n`;
    }
    msg += `*${t('waDetail')}:*\n`;
    cart.forEach(item => {
      msg += `- ${item.quantity}x ${item.name} (${(item.price * item.quantity).toFixed(2)}€)\n`;
    });
    msg += `\n*${t('waSubtotal')}:* ${subtotal.toFixed(2)}€\n`;
    msg += `*${t('waDelivery')}:* ${deliveryFee.toFixed(2)}€\n`;
    msg += `*${t('waTotal')}:* ${total.toFixed(2)}€\n`;

    const phoneNumber = "34611873391";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    
    setOrderSuccess(true);
    clearCart();
    setName('');
    setPhone('');
    setAddress('');
    setNotes('');
    setLocationUrl(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sheet */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#121212] flex flex-col z-50 border-l border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-accent-terracotta" />
                {t('cartTitle')}
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items or Empty State */}
            <div className="flex-1 overflow-y-auto px-6 py-4 hide-scrollbar">
              {orderSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t('orderSuccess')}</h3>
                  <p className="text-white/60 mb-8">{t('orderSuccessSub')}</p>
                  <button 
                    type="button"
                    onClick={onClose}
                    className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-xl transition-colors"
                  >
                    {t('orderSuccessBtn')}
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag className="w-16 h-16 mb-4 stroke-1" />
                  <p>{t('cartEmpty1')}</p>
                  <p className="text-sm">{t('cartEmpty2')}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h4 className="font-bold text-sm leading-tight text-white/90">{item.name}</h4>
                          <span className="text-accent-terracotta font-bold text-sm">
                            {(item.price * item.quantity).toFixed(2)} €
                          </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 w-fit rounded-lg px-2 py-1 mt-2">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-white/50 hover:text-white">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-sm w-4 text-center font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-white/50 hover:text-white">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Checkout Form */}
                  <form id="checkout-form" onSubmit={handleCheckout} className="mt-8 pt-8 border-t border-white/5 space-y-4">
                    <h3 className="font-bold mb-4">{t('cartData')}</h3>
                    
                    {/* Order Type Toggle */}
                    <div className="flex gap-2 p-1 bg-[#1A1A1A] border border-white/10 rounded-xl mb-4">
                      <button
                        type="button"
                        onClick={() => setOrderType('delivery')}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                          orderType === 'delivery' 
                            ? 'bg-accent-terracotta text-white shadow-md' 
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {t('cartDeliveryOption')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('pickup')}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                          orderType === 'pickup' 
                            ? 'bg-accent-terracotta text-white shadow-md' 
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {t('cartPickupOption')}
                      </button>
                    </div>

                    <div>
                      <input 
                        required
                        type="text" 
                        placeholder={t('cartName')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-terracotta"
                      />
                    </div>
                    <div>
                      <input 
                        required
                        type="tel" 
                        placeholder={t('cartPhone')}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-terracotta"
                      />
                    </div>
                    {orderType === 'delivery' && (
                      <div>
                        <input 
                          required
                          type="text" 
                          placeholder={t('cartAddress')}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-terracotta"
                        />
                        <div className="flex gap-2 items-center mt-2">
                          <button
                            type="button"
                            onClick={handleGetLocation}
                            disabled={isLocating || !!locationUrl}
                            className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border transition-colors ${
                              locationUrl 
                                ? 'border-green-500/30 text-green-400 bg-green-500/10' 
                                : 'border-white/10 text-white/60 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            {isLocating ? <Loader2 className="w-3 h-3 animate-spin" /> : <MapPin className="w-3 h-3" />}
                            {locationUrl ? t('cartLocationBtnOn') : t('cartLocationBtnOff')}
                          </button>
                          {locationUrl && (
                            <button
                              type="button"
                              onClick={() => setLocationUrl(null)}
                              className="text-red-400 hover:text-red-300 text-xs font-medium px-2"
                            >
                              {t('cartLocationRemove')}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                    <div>
                      <textarea
                        placeholder={t('cartNotesPlaceholder')}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-terracotta resize-none h-24"
                      />
                    </div>
                    <div>
                      <select 
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-terracotta appearance-none"
                      >
                        <option value="cash">{t('cartCash')}</option>
                        <option value="card">{t('cartCard')}</option>
                        <option value="transfer">{t('cartTransfer')}</option>
                      </select>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Footer / Total */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#1A1A1A] border-t border-white/5">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>{t('cartSub')}</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-sm text-white/60 mb-4">
                  <span>{t('cartDev')}</span>
                  <span>{deliveryFee.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>{t('cartTotal')}</span>
                  <span className="text-accent-terracotta">{total.toFixed(2)} €</span>
                </div>
                {orderType === 'delivery' && subtotal < MIN_ORDER ? (
                  <div className="w-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium py-4 rounded-xl text-center text-sm">
                    {t('cartMinOrder')} {MIN_ORDER.toFixed(2)}€
                  </div>
                ) : (
                  <button 
                    type="submit"
                    form="checkout-form"
                    className="w-full bg-accent-terracotta hover:bg-accent-terracotta/90 text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2 shadow-lg shadow-accent-terracotta/20"
                  >
                    {t('cartOrder')}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
