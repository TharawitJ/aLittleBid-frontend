import React from 'react';
import { CrossIcon, PhotoIcon } from '../icons';

const AddProduct = () => {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-['Manrope'] selection:bg-[#9e1b1b] selection:text-white">
      <main className="pt-8 pb-24 px-6 md:px-24 max-w-[1440px] mx-auto">
        {/* Stepper
        <div className="mb-20 flex flex-wrap gap-y-6 justify-between items-center max-w-4xl border-b border-[#e1bebb]/15 pb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#7a0009] tracking-[0.2em] uppercase">01. ITEM DETAILS</span>
            <div className="h-px w-8 bg-[#7a0009]"></div>
          </div>
          <div className="flex items-center gap-3 text-[#59413e]/40">
            <span className="text-xs font-bold tracking-[0.2em] uppercase">02. MEDIA</span>
            <div className="h-px w-8 bg-[#e1bebb]/40"></div>
          </div>
          <div className="flex items-center gap-3 text-[#59413e]/40">
            <span className="text-xs font-bold tracking-[0.2em] uppercase">03. VALUATION</span>
            <div className="h-px w-8 bg-[#e1bebb]/40"></div>
          </div>
          <div className="flex items-center text-[#59413e]/40">
            <span className="text-xs font-bold tracking-[0.2em] uppercase">04. REVIEW</span>
          </div>
        </div> */}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Forms */}
          <div className="lg:col-span-7 space-y-24">
            {/* Section 1: Identification */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-['Newsreader'] text-3xl italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1</span>
                <h2 className="font-['Newsreader'] text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Product Detail</h2>
              </div>
              <form action="">
                <div className="space-y-8">
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">Product Name</label>
                    <input
                      type="text"
                      placeholder=""
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">Category</label>
                    <select className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-2 text-base focus:ring-0 focus:border-[#7a0009] transition-all appearance-none">
                      <option>Select a category</option>
                      <option>Fine Art & Paintings</option>
                      <option>Antique Furniture</option>
                      <option>Contemporary Sculpture</option>
                      <option>Rare Timepieces</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">Description</label>
                    <textarea
                      rows="4"
                      placeholder="product details"
                      className="border-1 border-[#8d706d]/30 bg-transparent px-3 py-3 text-base focus:ring-0 focus:border-[#7a0009] transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
                 </form>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-['Newsreader'] text-3xl italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">2</span>
                <h2 className="font-['Newsreader'] text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Auction Detail</h2>
              </div>
              <form action="">
                <div className="space-y-8 grid grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">Start Time</label>
                    <input
                      type="datetime-local"
                      placeholder=""
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">End Time</label>
                    <input 
                    type="datetime-local"
                    className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"/>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">Starting Price (Bath)</label>
                    <input 
                    type="text"
                    className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"/>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">Reserve Price (Bath)</label>
                    <input 
                    type="text"
                    className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"/>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-dark-red mb-2 font-bold">Minimum Increment (Bath)</label>
                    <input 
                    type="text"
                    className="border-0 border-b border-[#8d706d]/30 bg-transparent px-2 py-1 font-['Newsreader'] text-lg focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"/>
                  </div>
                </div>
                 </form>
            </section>
          </div>


        {/* Right Side: Media & Context */}
        <div className="lg:col-span-5 space-y-12">
          <div className="bg-white p-8 border border-[#e1bebb]/15 rounded-sm">
            <h3 className="font-['Newsreader'] text-xl mb-8 bg-gradient-to-r from-dark-red to-secondary bg-clip-text text-transparent">Product Images</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="col-span-3 aspect-[4/3] bg-[#e4e2df] rounded-sm overflow-hidden relative group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTbHLzSQN0wNZNCjfvzk9F9icOlk4suiGOW6VUMYx3iOPVjtXAOuUOjcqbBYnjtVhpPRa5sJ27a8_QMO2_awN-hk4XmoNna6KratLkYo3z6JsyTGz2LDdcpVH4TdKDklr8CcYLgMC2m5Ja7HKu4zwOAmqDa4-5pDB5TNk2G5YTvn3bkcZzw8MqwZBHrIl5NRKHZ7o9kIav_lbkHSfVB1XPaV4sBiRXgCOUXepJz69wdMsJRoMTlHxLKcZRfFU55IX8pgmBs4KITVgB"
                  alt="Main piece preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#7a0009]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <button className="material-symbols-outlined text-white text-3xl"><CrossIcon className="w-15"/></button>
                </div>
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-base-200 rounded-sm flex items-center justify-center border-2 border-dashed border-[#e1bebb]/40">
                  <span className="material-symbols-outlined text-[#59413e]/30"><PhotoIcon className="w-10"/></span>
                </div>
              ))}
            </div>
            <div className="border-2 border-dashed border-[#e1bebb]/40 py-12 px-6 flex flex-col items-center text-center cursor-pointer hover:bg-[#efeeeb] transition-colors">
              <span className="material-symbols-outlined text-3xl text-[#7a0009] mb-4">cloud_upload</span>
              <p className="text-sm font-semibold mb-1">Drag & drop files here</p>
              <p className="text-xs text-[#59413e]">PNG, JPG or JPEG (max. 10MB)</p>
            </div>
          </div>
        </div>
    </div>

     <div className="flex justify-center items-center gap-6 pt-30">
              <button className="bg-gradient-to-br from-dark-red to-red-600 text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:shadow-lg hover:shadow-[#7a0009]/20 transition-all active:scale-[0.98]">
                Create New Product
              </button>
              <button className="text-white bg-gradient-to-r from-primary to-secondary text-on-primary w-30 py-4 rounded-l hover:text-[#7a0009] transition-colors text-sm font-bold tracking-widest uppercase decoration-[#e1bebb]/30">
                Save Draft
              </button>
            </div>
      </main >

  {/* Footer */ }
  <footer footer className = "w-full border-t border-[#e1bebb]/15 bg-[#efeeeb]" >
    <div className="max-w-[1920px] mx-auto px-6 md:px-24 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
        <div className="col-span-1">
          <span className="font-['Newsreader'] text-xl mb-4 block">The Digital Curator</span>
          <p className="text-sm tracking-wide text-[#59413e]">Curating excellence for the digital age.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h5 className="font-semibold uppercase tracking-widest text-xs">Marketplace</h5>
          <a className="text-[#59413e] hover:underline decoration-[#9e1b1b] underline-offset-4" href="#">Ongoing Auctions</a>
          <a className="text-[#59413e] hover:underline decoration-[#9e1b1b] underline-offset-4" href="#">Recent Sales</a>
          <a className="font-bold text-[#7a0009]" href="#">Consign</a>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h5 className="font-semibold uppercase tracking-widest text-xs">Company</h5>
          <a className="text-[#59413e] hover:underline decoration-[#9e1b1b] underline-offset-4" href="#">About Us</a>
          <a className="text-[#59413e] hover:underline decoration-[#9e1b1b] underline-offset-4" href="#">Careers</a>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h5 className="font-semibold uppercase tracking-widest text-xs">Legal</h5>
          <a className="text-[#59413e] hover:underline decoration-[#9e1b1b] underline-offset-4" href="#">Privacy Policy</a>
          <a className="text-[#59413e] hover:underline decoration-[#9e1b1b] underline-offset-4" href="#">Terms of Service</a>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-[#e1bebb]/10 text-center text-xs tracking-widest text-[#59413e]">
        © 2024 The Digital Curator. All rights reserved.
      </div>
    </div>
      </footer >
    </div >
  );
};

export default AddProduct;
