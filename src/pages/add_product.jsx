import React from 'react';

const AddProduct = () => {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-['Manrope'] selection:bg-[#9e1b1b] selection:text-white">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#fbf9f6]/80 backdrop-blur-md border-b border-[#f5f3f0]">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
          <div className="text-2xl font-['Newsreader'] italic font-medium">The Digital Curator</div>
          <div className="hidden md:flex items-center gap-x-8 font-['Newsreader'] font-medium tracking-tight">
            <a className="text-[#59413e] hover:text-[#7a0009] transition-colors duration-300" href="#">Home</a>
            <a className="text-[#59413e] hover:text-[#7a0009] transition-colors duration-300" href="#">Auctions</a>
            <a className="text-[#59413e] hover:text-[#7a0009] transition-colors duration-300" href="#">Products</a>
            <a className="text-[#59413e] hover:text-[#7a0009] transition-colors duration-300" href="#">My orders</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-2xl text-[#59413e] cursor-pointer">account_circle</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-24 max-w-[1440px] mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-['Newsreader'] text-5xl md:text-6xl mb-4">Consign an Item</h1>
          <p className="text-[#59413e] text-lg">Provide detailed information about your masterpiece to begin the curation process.</p>
        </header>

        {/* Stepper */}
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
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Forms */}
          <div className="lg:col-span-7 space-y-24">
            {/* Section 1: Identification */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-['Newsreader'] text-3xl italic text-[#59413e]">1</span>
                <h2 className="font-['Newsreader'] text-2xl">Identification</h2>
              </div>
              <div className="space-y-12">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-[#59413e] mb-2 font-bold">Item Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Portrait of a Lady in Red" 
                    className="border-0 border-b border-[#8d706d]/30 bg-transparent px-0 py-3 font-['Newsreader'] text-xl italic focus:ring-0 focus:border-[#7a0009] transition-all placeholder:text-[#59413e]/30"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-[#59413e] mb-2 font-bold">Category</label>
                  <select className="border-0 border-b border-[#8d706d]/30 bg-transparent px-0 py-3 text-base focus:ring-0 focus:border-[#7a0009] transition-all appearance-none">
                    <option>Select a category</option>
                    <option>Fine Art & Paintings</option>
                    <option>Antique Furniture</option>
                    <option>Contemporary Sculpture</option>
                    <option>Rare Timepieces</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-[#59413e] mb-2 font-bold">Description</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell the story of this piece..." 
                    className="border-0 border-b border-[#8d706d]/30 bg-transparent px-0 py-3 text-base focus:ring-0 focus:border-[#7a0009] transition-all resize-none"
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Section 2: Reserve & Valuation */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-['Newsreader'] text-3xl italic text-[#59413e]">2</span>
                <h2 className="font-['Newsreader'] text-2xl">Reserve & Valuation</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-[#59413e] mb-2 font-bold">Estimated Value (USD)</label>
                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#59413e]/50">$</span>
                    <input 
                      type="number" 
                      placeholder="0.00" 
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent pl-6 pr-0 py-3 font-['Newsreader'] text-xl italic focus:ring-0 focus:border-[#7a0009] transition-all w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-[#59413e] mb-2 font-bold">Reserve Price (USD)</label>
                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#59413e]/50">$</span>
                    <input 
                      type="number" 
                      placeholder="0.00" 
                      className="border-0 border-b border-[#8d706d]/30 bg-transparent pl-6 pr-0 py-3 font-['Newsreader'] text-xl italic focus:ring-0 focus:border-[#7a0009] transition-all w-full"
                    />
                  </div>
                  <p className="mt-3 text-[10px] text-[#59413e]/60 uppercase tracking-tighter italic">The minimum price at which you are willing to sell.</p>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 pt-12">
              <button className="bg-gradient-to-br from-[#7a0009] to-[#9e1b1b] text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:shadow-lg hover:shadow-[#7a0009]/20 transition-all active:scale-[0.98]">
                Continue to Media
              </button>
              <button className="text-[#59413e] hover:text-[#7a0009] transition-colors text-sm font-bold tracking-widest uppercase underline underline-offset-8 decoration-[#e1bebb]/30">
                Save Draft
              </button>
            </div>
          </div>

          {/* Right Side: Media & Context */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-white p-8 border border-[#e1bebb]/15 rounded-sm">
              <h3 className="font-['Newsreader'] text-xl mb-8">Gallery & Media</h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="col-span-3 aspect-[4/3] bg-[#e4e2df] rounded-sm overflow-hidden relative group">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTbHLzSQN0wNZNCjfvzk9F9icOlk4suiGOW6VUMYx3iOPVjtXAOuUOjcqbBYnjtVhpPRa5sJ27a8_QMO2_awN-hk4XmoNna6KratLkYo3z6JsyTGz2LDdcpVH4TdKDklr8CcYLgMC2m5Ja7HKu4zwOAmqDa4-5pDB5TNk2G5YTvn3bkcZzw8MqwZBHrIl5NRKHZ7o9kIav_lbkHSfVB1XPaV4sBiRXgCOUXepJz69wdMsJRoMTlHxLKcZRfFU55IX8pgmBs4KITVgB" 
                    alt="Main piece preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#7a0009]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined text-white text-3xl">edit</span>
                  </div>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-[#eae8e5] rounded-sm flex items-center justify-center border-2 border-dashed border-[#e1bebb]/40">
                    <span className="material-symbols-outlined text-[#59413e]/30">add</span>
                  </div>
                ))}
              </div>
              <div className="border-2 border-dashed border-[#e1bebb]/40 py-12 px-6 flex flex-col items-center text-center cursor-pointer hover:bg-[#efeeeb] transition-colors">
                <span className="material-symbols-outlined text-3xl text-[#7a0009] mb-4">cloud_upload</span>
                <p className="text-sm font-semibold mb-1">Drag & drop files here</p>
                <p className="text-xs text-[#59413e]">PNG, JPG or JPEG (max. 10MB)</p>
              </div>
            </div>

            {/* Curator's Tip */}
            <div className="bg-[#7a0009]/5 p-8 border-l-4 border-[#7a0009]">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#7a0009] fill-1">lightbulb</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a0009] mb-3">Curator's Tip</h4>
                  <p className="text-sm text-[#59413e] leading-relaxed italic">
                    "High-resolution photography taken in natural, diffuse light increases buyer confidence by 42%. Ensure your primary shot captures the full dimension of the frame or object."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#e1bebb]/15 bg-[#efeeeb]">
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
      </footer>
    </div>
  );
};

export default AddProduct;
