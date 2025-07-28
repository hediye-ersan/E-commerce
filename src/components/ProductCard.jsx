import React from "react";
import { Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="p-3 border rounded-md hover:shadow">
      <div className="border rounded p-4">
  <img src="https://picsum.photos/250/250" alt="shirt" className="w-full h-48 object-cover mb-2" />
  <h2 className="font-semibold text-lg">Black Striped T-shirt</h2>
  <p className="text-sm text-gray-500">$120</p>
</div>

      <h3 className="font-semibold text-sm mb-1">Polo with Tipping Detail</h3>
      <div className="flex items-center text-yellow-500 text-sm mb-1">
        {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
        <span className="text-gray-500 ml-1 text-xs">4.5/5</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-sm">$180</span>
        <span className="line-through text-gray-400 text-sm">$242</span>
        <span className="text-red-500 text-xs">-20%</span>
      </div>
    </div>
  );
};

export default ProductCard;
