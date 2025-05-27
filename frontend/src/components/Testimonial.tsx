import { motion } from 'framer-motion';
import { useState } from 'react';

interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
}

interface TestimonialProps {
  testimonials: TestimonialItem[];
}

export function Testimonial({ testimonials }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative py-6 md:py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm uppercase tracking-wider">OUR CUSTOMERS</h2>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-6' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <blockquote>
          <motion.p 
            className="text-3xl md:text-4xl font-light leading-tight"
          >
            " {currentTestimonial.quote} "
          </motion.p>
        </blockquote>
      </motion.div>
      <div className="text-left">
        <p className="text-base font-medium">{currentTestimonial.author}</p>
        <p className="text-sm text-gray-400">{currentTestimonial.location}</p>
      </div>
    </div>
  );
}
