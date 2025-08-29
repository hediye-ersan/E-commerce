import { Link, useHistory } from "react-router-dom";
import { Heart, FileText, Settings, LogOut, User as UserIcon } from "lucide-react";


const UserMenu = ({ isLoggedIn, user, onClose, onLogout, openAuth, isMobile = false }) => {
  const history = useHistory();
    
  const handleNavigation = (path) => {
    if (isMobile) {
      // Mobilde programatik navigation kullan
      history.push(path);
      onClose();
    } else {
      // Desktop'ta normal Link davranışı
      onClose();
    }
  };

  return (
    <div className={isMobile ? 
      "w-full bg-white py-2" : 
      "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
    }>
      {isLoggedIn ? (
        <>
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="font-medium text-gray-900 truncate">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>

          {isMobile ? (
            <button
              onClick={() => handleNavigation('/favorites')}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <Heart size={16} className="mr-3" />
              Favorites
            </button>
          ) : (
            <Link
              to="/favorites"
              onClick={() => handleNavigation('/favorites')}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Heart size={16} className="mr-3" />
              Favorites
            </Link>
          )}

          {isMobile ? (
            <button
              onClick={() => handleNavigation('/orders')}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <FileText size={16} className="mr-3" />
              Orders
            </button>
          ) : (
            <Link
              to="/orders"
              onClick={() => handleNavigation('/orders')}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FileText size={16} className="mr-3" />
              Orders
            </Link>
          )}

          {isMobile ? (
            <button
              onClick={() => handleNavigation('/account')}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <Settings size={16} className="mr-3" />
              Account Settings
            </button>
          ) : (
            <Link
              to="/account"
              onClick={() => handleNavigation('/account')}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Settings size={16} className="mr-3" />
              Account Settings
            </Link>
          )}

          <div className="border-t border-gray-200"></div>
          <button
            onClick={onLogout}
            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
          >
            <LogOut size={16} className="mr-3" />
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={openAuth}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
        >
          <UserIcon size={16} className="mr-3" />
          Sign In / Register
        </button>
      )}
    </div>
  );
};

export default UserMenu;