import { motion } from 'framer-motion';
import { Spotlight } from '../ui/aceternity/spotlight';

interface OrderSummaryProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    sizes: string[];
    category: string;
  };
  onPlaceOrder: () => void;
  isPaymentStep?: boolean;
}

export function OrderSummary({ product, onPlaceOrder, isPaymentStep = false }: OrderSummaryProps) {
  // Calculate costs
  const subtotal = product.price;
  const shipping = 200;
  const tax = Math.round(subtotal * 0.18); // 18% tax
  const total = subtotal + shipping + tax;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isPaymentStep ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} p-6 rounded-lg sticky top-24 transition-colors duration-500`}
    >
      <Spotlight className={`${isPaymentStep ? '' : 'hidden'}`}>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            
            {/* Product details with image */}
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium">{product.name}</h4>
                <p className={`text-sm ${isPaymentStep ? 'text-gray-300' : 'text-gray-500'}`}>
                  Category: {product.category}
                </p>
                <p className="text-lg font-semibold mt-1">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between py-2">
                <span className="text-sm">Items (1)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm">Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm">Estimated Tax</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>
              <motion.div 
                className={`flex justify-between py-3 mt-2 border-t border-gray-200 dark:border-gray-700 font-semibold ${
                  isPaymentStep ? 'text-xl' : 'text-lg'
                }`}
                animate={isPaymentStep ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <span>Order Total</span>
                <span>₹{total.toLocaleString()}</span>
              </motion.div>
            </div>
          </div>
          
          {!isPaymentStep && (
            <motion.button 
              onClick={onPlaceOrder}
              className="w-full py-4 bg-black text-white rounded-md hover:bg-gray-800 transition font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Proceed to Payment
            </motion.button>
          )}
          
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className={`text-xs ${isPaymentStep ? 'text-gray-300' : 'text-gray-500'}`}>Secure checkout</span>
            </div>
          </div>
        </div>
      </Spotlight>
    </motion.div>
  );
}
