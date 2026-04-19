import React, { useEffect, useState } from "react";
import useProductStore from "../stores/product.store.js";
import TimeCountdown from "../components/TimeCountdown.jsx";
import { ProductListByPages } from "../components/PageProducts.jsx";

const ProductPage = () => {
  const {
    productPage,
    allProducts,
    allCategories,
    getAllProducts,
    getCategories,
  } = useProductStore();
  const [selectCategory, setSelectCategory] = useState("");


  const hdlCategorySelect = (value) => {
    if(value==="All"){
      // getAllProductsByCategory()
      // return setSelectCategory()
    }
    setSelectCategory(value);
    // Optional: Close dropdown by removing focus from the button
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  const limit = 20;
  // 1. Calculate the slice indexes
  const startIndex = (productPage - 1) * limit;
  const endIndex = startIndex + limit;

  // 2. Slice the data for display
  const displayedProducts = allProducts.slice(startIndex, endIndex);

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] min-h-screen">
      <main className="pt-12 pb-24 px-12 max-w-screen-2xl mx-auto">
        <section className="mb-20 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#800000] mb-4 block">
            Curated Selections
          </span>
          <div className="max-w-3xl mx-auto relative group">
            <input
              type="text"
              placeholder="Search by category or product details"
              className="w-full h-16 pl-16 pr-8 bg-[#f6f3f2] border-none rounded-full focus:ring-2 focus:ring-[#570000]/20 text-lg shadow-sm outline-none"
            />
          </div>
        </section>

        <div className="flex justify-between items-end mb-12 text-left">
          <div>
            <h2 className="text-4xl font-['Noto_Serif'] text-red">
              All Products
            </h2>
          </div>
          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-dark-red text-white tracking-widest "
            >
              Categories
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-white text-dark-red rounded-box z-1 w-40 p-2 shadow-sm"
            >
              <li onClick={() => hdlCategorySelect("All")}><a>All</a></li>
              {allCategories.map((item) => (
                <li onClick={() => hdlCategorySelect(item.name)}>
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-l font-semibold uppercase tracking-widest text-stone-600 mb-1 block">
          Category : {selectCategory}
        </div>
        <p className="mt-2  text-primary ">
          <span className="text-gray-700 font-bold text-xl">
            {allProducts.length}
          </span>
          <span className="text-gray-600 ml-2">Products in total</span>
          <p className="text-black mt-1">
            showing {startIndex + 1} - {endIndex}
          </p>
        </p>

        {/* Ongoing Auction Grid */}
        <section className="mt-10">
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((i) => {
              const category = allCategories.find(
                (cat) => cat.id === i.categoryId,
              );
              // console.log(category.name)
              return (
                <div key={i.id} className="group cursor-pointer w-full">
                  <div className="relative overflow-hidden rounded-3xl">
                    {i.images?.[0]?.imageUrl && (
                      <img
                        src={i.images[0].imageUrl}
                        alt="Product"
                        className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    {/* <img
                      src={`${i.images[0].imageUrl || `fallback.jpg`}`}
                      alt="Lot"
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                    /> */}
                    <div className="absolute top-4 right-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                      <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">
                        Live Now
                      </span>
                    </div>
                    <div className="bg-base-300 rounded-b-3xl px-5 py-3">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col min-w-[176px] min-h-[52px] grow-0">
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-600 mb-1 block">
                            {category.name}
                          </span>
                          <h3 className="font-['Noto_Serif'] text-xl">
                            {i.name}
                          </h3>
                        </div>
                        <div className="text-center min-w-[67px]">
                          <span className="font-headline uppercase text-[10px] text-stone-600">
                            Current Bid{" "}
                          </span>
                          <p className="font-['Noto_Serif'] text-lg text-red text-xl">
                            ${(1000 * i.id).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-stone-500">
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            {/* <TimeCountdown product={i}/> */}
                          </span>
                        </div>
                        <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                          Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <ProductListByPages allProducts={allProducts} limit={limit} />
    </div>
  );
};

export default ProductPage;
