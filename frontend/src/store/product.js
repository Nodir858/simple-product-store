import { useState } from "react";
import { create } from "zustand";

//zustand is global state
export const useProductStore = create((set) => ({
  products: [], //initial state
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields" };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product Created successfully" };
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json(); //data takes and wrapped whole object
    set({
      products: data.data,
      //data.data it takes product with array
    });
  },
  deleteProduct: async (product_id) => {
    const res = await fetch(`/api/products/${product_id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (!data.success)
      return {
        success: false,
        message: data.message,
      };
    set((state) => ({
      products: state.products.filter((product) => product._id !== product_id),
    }));
    return { success: true, message: data.message };
  },
  updateProduct: async (product_id, updatedProduct) => {
    const res = await fetch(`/api/products/${product_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success)
      return {
        success: false,
        message: data.message,
      };
    // update the ui immediately, without needing a refresh
    set((state) => ({
      products: state.products.map((product) =>
        product._id === product_id ? data.data : product
      ),
    }));
    return { success: true, message: data.message };
  },
}));

// const [state, setState] = useState([]); local state
