
import Header from '../components/Header';
import CategoryGrid from '../components/CategoryGrid';
import BackgroundDecorations from '../components/BackgroundDecorations';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#ADC7AC]/5 via-[#E4BFA7]/3 to-[#FFF8E7]/5">
      <BackgroundDecorations />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Campus
            <span className="block text-[#ADC7AC] font-light">Marketplace</span>
            <span className="block text-[#E4BFA7] font-light">Reimagined</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover unbeatable deals, connect with fellow students, and make campus life more affordable with UniMart.
          </p>
        </div>
        <CategoryGrid />
      </main>
    </div>
  );
};

export default Index;
