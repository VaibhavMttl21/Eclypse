import { motion } from 'framer-motion';
import { useState } from 'react';

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white">
     
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </motion.div>

        {/* Brand Logo */}
        <div className="absolute top-10 left-27 p-4 z-10 text-bold">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold"
          >
            Eclypse
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs text-right"
          >
            © 2023
          </motion.div>
        </div>

        {/* Featured Image - Positioned in the middle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-5 px-4 md:px-12 lg:px-20"
        >
          <img 
            src="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg" 
            alt="Woman in red Eclypse outfit" 
            className="w-full max-h-[60vh] object-cover object-center mx-auto rounded-sm"
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="container mx-auto px-4 pb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl font-light mb-4"
            >
              A silhouette worth remembering
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-xl"
            >
              <p className="text-lg md:text-xl font-light mb-8">
                Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
              </p>
              <motion.a 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                href="#" 
                className="inline-block border border-yellow-500 text-yellow-500 px-6 py-2 text-sm hover:bg-yellow-500 hover:text-black transition-colors "
              >
                Learn more about Eclypse →
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* Loading indicator */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <p className="text-white">Loading image...</p>
          </div>
        )}
      </div>
    </div>
  );
}
