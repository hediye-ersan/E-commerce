import './reset.css'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import Cart from './pages/Cart.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import OrderHistoryPage from './pages/OrderHistoryPage.jsx';
import { CartProvider } from './contexts/CartContext';
import { OrderHistoryProvider } from './contexts/OrderHistoryContext';
import { AuthProvider } from './contexts/AuthContext'; // AuthProvider eklendi

function App() {
  return (
    <AuthProvider> {/* AuthProvider eklendi */}
      <CartProvider>
        <OrderHistoryProvider>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/category/:category" component={CategoryPage} />
            <Route path="/product/:id" component={ProductDetailPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/orders" component={OrderHistoryPage} />
          </Switch>
        </OrderHistoryProvider>
      </CartProvider>
    </AuthProvider>
  )
}
export default App