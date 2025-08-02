import { ChevronRight, Trash2, Minus, Plus, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    // Sample cart items for demonstration
    const sampleItems = [
        {
            id: 1,
            name: "Gradient Graphic T-shirt",
            size: "Large",
            color: "White",
            price: 145,
            quantity: 1,
            image: "https://placehold.co/100x100/E0E0E0/333333?text=T-shirt"
        },
        {
            id: 2,
            name: "Checkered Shirt",
            size: "Medium",
            color: "Red",
            price: 180,
            quantity: 1,
            image: "https://placehold.co/100x100/E0E0E0/333333?text=Shirt"
        },
        {
            id: 3,
            name: "Skinny Fit Jeans",
            size: "Large",
            color: "Blue",
            price: 240,
            quantity: 1,
            image: "https://placehold.co/100x100/E0E0E0/333333?text=Jeans"
        }
    ];

    // Use sample items if cart is empty for demonstration
    const displayItems = cartItems.length > 0 ? cartItems : sampleItems;
    const totals = getCartTotal();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-600 flex items-center gap-1 mb-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <ChevronRight size={16} />
                    <span>Cart</span>
                </div>

                {/* Page Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8">YOUR CART</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                            {displayItems.map((item) => (
                                <div key={item.id} className="flex items-start gap-4 py-6 border-b border-gray-100 last:border-b-0">
                                    {/* Product Image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-700 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                        
                                        <div className="text-sm text-gray-600 mb-2">
                                            <span>Size: {item.size}</span>
                                            <span className="mx-2">•</span>
                                            <span>Color: {item.color}</span>
                                        </div>
                                        
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-lg text-gray-900">${item.price}</span>
                                            
                                            {/* Quantity Controls */}
                                            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                                >
                                                    <Minus size={16} className="text-gray-700" />
                                                </button>
                                                <span className="font-semibold text-gray-900 min-w-[20px] text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus size={16} className="text-gray-700" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                            
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal</span>
                                    <span>${totals.subtotal}</span>
                                </div>
                                <div className="flex justify-between text-red-600">
                                    <span>Discount (-20%)</span>
                                    <span>-${totals.discount}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Delivery Fee</span>
                                    <span>${totals.deliveryFee}</span>
                                </div>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4 mb-6">
                                <div className="flex justify-between text-xl font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>${totals.total}</span>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="flex gap-2 mb-6">
                                <div className="flex-1 relative">
                                    <Tag size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Add promo code"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                    />
                                </div>
                                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                                    Apply
                                </button>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                Go to Checkout
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
