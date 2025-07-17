import { Link } from 'react-router-dom';
import { AlignJustify, Search, ShoppingCart, CircleUserRound} from 'lucide-react';


function NavBar() {
       const navigationItems = ['Shop', 'On Sale', 'New Arrivals', 'Brands'];
    return (
    <>
      {/* Top Banner */}
      <h4 className="text-sm text-center text-white bg-black p-2">
        Sign up and get 20% off to your first order. Sign Up Now
      </h4>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden">
        <div className="flex items-center justify-start gap-2 p-4">
          <AlignJustify />
          <h2 className="font-bold text-2xl">
            SHOP.CO
          </h2>
        </div>
        <div className="flex items-center justify-end gap-2 p-4">
          <Search />
          <ShoppingCart />
          <CircleUserRound />
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-4">
        {/* Logo + Menu */}
        <div className="flex items-center gap-12">
          <h2 className="font-bold text-2xl">SHOP.CO</h2>
          <nav className="flex items-center gap-8 px-4 text-lg">
            {navigationItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-black font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search Bar */}
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

        {/* Right Icons */}
        <div className="flex items-center gap-4 px-4">
          <ShoppingCart className="h-7 w-7 cursor-pointer" />
          <CircleUserRound className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
    </>
  )
}
export default NavBar;