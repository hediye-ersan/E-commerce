import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlignJustify,
  Search,
  ShoppingCart,
  CircleUserRound,
  X,
} from 'lucide-react';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const navigationItems = [
    { label: 'Shop', submenu: ['Men', 'Women'] },
    { label: 'On Sale' },
    { label: 'New Arrivals' },
    { label: 'Brands' },
  ];

  return (
    <>
      {/* Top Banner */}
      <h4 className="text-sm md:text-lg text-center text-white bg-black p-2">
        Sign up and get 20% off to your first order. Sign Up Now
      </h4>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden p-4">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={28} /> : <AlignJustify size={28} />}
          </button>
          <h2 className="font-black text-3xl">SHOP.CO</h2>
        </div>
        <div className="flex items-center gap-3">
          <Search />
          <ShoppingCart />
          <CircleUserRound />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-2 space-y-2 shadow-md">
          {navigationItems.map((item) =>
            item.label === 'Shop' ? (
              <div key="Shop" className='font-semibold text-lg'>
                <button
                  onClick={() => setIsShopOpen((prev) => !prev)}
                  className="text-left w-full"
                >
                  Shop {isShopOpen ? '▴' : '▾'}
                </button>
                {isShopOpen && (
                  <div className="pl-4 font-semibold space-y-1">
                    <Link to="/category/men">👕 Men</Link>
                    <br />
                    <Link to="/category/women">👚 Women</Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="block font-semibold text-lg"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-24 py-4 relative">
        {/* Left */}
        <div className="flex items-center gap-12">
          <h2 className="font-black text-4xl">SHOP.CO</h2>
          <nav className="flex items-center gap-8 px-4 text-lg relative">
            {/* SHOP Dropdown on hover */}
            <div
              className="relative cursor-pointer text-gray-700 hover:text-black font-medium text-2xl"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              Shop
              {isShopOpen && (
                <div className="absolute top-full left-0 bg-white shadow-md mt-2 rounded-md w-40 py-2 z-50">
                  <Link
                    to="/category/men"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Men
                  </Link>
                  <Link
                    to="/category/women"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Women
                  </Link>
                </div>
              )}
            </div>

            {/* Diğer Menü Elemanları */}
            {navigationItems
              .filter((item) => item.label !== 'Shop')
              .map((item) => (
                <Link
                  key={item.label}
                  to={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-black font-medium text-2xl"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-full focus:bg-white focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <ShoppingCart className="h-7 w-7 cursor-pointer" />
          <CircleUserRound className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
