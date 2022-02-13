import React from "react";
import Home from "./Home";
import { Header, Footer } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./Cart/index";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <footer className="footer-page">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
