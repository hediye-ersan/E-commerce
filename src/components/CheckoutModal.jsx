import { useState } from 'react';
import { X, CreditCard, MapPin, Truck, Shield, Check, Plus, Edit, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { cartItems, getCartTotal } = useCart();
    const [activeStep, setActiveStep] = useState(1);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
    const [selectedAddress, setSelectedAddress] = useState(1);
    const [selectedCard, setSelectedCard] = useState(1);
    const [showNewCardForm, setShowNewCardForm] = useState(false);
    const [showNewAddressForm, setShowNewAddressForm] = useState(false);

    const totals = getCartTotal();

    // Sample saved cards
    const savedCards = [
        {
            id: 1,
            type: 'visa',
            last4: '4242',
            expiry: '12/25',
            isDefault: true
        },
        {
            id: 2,
            type: 'mastercard',
            last4: '8888',
            expiry: '08/26',
            isDefault: false
        }
    ];

    // Sample saved addresses
    const savedAddresses = [
        {
            id: 1,
            type: 'Home',
            name: 'John Doe',
            address: '123 Main Street',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            isDefault: true
        },
        {
            id: 2,
            type: 'Office',
            name: 'John Doe',
            address: '456 Business Ave',
            city: 'New York',
            state: 'NY',
            zip: '10002',
            isDefault: false
        }
    ];

    const getCardIcon = (type) => {
        switch (type) {
            case 'visa':
                return '💳';
            case 'mastercard':
                return '💳';
            default:
                return '💳';
        }
    };

    const getCardColor = (type) => {
        switch (type) {
            case 'visa':
                return 'bg-blue-500';
            case 'mastercard':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Checkout Form */}
                    <div className="flex-1 p-6">
                        {/* Progress Steps */}
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${activeStep >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    1
                                </div>
                                <div className={`w-16 h-1 mx-2 ${activeStep >= 2 ? 'bg-black' : 'bg-gray-200'
                                    }`}></div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${activeStep >= 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    2
                                </div>
                                <div className={`w-16 h-1 mx-2 ${activeStep >= 3 ? 'bg-black' : 'bg-gray-200'
                                    }`}></div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${activeStep >= 3 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    3
                                </div>
                            </div>
                        </div>

                        {/* Step 1: Shipping Address */}
                        {activeStep === 1 && (
                            <div>
                                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 py-4 md:py-8">
                                    <MapPin size={20} />
                                    Shipping Address
                                </h3>

                                {/* Saved Addresses */}
                                <div className="space-y-3">
                                    {savedAddresses.map((address) => (
                                        <div
                                            key={address.id}
                                            className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${selectedAddress === address.id
                                                    ? 'border-black bg-gray-50'
                                                    : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                            onClick={() => setSelectedAddress(address.id)}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-sm font-medium text-gray-600">
                                                            {address.type}
                                                        </span>
                                                        {address.isDefault && (
                                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                                Default
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="font-medium">{address.name}</p>
                                                    <p className="text-gray-600">{address.address}</p>
                                                    <p className="text-gray-600">
                                                        {address.city}, {address.state} {address.zip}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button className="p-1 hover:bg-gray-100 rounded">
                                                        <Edit size={16} />
                                                    </button>
                                                    <button className="p-1 hover:bg-gray-100 rounded text-red-500">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Add New Address */}
                                <div className='py-4 md:py-8'>
                                    <button
                                        onClick={() => setShowNewAddressForm(true)}
                                        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Plus size={20} />
                                        Add New Address
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Payment Method */}
                        {activeStep === 2 && (
                            <div>
                                <h3 className="text-xl font-semibold flex items-center gap-2 pt-4 md:pt-8">
                                    <CreditCard size={20} />
                                    Payment Method
                                </h3>

                                {/* Payment Options */}
                                <div className="space-y-4 p-4">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            id="card"
                                            name="payment"
                                            value="card"
                                            checked={selectedPaymentMethod === 'card'}
                                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-black"
                                        />
                                        <label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                                            <CreditCard size={20} />
                                            Credit/Debit Card
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            id="paypal"
                                            name="payment"
                                            value="paypal"
                                            checked={selectedPaymentMethod === 'paypal'}
                                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-black"
                                        />
                                        <label htmlFor="paypal" className="cursor-pointer">
                                            PayPal
                                        </label>
                                    </div>
                                </div>

                                {/* Saved Cards */}
                                {selectedPaymentMethod === 'card' && (
                                    <div>
                                        <h4 className="font-medium py-4 md:py-8">Saved Cards</h4>
                                        <div className="space-y-3">
                                            {savedCards.map((card) => (
                                                <div
                                                    key={card.id}
                                                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${selectedCard === card.id
                                                            ? 'border-black bg-gray-50'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    onClick={() => setSelectedCard(card.id)}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-10 h-6 ${getCardColor(card.type)} rounded flex items-center justify-center text-white text-xs`}>
                                                                {getCardIcon(card.type)}
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">
                                                                    •••• •••• •••• {card.last4}
                                                                </p>
                                                                <p className="text-sm text-gray-600">
                                                                    Expires {card.expiry}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {card.isDefault && (
                                                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                                    Default
                                                                </span>
                                                            )}
                                                            <button className="p-1 hover:bg-gray-100 rounded text-red-500">
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Add New Card */}
                                        <div className='py-4 md:py-8'>
                                            <button
                                                onClick={() => setShowNewCardForm(true)}
                                                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Plus size={20} />
                                                Add New Card
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Step 3: Review & Confirm */}
                        {activeStep === 3 && (
                            <div className='py-4 md:py-8'>
                                <h3 className="text-xl font-semibold flex items-center gap-2 pb-4 md:pb-8">
                                    <Check size={20} />
                                    Review & Confirm
                                </h3>

                                {/* Order Summary */}
                                <div className="bg-gray-100  p-4">
                                    <h4 className="font-medium mb-3">Order Summary</h4>
                                    <div className="space-y-2 text-sm">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex justify-between">
                                                <span>{item.name} (x{item.quantity})</span>
                                                <span>${item.price * item.quantity}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-gray-100 mt-3 pt-3">
                                        <div className="flex justify-between font-medium">
                                            <span>Total</span>
                                            <span>${totals.total}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Shipping Address */}
                                <div className="bg-gray-100 p-4 mb-6 py-4">
                                    <h4 className="font-medium mb-3">Shipping Address</h4>
                                    <p className="text-sm text-gray-600">
                                        {savedAddresses.find(addr => addr.id === selectedAddress)?.address}, {' '}
                                        {savedAddresses.find(addr => addr.id === selectedAddress)?.city}
                                    </p>
                                </div>

                                {/* Payment Method */}
                                <div className="bg-gray-100 p-4">
                                    <h4 className="font-medium mb-3">Payment Method</h4>
                                    <p className="text-sm text-gray-600">
                                        {selectedPaymentMethod === 'card' ? 'Credit Card' : 'PayPal'}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            {activeStep > 1 && (
                                <button
                                    onClick={() => setActiveStep(activeStep - 1)}
                                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    if (activeStep < 3) {
                                        setActiveStep(activeStep + 1);
                                    } else {
                                        // Place order
                                        alert('Order placed successfully!');
                                        onClose();
                                    }
                                }}
                                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors ml-auto"
                            >
                                {activeStep === 3 ? 'Place Order' : 'Continue'}
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Order Summary */}
                    <div className="lg:w-80 bg-gray-100 p-6">
                        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                        {/* Cart Items */}
                        <div className="space-y-3 mb-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium text-sm">{item.name}</p>
                                        <p className="text-sm text-gray-600">
                                            Size: {item.size} | Color: {item.color}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">${item.price}</p>
                                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="border-t border-gray-200 pt-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>${totals.subtotal}</span>
                            </div>
                            <div className="flex justify-between text-sm text-red-600">
                                <span>Discount (-20%)</span>
                                <span>-${totals.discount}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Delivery Fee</span>
                                <span>${totals.deliveryFee}</span>
                            </div>
                            <div className="border-t border-gray-200 pt-2">
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span>${totals.total}</span>
                                </div>
                            </div>
                        </div>

                        {/* Security Badges */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Shield size={16} />
                                <span>Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Truck size={16} />
                                <span>Free Shipping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal; 