import React from "react";
import Navbar from "./components/navbar";
import Catalog from "./pages/catalog";
import Footer from "./components/footer";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Admin from "./pages/admin";
import Contact from "./pages/contact";
import Todo from "./pages/todo";
import Cart from "./pages/cart";
import Gallery from "./pages/gallery"



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalProvider from "./globalProvider";

function App() {
  console.log("✅ App.jsx loaded");

  return (
    <GlobalProvider>
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/catalog" element={<Catalog />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </GlobalProvider>
    
  );
}

export default App;

