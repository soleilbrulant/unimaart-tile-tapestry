
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
          <div className="inline-block bg-gradient-to-r from-[#ADC7AC]/20 to-[#E4BFA7]/20 px-6 py-2 rounded-full mb-6 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-playfair">
              What we offer!
            </h1>
          </div>
          <p className="text-gray-700 text-xl md:text-2xl max-w-4xl mx-auto font-inter font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Everything you need—sold by students, for students. At your Uni.
          </p>
        </div>
        <CategoryGrid />
      </main>
    </div>
  );
};

export default Index;
