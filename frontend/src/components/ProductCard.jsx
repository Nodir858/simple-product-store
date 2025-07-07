import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleDeleteProduct = async (product_id) => {
    const { success, message } = await deleteProduct(product_id);
    console.log("Success:", success);
    console.log("Message:", message);
  };

  const [openModel, setOpenModel] = useState(false);

  const handleUpdateProduct = async (product_id, updatedProduct) => {
    const { success, message } = await updateProduct(
      product_id,
      updatedProduct
    );
    console.log(success);
    console.log(message);
    setOpenModel(false);
  };

  return (
    <div className="w-auto rounded-lg">
      <img
        className="w-full object-cover rounded-t-lg h-40"
        src={product.image}
        alt=""
      />
      <div className=" bg-gray-800 shadow-2xl rounded-b-lg text-white text-left px-4 py-2 font-bold">
        <h1 className="">{product.name}</h1>
        <p className="">${product.price}</p>
        <div className="flex text-2xl my-2 w-15 justify-between ">
          <FaEdit
            className="bg-sky-500"
            onClick={() => {
              setOpenModel(true);
            }}
          />
          <MdDeleteForever
            className="bg-red-500"
            onClick={() => handleDeleteProduct(product._id)}
          />
        </div>
      </div>
      {/* {openModel ? (
        <Modal closeModal={setOpenModel} product={product}></Modal>
      ) : null} */}
      {openModel ? (
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xs flex justify-center items-center">
          <div className="bg-slate-100 p-6 rounded-xl shadow-lg text-center">
            <h1 className="text-xl font-bold mb-4">Update Product</h1>
            <button
              onClick={() => setOpenModel(false)}
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
                    ...updatedProduct,
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
                    ...updatedProduct,
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
                    ...updatedProduct,
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
              <button
                onClick={() => setOpenModel(false)}
                className="cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductCard;
