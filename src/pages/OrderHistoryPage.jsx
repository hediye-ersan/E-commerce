import React from 'react';
import { useOrderHistory } from '../contexts/OrderHistoryContext';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const OrderHistoryPage = () => {
    const { orders, loading, error, filter, setFilter, searchQuery, setSearchQuery } = useOrderHistory();

    const statusOptions = [
        { value: 'all', label: 'All' },
        { value: 'pending', label: 'Pending' },
        { value: 'delivered', label: 'Delivered' },
        { value: 'cancelled', label: 'Cancelled' }
    ];

    const dateRangeOptions = [
        { value: 'all', label: 'All Time' },
        { value: 'week', label: 'Last Week' },
        { value: 'month', label: 'Last Month' }
    ];

    const sortOptions = [
        { value: 'date_desc', label: 'Newest First' },
        { value: 'date_asc', label: 'Oldest First' }
    ];

    const handleFilterChange = (field, value) => {
        setFilter(prev => ({
            ...prev,
            [field]: value
        }));
    };

    if (loading) {
        return <div className="text-white text-center p-6">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center p-6">{error}</div>;
    }

    return (
        <div className="mx-auto px-4 md:px-24 pt-2 md:pt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 py-4 md:py-8 uppercase">Order History</h1>

            {/* Arama Çubuğu */}
            <div className="relative mb-4">
                <input 
                    type="text"
                    placeholder="Ürün veya marka ara"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                
            </div>


            {/* Sipariş Listesi */}
            <div className="flex flex-col gap-4 py-4">
                {orders.map(order => (
                    <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <p className="text-sm text-gray-700 font-medium">{new Date(order.orderDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                <p className="text-sm font-medium">
                                    Toplam: <span className="font-bold">${order.totalAmount.toFixed(2)}</span>
                                </p>
                            </div>
                            <Link to={`/order/${order.id}`} className="text-sm text-gray-700  font-semibold flex items-center">
                                Detaylar
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="border-t border-gray-100 pt-3">
                            {order.status === 'cancelled' && (
                                <div className="flex items-center text-red-600 font-bold mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    İptal Edildi
                                </div>
                            )}
                            {order.status === 'delivered' && (
                                <div className="flex items-center text-green-600 font-bold mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Teslim Edildi
                                </div>
                            )}
                            {order.status === 'pending' && (
                                <div className="flex items-center text-yellow-600 font-bold mb-2">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Onay Bekliyor
                                </div>
                            )}

                            <div className="flex gap-2 overflow-x-auto py-2">
                                {order.items.map(item => (
                                    <img key={item.id} src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover flex-shrink-0" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistoryPage;
