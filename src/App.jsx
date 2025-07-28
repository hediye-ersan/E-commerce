
import { useState } from 'react';
import './reset.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';


function App() {



  return (
    <>
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category/:category" component={CategoryPage} />
      </Switch>

    </>
  )
}
export default App
