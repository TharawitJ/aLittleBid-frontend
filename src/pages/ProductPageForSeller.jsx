import React from 'react';

const ProductPageForSeller = () => {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/70 backdrop-blur-xl border-b border-stone-200/20">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-['Noto_Serif'] italic text-[#570000]">A Little Bid</div>
          <div className="hidden md:flex items-center space-x-8">
            {['Auctions', 'Artists', 'Insights'].map(link => (
              <a key={link} href="#" className="text-stone-600 hover:text-[#570000] transition-colors text-[10.5px] font-semibold uppercase tracking-widest">{link}</a>
            ))}
          </div>
          <div className="flex items-center space-x-2 bg-[#800000] text-white px-3 py-1 rounded-full">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-8 text-left">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10.5px] font-semibold uppercase tracking-widest text-[#570000]">Consignment Manager</span>
              <h1 className="text-4xl md:text-5xl font-['Noto_Serif'] font-bold text-[#1c1b1b]">Manage Products</h1>
            </div>
            <div className="relative w-full md:w-96">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-400">search</span>
              <input type="text" placeholder="Search your inventory..." className="w-full bg-[#ebe7e7] border-none border-b border-stone-200 focus:ring-0 focus:border-[#570000] transition-all px-12 py-3 text-sm rounded-lg outline-none" />
            </div>
          </div>
        </header>

        <section className="mb-16">
          <button className="w-full py-8 bg-[#f6f3f2] border border-dashed border-[#e2bfb9] hover:border-[#570000] transition-colors flex items-center justify-center gap-4 rounded-xl group">
            <div className="w-10 h-10 rounded-full bg-[#e4e2e2] flex items-center justify-center text-[#5e5e5e] group-hover:bg-[#570000] group-hover:text-white transition-all">
              <span className="material-symbols-outlined">add</span>
            </div>
            <span className="font-['Noto_Serif'] text-xl text-[#5e5e5e] group-hover:text-[#570000] transition-colors">Add New Product</span>
          </button>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8 border-b border-stone-200/50 pb-4">
            <h2 className="text-2xl font-['Noto_Serif'] italic">All Products</h2>
            <div className="flex items-center gap-4">
              <span className="text-[10.5px] font-semibold uppercase tracking-widest text-stone-400">Sort By: Recent</span>
              <span className="material-symbols-outlined text-stone-400">filter_list</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { lot: '442', title: 'Patek Philippe Calatrava', price: '€12,400', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdxrqJN2t1bd6Rkxi_lzPrJzPAUWpzYoHFNT-EjHWzcO2Ukr0oF0lw2zBuAFUQOhZD3_X77G7iJmrwi9yuhDQtfA2b816c3pU4jKQCqFpddsims40o98YxDfZICnN3u_p770tcYlK8Pfdmzya9RVdRhLWbrRojPym1caLUl0L_ZqUSi-xrae0Bvk0susU8SijSdi65QNPH9K3FvKOtaFzuuUvcQJ9WVFuV68pSIs0o0VKDcZd3R-j13zN2iVJxTTQg2d7LF-hGiMHN' },
              { lot: '819', title: 'Off-White x Nike Jordan 1', price: '€800', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIcW9TQsiL7x23qWX0pFdjLAZd360lAPWXS1VMtKayoc-7SFTdnZ7vqIrgUtSP7iqCO-fG733PrPGnC2dgQqUbHSRfh9tBADdFtT6InsklFGz0axK1d8PH00iQPPZ7bW-yBCR0buFDLjudh5Zg5wfTGJldH63IhemhSsEqQXZJodTwrE4H_dNXIzyFo8renePo-PkfgZyP-Pq_H9TUwzTmKrwPGyDMHInihttlaV3CvILGZP9qSepEkpHZdwLsSBuzxTt3LkhjNzdF' },
              { lot: '105', title: 'Arredoluce Monza Lamp', price: '€2,150', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf5TDZ08fb64lCv5lumvLHm4X6hEn4WpTxorSUcJBpwhK7csS2LYvi5A1HAGKPGWWzg_FSMGGnLoNgZG6zNrbHZWxpjwnvPoJOqwn7jd-kHRQHcyK40Q9cZu_0iVVtU8MEJcZGH2enK4679SBte4aOOsC6jMiToKo9U66hIbkOJHQcDOcyhNPJ8-A2UC6bkmtkS8R_zxBzufirnFnpJEmPFNBdo3Vyp7hLBflNKXFQeDk1ZsbirEW5KBlwYvY2YVROllHSex_K8CIv' }
            ].map((item) => (
              <div key={item.lot} className="group text-left">
                <div className="relative overflow-hidden rounded-md mb-4 bg-[#f6f3f2] aspect-[4/5]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md p-4 rounded-sm flex justify-between items-center">
                    <div>
                      <p className="text-[10.5px] font-semibold uppercase tracking-widest text-stone-500">Lot #{item.lot}</p>
                      <p className="text-[#570000] font-bold">{item.price}</p>
                    </div>
                    <button className="bg-[#570000] text-white px-4 py-2 text-[10.5px] font-semibold uppercase tracking-widest hover:bg-[#800000] transition-colors">Join</button>
                  </div>
                </div>
                <h3 className="font-['Noto_Serif'] text-lg group-hover:text-[#570000] transition-colors">{item.title}</h3>
                <p className="text-sm text-stone-500 font-light mt-1">Provenance: Private Collection</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPageForSeller;
