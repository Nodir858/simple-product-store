import React from "react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const Modal = ({ closeModal, product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { updateProduct } = useProductStore();
  const handleUpdateProduct = async (product_id, updatedProduct) => {
    await updateProduct(product_id, updateProduct);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xs flex justify-center items-center">
      <div className="bg-slate-100 p-6 rounded-xl shadow-lg text-center">
        <h1 className="text-xl font-bold mb-4">Update Product</h1>
        <button
          onClick={() => closeModal(false)}
          className="absolute right-[40rem] top-[21rem] cursor-pointer"
        >
          X
        </button>
        <form action="" className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded"
            onChange={(e) =>
              setUpdatedProduct({
                ...updateProduct,
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Price"
            className="w-full px-4 py-2 border rounded"
            onChange={(e) =>
              setUpdatedProduct({
                ...updateProduct,
                price: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded"
            onChange={(e) =>
              setUpdatedProduct({
                ...updateProduct,
                image: e.target.value,
              })
            }
          />
        </form>
        <div className="flex justify-between pt-4">
          <button
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            className="bg-sky-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Update
          </button>
          <button onClick={() => closeModal(false)} className="cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
