import React, { useState } from 'react';
import { ChevronRight, Heart, Trash2, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// CSS for hiding scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([
        {
            id: 1,
            name: "Black Striped T-shirt",
            price: 180,
            originalPrice: 242,
            discount: 20,
            image: "https://picsum.photos/300/300",
            rating: 4.5,
            inStock: true
        },
        {
            id: 1,
            name: "Black Striped T-shirt",
            price: 180,
            originalPrice: 242,
            discount: 20,
            image: "https://picsum.photos/300/300",
            rating: 4.5,
            inStock: true
        },
        {
            id: 2,
            name: "Gradient Graphic T-shirt",
            price: 145,
            originalPrice: 180,
            discount: 15,
            image: "https://picsum.photos/300/300",
            rating: 4.8,
            inStock: true
        },
        ,
        {
            id: 2,
            name: "Gradient Graphic T-shirt",
            price: 145,
            originalPrice: 180,
            discount: 15,
            image: "https://picsum.photos/300/300",
            rating: 4.8,
            inStock: true
        },
        ,
        {
            id: 2,
            name: "Gradient Graphic T-shirt",
            price: 145,
            originalPrice: 180,
            discount: 15,
            image: "https://picsum.photos/300/300",
            rating: 4.8,
            inStock: true
        },
        ,
        {
            id: 2,
            name: "Gradient Graphic T-shirt",
            price: 145,
            originalPrice: 180,
            discount: 15,
            image: "https://picsum.photos/300/300",
            rating: 4.8,
            inStock: true
        },
        {
            id: 2,
            name: "Gradient Graphic T-shirt",
            price: 145,
            originalPrice: 180,
            discount: 15,
            image: "https://picsum.photos/300/300",
            rating: 4.8,
            inStock: true
        },
        {
            id: 2,
            name: "Gradient Graphic T-shirt",
            price: 145,
            originalPrice: 180,
            discount: 15,
            image: "https://picsum.photos/300/300",
            rating: 4.8,
            inStock: true
        },
        {
            id: 3,
            name: "Checkered Shirt",
            price: 180,
            originalPrice: 200,
            discount: 10,
            image: "https://picsum.photos/300/300",
            rating: 4.2,
            inStock: false
        },
        {
            id: 3,
            name: "Checkered Shirt",
            price: 180,
            originalPrice: 200,
            discount: 10,
            image: "https://picsum.photos/300/300",
            rating: 4.2,
            inStock: false
        },
        {
            id: 3,
            name: "Checkered Shirt",
            price: 180,
            originalPrice: 200,
            discount: 10,
            image: "https://picsum.photos/300/300",
            rating: 4.2,
            inStock: false
        },
        {
            id: 4,
            name: "Skinny Fit Jeans",
            price: 240,
            originalPrice: 300,
            discount: 20,
            image: "https://picsum.photos/300/300",
            rating: 4.6,
            inStock: true
        }
    ]);

    const removeFromFavorites = (productId) => {
        setFavorites(prev => prev.filter(item => item.id !== productId));
    };

    const addToCart = (product) => {
        // Cart context'e ekleme işlemi burada yapılacak
        console.log('Added to cart:', product);
    };

    const inStockItems = favorites.filter(item => item.inStock);
    const outOfStockItems = favorites.filter(item => !item.inStock);

    return (
        <>
            <style>{scrollbarHideStyles}</style>
            <NavBar />
            <div className="min-h-screen">
                <div className="px-4 md:px-24 py-8">
                    {/* Breadcrumb */}
                    <div className="text-sm text-gray-600 flex items-center gap-1 mb-6">
                        <Link to="/" className="hover:underline">Home</Link>
                        <ChevronRight size={16} />
                        <span>Favorites</span>
                    </div>

                    {/* Page Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl py-2 md:py-4 md:text-4xl font-bold text-gray-900 mb-2">
                                My Favorites
                            </h1>
                            <p className="text-gray-600">
                                {favorites.length} items in your favorites
                            </p>
                        </div>
                       
                    </div>

                    {favorites.length === 0 ? (
                        /* Empty State */
                        <div className="text-center py-16">
                            <Heart className="mx-auto text-gray-300 mb-4" size={64} />
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                Your favorites list is empty
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Start adding items to your favorites to see them here
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Start Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {/* In Stock Items */}
                            {inStockItems.length > 0 && (
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                                        Available Items ({inStockItems.length})
                                    </h2>
                                    <div className="flex gap-4 overflow-x-auto py-4 scrollbar-full">
                                        {inStockItems.map((product) => (
                                            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300 flex-shrink-0">
                                                <div className="relative">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-32 sm:h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <button
                                                        onClick={() => removeFromFavorites(product.id)}
                                                        className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-red-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                                    >
                                                        <Trash2 size={14} className="text-red-500" />
                                                    </button>
                                                    <div className="absolute top-2 left-2">
                                                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                            -{product.discount}%
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-3">
                                                    <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                                                        {product.name}
                                                    </h3>
                                                    <div className="flex items-center gap-1 mb-2">
                                                        <span className="font-bold text-base">${product.price}</span>
                                                        <span className="line-through text-gray-400 text-xs">
                                                            ${product.originalPrice}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1 mb-3">
                                                        <div className="flex items-center text-yellow-500">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    size={12}
                                                                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                                                    className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className="text-gray-600 text-xs">
                                                            {product.rating}
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-1">
                                                        <button
                                                            onClick={() => addToCart(product)}
                                                            className="flex-1 bg-black text-white py-1.5 px-2 rounded text-xs hover:bg-gray-800 transition-colors flex items-center justify-center gap-1"
                                                        >
                                                            <ShoppingCart size={12} />
                                                            Add
                                                        </button>
                                                        <Link
                                                            to={`/product/${product.id}`}
                                                            className="flex-1 content-center border border-gray-300 font-bold text-gray-700 py-1.5 px-2 rounded text-xs hover:bg-gray-50 transition-colors text-center"
                                                        >
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Out of Stock Items */}
                            {outOfStockItems.length > 0 && (
                                <div>
                                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                                        Out of Stock ({outOfStockItems.length})
                                    </h2>
                                    <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
                                        {outOfStockItems.map((product) => (
                                            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group opacity-60 flex-shrink-0">
                                                <div className="relative">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-32 sm:h-36 md:h-40 object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                            Out of Stock
                                                        </span>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromFavorites(product.id)}
                                                        className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-red-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                                    >
                                                        <Trash2 size={14} className="text-red-500" />
                                                    </button>
                                                </div>
                                                <div className="p-3">
                                                    <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                                                        {product.name}
                                                    </h3>
                                                    <div className="flex items-center gap-1 mb-2">
                                                        <span className="font-bold text-base">${product.price}</span>
                                                        <span className="line-through text-gray-400 text-xs">
                                                            ${product.originalPrice}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1 mb-3">
                                                        <div className="flex items-center text-yellow-500">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    size={12}
                                                                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                                                    className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className="text-gray-600 text-xs">
                                                            {product.rating}
                                                        </span>
                                                    </div>
                                                    <button
                                                        disabled
                                                        className="w-full bg-gray-300 text-gray-500 py-1.5 px-2 rounded text-xs cursor-not-allowed"
                                                    >
                                                        Out of Stock
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Favorites Summary - Always at bottom */}
                            <div className="mt-8 md:max-w-md mx-auto">
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Heart className="text-red-500" size={24} />
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            Favorites Summary
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-1  gap-4 mb-6">
                                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                            <span className="text-gray-700 font-medium">Total Items</span>
                                            <span className="font-bold text-lg">{favorites.length}</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                            <span className="text-gray-700 font-medium">In Stock</span>
                                            <span className="font-bold text-lg text-green-600">{inStockItems.length}</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                                            <span className="text-gray-700 font-medium">Out of Stock</span>
                                            <span className="font-bold text-lg text-red-600">{outOfStockItems.length}</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 pt-6">
                                        <button
                                            onClick={() => {
                                                // Add all in-stock items to cart
                                                inStockItems.forEach(addToCart);
                                            }}
                                            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 text-base font-medium shadow-lg hover:shadow-xl"
                                        >
                                            <ShoppingCart size={18} />
                                            Add All to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FavoritesPage; 