
import { useState } from 'react';
import './reset.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {

  

  return (
    <>
      <Switch>
        <Route>
          <NavBar />
          <Footer/>
        </Route>
      </Switch>

    </>
  )
}
export default App
