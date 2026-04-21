import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  apiGetCategories,
  apiGetAllProducts,
  apiGetProductsById,
  apiCreateProduct,
  apiUpdateProduct,
  apiDeleteProduct,
} from "../api/apiMain.js";

const useProductStore = create()(
  persist((set, get) => ({
    allProducts: [],
    allCategories: [],
    productById:[],
    productPage: 1,
    setProductPage: (page) => set({ productPage: page }),

    getAllProducts: async () => {
      const resp = await apiGetAllProducts();
      // console.log("getAllProducts", resp.data.responses);
      set({ allProducts: resp.data.responses });
    },
    getCategories: async () => {
      const resp = await apiGetCategories();
      // console.log("getCategories", resp.data.responses);
      set({ allCategories: resp.data.responses });
    },
    getProductsById: async(id)=>{
      console.log(typeof id)
      const resp = await apiGetProductsById(id)
      console.log("getProductsById",resp)
      set({productById:resp.data.responses})
    }
    // apiCreateProduct
    // apiUpdateProduct
    // apiDeleteProduct
  })),
);

export default useProductStore;
