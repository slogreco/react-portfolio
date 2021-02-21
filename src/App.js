// import logo from './logo.svg';
import React from "react";
import './App.css';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router basename="/">
      <div>
        <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
