import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import React, { useMemo, useState } from "react";
import Filters from "../components/Filters"; // Az sonra oluşturacağımız bileşen
import { products as allProducts } from "../utils/products";

function Category() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const category = path.charAt(0).toUpperCase() + path.slice(1);

  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({ priceRange: [50, 200], color: "", size: "", style: "" });

  const genderKey = path?.toLowerCase() || "";
  const genderProducts = useMemo(() => allProducts.filter((p) => p.gender === genderKey), [genderKey]);

  const priceBounds = useMemo(() => {
    if (!genderProducts.length) return { min: 0, max: 0 };
    let min = Number.POSITIVE_INFINITY;
    let max = 0;
    for (const p of genderProducts) {
      if (p.price < min) min = p.price;
      if (p.price > max) max = p.price;
    }
    return { min, max };
  }, [genderProducts]);

  const filteredProducts = useMemo(() => {
    return genderProducts.filter((p) => {
      const withinPrice = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
      const matchColor = !filters.color || p.color === filters.color;
      const matchSize = !filters.size || p.size === filters.size;
      const matchStyle = !filters.style || p.style === filters.style;
      return withinPrice && matchColor && matchSize && matchStyle;
    });
  }, [genderProducts, filters]);


  return (
    <div className="relative p-4 md:p-24 flex md:flex-row flex-col gap-4">
      {/* Filtre paneli genişletildi */}
      <div className="hidden md:block md:w-auto">
        <Filters
          onClose={() => { }}
          filters={filters}
          onApply={(next) => setFilters((prev) => ({ ...prev, ...next }))}
        />
      </div>

      {/* Mobil filtre paneli (tam ekran) */}
      {showFilter && (
        <div className="fixed md:hidden inset-0 z-50 bg-white overflow-y-auto transition-transform duration-300">
          <Filters
            onClose={() => setShowFilter(false)}
            filters={filters}
            onApply={(next) => {
              setFilters((prev) => ({ ...prev, ...next }));
              setShowFilter(false);
            }}
          />
        </div>
      )}

      {/* Ürünler ve diğer içerik */}
      <div className="flex-1">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 flex items-center gap-1">
          <Link to="/" className="hover:underline">Home</Link>
          <ChevronRight size={16} />
          <span>Shop</span>
          <ChevronRight size={16} />
          <span className="capitalize">{category}</span>
        </div>

        {/* Başlık ve filtre butonu (mobilde görünür) */}
        <div className="flex justify-between items-center mt-4 mb-2">
          <h2 className="text-3xl font-bold">{category}</h2>
          <span className="text-gray-500 hidden md:inline">{`Showing ${filteredProducts.length} products`}</span>
          <button onClick={() => setShowFilter(true)} className="md:hidden">
            <SlidersHorizontal />
          </button>
        </div>

        {/* Ürünler */}
        {filteredProducts.length === 0 ? (
          <div className="py-10 text-center text-gray-500">No products found for selected filters.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Sayfalama */}
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
