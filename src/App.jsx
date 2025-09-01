import React from "react";
import Navbar from "./components/navbar";
import Catalog from "./pages/catalog";
import Footer from "./components/footer";
import "./App.css";

function App() {
  console.log("✅ App.jsx loaded");

  return (
    <div className="App">
      <Navbar />
      <h1>My React Store</h1>
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;

