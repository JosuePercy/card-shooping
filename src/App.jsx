
import { useState } from "react";
import { useFilters } from './hooks/useFilters.js'

import { products as initialProducts } from "./mocks/products.json";

import { Products } from './components/Products.jsx'
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";



function App() {
  
  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  );
  
}

export default App;
