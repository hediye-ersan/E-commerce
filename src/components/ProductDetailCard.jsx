import { ChevronRight, Star, Minus, Plus } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Button2 from "../components/ui/Button2"; // Daha önce oluşturmuştuk

const colors = [
  { name: "brown", value: "#4b3621" },
  { name: "green", value: "#2c5242" },
  { name: "purple", value: "#3f2a56" },
];

const sizes = ["Small", "Medium", "Large", "X-Large"];

const ProductDetailCard
 = () => {
  const { id } = useParams(); // gelecekte detay verisi için kullanılabilir
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-4 md:p-24 max-w-auto mx-auto ">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 flex items-center gap-1">
        <Link to="/" className="hover:underline">Home</Link>
        <ChevronRight size={16} />
        <Link to="/shop" className="hover:underline">Shop</Link>
        <ChevronRight size={16} />
        <Link to="/shop/men" className="hover:underline">Men</Link>
        <ChevronRight size={16} />
        <span className="capitalize">T-shirts</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Images */}
        <div className="flex flex-col gap-4">
          <img
            src="https://picsum.photos/400/400"
            alt="Main"
            className="w-full rounded-lg object-cover"
          />
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src="https://picsum.photos/100/100"
                className="rounded border"
                alt={`thumb-${i}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center gap-2 py-4">
            {[...Array(4)].map((_, i) => <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />)}
            <Star className="text-yellow-400 w-5 h-5" fill="currentColor" style={{ clipPath: "inset(0 50% 0 0)" }} />
            <span className="text-gray-500 text-sm">4.5/5</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-semibold">$260</span>
            <span className="line-through text-gray-400">$300</span>
            <span className="text-red-500 font-semibold text-sm bg-red-100 px-2 py-1 rounded-full">-40%</span>
          </div>

          <p className="text-gray-600 py-4">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Colors */}
          <div className="py-4">
            <h4 className="font-medium mb-2">Select Colors</h4>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    selectedColor === color.name ? "border-black" : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="py-4">
            <h4 className="font-medium mb-2">Choose Size</h4>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full text-sm border transition ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-full px-4 py-2 gap-3">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <Minus />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>
                <Plus />
              </button>
            </div>
            <Button2 className="w-full md:w-auto px-8 py-3">Add to Cart</Button2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard
;
