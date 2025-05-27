import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ShippingFormProps {
  formData: {
    firstName: string;
    lastName: string;
    streetAddress: string;
    aptNumber: string;
    state: string;
    zip: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onContinue: () => void;
}

export function ShippingForm({ formData, onInputChange, onCancel, onContinue }: ShippingFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const isFormValid = formData.firstName && formData.lastName && formData.streetAddress && formData.zip;

  // Animation variants for form elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };
  
  useEffect(() => {
    // Focus on first empty required field
    if (formRef.current) {
      const firstEmptyInput = formRef.current.querySelector(
        'input[required]:not([value]), input[required][value=""]'
      ) as HTMLInputElement;
      
      if (firstEmptyInput) {
        setTimeout(() => {
          firstEmptyInput.focus();
        }, 500);
      }
    }
  }, []);

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="text-xl font-semibold mb-4">Shipping Address</motion.h2>
      <form ref={formRef} className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">First Name *</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onInputChange}
              placeholder="First Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">Last Name *</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={onInputChange}
              placeholder="Last Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <label htmlFor="streetAddress" className="block text-sm text-gray-600 mb-1">Street Address *</label>
          <input
            id="streetAddress"
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={onInputChange}
            placeholder="Street Address"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
        </motion.div>
        
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="aptNumber" className="block text-sm text-gray-600 mb-1">Apt Number</label>
            <input
              id="aptNumber"
              type="text"
              name="aptNumber"
              value={formData.aptNumber}
              onChange={onInputChange}
              placeholder="Apt Number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm text-gray-600 mb-1">State *</label>
            <input
              id="state"
              type="text"
              name="state"
              value={formData.state}
              onChange={onInputChange}
              placeholder="State"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm text-gray-600 mb-1">Zip *</label>
            <input
              id="zip"
              type="text"
              name="zip"
              value={formData.zip}
              onChange={onInputChange}
              placeholder="Zip"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="pt-4 flex flex-col sm:flex-row gap-4"
        >
          <motion.button 
            onClick={onCancel}
            className="flex-1 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>
          <motion.button 
            onClick={onContinue}
            className={`flex-1 py-3 rounded-md font-medium transition flex items-center justify-center ${
              isFormValid 
                ? "bg-black text-white hover:bg-gray-800" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={isFormValid ? { scale: 1.02 } : {}}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
            disabled={!isFormValid}
          >
            Continue to Payment
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
