import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, Menu, X, Star } from 'lucide-react';

interface NavigationProps {
  onCheckout: () => void;
  isDark?: boolean;
}

export function Navigation({ onCheckout, isDark = true }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const textColorClass = isDark ? "text-white" : "text-black";
  const hoverColorClass = isDark ? "hover:text-gray-300" : "hover:text-gray-700";
  const bgColorClass = isDark ? "bg-black/50" : "bg-white/90";
  const mobileBgColorClass = isDark ? "bg-black/90" : "bg-white/90";
  const borderClass = isDark ? "" : "border-b border-gray-100";

  return (
    <header className={`fixed top-0 w-full z-50 ${bgColorClass} backdrop-blur-sm ${borderClass}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Star className={`h-6 w-6 ${textColorClass}`} fill={isDark ? "white" : "black"} />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 
            <X size={24} className={textColorClass} /> : 
            <Menu size={24} className={textColorClass} />
          }
        </button>
        
        {/* Desktop navigation */}
        <div className={`hidden md:flex items-center gap-6 ${textColorClass}`}>
          <a href="#" className={`${hoverColorClass} transition`}>About Us</a>
          <a href="#" className={`${hoverColorClass} transition`}>Waitlist</a>
          <button 
            onClick={onCheckout}
            className={`flex items-center gap-2 ${hoverColorClass} transition`}
          >
            <ShoppingCart />
            Cart
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${mobileBgColorClass} backdrop-blur-sm`}
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              <a href="#" className={`${hoverColorClass} transition py-2 ${textColorClass}`}>About Us</a>
              <a href="#" className={`${hoverColorClass} transition py-2 ${textColorClass}`}>Waitlist</a>
              <button 
                onClick={() => {
                  onCheckout();
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 ${hoverColorClass} transition py-2 ${textColorClass}`}
              >
                <ShoppingCart />
                Cart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
