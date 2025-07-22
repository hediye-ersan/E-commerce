
import { useState } from 'react';
import './reset.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './pages/HomePage.jsx';


function App() {



  return (
    <>
      <Switch>
        <Route>
          <HomePage/>
        </Route>
      </Switch>

    </>
  )
}
export default App
