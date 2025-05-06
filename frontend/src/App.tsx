import { useState } from 'react';
import { Heart, TrendingUp, Coffee, Cake, EggFried, Cookie, Sandwich } from 'lucide-react';

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
      icon: <Coffee className="w-6 h-6 text-amber-600" />
    },
    {
      id: 2,
      name: 'เค้กกล้วยหอม',
      image: '/images/เค้กกล้วยหอม2.jpg',
      category: 'desserts',
      growth: '115%',
      description: 'ได้รับความนิยมจากการโปรโมตโดยอินฟลูเอนเซอร์ บิว วราภรณ์ ส่งผลให้ยอดสั่งทั่วประเทศเติบโต 115%',
      icon: <Cake className="w-6 h-6 text-amber-600" />
    },
    {
      id: 3,
      name: 'ไข่พะโล้',
      image: '/images/ไข่พะโล้.jpg',
      category: 'main-dishes',
      growth: 'กลับมาฮิต',
      description: 'เมนูบ้านๆ ที่กลับมาได้รับความนิยมอีกครั้ง โดยเฉพาะหลังจากที่ เอ ศุภชัย โปรโมตผ่านโซเชียลมีเดีย',
      icon: <EggFried className="w-6 h-6 text-amber-600" />
    },
    {
      id: 4,
      name: 'ขนมไข่',
      image: '/images/ขนมไข่.jpg',
      category: 'desserts',
      growth: 'เพิ่มขึ้น',
      description: 'ขนมย้อนวัยที่ได้รับความนิยมเพิ่มขึ้น โดยเฉพาะขนมไข่ไส้เนยจากสงขลา',
      icon: <Cookie className="w-6 h-6 text-amber-600" />
    },
    {
      id: 5,
      name: 'ข้าวมันไก่',
      image: '/images/ข้าวมันไก่.jpg',
      category: 'main-dishes',
      growth: 'กลับมาฮิต',
      description: 'เมนูพื้นฐานที่กลับมาได้รับความนิยมอีกครั้ง โดยมีร้านใหม่ๆ เปิดให้บริการและได้รับความสนใจจากผู้บริโภค',
      icon: <Sandwich className="w-6 h-6 text-amber-600" />
    },
    {
      id: 6,
      name: 'ข้าวขาหมู',
      image: '/images/ข้าวขาหมู.jpg',
      category: 'main-dishes',
      growth: 'กลับมาฮิต',
      description: 'เมนูพื้นฐานที่กลับมาได้รับความนิยมอีกครั้ง โดยมีร้านใหม่ๆ เปิดให้บริการและได้รับความสนใจจากผู้บริโภค',
      icon: <Sandwich className="w-6 h-6 text-amber-600" />
    }
  ];

  const filteredFoods = activeTab === 'all' 
    ? foodTrends 
    : foodTrends.filter(food => food.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-white" />
              <h1 className="text-2xl md:text-3xl font-bold">อาหารไทยทรงเสน่ห์</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-amber-200 transition-colors">หน้าหลัก</a>
              <a href="#" className="hover:text-amber-200 transition-colors">เมนูยอดนิยม</a>
              <a href="#" className="hover:text-amber-200 transition-colors">ร้านอาหารแนะนำ</a>
              <a href="#" className="hover:text-amber-200 transition-colors">เกี่ยวกับเรา</a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">เทรนด์อาหารมาแรง</h2>
          <p className="text-lg md:text-xl text-amber-700 mb-4">เมนูบ้านๆ กลับมาฮิตอีกครั้ง</p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700">
              ปีที่ผ่านมา อินฟลูเอนเซอร์และโซเชียลมีเดียมีบทบาทสำคัญในการปลุกกระแสเมนูอาหารที่คุ้นเคยให้กลับมาได้รับความนิยมอีกครั้ง 
              มาดูกันว่าเมนูไหนบ้างที่กลับมาอยู่ในกระแสนิยม
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg shadow-md p-1">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-amber-500 text-white' : 'text-gray-700 hover:bg-amber-100'}`}
              >
                ทั้งหมด
              </button>
              <button 
                onClick={() => setActiveTab('drinks')}
                className={`px-4 py-2 rounded-md ${activeTab === 'drinks' ? 'bg-amber-500 text-white' : 'text-gray-700 hover:bg-amber-100'}`}
              >
                เครื่องดื่ม
              </button>
              <button 
                onClick={() => setActiveTab('desserts')}
                className={`px-4 py-2 rounded-md ${activeTab === 'desserts' ? 'bg-amber-500 text-white' : 'text-gray-700 hover:bg-amber-100'}`}
              >
                ของหวาน
              </button>
              <button 
                onClick={() => setActiveTab('main-dishes')}
                className={`px-4 py-2 rounded-md ${activeTab === 'main-dishes' ? 'bg-amber-500 text-white' : 'text-gray-700 hover:bg-amber-100'}`}
              >
                อาหารจานหลัก
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFoods.map((food) => (
              <div key={food.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={food.image} 
                    alt={food.name} 
                    className="w-full aspect-[4/3] object-cover object-center"
                  />
                  <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {food.growth}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    {food.icon}
                    <h3 className="text-xl font-bold text-gray-800 ml-2">{food.name}</h3>
                  </div>
                  <p className="text-gray-600">{food.description}</p>
                  <div className="mt-5 flex justify-between items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      #{activeTab === 'drinks' ? 'เครื่องดื่มยอดฮิต' : 
                         activeTab === 'desserts' ? 'ของหวานสุดฮิต' : 
                         activeTab === 'main-dishes' ? 'อาหารจานเด็ด' : 'อาหารยอดนิยม'}
                    </span>
                    <button className="text-amber-500 hover:text-amber-600 flex items-center">
                      <span className="mr-1">อ่านเพิ่มเติม</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 mb-10">
          <h3 className="text-2xl font-bold text-amber-800 mb-4">อิทธิพลของโซเชียลมีเดีย</h3>
          <p className="text-gray-700 mb-4">
            โซเชียลมีเดียและอินฟลูเอนเซอร์มีบทบาทสำคัญในการกำหนดเทรนด์อาหารในปัจจุบัน การโปรโมทของบุคคลที่มีชื่อเสียงอย่าง 
            บิว วราภรณ์ และ เอ ศุภชัย ทำให้เมนูอาหารบ้านๆ กลับมาได้รับความนิยมอย่างรวดเร็ว
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 text-amber-600 mr-2" />
              <h4 className="font-bold text-amber-800">สถิติที่น่าสนใจ</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                ชาชีส: ยอดสั่งเติบโตขึ้นถึง 7 เท่า
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                เค้กกล้วยหอม: ยอดสั่งทั่วประเทศเติบโต 115%
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                ร้านอาหารประเภทข้าวมันไก่และข้าวขาหมูเปิดใหม่เพิ่มขึ้นกว่า 30% ในปีที่ผ่านมา
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-amber-800 text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Heart className="w-6 h-6 text-amber-300 mr-2" />
                <h3 className="text-xl font-bold">อาหารไทยทรงเสน่ห์</h3>
              </div>
              <p className="mt-2 text-sm">ติดตามเทรนด์อาหารและร้านอาหารยอดนิยมได้ที่นี่</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-amber-300 mb-3">หน้าหลัก</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">เทรนด์อาหาร</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">อินฟลูเอนเซอร์</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">ร้านอาหารแนะนำ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-300 mb-3">ติดต่อเรา</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-6 text-center text-sm">
            <p>&copy; 2025 อาหารไทยทรงเสน่ห์. สงวนลิขสิทธิ์ทั้งหมด.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}