import React from 'react';

const ProductDetailBid = () => {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] antialiased min-h-screen">
      <main className="pt-12 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-7 space-y-16">
            <div className="relative group">
              <div className="aspect-[4/5] md:aspect-[3/2] overflow-hidden rounded-lg bg-[#f6f3f2]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXC3ayMh7zrKD4kqAbHUj-vUngJsvTQ2dp8oLwCCVbXrTiorzfjaR-HHips2w2cvWQ2WkPjbUNoTDj9gZZMPiFTACd_zrU-npaN2pPTJnFAPTlU-MFL_ZMPOWcvX6G_0of4QDmZEyOeAY5al-5bP3zdaynf2uhl44KrmkvDq-kzXKiAXkutSME5UJQ1HSEARIfHFzH9pnw4oC91Fm96gjfWj4UXtjvHO4B_mFpFFjeydwFzX8ggyeueCdLuY3X37ep5QZr5-w-gCil" 
                  alt="Artwork" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-6 right-6 bg-white/70 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors">
                <span className="material-symbols-outlined">fullscreen</span>
              </button>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="font-['Manrope'] uppercase tracking-widest text-[10px] text-[#570000] font-bold">Lot 42 • Impressionist Evening</span>
                <h1 className="text-5xl md:text-6xl font-['Noto_Serif'] text-[#1c1b1b] leading-tight">Twilight over the Grand Canal</h1>
                <p className="text-xl font-['Noto_Serif'] italic text-[#5e5e5e]">Attributed to Francesco Guardi (1712–1793)</p>
              </div>

              <div className="max-w-none text-lg text-[#5a413d] leading-relaxed font-light space-y-4">
                <p>This masterful oil on canvas captures the ethereal atmosphere of Venice at the cusp of twilight. The artist demonstrates an extraordinary command of light, utilizing delicate glazes to render the shimmering reflections upon the canal's surface.</p>
              </div>

              <div className="space-y-0 divide-y divide-[#e2bfb9]/30 border-t border-b border-[#e2bfb9]/30">
                {['Provenance', 'Exhibition History', 'Shipping Information'].map((title) => (
                  <details key={title} className="group py-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="font-['Manrope'] uppercase tracking-widest text-xs font-semibold">{title}</span>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="mt-4 text-sm text-[#5a413d] font-light">
                      Details about {title} would go here, maintaining the elegant editorial style.
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bidding Panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#f6f3f2] p-8 md:p-10 rounded-lg border border-[#e2bfb9]/10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <p className="font-['Manrope'] text-[10px] text-stone-500 mb-2 uppercase tracking-widest">Current Bid</p>
                    <p className="text-4xl font-['Noto_Serif'] text-[#570000] font-bold">€48,500</p>
                    <p className="text-xs text-[#5e5e5e] mt-1">Approx. $52,400 USD</p>
                  </div>
                  <div className="text-right">
                    <p className="font-['Manrope'] text-[10px] text-stone-500 mb-2 uppercase tracking-widest">Time Left</p>
                    <p className="text-2xl font-['Noto_Serif'] text-[#1c1b1b]">2d : 14h : 08m</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-['Manrope'] uppercase tracking-widest text-[10px] text-stone-500">Your Bid</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-stone-400">€</span>
                      <input type="number" placeholder="49,000" className="w-full bg-[#ebe7e7] border-none rounded-sm py-4 pl-8 pr-4 focus:ring-1 focus:ring-[#570000] focus:bg-white transition-all outline-none" />
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#570000] to-[#800000] text-white font-['Manrope'] uppercase tracking-widest py-4 rounded-sm shadow-lg hover:scale-[1.01] active:scale-95 transition-all text-xs font-bold">
                    Place Bid
                  </button>
                </div>
              </div>

              <div className="bg-stone-900 text-stone-50 p-8 rounded-lg relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <h3 className="font-['Noto_Serif'] text-xl text-left">The Curator's Note</h3>
                  <p className="text-xs text-stone-400 font-light leading-relaxed italic text-left">
                    "This specific canvas represents the pinnacle of 18th-century veduta painting. The 'ghostly' architecture is a signature mark of Guardi's later style."
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-700">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI9pSLzM2C7nGW835doACIRA-VV2iSSbtmcyioc8l2PFHVZbOgPD8AU6e1rUgyTzQNNFmR0LyUqDyfi8DSQjf0Nsh4xGxSg_yzBXa5qQPPyWl5MO-9QOufbyZ8HNMh77Kyu3yfUONSmw-jkrKydj4Pxr8uaode4P22rnLg5KnHe-9pakz6ndCVwAdgmqT_t02R-kaPe-qQwUl2zkokkDHwDDUaBaZiam4feZxuNbHupTPVsui7CU1XJOf9FA4Ip7JZiyGwD6U1FVYe" alt="Curator" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold font-['Manrope'] uppercase tracking-widest">Julian Vane</p>
                      <p className="text-[9px] text-stone-500 uppercase tracking-widest">Head of Old Masters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailBid;
