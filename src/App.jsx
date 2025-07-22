
import { useState } from 'react';
import './reset.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import NewArrivals from './components/NewArrivals.jsx';


function App() {



  return (
    <>
      <Switch>
        <Route>
          <NavBar />
          <Header/>
          <NewArrivals />
          <Footer />
        </Route>
      </Switch>

    </>
  )
}
export default App
