import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  productName: string | null;
  onClose: () => void;
}

export function Toast({ productName, onClose }: ToastProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (productName) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [productName, onClose]);

  return (
    <AnimatePresence>
      {productName && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-[#1A1A1A] border border-white/10 shadow-2xl rounded-2xl px-6 py-4 flex items-center gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <p className="text-sm font-medium">
            <span className="font-bold text-white">{productName}</span>{' '}
            <span className="text-white/70">{t('toastAdded')}</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
