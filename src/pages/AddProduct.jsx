import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CrossIcon, PhotoIcon } from "../icons";
import useProductStore from "../stores/product.store.js";
import useAuctionStore from "../stores/auction.store.js";
import Swal from "sweetalert2";


const AddProduct = () => {
  const { createProduct ,allCategories} = useProductStore();
  const { createAuction } = useAuctionStore();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, watch, setValue, formState } = useForm(
    {
      // resolver: zodResolver(editProfileSchema),
      mode: "onSubmit",
    },
  );
  const onSubmit = async (data) => {
    const {description,name,startTime,endTime,startingPrice,reservePrice,minIncrement} = data
    const productTableData = {description,name}
    const auctionTableData = {startTime,endTime,startingPrice,reservePrice,minIncrement}
    console.log("add_product", productTableData);
    console.log("add_product", auctionTableData);
    setIsLoading(true);
    try {
      await createProduct(productTableData);
      await createAuction(auctionTableData);
      Swal.fire({
        title: "Profile Updated",
      });
    } catch (error) {
      Swal.fire({
        title: "Profile Update failed",
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-['Manrope'] selection:bg-[#9e1b1b] selection:text-white">
      <main className="pt-8 pb-24 px-6 md:px-24 max-w-[1440px] mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Forms */}
          <div className="lg:col-span-7 space-y-24">
            {/* Section 1: Identification */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-['Newsreader'] text-3xl italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  1
                </span>
                <h2 className="font-['Newsreader'] text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Product Detail
                </h2>
              </div>
              <form action="">
                <div className="space-y-8">
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                    {...register("name")}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">
                      Category
                    </label>
                    <select className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-2 text-base focus:ring-0 focus:border-[#7a0009] transition-all appearance-none" {...register("category")}>
                      <option>Select a category</option>
                      {allCategories.map((item)=><option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">
                      Description
                    </label>
                    <textarea
                      rows="4"
                      placeholder="product details"
                      className="border-1 border-[#8d706d]/30 bg-transparent px-3 py-3 text-base focus:ring-0 focus:border-[#7a0009] transition-all resize-none"
                    {...register("description")}
                    ></textarea>
                  </div>
                </div>
              </form>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-['Newsreader'] text-3xl italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  2
                </span>
                <h2 className="font-['Newsreader'] text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Auction Detail
                </h2>
              </div>
              <form action="">
                <div className="space-y-8 grid grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">
                      Start Time
                    </label>
                    <input
                      type="datetime-local"
                      placeholder=""
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                    {...register("startTime")}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">
                      End Time
                    </label>
                    <select
                      name="endTime"
                      className="min-h-[37px] border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                    {...register("endTime")}
                    >
                      <option value="24">1 day</option>
                      <option value="72">3 day</option>
                      <option value="120">5 day</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">
                      Starting Price (Bath)
                    </label>
                    <input
                      type="text"
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                    {...register("startingPrice")}/>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">
                      Reserve Price (Bath)
                    </label>
                    <input
                      type="text"
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                    {...register("reservePrice")}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">
                      Minimum Increment (Bath)
                    </label>
                    <input
                      type="text"
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                    {...register("minIncrement")}
                    />
                  </div>
                </div>
              </form>
            </section>
          </div>

          {/* Right Side: Media & Context */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-white p-8 border border-[#e1bebb]/15 rounded-sm">
              <h3 className="font-['Newsreader'] text-xl mb-8 bg-gradient-to-r from-dark-red to-secondary bg-clip-text text-transparent">
                Product Images
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="flex justify-center items-center col-span-3 aspect-[4/3] bg-[#e4e2df] rounded-sm overflow-hidden relative group">
                  <span className=" material-symbols-outlined text-[#59413e]/30">
                    <PhotoIcon className="w-30" />
                  </span>
                  <div className="absolute inset-0 bg-[#7a0009]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <button className="material-symbols-outlined text-white text-3xl">
                      <CrossIcon className="w-15" />
                    </button>
                  </div>
                </div>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-base-200 rounded-sm flex items-center justify-center border-2 border-dashed border-[#e1bebb]/40"
                  >
                    <span className="material-symbols-outlined text-[#59413e]/30">
                      <PhotoIcon className="w-10" />
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-2 border-dashed border-[#e1bebb]/40 py-12 px-6 flex flex-col items-center text-center cursor-pointer hover:bg-[#efeeeb] transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#7a0009] mb-4">
                  cloud_upload
                </span>
                <p className="text-sm font-semibold mb-1">
                  Drag & drop files here
                </p>
                <p className="text-xs text-[#59413e]">
                  PNG, JPG or JPEG (max. 10MB)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 pt-30">
          <button onClick={handleSubmit(onSubmit)} className="bg-gradient-to-br from-dark-red to-red-600 text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:shadow-lg hover:shadow-[#7a0009]/20 transition-all active:scale-[0.98]">
            Create New Product
          </button>
          <button className="text-white bg-gradient-to-r from-primary to-secondary text-on-primary w-30 py-4 rounded-l hover:text-[#7a0009] transition-colors text-sm font-bold tracking-widest uppercase decoration-[#e1bebb]/30">
            Save Draft
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
