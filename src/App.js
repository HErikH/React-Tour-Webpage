import React, { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import "./styles/Media.scss";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home'
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route path="/" exact  component={Home}/>
    <Route path="/services" component={Services}/>
    <Route path="/products" component={Products}/>
    <Route path="/sign-up" component={SignUp}/>
    </Switch> 
    <Footer/>
    </BrowserRouter>
    </div>
  )
}
export default App;
