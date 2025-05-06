import { TrendingUp } from 'lucide-react';

const FoodCard = ({ food, activeTab }: { food: any; activeTab: string }) => {
  return (
    <div key={food.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={food.image} alt={food.name} className="w-full aspect-[4/3] object-cover object-center" />
        <div className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
          <TrendingUp className="w-3 h-3 mr-1" />
          {food.growth}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          {food.icon}
          <h3 className="text-lg font-medium text-gray-800 ml-2">{food.name}</h3>
        </div>
        <p className="text-gray-600 text-sm">{food.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
            #{activeTab === 'drinks' ? 'เครื่องดื่มยอดฮิต' : activeTab === 'desserts' ? 'ของหวานสุดฮิต' : activeTab === 'main-dishes' ? 'อาหารจานเด็ด' : 'อาหารยอดนิยม'}
          </span>
          <button className="text-gray-500 hover:text-gray-800 text-sm flex items-center transition-colors">
            <span className="mr-1">อ่านเพิ่มเติม</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
