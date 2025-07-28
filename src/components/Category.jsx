import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import Filters from "../components/Filters"; // Az sonra oluşturacağımız bileşen

function Category() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const category = path.charAt(0).toUpperCase() + path.slice(1);

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="relative p-4 md:p-24">
      {/* Filter Panel */}
      {showFilter && (
        <div className="fixed md:hidden inset-0 z-50 bg-white overflow-y-auto transition-transform duration-300">
          <Filters onClose={() => setShowFilter(false)} />
        </div>
      )}

      <div>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 flex items-center gap-1">
          <Link to="/" className="hover:underline">Home</Link>
          <ChevronRight size={16} />
          <span>Shop</span>
          <ChevronRight size={16} />
          <span className="capitalize">{category}</span>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center mt-4 mb-2">
          <h2 className="text-3xl font-bold">{category}</h2>
          <span className="text-gray-500 hidden md:inline">Showing 1-10 of 100 Products</span>
          <button onClick={() => setShowFilter(true)} className="md:hidden">
            <SlidersHorizontal />
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-4">
          <button className="px-4 py-2 border rounded">Previous</button>
          <div className="flex gap-2">
            <button className="w-8 h-8 border rounded bg-black text-white">1</button>
            <button className="w-8 h-8 border rounded">2</button>
            <button className="w-8 h-8 border rounded">3</button>
          </div>
          <button className="px-4 py-2 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Category;
