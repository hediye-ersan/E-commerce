import React from 'react';
import './reset.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import NavBar from './components/Navbar.jsx';

function App() {

  return (
    <>
      <Switch>
        <Route>
          <NavBar/>
        </Route>
      </Switch>

    </>
  )
}
export default App
