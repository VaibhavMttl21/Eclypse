import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gem } from 'lucide-react';

interface LookbookItem {
  id: number;
  image: string;
  title: string;
  description: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall'; // Size variant for grid layout
}

const lookbookData: LookbookItem[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg',
    title: 'Winter Collection',
    description: 'Timeless silhouettes in neutral tones',
    size: 'large'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg',
    title: 'Summer Essentials',
    description: 'Lightweight fabrics with clean lines',
    size: 'medium'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3318215/pexels-photo-3318215.jpeg',
    title: 'Evening Wear',
    description: 'Refined elegance for special occasions',
    size: 'wide'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg',
    title: 'Minimalist Series',
    description: 'Understated luxury for everyday',
    size: 'small'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg',
    title: 'Statement Pieces',
    description: 'Bold designs with architectural influence',
    size: 'tall'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg',
    title: 'Accessories',
    description: 'Finishing touches that elevate any look',
    size: 'medium'
  }
];

export function LookbookShowcase() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeCollection, setActiveCollection] = useState<number>(1);
  
  // Helper function to determine grid classes based on item size
  const getGridClasses = (size?: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'tall':
        return 'md:row-span-2';
      case 'small':
        return '';
      case 'medium':
      default:
        return '';
    }
  };

  // Helper function to determine aspect ratio based on item size
  const getAspectRatio = (size?: string) => {
    switch (size) {
      case 'large':
        return 'aspect-square';
      case 'wide':
        return 'aspect-[2/1]';
      case 'tall':
        return 'aspect-[3/4]';
      case 'small':
        return 'aspect-[1/1]';
      case 'medium':
      default:
        return 'aspect-[3/4]';
    }
  };
  
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-light mb-3"
            >
              Latest Lookbook
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-md"
            >
              Explore our curated collections, each piece designed with intention and crafted with precision.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex mt-6 md:mt-0"
          >
            <button 
              className="group flex items-center text-sm"
              onClick={() => console.log('View all collections')}
            >
              View all collections
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={16} />
              </span>
            </button>
          </motion.div>
        </div>
        
        {/* Collection Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex space-x-6 mb-8 overflow-x-auto scrollbar-hide pb-2"
        >
          {['All', 'Winter', 'Summer', 'Evening', 'Minimalist', 'Accessories'].map((collection, index) => (
            <button
              key={index}
              onClick={() => setActiveCollection(index)}
              className={`whitespace-nowrap pb-1 ${
                activeCollection === index 
                  ? 'border-b-2 border-white font-medium' 
                  : 'text-gray-400 hover:text-white transition-colors'
              }`}
            >
              {collection}
            </button>
          ))}
        </motion.div>
        
        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {lookbookData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.id * 0.1 }}
              className={`overflow-hidden group relative ${getGridClasses(item.size)}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative overflow-hidden ${getAspectRatio(item.size)}`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Logo overlay - shown when not hovered */}
                <motion.div 
                  animate={{ 
                    opacity: hoveredItem === item.id ? 0 : 0.9,
                    scale: hoveredItem === item.id ? 0.8 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/30"
                >
                  <div className="flex flex-col items-center">
                    <Gem size={36} className="text-white/80" />
                    <div className="mt-2 text-xs uppercase tracking-widest text-white/70 font-light">Eclypse</div>
                  </div>
                </motion.div>
                
                {/* Hover overlay */}
                <motion.div 
                  animate={{ 
                    opacity: hoveredItem === item.id ? 1 : 0,
                    y: hoveredItem === item.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{item.description}</p>
                  <button className="mt-4 self-start border-b border-white pb-1 text-sm hover:border-opacity-50 transition-all">
                    View lookbook
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Inspiration Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto">
            "Design is not just what it looks like and feels like. 
            Design is how it works, how it moves, how it exists in the world."
          </p>
          <div className="mt-4 text-sm text-gray-400">Eclypse Design Philosophy</div>
        </motion.div>
      </div>
    </section>
  );
}
