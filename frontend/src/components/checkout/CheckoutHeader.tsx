import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface CheckoutHeaderProps {
  onBack: () => void;
}

export function CheckoutHeader({ onBack }: CheckoutHeaderProps) {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg">←</span>
          <span className="hidden sm:inline">Back</span>
        </motion.button>
        
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            <span className="font-medium">Checkout</span>
          </div>
        </motion.div>
        
        <div className="w-[80px]">
          {/* Empty div to balance the header layout */}
        </div>
      </div>
    </motion.header>
  );
}
