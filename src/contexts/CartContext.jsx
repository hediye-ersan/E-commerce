import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => 
                item.id === product.id && 
                item.size === product.size && 
                item.color === product.color
            );

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id && 
                    item.size === product.size && 
                    item.color === product.color
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevItems, product];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const getCartTotal = () => {
        const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        const discount = subtotal * 0.2; // 20% discount
        const deliveryFee = 15;
        return {
            subtotal,
            discount,
            deliveryFee,
            total: subtotal - discount + deliveryFee
        };
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}; 