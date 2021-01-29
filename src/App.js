// import logo from './logo.svg';
import React from "react";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router basename="/">
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
