import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-pink-500" />
            <h1 className="text-xl font-light tracking-wide text-gray-800">ไก่ทอดทรงเสน่ห์</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">หน้าหลัก</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">เมนูยอดนิยม</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">ร้านอาหารแนะนำ</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors">เกี่ยวกับเรา</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
