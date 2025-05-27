import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { ShippingForm } from './ShippingForm';
import { OrderSummary } from './OrderSummary';
import { GridPattern } from '../ui/aceternity/grid-pattern';
import { TextGenerateEffect } from '../ui/aceternity/text-generate-effect';

interface CheckoutPageProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    sizes: string[];
    category: string;
  };
  formData: {
    firstName: string;
    lastName: string;
    streetAddress: string;
    aptNumber: string;
    state: string;
    zip: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void;
  onPlaceOrder: () => void;
}

export function CheckoutPage({ 
  product, 
  formData, 
  onInputChange, 
  onBack, 
  onPlaceOrder 
}: CheckoutPageProps) {
  const [checkoutStep, setCheckoutStep] = useState<'shipping' | 'payment'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleContinueToPayment = () => {
    if (formData.firstName && formData.lastName && formData.streetAddress && formData.zip) {
      setCheckoutStep('payment');
    }
  };
  
  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPlaceOrder();
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <GridPattern
          width={40}
          height={40}
          className="absolute inset-0"
        />
      </div>
      
      <CheckoutHeader onBack={onBack} />

      <main className="container mx-auto px-4 py-6 md:py-8 relative z-10">
        {/* Checkout title with text generation effect */}
        <div className="mb-8 text-center">
          <TextGenerateEffect 
            words={checkoutStep === 'shipping' 
              ? "Complete your shipping information" 
              : "Almost there! Enter your payment details"
            }
            className="text-xl md:text-2xl font-medium text-gray-800"
          />
          <p className="text-gray-500 mt-2">
            {checkoutStep === 'shipping' 
              ? "We'll ship your order to this address" 
              : "Your payment is secure and encrypted"
            }
          </p>
        </div>
        
        {/* Progress indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center w-full max-w-xs">
            <div className="relative flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full ${checkoutStep === 'shipping' ? 'bg-blue-600' : 'bg-blue-900'} flex items-center justify-center text-white`}>
                1
              </div>
              <p className="text-xs mt-1 font-medium">Shipping</p>
            </div>
            
            <div className="flex-1 h-0.5 bg-gray-300">
              <motion.div 
                className="h-full bg-blue-600" 
                initial={{ width: "0%" }}
                animate={{ width: checkoutStep === 'payment' ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="relative flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full ${checkoutStep === 'payment' ? 'bg-blue-600' : 'bg-gray-300'} flex items-center justify-center ${checkoutStep === 'payment' ? 'text-white' : 'text-gray-500'}`}>
                2
              </div>
              <p className="text-xs mt-1 font-medium">Payment</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left section - Form */}
          <div className="md:col-span-3">
            <AnimatedContainer show={checkoutStep === 'shipping'}>
              <ShippingForm 
                formData={formData} 
                onInputChange={onInputChange} 
                onCancel={onBack}
                onContinue={handleContinueToPayment}
              />
            </AnimatedContainer>
            
            <AnimatedContainer show={checkoutStep === 'payment'}>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-4 rounded-md">
                    <div className="flex items-center space-x-3">
                      <input type="radio" id="card" name="payment" className="h-4 w-4" checked />
                      <label htmlFor="card" className="text-sm font-medium">Credit/Debit Card</label>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                        <input 
                          type="text" 
                          placeholder="1234 5678 9012 3456" 
                          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
                          <input 
                            type="text" 
                            placeholder="MM/YY" 
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">CVV</label>
                          <input 
                            type="text" 
                            placeholder="123" 
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setCheckoutStep('shipping')}
                      className="flex-1 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                    >
                      Back
                    </button>
                    <motion.button 
                      onClick={handleCompleteOrder}
                      className="flex-1 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition flex items-center justify-center"
                      whileTap={{ scale: 0.98 }}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Complete Order"
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </div>
          
          {/* Right section - Order summary */}
          <div className="md:col-span-2">
            <OrderSummary 
              product={product} 
              onPlaceOrder={onPlaceOrder}
              isPaymentStep={checkoutStep === 'payment'}
            />
          </div>
        </div>
      </main>
    </motion.div>
  );
}

interface AnimatedContainerProps {
  children: React.ReactNode;
  show: boolean;
}

function AnimatedContainer({ children, show }: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: show ? 0 : 100 }}
      animate={{ opacity: show ? 1 : 0, x: show ? 0 : 100, height: show ? 'auto' : 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      style={{ display: show ? 'block' : 'none' }}
    >
      {children}
    </motion.div>
  );
}
