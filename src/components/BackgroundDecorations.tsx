
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
          className={`absolute ${position} opacity-10 animate-pulse`}
          style={{ animationDelay: delay }}
        >
          <Icon className="h-8 w-8 text-[#ADC7AC]" />
        </div>
      ))}
      
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-[#ADC7AC]/5 to-[#E4BFA7]/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[#E4BFA7]/5 to-[#FFF8E7]/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-[#FFF8E7]/5 to-[#ADC7AC]/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default BackgroundDecorations;
