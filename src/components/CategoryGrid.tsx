
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    gradient: 'from-[#ADC7AC]/20 to-[#E4BFA7]/20'
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
    gradient: 'from-[#E4BFA7]/20 to-[#FFF8E7]/20'
  },
  {
    id: 'munchies',
    title: 'Munchies',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
    gradient: 'from-[#FFF8E7]/20 to-[#ADC7AC]/20'
  },
  {
    id: 'stationary',
    title: 'Stationary',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
    gradient: 'from-[#ADC7AC]/20 to-[#E4BFA7]/20'
  },
  {
    id: 'fruits',
    title: 'Fruits & Munchies',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
    gradient: 'from-[#E4BFA7]/20 to-[#FFF8E7]/20'
  },
  {
    id: 'decor',
    title: 'Room Decor',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
    gradient: 'from-[#FFF8E7]/20 to-[#ADC7AC]/20'
  }
];

const CategoryGrid = () => {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-playfair">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
