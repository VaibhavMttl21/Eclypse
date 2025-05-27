import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import { ProductDetails } from './ProductDetails';
import { ProductInfo } from './ProductInfo';
import { TestimonialSection } from './TestimonialSection';
import { Footer } from './Footer';

interface ProductPageProps {
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
  onCheckout: () => void;
}

export function ProductPage({ 
  product, 
  selectedSize, 
  onSizeSelect, 
  onCheckout 
}: ProductPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      <Navigation onCheckout={onCheckout} isDark={true} />

      <main className="container mx-auto px-4 pt-24">
        <ProductDetails 
          product={product}
          selectedSize={selectedSize}
          onSizeSelect={onSizeSelect}
          onAddToCart={onCheckout}
          onBuy={onCheckout}
        />

        <ProductInfo />
        <TestimonialSection />
        <Footer />
      </main>
    </motion.div>
  );
}
