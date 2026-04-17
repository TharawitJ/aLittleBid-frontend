import React from 'react';

const ProductPage = () => {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] min-h-screen">
      <main className="pt-12 pb-24 px-12 max-w-screen-2xl mx-auto">
        <section className="mb-20 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#800000] mb-4 block">Curated Selections</span>
          <div className="max-w-3xl mx-auto relative group">
            <input type="text" placeholder="Search by category or product details" className="w-full h-16 pl-16 pr-8 bg-[#f6f3f2] border-none rounded-full focus:ring-2 focus:ring-[#570000]/20 text-lg shadow-sm outline-none" />
          </div>
        </section>

        <div className="flex justify-between items-end mb-12 text-left">
          <div>
            <h2 className="text-4xl font-['Noto_Serif'] text-red">All Products</h2>
            <p className="mt-2 text-primary">Showing {} curated auction lots</p>
          </div>
           <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1 bg-dark-red text-white tracking-widest ">Categories</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-white text-dark-red rounded-box z-1 w-40 p-2 shadow-sm">
                  <li><a>Electronics</a></li>
                  <li><a>Toys</a></li>
                  <li><a>Collectibles</a></li>
                  <li><a>Home and living</a></li>
                </ul>
              </div>
        </div>
        <div className='text-l font-semibold uppercase tracking-widest text-stone-400 mb-1 block'>Category name</div>

           {/* Ongoing Auction Grid */}
        <section className="mt-10">
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group cursor-pointer w-full">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={`https://lh3.googleusercontent.com/aida-public/${['AB6AXuCO9AWtkAINSLA72bX2dbMbDbgFW5wrqju1EpVMYkbRAjEZwLTpBnE0DxwvvzYer7FtwTkQGDWqwIa5HkPLxCXmwYwGCNXO_MJNHIrcZAV2nGKYaiWS5NDAyNabNJAqt_mRJ3JwqY6g00neUNvkRIFt2Kb-jytiVe-LgEbp-vqUKgDQ0CE652O2-K0EUWdA2PyOwFLaM3tyK6ZU0y9aRKo4VyKhBn4seTsIVgK1ND2pOTg7wF77ktlAG69x9lQn0ZGSvKBRjWx0mnGC', 'AB6AXuCMh25iOqUwSwRvrY0bB3Lbz2vPLbrztBVzZZbWNlc05jRe0mqnCYdjc6JQsNqnvAQJ0Ipkk7VKI9qdaMufhJAaVBZlxBy-K3C8GaXta8XNkmfwWO8-6N980zOGa5y_FrV8UbbQYIu4IL8yfiBetco4uMqB0NJ4MCrsbBX49hQ1i5zPCXwUBcC7KPdeYID_igHMkdyscISrmsd4RbUBJAKnudy1YzCsSHcRJLGOBxNe_xd41b-PZPCyGNWunH5y-sqTek1eRXIBEWn3', 'AB6AXuBg_PHFy-u6WfGNxbTYtnconQEUfF7BFKVBxH85FBlYslqidVU_-cKY-Zq9Lyk61rVOI8Rixk_RByTHcnTGSyiulINB8WaWO6YGf7qOeVvRcyTFyeEvpscVxF_PQXPYdDM2Kn7vBHX2KqZiAtfMJwd8nC0HkKP15QHu8J603bnjF4aEn04owuygXG3Re3AKWbIJs40F0-rVFSFN33x-keOdnwbszrmkNyIbPmA52jtW7L-9EI358mq1GsY2GjqUDtTbyasDcjqm0E4H', 'AB6AXuBkM_xvCsQBWnneKUhMb3YzXXlWW6A7pzd7qhsi_6mCMb2EzEVJpblkDXlHVYOmmkELTSOdBgs7WnE6HqkYeoO70BmWRpCUVmeWqG1wypxe8l560CaamsXpMMy44ZAHyoN_fLw2TCPFfPpZzzQr7vvU-20BVUXY6zejdXt5Txz5xMtlPGTQI84T9DQbdsLbNhkW67o1JQyCsmODwbGQ_NViH7DJjnFBdGzxnH4-8pzqNUETaq_RFaPU9s_qMJc9nAqGocV32VOJanJ6', 'AB6AXuBaZC6l6RE_xcnT4VZKCVemhPHDcp0D4Z5Cjvp8u5Cyqam7iyAfoCUjdzBalbq0kNTOqHHdlhTLSOpXIwcxlahtwF0Tf47NC-SkH4Vn1XjTP9kC05gNarMiLM7xrUiAUycfpuNrm4CB1j1MhSyALJ8zNJq7DuL4egjRR8dgA-rIYHFieDsu2DWNUpVPUa0JhGYVf7utPe1EzfgHxtH5lg9eMyvs0uvag3yuX93UN_SOhdBfg0KCENdqN5DUd023RpHmHyrJrasIGwpA', 'AB6AXuDuchTyWnD8u6dGMe-q2jXqEknroJCWFn9UROKJsmr1yxSDXI8JJfgyWRadpjoTpsL9hhI2wW8EGGJTY9xastGppdLiB_CFYF4nf9gDczhg8mDgW2KCtGVbfUHffus-Vkdkbrhzvgiq5UlBX74MBXTww7flTNz8wn-dthfi0T63Mm22VtlZsa3Yd5Kewl1J5bGKYWZI0a2bg7BHqo03rZJhIO6kJLMqynDBTGKgKVJUiLFeSvuqBnMARWUD11m9MUGg0GMq3jIOAOgW'][i - 1]}`}
                    alt="Lot"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                    <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">Live Now</span>
                  </div>
                  <div className='bg-base-300 rounded-b-3xl px-5 py-3'>
                    <div className="flex justify-between items-start">
                      <div className='flex flex-col'>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1 block">Category</span>
                        <h3 className="font-['Noto_Serif'] text-xl">Masterpiece Lot {i}</h3>
                      </div>
                      <div className="text-center">
                        <span className="font-headline uppercase text-[10px] text-stone-400">Current Bid </span>
                        <p className="font-['Noto_Serif'] text-lg text-red text-xl">${(1000 * i).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-stone-500">
                        <span className="material-symbols-outlined text-[16px] text-primary">Time Over: 40m 15s</span>
                      </div>
                      <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
