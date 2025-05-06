import { useState } from 'react';
import Header from './components/Header';
import FoodTrendFilters from './components/FoodTrendFilters';
import FoodCard from './components/FoodCard';
import { Coffee, Cake, EggFried, Cookie, Sandwich } from 'lucide-react';


export default function FoodTrendPage() {
  const [activeTab, setActiveTab] = useState('all');

  const foodTrends = [
    {
      id: 1,
      name: 'ชาชีส',
      image: '/images/ชาชีส1.jpg',
      category: 'drinks',
      growth: '7 เท่า',
      description: 'ยอดสั่งเติบโตขึ้นถึง 7 เท่า ร้านดังเช่น OWL CHA, BEARHOUSE, และ Nose Tea เป็นที่นิยมอย่างมาก',
      icon: <Coffee className="w-5 h-5 text-gray-600" />
    },
    {
      id: 2,
      name: 'เค้กกล้วยหอม',
      image: '/images/เค้กกล้วยหอม2.jpg',
      category: 'desserts',
      growth: '115%',
      description: 'ได้รับความนิยมจากการโปรโมตโดยอินฟลูเอนเซอร์ บิว วราภรณ์ ส่งผลให้ยอดสั่งทั่วประเทศเติบโต 115%',
      icon: <Cake className="w-5 h-5 text-gray-600" />
    },
    {
      id: 3,
      name: 'ไข่พะโล้',
      image: '/images/ไข่พะโล้.jpg',
      category: 'main-dishes',
      growth: 'กลับมาฮิต',
      description: 'เมนูบ้านๆ ที่กลับมาได้รับความนิยมอีกครั้ง โดยเฉพาะหลังจากที่ เอ ศุภชัย โปรโมตผ่านโซเชียลมีเดีย',
      icon: <EggFried className="w-5 h-5 text-gray-600" />
    },
    {
      id: 4,
      name: 'ขนมไข่',
      image: '/images/ขนมไข่.jpg',
      category: 'desserts',
      growth: 'เพิ่มขึ้น',
      description: 'ขนมย้อนวัยที่ได้รับความนิยมเพิ่มขึ้น โดยเฉพาะขนมไข่ไส้เนยจากสงขลา',
      icon: <Cookie className="w-5 h-5 text-gray-600" />
    },
    {
      id: 5,
      name: 'ข้าวมันไก่',
      image: '/images/ข้าวมันไก่.jpg',
      category: 'main-dishes',
      growth: 'กลับมาฮิต',
      description: 'เมนูพื้นฐานที่กลับมาได้รับความนิยมอีกครั้ง โดยมีร้านใหม่ๆ เปิดให้บริการและได้รับความสนใจจากผู้บริโภค',
      icon: <Sandwich className="w-5 h-5 text-gray-600" />
    },
    {
      id: 6,
      name: 'ข้าวขาหมู',
      image: '/images/ข้าวขาหมู.jpg',
      category: 'main-dishes',
      growth: 'กลับมาฮิต',
      description: 'เมนูพื้นฐานที่กลับมาได้รับความนิยมอีกครั้ง โดยมีร้านใหม่ๆ เปิดให้บริการและได้รับความสนใจจากผู้บริโภค',
      icon: <Sandwich className="w-5 h-5 text-gray-600" />
    }
  ];

  const filteredFoods = activeTab === 'all'
    ? foodTrends
    : foodTrends.filter(food => food.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-3">เทรนด์อาหารมาแรง 2025</h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            เมนูบ้านๆ กลับมาฮิตอีกครั้ง จากอิทธิพลของโซเชียลมีเดียและอินฟลูเอนเซอร์
          </p>
        </section>

        <FoodTrendFilters activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} activeTab={activeTab} />
          ))}
        </div>
      </main>
    </div>
  );
}
