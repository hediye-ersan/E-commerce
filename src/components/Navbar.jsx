import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import AuthModal from './AuthModal';
import {
  AlignJustify,
  Search,
  ShoppingCart,
  CircleUserRound,
  X,
} from 'lucide-react';

function NavBar() {
  const { getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Demo için false, gerçek uygulamada context'ten gelecek
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigationItems = [
    { label: 'Shop', submenu: ['Men', 'Women'] },
    { label: 'On Sale' },
    { label: 'New Arrivals' },
    { label: 'Brands' },
  ];

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

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
          <Link to="/cart" className="relative">
            <ShoppingCart />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <CircleUserRound className="h-7 w-7" />
            </button>
            
            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {isLoggedIn ? (
                  <>
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-medium text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-600">john.doe@example.com</p>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-1">
                      <Link
                        to="/favorites"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Favorites
                      </Link>
                      
                      <Link
                        to="/orders"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Order History
                      </Link>
                      
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile Settings
                      </Link>
                    </div>
                    
                    {/* Logout */}
                    <div className="border-t border-gray-100 pt-1">
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Login/Register */}
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setIsAuthModalOpen(true);
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Login
                      </button>
                      
                      <button
                        onClick={() => {
                          setIsAuthModalOpen(true);
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Register
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
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
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-7 w-7 cursor-pointer" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <CircleUserRound className="h-7 w-7 cursor-pointer" />
            </button>
            
            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {isLoggedIn ? (
                  <>
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-medium text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-600">john.doe@example.com</p>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-1">
                      <Link
                        to="/favorites"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Favorites
                      </Link>
                      
                      <Link
                        to="/orders"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Order History
                      </Link>
                      
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Profile Settings
                      </Link>
                    </div>
                    
                    {/* Logout */}
                    <div className="border-t border-gray-100 pt-1">
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Login/Register */}
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setIsAuthModalOpen(true);
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Login
                      </button>
                      
                      <button
                        onClick={() => {
                          setIsAuthModalOpen(true);
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Register
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

export default NavBar;
