import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Eclypse</h3>
            <p className="text-sm text-gray-400 max-w-xs">Premium clothing crafted with attention to detail and sustainability in mind.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-auto">
            <div>
              <a href="#" className="block mb-2 hover:text-gray-300 transition">Home</a>
              <a href="#" className="block mb-2 hover:text-gray-300 transition">About</a>
              <a href="#" className="block mb-2 hover:text-gray-300 transition">Buy</a>
            </div>
            <div>
              <a href="#" className="block mb-2 hover:text-gray-300 transition">Our Customers</a>
              <a href="#" className="block mb-2 hover:text-gray-300 transition">Contact</a>
            </div>
            <div className="col-span-2">
              <p className="mb-2 text-sm text-gray-400">CONTACT</p>
              <p className="mb-2 text-sm sm:text-base">+91 123-456-7890</p>
              <p className="mb-2 text-sm text-gray-400">EMAIL</p>
              <p className="text-sm sm:text-base">eclypse@email.com</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/20">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition">
              <Facebook size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Eclypse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
