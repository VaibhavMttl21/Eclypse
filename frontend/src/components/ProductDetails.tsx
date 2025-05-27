import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductDetailsProps {
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
  onSizeSelect: (size: string) => void;
  onAddToCart: () => void;
  onBuy: () => void;
}

export function ProductDetails({ 
  product, 
  selectedSize, 
  onSizeSelect, 
  onAddToCart, 
  onBuy 
}: ProductDetailsProps) {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white text-black rounded-lg shadow-xl overflow-hidden"
    >
      <div className="grid md:grid-cols-2">
        {/* Product Image - Left Side */}
        <div className="relative">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>
        
        {/* Product Details - Right Side */}
        <div className="p-8 space-y-6">
          {/* Product Header with name */}
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-3xl font-medium">{product.name}</h1>
            <p className="text-sm text-gray-600 mt-1">A tailored suit cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without fuss. Worn here in the stillness of a city in motion.</p>
          </div>
          
          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl">₹ {product.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500">(MRP incl. of all taxes)</span>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <p className="text-sm">Please select a size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => onSizeSelect(size)}
                  className={cn(
                    "w-10 h-10 border border-gray-300 flex items-center justify-center transition",
                    selectedSize === size 
                    ? "bg-black text-white" 
                    : "hover:border-gray-500"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-xs text-blue-600 underline">Size chart</p>
          </div>
          
          {/* Product Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {[...Array(3)].map((_, index) => (
              <img 
                key={index}
                src={product.images[index % product.images.length]}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-20 w-full object-cover border border-gray-200"
              />
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button 
              onClick={onAddToCart}
              className="w-full bg-white text-black border border-black py-3 font-medium hover:bg-black hover:text-white transition"
            >
              Add to Cart
            </button>
            <button 
              onClick={onBuy}
              className="w-full bg-black text-white py-3 font-medium hover:bg-gray-900 transition"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
