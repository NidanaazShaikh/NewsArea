import React, { Component } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";

// Switch to HashRouter for GitHub Pages deployment
const Router = process.env.REACT_APP_ENV === 'production' ? HashRouter : BrowserRouter;

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path="/NewsDash" element={<News />} />
          </Routes>
          <News/>
          <Footer/>
        </div>
      </Router>
    );
  }
}
