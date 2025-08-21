import React, { useState } from "react";
import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Eğer product prop'u gelmezse varsayılan bir ürün kullan
  const defaultProduct = {
    id: 1,
    name: "Black Striped T-shirt",
    price: 180,
    originalPrice: 242,
    discount: 20,
    image: "https://picsum.photos/300/300?random=1", // Benzersiz resim için random parametresi eklendi
    rating: 4.5,
  };
  const currentProduct = product || defaultProduct;

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Link'e tıklamayı engelle
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/product/${currentProduct.id}`} className="block border border-gray-200 rounded-md hover:shadow relative group">
      <div className="rounded p-2 relative">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-full h-full object-cover"
        />
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
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
      <h2 className="font-semibold text-sm">{currentProduct.name}</h2>
      <p className="text-sm text-gray-500">${currentProduct.price}</p>
      </div>


      <div className="flex items-center text-yellow-500 text-sm px-2">
        {[...Array(Math.floor(currentProduct.rating))].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
        {currentProduct.rating % 1 >= 0.5 && (
          <Star key="half" size={14} fill="currentColor" className="opacity-50" />
        )}
        <span className="text-gray-500 ml-1 text-xs">{currentProduct.rating}/5</span>
      </div>
      <div className="flex items-center gap-2 px-2 pb-2">
        <span className="font-bold text-xl">${currentProduct.price}</span>
        {currentProduct.originalPrice && (
          <>
            <span className="line-through text-gray-400 text-sm">${currentProduct.originalPrice}</span>
            <span className="text-red-500 text-xs">-{currentProduct.discount}%</span>
          </>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
