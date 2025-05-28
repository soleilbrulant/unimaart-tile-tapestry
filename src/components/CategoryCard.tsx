
import { ArrowRight, Plus } from 'lucide-react';

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
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 z-10`} />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {category.title}
        </h3>
        
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-[#ADC7AC] to-[#E4BFA7] text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md hover:scale-105 flex items-center justify-center gap-2">
            Check out now
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button className="bg-white border-2 border-[#E4BFA7] text-[#E4BFA7] p-2 rounded-lg transition-all duration-200 hover:bg-[#E4BFA7] hover:text-white hover:scale-105">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Floating effect shadow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ADC7AC]/10 to-[#E4BFA7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default CategoryCard;
