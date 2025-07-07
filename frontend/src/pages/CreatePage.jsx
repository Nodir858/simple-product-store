import React, { useState } from "react";
import { useProductStore } from "../store/product";
import Modal from "../components/Modal";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <>
      <section className="text-white min-h-[89vh] flex items-center justify-center">
        <div className="">
          <h1 className="text-center font-bold text-4xl m-7">
            Create new products
          </h1>
          <div className="min-w-lg bg-slate-700 py-5 px-5 rounded-xl">
            <form action="" className="">
              <label htmlFor="name" className="block w-full">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    name: e.target.value,
                  })
                }
                className="border-1 rounded-sm border-slate-400 block w-full outline-none px-2 py-1
"
              />
              <label htmlFor="price" className="block mt-3">
                Price
              </label>
              <input
                type="text"
                className="border-1 rounded-sm border-slate-400 block w-full outline-none px-2 py-1
"
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                  })
                }
              />
              <label htmlFor="image" className="block mt-3">
                Image URL
              </label>
              <input
                type="text"
                className="border-1 rounded-sm border-slate-400 block w-full outline-none px-2 py-1
"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    image: e.target.value,
                  })
                }
              />
            </form>
            <button
              type="submit"
              className="w-full p-3 mt-5 bg-blue-500 rounded-sm cursor-pointer"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </section>
      <Modal></Modal>
    </>
  );
};

export default CreatePage;
