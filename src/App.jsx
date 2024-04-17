
import { useState } from "react";
import { useFilters } from './hooks/useFilters.js'

import { products as initialProducts } from "./mocks/products.json";

import { Products } from './components/Products.jsx'
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import { Cart } from "./components/Cart.jsx";
import { CartPorvider } from "./context/cart.jsx";



function App() {                         
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);
  
  return (
    <>
      <CartPorvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </CartPorvider>
    </>
  );
  
}

export default App;
