import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home/Home";
import { Route, Switch } from 'react-router-dom';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Footer from './Components/Footer/Footer';
import Dashboard from './Pages/Dashboards/Main/MainDashBoard';
import PublicDashBoard from './Pages/Dashboards/Public/PublicDashBorad';
import Auth from './Pages/Dashboards/Auth/Auth';
import Owner from './Pages/Dashboards/Owner/Owner';
import Patient from './Pages/Dashboards/Patient/Patient';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path="/dashboard/public">
          <PublicDashBoard/>
        </Route>
        <Route exact path="/dashboard/authorized">
          <Auth/>
        </Route>
        <Route exact path="/dashboard/hospital">

        </Route>
        <Route exact path="/dashboard/patient">
          <Patient/>
        </Route>
        <Route exact path="/dashboard/admin">

        </Route>
        <Route exact path="/dashboard/owner">
          <Owner/>
        </Route>
      </Switch>
      <Footer />

    </>
  )
}

export default App
