
import { useState } from 'react';
import './reset.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx'; // Yeni sayfa bileşeni
import Cart from './pages/Cart.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import { CartProvider } from './contexts/CartContext';


function App() {
  return (
    <CartProvider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category/:category" component={CategoryPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </CartProvider>
  )
}
export default App
