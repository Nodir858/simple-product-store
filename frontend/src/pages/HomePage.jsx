import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-[3rem] text-sky-500">
          Current Products 🚀
        </h1>

        <div
          className="grid grid-cols-[repeat(4,_20rem)] gap-4
"
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>

        {products.length === 0 && (
          <div className="flex justify-center gap-2">
            <h1 className="font-semibold text-slate-300">
              No products found😥{" "}
            </h1>
            <Link to={"/create"}>
              <span className="font-semibold text-sky-500 hover:underline focus:decoration-2 outline-none">
                Create a product
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
