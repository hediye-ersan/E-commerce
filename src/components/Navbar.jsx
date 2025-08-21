import { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import {
  AlignJustify,
  Search,
  ShoppingCart,
  User as UserIcon,
  X,
  ChevronDown,
  ChevronUp,
  Heart,
  FileText,
  Settings,
  LogOut
} from 'lucide-react';

const NavBar = () => {
  const { getCartCount } = useCart();
  const { user, isLoggedIn, logout } = useAuth();
  const history = useHistory();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navigationItems = [
    { label: 'Shop', submenu: ['Men', 'Women'] },
    { label: 'On Sale' },
    { label: 'New Arrivals' },
    { label: 'Brands' },
  ];

  // Click outside handler for user menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      history.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    + history.push('/');
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-sm md:text-base text-center py-2 px-4">
        <p>Sign up and get 20% off your first order. <button 
          onClick={() => setIsAuthModalOpen(true)}
          className="font-semibold hover:underline"
        >
          Sign Up Now
        </button></p>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden p-4" ref={mobileMenuRef}>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="p-1"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <AlignJustify size={28} />}
          </button>
          <Link to="/" className="font-black text-3xl">SHOP.CO</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => document.getElementById('mobile-search').focus()}
            className="p-1"
            aria-label="Search"
          >
            <Search size={24} />
          </button>
          
          <Link 
            to="/cart" 
            className="relative p-1"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={24} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="User menu"
            >
              <UserIcon size={24} />
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                {isLoggedIn ? (
                  <>
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="font-medium text-gray-900 truncate">{user?.name || 'User'}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    
                    <Link
                      to="/favorites"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <Heart size={16} className="mr-3" />
                      Favorites
                    </Link>
                    
                    <Link
                      to="/orders"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <FileText size={16} className="mr-3" />
                      Orders
                    </Link>
                    
                    <Link
                      to="/account"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <Settings size={16} className="mr-3" />
                      Account Settings
                    </Link>
                    
                    <div className="border-t border-gray-200"></div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                    >
                      <LogOut size={16} className="mr-3" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <UserIcon size={16} className="mr-3" />
                      Sign In / Register
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search (only visible when mobile menu is open) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-2 bg-gray-50">
          <form onSubmit={handleSearch} className="relative">
            <input
              id="mobile-search"
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                {item.submenu ? (
                  <div className="py-3">
                    <button
                      onClick={() => setIsShopOpen(!isShopOpen)}
                      className="flex items-center justify-between w-full font-medium"
                    >
                      <span>{item.label}</span>
                      {isShopOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    
                    {isShopOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`/category/${subItem.toLowerCase()}`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsShopOpen(false);
                            }}
                            className="block py-2 text-gray-600 hover:text-black"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-6 lg:px-8 xl:px-12 py-4">
        <div className="flex items-center gap-8 xl:gap-12">
          <Link to="/" className="font-black text-3xl">SHOP.CO</Link>
          
          <nav className="flex items-center gap-6 xl:gap-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setIsShopOpen(true)}
                      onMouseLeave={() => setIsShopOpen(false)}
                      className="flex items-center gap-1 font-medium text-gray-600 hover:text-black transition-colors py-2"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${isShopOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isShopOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg py-1 z-50"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem}
                            to={`/category/${subItem.toLowerCase()}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-medium text-gray-600 hover:text-black transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4 xl:gap-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 xl:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </form>
          
          <Link 
            to="/cart" 
            className="relative p-2 group"
            aria-label="Shopping cart"
          >
            <ShoppingCart 
              size={22} 
              className="text-gray-600 group-hover:text-black transition-colors" 
            />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              onMouseEnter={() => setIsUserMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="User menu"
            >
              <UserIcon 
                size={22} 
                className="text-gray-600 hover:text-black transition-colors" 
              />
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                onMouseLeave={() => setIsUserMenuOpen(false)}
              >
                {isLoggedIn ? (
                  <>
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="font-medium text-gray-900 truncate">{user?.name || 'User'}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    
                    <Link
                      to="/favorites"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <Heart size={16} className="mr-3" />
                      Favorites
                    </Link>
                    
                    <Link
                      to="/orders"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <FileText size={16} className="mr-3" />
                      Orders
                    </Link>
                    
                    <Link
                      to="/account"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <Settings size={16} className="mr-3" />
                      Account Settings
                    </Link>
                    
                    <div className="border-t border-gray-200"></div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                    >
                      <LogOut size={16} className="mr-3" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <UserIcon size={16} className="mr-3" />
                      Sign In / Register
                    </button>
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
      />
    </>
  );
};

export default NavBar;
