const FoodTrendFilters = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
    return (
      <div className="flex justify-center mb-12">
        <div className="inline-flex border border-gray-200 rounded-full p-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full text-sm transition-colors ${activeTab === 'all' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            ทั้งหมด
          </button>
          <button
            onClick={() => setActiveTab('drinks')}
            className={`px-6 py-2 rounded-full text-sm transition-colors ${activeTab === 'drinks' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            เครื่องดื่ม
          </button>
          <button
            onClick={() => setActiveTab('desserts')}
            className={`px-6 py-2 rounded-full text-sm transition-colors ${activeTab === 'desserts' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            ของหวาน
          </button>
          <button
            onClick={() => setActiveTab('main-dishes')}
            className={`px-6 py-2 rounded-full text-sm transition-colors ${activeTab === 'main-dishes' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            อาหารจานหลัก
          </button>
        </div>
      </div>
    );
  };
  
  export default FoodTrendFilters;
  