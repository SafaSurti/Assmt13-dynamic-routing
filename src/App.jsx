import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardList from "./Components/card";
import CardDetails from "./Components/card detail";
import products from "./data"; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList products={products} />} />
        <Route path="/product/:id" element={<CardDetails products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
