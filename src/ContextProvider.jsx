import { useState } from "react";
import { Context } from "./context";

export function ContextProvider({children}) {

  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const value = {
    products,  setProducts,
    favorites, setFavorites,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );

}