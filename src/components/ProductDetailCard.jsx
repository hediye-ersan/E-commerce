import { ChevronRight, Star, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Button2 = ({ children, className, onClick }) => (
    <button
        className={`bg-black text-white rounded-full font-medium transition-colors duration-200 hover:bg-gray-800 ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

const colors = [
    { name: "brown", value: "#4b3621" },
    { name: "green", value: "#2c5242" },
    { name: "purple", value: "#3f2a56" },
];

const sizes = ["Small", "Medium", "Large", "X-Large"];

const ProductDetailCard = () => {
    const { addToCart } = useCart();
    const [selectedColor, setSelectedColor] = useState(colors[0].name);
    const [selectedSize, setSelectedSize] = useState("Large");
    const [quantity, setQuantity] = useState(1);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    return (
        <div className="p-4 md:px-24 md:py-8 max-w-auto mx-auto font-inter">

            <div className="text-sm text-gray-600 flex items-center gap-1 mb-6">

                <Link to="/" className="hover:underline">Home</Link>
                <ChevronRight size={16} />
                <Link to="/shop" className="hover:underline">Shop</Link>
                <ChevronRight size={16} />
                <Link to="/category/men" className="hover:underline">Men</Link>
                <ChevronRight size={16} />
                <span className="capitalize">T-shirts</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Left: Images */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Thumbnails on desktop, main image on mobile */}
                    <div className="flex md:flex-col gap-4 order-2 md:order-1">
                        {[1, 2, 3].map((i) => (
                            <img
                                key={i}
                                src={`https://placehold.co/100x100/E0E0E0/333333?text=Thumb${i}`} // Placeholder images
                                className="rounded-lg border border-gray-200 object-cover cursor-pointer hover:border-black transition-colors duration-200"
                                alt={`thumb-${i}`}
                            />
                        ))}
                    </div>
                    <img
                        src="https://placehold.co/400x400/E0E0E0/333333?text=Main+Product" // Placeholder main image
                        alt="Main Product"
                        className="w-full rounded-lg object-cover order-1 md:order-2"
                    />
                </div>

                {/* Right: Product Info */}
                <div className="flex flex-col">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>
                    <div className="flex items-center gap-2 py-2">
                        {[...Array(4)].map((_, i) => <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />)}
                        <Star className="text-yellow-400 w-5 h-5" fill="currentColor" style={{ clipPath: "inset(0 50% 0 0)" }} />
                        <span className="text-gray-500 text-sm">4.5/5</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4 mt-2">
                        <span className="text-2xl lg:text-3xl font-semibold text-gray-900">$260</span>
                        <span className="line-through text-gray-400 text-lg">$300</span>
                        <span className="text-red-600 font-semibold text-sm bg-red-100 px-2 py-1 rounded-full">-40%</span>
                    </div>

                    <p className="text-gray-700 py-4 leading-relaxed border-t border-b border-gray-200 my-4">
                        This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. Its unique design makes it a versatile piece for your wardrobe, easily paired with jeans or shorts for a casual yet fashionable look.
                    </p>

                    {/* Colors */}
                    <div className="py-4">
                        <h4 className="font-medium mb-3 text-gray-800">Select Colors</h4>
                        <div className="flex gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selectedColor === color.name ? "border-black ring-2 ring-offset-2 ring-black" : "border-gray-300"
                                        }`}
                                    style={{ backgroundColor: color.value }}
                                    onClick={() => setSelectedColor(color.name)}
                                >
                                    {selectedColor === color.name && (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="py-4">
                        <h4 className="font-medium mb-3 text-gray-800">Choose Size</h4>
                        <div className="flex gap-2 flex-wrap">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${selectedSize === size
                                        ? "bg-black text-white border-black shadow"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
                        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 gap-3 w-full sm:w-auto justify-between">
                            <button
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                <Minus size={18} className="text-gray-700" />
                            </button>
                            <span className="font-semibold text-lg text-gray-900">{quantity}</span>
                            <button
                                onClick={() => setQuantity((q) => q + 1)}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                <Plus size={18} className="text-gray-700" />
                            </button>
                        </div>
                        <Button2 
                            className="flex-grow px-8 py-3 text-lg"
                            onClick={() => {
                                setIsAddingToCart(true);
                                const product = {
                                    id: Date.now(), // Unique ID for demo
                                    name: "ONE LIFE GRAPHIC T-SHIRT",
                                    price: 260,
                                    size: selectedSize,
                                    color: selectedColor,
                                    quantity: quantity,
                                    image: "https://placehold.co/400x400/E0E0E0/333333?text=Main+Product"
                                };
                                addToCart(product);
                                
                                // Show success feedback
                                setTimeout(() => {
                                    setIsAddingToCart(false);
                                }, 1000);
                            }}
                        >
                            {isAddingToCart ? "Added to Cart!" : "Add to Cart"}
                        </Button2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCard;
