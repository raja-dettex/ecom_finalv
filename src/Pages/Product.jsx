import { ProductCard } from "./../components/ProductComponent/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "./../components/Filter/Filter";
import { Fragment } from "react";
import "./Product.css";
import Navbar from "./../components/Navbar/Navbar";
import { useFilter } from "./../Filter-context";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const { state } = useFilter();
  useEffect(() => {
    (async function () {
      try {
        const {
          data: { data }
        } = await axios.get("Products.json");
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  });

  const getSortedProducts = (products, sortState) => {
    return [...products].sort((item1, item2) =>
      sortState === "lth"
        ? item1.newPrice - item2.newPrice
        : sortState === "htl"
        ? item2.newPrice - item1.newPrice
        : products
    );
  };
  const sortedProducts = getSortedProducts(products, state.sort);
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex gap">
        <Filter />
        <main className="main d-flex gap wrap">
          {sortedProducts &&
            sortedProducts.length > 0 &&
            sortedProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </main>
      </div>
    </Fragment>
  );
};
