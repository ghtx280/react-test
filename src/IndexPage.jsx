import { useEffect, useContext } from "react";
import ProductItem from "./Product";
import { Context } from "./context";

function IndexPage() {
  const { products, setProducts, favorites, setFavorites } = useContext(Context);

  return (
    <section className="grid grid-cols-4 gap-30+70">
      {products.length ? (
        products.map((item) => <ProductItem key={item.id} id={item.id} />)
      ) : (
        <div className="grow flex-center">
          <p className="c-gray">There are no products</p>
        </div>
      )}
    </section>
  );
}
export default IndexPage;
