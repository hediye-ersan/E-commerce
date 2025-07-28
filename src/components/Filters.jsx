import { useState } from "react";
import { X, ChevronRight, ChevronUp, Check } from "lucide-react";

export default function FilterPanel({ onClose }) {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  });

  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const colors = [
    { name: "green", value: "#22c55e" },
    { name: "red", value: "#ef4444" },
    { name: "yellow", value: "#eab308" },
    { name: "orange", value: "#f97316" },
    { name: "cyan", value: "#06b6d4" },
    { name: "blue", value: "#3b82f6" },
    { name: "purple", value: "#a855f7" },
    { name: "pink", value: "#ec4899" },
    { name: "white", value: "#ffffff" },
    { name: "black", value: "#000000" },
  ];
  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col px-10">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
        <button onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4 space-y-6 flex-1 overflow-y-auto">
        {/* Categories */}
        <div className="space-y-3 border-b border-gray-200 pb-4">
          {categories.map((category) => (
            <div key={category} className="flex items-center justify-between py-2">
              <span className="text-gray-600">{category}</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="space-y-4 border-b border-gray-200 py-4">
          <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold text-gray-900">Price</h3>
            <ChevronUp className={`h-4 w-4 text-gray-400 transition-transform ${expandedSections.price ? "rotate-0" : "rotate-180"}`} />
          </button>
          {expandedSections.price && (
            <div>
              {/* Basit input range ile örnek */}
              <input
                type="range"
                min="50"
                max="200"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="50"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full mt-2"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Colors */}
        <div className="space-y-4 border-b border-gray-200 py-4">
          <button onClick={() => toggleSection("colors")} className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold text-gray-900">Colors</h3>
            <ChevronUp className={`h-4 w-4 text-gray-400 transition-transform ${expandedSections.colors ? "rotate-0" : "rotate-180"}`} />
          </button>
          {expandedSections.colors && (
            <div className="grid grid-cols-5 gap-3 py-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${selectedColor === color.name ? "border-black" : "border-transparent"}`}
                  style={{ backgroundColor: color.value }}
                >
                  {selectedColor === color.name && <Check className={`h-4 w-4 ${["white", "yellow"].includes(color.name) ? "text-black" : "text-white"}`} />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Size */}
        <div className="space-y-4 border-b border-gray-200 py-4">
          <button onClick={() => toggleSection("size")} className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold text-gray-900">Size</h3>
            <ChevronUp className={`h-4 w-4 text-gray-400 transition-transform ${expandedSections.size ? "rotate-0" : "rotate-180"}`} />
          </button>
          {expandedSections.size && (
            <div className="grid grid-cols-3 gap-2 py-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-2 text-sm rounded-full border transition-colors ${selectedSize === size ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dress Style */}
        <div className="space-y-4 border-b border-gray-200 py-4">
          <button onClick={() => toggleSection("dressStyle")} className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold text-gray-900">Dress Style</h3>
            <ChevronUp className={`h-4 w-4 text-gray-400 transition-transform ${expandedSections.dressStyle ? "rotate-0" : "rotate-180"}`} />
          </button>
          {expandedSections.dressStyle && (
            <div className="space-y-3">
              {dressStyles.map((style) => (
                <div key={style} className="flex items-center justify-between py-2">
                  <span className="text-gray-600">{style}</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <button className="w-full bg-black text-white py-3 rounded-full">Apply Filter</button>
      </div>
    </div>
  );
}
