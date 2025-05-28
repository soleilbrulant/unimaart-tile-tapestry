
import { ArrowLeft, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ADC7AC] to-[#E4BFA7] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">UniMart</span>
            <ShoppingCart className="h-6 w-6 text-gray-600 ml-2" />
          </div>
        </div>
        
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
          <User className="h-5 w-5 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
