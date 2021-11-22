import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home/Home";
import { Route, Switch } from 'react-router-dom';
import About from './Pages/About/About';

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        
      </Switch>
    </>
  )
}

export default App
