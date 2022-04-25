import React from "react";
import Home from "./pages/home";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} /> |{" "}
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
