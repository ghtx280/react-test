import { useEffect, useContext } from "react";
import Product  from "./Product";
import { Context } from "./context";
import IndexPage from "./IndexPage";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


function App() {
  const {
    products, setProducts,
    favorites, setFavorites,
  } = useContext(Context)
  

  useEffect(() => {
    (async () => {
      const data = await fetch("https://testbackend.nc-one.com/image");
      const json = await data.json();
      setProducts(json.slice(2));
    })();
  }, []);

  let title = useLocation().pathname === '/' ? 'Product List Page' : 'Product Page'

  return (
    <>
      <header className="bg-#FFCC26 ff-$anek bb-1">
        <div className="px-90 jc-end ai-center p-30">
          <h2 className="fw-600">{title}</h2>
        </div>
      </header>

      <main className="px-90 my-75 flex gap-50 rel grow ai-s">
        <aside className="b-2 bs-dashed sticky top-75 w-400 h-75vh r-30 shrink-0 bg-#fff flex-col over-auto">
          <p className="ff-$anek m-30 fs-24 fw-600">Favorites</p>
          { 
            favorites.length
            ? favorites.map(id => <Product key={id} id={id} className="flex-row &_img:sq-150 gap-50 b-0 bg-#FBFBFB m-30" />)
            : <div className="grow flex-center">
                <p className="c-gray">There are no favorite products yet</p>
              </div>
          }
        </aside>

        <Routes>
          <Route path="/" element={  <IndexPage /> } />
          <Route path="/product/:id" element={ <Product isPage={true} className="flex-row gap-50 b-0 bg-#FBFBFB m-30"/>} />
        </Routes>
      </main>
    </>
  );

}

export default App;
