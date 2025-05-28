
import { ShoppingBag, Heart, Star, Coffee, Book, Laptop } from 'lucide-react';

const BackgroundDecorations = () => {
  const icons = [
    { Icon: ShoppingBag, position: 'top-20 left-10', delay: '0s' },
    { Icon: Heart, position: 'top-40 right-20', delay: '0.5s' },
    { Icon: Star, position: 'top-60 left-1/4', delay: '1s' },
    { Icon: Coffee, position: 'bottom-40 right-10', delay: '1.5s' },
    { Icon: Book, position: 'bottom-60 left-20', delay: '2s' },
    { Icon: Laptop, position: 'top-32 right-1/3', delay: '2.5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, position, delay }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-8 animate-pulse hover:animate-bounce`}
          style={{ animationDelay: delay }}
        >
          <Icon className="h-8 w-8 text-[#ADC7AC] transform transition-transform duration-1000 hover:rotate-12" />
        </div>
      ))}
      
      {/* Enhanced floating circles with subtle movement */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-[#ADC7AC]/8 to-[#E4BFA7]/8 rounded-full animate-pulse transform hover:scale-110 transition-transform duration-1000" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[#E4BFA7]/8 to-[#FFF8E7]/8 rounded-full animate-pulse transform hover:scale-110 transition-transform duration-1000" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-[#FFF8E7]/8 to-[#ADC7AC]/8 rounded-full animate-pulse transform hover:scale-110 transition-transform duration-1000" style={{ animationDelay: '0.5s' }} />
      
      {/* Additional floating elements for elegance */}
      <div className="absolute top-3/4 right-1/2 w-6 h-6 bg-[#ADC7AC]/10 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '3s' }} />
      <div className="absolute top-1/6 left-2/3 w-4 h-4 bg-[#E4BFA7]/10 rounded-full animate-bounce" style={{ animationDelay: '4s', animationDuration: '4s' }} />
    </div>
  );
};

export default BackgroundDecorations;
