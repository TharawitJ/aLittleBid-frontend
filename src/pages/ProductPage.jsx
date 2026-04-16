import React from 'react';

const ProductPage = () => {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] min-h-screen">
      <main className="pt-12 pb-24 px-12 max-w-screen-2xl mx-auto">
        <section className="mb-20 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#800000] mb-4 block">Curated Selections</span>
          {/* <h1 className="text-5xl md:text-6xl mb-8 leading-tight font-['Noto_Serif']">Masterpieces of the <br/><span className="italic">Modern Era.</span></h1> */}
          <div className="max-w-3xl mx-auto relative group">
            <input type="text" placeholder="Search by category or product details" className="w-full h-16 pl-16 pr-8 bg-[#f6f3f2] border-none rounded-full focus:ring-2 focus:ring-[#570000]/20 text-lg shadow-sm outline-none" />
            {/* <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-[#800000] text-3xl">search</span> */}
          </div>
        </section>

        <div className="flex justify-between items-end mb-12 text-left">
          <div>
            <h2 className="text-4xl font-['Noto_Serif'] text-red">All Products</h2>
            <p className="mt-2 text-primary">Showing 428 curated auction lots</p>
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
                  {/* <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center rounded-xl bg-white/70 backdrop-blur-[20px]">
                    <div>
                      <h4 className="font-headline text-lg">Patek Heritage '52</h4>
                      <p className="text-red text-sm font-semibold">$18,200</p>
                      <span className='font-label text-primary text-sm'>Time over: 59:18</span>
                    </div>
                    <button className="btn material-symbols-outlined text-primary hover:bg-gradient-to-r from-dark-red to-red hover:text-on-primary">JOIN</button>
                  </div> */}
                  <div className='bg-base-300 rounded-b-3xl px-5 py-3'>
                    <div className="flex justify-between items-start">
                      <div className='flex flex-col'>
                        {/* <p className="font-['Manrope'] text-[10px] text-stone-500 uppercase tracking-widest">Collection {i}</p> */}
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1 block">Category</span>
                        <h3 className="font-['Noto_Serif'] text-xl">Masterpiece Lot {i}</h3>
                        {/* <div>
                        <span className="font-['Noto_Serif'] text-[14px] text-red font-semibold">Current Bid </span>
                        <p className="font-['Noto_Serif'] text-lg text-red text-xl">${(1000 * i).toLocaleString()}</p>
                        </div> */}
                      </div>
                      <div className="text-center">
                        <span className="font-headline uppercase text-[10px] text-stone-400">Current Bid </span>
                        <p className="font-['Noto_Serif'] text-lg text-red text-xl">${(1000 * i).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-stone-500">
                        <span className="material-symbols-outlined text-[16px] text-primary">Time Over: 40m 15s</span>
                        {/* <span className="font-['Manrope'] text-[11px]"></span> */}
                      </div>
                      <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Asymmetric Product Grid */}
        {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 text-left">
          {[
            { cat: 'Horology', title: 'Patek Philippe Nautilus', price: '$124,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAab-LYdPJSgC7hQNOR9TGu6dsPEbTfVW-E-3uaIrFj7yYPs6_-ma7InV3JqnW86lz8ErR7ce1qwfqxJIHRVRI7Pa05roiqhNjr1r6mqsTL2t2HIxrjBS1fGtSaXWyTmNIE7e6zz-eQH1Be1IPnZuYG0M6wdTURCMZw-tXOKkfIzHHLoiqeimjQBaAaqOVtnZQns2kfxqBv6bnIDha9D0tfqMQCVYp0rmXvHzGfOKPdH_cxY_6_lVpzYpIJ8Zkh2npJcWs45RRDI3yA' },
            { cat: 'Jewelry', title: 'Emerald Teardrop Earrings', price: '$45,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuAvm231iZr8vdySwn-kOte7I8FAZWRf2jZRJkTU8vDYgXT3E9mZGbYFV9_CAgoW6N6XLV15_OHLq06GyCMtN-3m6Jv2skc2A0d7g0wRFi0ITn8-TEMrEsrZxdNb-sEaizWSQ4T5g7t5BLzDsrqzZkuSWOKPcEA20CeRV-lD33sBnIgp8cUssEmNGamSEKA_et0tRwgUINpvfweDHNgvZ5Ztmhlx1McOG-JLoqD3IckFZ4I3OJ7oc5fw8PVy6tNSGkZWDRdUuYwaLa', shift: true },
            { cat: 'Design', title: 'Brutalist Alabaster Vessel', price: '$8,200', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgMOZMmzVNrDz1n4_Y5rdr1efWWp2BraAsv5xYqoW7kg9mWdx_UwxsYkxHwgVqs4I3pIKE-2_7BkqdrNrRjum_NLj_mBIwtTlLt943SCKE2yD606kQOZHLNcnnSCt3q7rrwBcddrnFZEDj0kxiGHqkwn7nx1qNwgq3JLBx-Ys3SEzv0--LZq5t_oOOl9PXcuzAtbueKCwW12TH7332Xig3N-MuWUxtdFnFC5p44AuyQHijUsyH7Zr3uqJFBbtXpO9N82ftUSQr2fO' }
          ].map((product, i) => (
            <div key={i} className={`flex flex-col gap-6 ${product.shift ? 'md:mt-12' : ''}`}>
              <div className="relative overflow-hidden group aspect-[4/5] bg-[#f0edec]">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold uppercase">Lot #{(812 + i)}</span>
                  <span className="material-symbols-outlined text-[#570000]">favorite</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1 block">{product.cat}</span>
                <h3 className="text-xl mb-4 font-['Noto_Serif']">{product.title}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest">Opening Bid</p>
                    <p className="text-lg font-bold text-[#800000]">{product.price}</p>
                  </div>
                  <button className="bg-[#570000] text-white text-[10px] font-semibold uppercase tracking-widest px-8 py-3 hover:bg-[#800000] transition-colors">Join</button>
                </div>
              </div>
            </div>
          ))}
        </section> */}
      </main>
    </div>
  );
};

export default ProductPage;
