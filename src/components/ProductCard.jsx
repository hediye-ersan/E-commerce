import React, { useState } from "react";
import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Link'e tıklamayı engelle
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to="/product/1" className="block border border-gray-200 rounded-md hover:shadow relative group">
      <div className="rounded p-2 relative">
        <img
          src="https://picsum.photos/300/300"
          alt="shirt"
          className="w-full h-full object-cover"
        />
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <Heart 
            size={20} 
            className={`transition-colors duration-200 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>
      </div>
      <div className="px-2">
      <h2 className="font-semibold text-sm">Black Striped T-shirt</h2>
      <p className="text-sm text-gray-500">$120</p>
      </div>


      
      <div className="flex items-center text-yellow-500 text-sm px-2">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
        <span className="text-gray-500 ml-1 text-xs">4.5/5</span>
      </div>
      <div className="flex items-center gap-2 px-2 pb-2">
        <span className="font-bold text-xl">$180</span>
        <span className="line-through text-gray-400 text-sm">$242</span>
        <span className="text-red-500 text-xs">-20%</span>
      </div>
    </Link>
  );
};

export default ProductCard;
