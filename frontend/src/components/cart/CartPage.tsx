import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Trash2, ShoppingCart } from 'lucide-react';

interface CartPageProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    sizes: string[];
    category: string;
  };
  selectedSize: string;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export function CartPage({ 
  product, 
  selectedSize, 
  onCheckout, 
  onContinueShopping 
}: CartPageProps) {
  // Calculate subtotal, shipping, tax, etc.
  const subtotal = product.price;
  const shipping = 200;
  const tax = 1400;
  const total = subtotal + shipping + tax;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      <Navigation onCheckout={() => {}} isDark={true} />

      <motion.main 
        className="container mx-auto px-4 pt-24 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
          <ShoppingCart className="h-6 w-6" />
          <h1 className="text-3xl font-medium">Your Cart</h1>
        </motion.div>
        
        {/* Cart Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items - Takes up 2/3 of the space on desktop */}
          <div className="md:col-span-2 space-y-6">
            <motion.div 
              variants={itemVariants}
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Product Image */}
                <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0 mb-4 sm:mb-0">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-400">Size: {selectedSize}</p>
                  <p className="text-sm text-gray-400">Category: {product.category}</p>
                </div>
                
                {/* Price */}
                <div className="w-full sm:w-auto text-right mt-4 sm:mt-0">
                  <p className="font-medium">₹{product.price.toLocaleString()}</p>
                  <motion.button 
                    className="text-red-400 flex items-center text-sm mt-2 ml-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Trash2 size={14} className="mr-1" />
                    Remove
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            {/* Continue Shopping Button */}
            <motion.button 
              variants={itemVariants}
              onClick={onContinueShopping}
              className="text-gray-400 hover:text-white transition flex items-center"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Continue Shopping
            </motion.button>
          </div>
          
          {/* Order Summary - Takes up 1/3 of the space on desktop */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 rounded-lg p-6 h-fit sticky top-24"
          >
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>
              <motion.div 
                className="pt-3 border-t border-white/10 flex justify-between font-medium"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 8 }}
              >
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </motion.div>
            </div>
            
            {/* Checkout Button */}
            <motion.button 
              onClick={onCheckout}
              className="w-full bg-white text-black py-3 font-medium hover:bg-gray-200 transition rounded"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Checkout
            </motion.button>
            
            <div className="mt-4 flex justify-center">
              <div className="flex items-center text-sm text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Checkout
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </motion.div>
  );
}
