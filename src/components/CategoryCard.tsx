
import { ArrowUpRight, Plus } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  image: string;
  gradient: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-fade-in hover:scale-[1.02]">
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 z-10 group-hover:opacity-70 transition-opacity duration-300`} />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
          {category.title}
        </h3>
        
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-[#ADC7AC]/10 to-[#E4BFA7]/10 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md hover:border-[#ADC7AC] hover:text-[#ADC7AC] hover:-translate-y-1 flex items-center justify-center gap-2 text-sm group/btn">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
            Check now!
          </button>
          
          <button className="bg-gradient-to-r from-[#ADC7AC] to-[#E4BFA7] text-white p-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 group/add">
            <Plus className="h-5 w-5 transition-transform duration-300 group-hover/add:rotate-90" />
          </button>
        </div>
      </div>
      
      {/* Enhanced floating effect shadow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ADC7AC]/10 to-[#E4BFA7]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 blur-xl" />
    </div>
  );
};

export default CategoryCard;
