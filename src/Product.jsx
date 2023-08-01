import { useContext, useState } from "react";
import { Context } from "./context";
import { Link, useParams } from "react-router-dom";

function Product({ id, className, isPage }) {
  if (!id) id = useParams().id

  const {
    products, setProducts, favorites, setFavorites
  } = useContext(Context)

  const product = products.filter(e => e.id == id)[0] || {}
  const { src, name, price, isFav } = product

  const addToFavorites = () => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]); 
      product.isFav = true
    }
    else {
      setFavorites(favorites.filter(e => e != id)); 
      product.isFav = false
    }
    setProducts(prev => prev.map(p => p.id == product.id ? product : p));
  }

  // ТУТ МОЖНА ЗРОБИТИ НАБАГАТО ПРОСТІШЕ, АЛЕ У МЕНЕ ВЖЕ ЧАСУ МАЛУ ЩОБ ЗРОБИТИ ВСЕ ЯК ПОТРІБНО

  if (isPage) {
    return (
      <div className={`b-2 bs-dashed r-30 p-15 flex-col flex-space ai-st bg-#fff ${className}`}>
      <img src={`https://testbackend.nc-one.com${src}`} alt={name} className="ratio-1 w-400"/>
      <div>
        <p className="fs-64">{name}</p> 
        <div className="flex-space">
          <p className="fs-64 fw-500">$ {price}</p>
          <button className="pointer bg-none scale-1.5" onClick={addToFavorites}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="5" fill="#FFCC26"/>
              <path d="M18.8273 7.11466C16.7685 7.47465 15.1823 9.9159 15.1823 9.9159C15.1823 9.9159 13.596 7.48591 11.5373 7.12591C6.44102 6.2259 4.33727 10.7034 5.18102 14.0222C6.69977 19.9397 15.1823 25.1147 15.1823 25.1147C15.1823 25.1147 23.6648 19.9397 25.1835 14.0109C26.0385 10.6922 23.9348 6.2259 18.8273 7.11466Z" fill={isFav ? "#414141" : "#fff"}/>
            </svg>
          </button>
        </div>
      </div>
      {/* <p>zoom</p> */}
    </div>
    )
  }
  else {
    return (
      <div className={`b-2 bs-dashed r-30 p-15 flex-col flex-space ai-st bg-#fff ${className}`}>
        <Link to={"/product/" + id} className="ratio-1 shrink-1"><img src={`https://testbackend.nc-one.com${src}`} alt={name} className="ratio-1"/></Link>
        <div>
          <p className="fs-20">{name}</p>
          <div className="flex-space">
            <p className="fs-24 fw-500">$ {price}</p>
            <button className="pointer bg-none" onClick={addToFavorites}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="5" fill="#FFCC26"/>
                <path d="M18.8273 7.11466C16.7685 7.47465 15.1823 9.9159 15.1823 9.9159C15.1823 9.9159 13.596 7.48591 11.5373 7.12591C6.44102 6.2259 4.33727 10.7034 5.18102 14.0222C6.69977 19.9397 15.1823 25.1147 15.1823 25.1147C15.1823 25.1147 23.6648 19.9397 25.1835 14.0109C26.0385 10.6922 23.9348 6.2259 18.8273 7.11466Z" fill={isFav ? "#414141" : "#fff"}/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }

  
}

export default Product;