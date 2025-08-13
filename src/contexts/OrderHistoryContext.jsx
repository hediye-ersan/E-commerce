import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const OrderHistoryContext = createContext();

export const useOrderHistory = () => {
    const context = useContext(OrderHistoryContext);
    if (!context) {
        throw new Error('useOrderHistory must be used within an OrderHistoryProvider');
    }
    return context;
};

export const OrderHistoryProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState({
        status: 'all',
        dateRange: 'all',
        orderBy: 'date_desc'
    });

    const fetchOrders = async () => {
        try {
            setLoading(true);
            setError(null);
            // API'den sipariş verilerini çek
            // const response = await fetch('/api/orders');
            // const data = await response.json();
            // setOrders(data);
            
            // Mock data için örnek
            const mockOrders = [
                {
                    id: 1,
                    orderDate: new Date('2023-07-15').toISOString(),
                    status: 'delivered',
                    totalAmount: 125.50,
                    items: [
                        { id: 1, name: 'Classic T-Shirt', quantity: 2, price: 25.00, image: 'https://picsum.photos/200/300?random=1' },
                        { id: 2, name: 'Denim Jeans', quantity: 1, price: 75.50, image: 'https://picsum.photos/200/300?random=2' }
                    ]
                },
                {
                    id: 2,
                    orderDate: new Date('2023-08-01').toISOString(),
                    status: 'pending',
                    totalAmount: 89.99,
                    items: [
                        { id: 3, name: 'Summer Dress', quantity: 1, price: 89.99, image: 'https://picsum.photos/200/300?random=3' }
                    ]
                },
                {
                    id: 3,
                    orderDate: new Date('2023-06-20').toISOString(),
                    status: 'cancelled',
                    totalAmount: 45.00,
                    items: [
                        { id: 4, name: 'Baseball Cap', quantity: 1, price: 45.00, image: 'https://picsum.photos/200/300?random=4' }
                    ]
                }
            ];
            setOrders(mockOrders);
        } catch (err) {
            setError('Failed to fetch order history');
        } finally {
            setLoading(false);
        }
    };

    const filteredOrders = useMemo(() => {
        let filtered = [...orders];

        // Arama filtresi
        if (searchQuery) {
            filtered = filtered.filter(order =>
                order.items.some(item =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }

        // Durum filtresi
        if (filter.status !== 'all') {
            filtered = filtered.filter(order => order.status === filter.status);
        }

        // Tarih aralığı filtresi (örnek)
        if (filter.dateRange !== 'all') {
            const now = new Date();
            const filterDate = new Date();
            if (filter.dateRange === 'week') {
                filterDate.setDate(now.getDate() - 7);
            }
            if (filter.dateRange === 'month') {
                filterDate.setMonth(now.getMonth() - 1);
            }
            filtered = filtered.filter(order => new Date(order.orderDate) >= filterDate);
        }

        // Sıralama
        filtered.sort((a, b) => {
            const dateA = new Date(a.orderDate);
            const dateB = new Date(b.orderDate);
            return filter.orderBy === 'date_desc' ? dateB - dateA : dateA - dateB;
        });

        return filtered;
    }, [orders, filter, searchQuery]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const value = { orders: filteredOrders, loading, error, filter, setFilter, searchQuery, setSearchQuery };

    return (
        <OrderHistoryContext.Provider value={value}>
            {children}
        </OrderHistoryContext.Provider>
    );
};
