import React from 'react';

const AuctionPage = () => {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] selection:bg-[#570000]/20 min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 border-b-[0.5px] border-stone-200/50 bg-stone-50/70 backdrop-blur-xl">
        <div className="flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto">
          <div className="text-2xl font-['Noto_Serif'] italic text-[#570000]">The Digital Curator</div>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="font-['Noto_Serif'] uppercase tracking-widest text-[11px] text-[#570000] border-b border-[#570000] pb-1">Current Auctions</a>
            <a href="#" className="font-['Noto_Serif'] uppercase tracking-widest text-[11px] text-stone-600 hover:text-stone-900 transition-colors">Private Sales</a>
            <a href="#" className="font-['Noto_Serif'] uppercase tracking-widest text-[11px] text-stone-600 hover:text-stone-900 transition-colors">Artists</a>
            <a href="#" className="font-['Noto_Serif'] uppercase tracking-widest text-[11px] text-stone-600 hover:text-stone-900 transition-colors">Provenance</a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-stone-600 hover:opacity-70 transition-opacity">favorite</button>
            <button className="material-symbols-outlined text-stone-600 hover:opacity-70 transition-opacity">person</button>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-12 max-w-[1920px] mx-auto">
        {/* Hero Section & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Main Hero */}
          <div className="lg:col-span-8 relative group overflow-hidden rounded-lg">
            <div className="aspect-[16/9] w-full bg-[#f0edec] overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvgXMAB9rXZppdIyVFwnbyl0aZ1xuGdRyWrsI2Hi7htMsLJYlQfR592QAxC86WPGVIGhmZhNC8nPb7iqAx1b-eBsIhGfcsO94JMDxObkKctdlUfobrLqW0Kq4W-1pKvFQfQvzVDGvHs4MXapVj-uKodykXRnzDcygV6n9QyyhVsdVIDLi292kyP8F_WqdyIGCG_N__aZkNkfS7VM9pU60qM_SKUzdbdMmh_I08MZe1LeMt_9MkPHdGIRx5UPgClsTvSAOMTF1THQKv" 
                alt="Luxury watch detail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Editorial Glass Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-[#fcf9f8]/70 backdrop-blur-[24px] flex flex-col md:flex-row justify-between items-end md:items-center">
              <div className="max-w-xl text-left">
                <span className="font-['Manrope'] text-[10px] uppercase tracking-[0.2em] text-[#570000] mb-2 block font-semibold">Premium Lot 041</span>
                <h1 className="font-['Noto_Serif'] text-5xl md:text-6xl text-[#1c1b1b] mb-4 leading-tight">Golden Model <span className="italic">Signature</span></h1>
                <p className="font-['Manrope'] text-stone-600 text-sm max-w-md">An unprecedented horological masterpiece featuring a hand-finished rose gold escapement and perpetual calendar complications.</p>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col items-end">
                <div className="flex gap-4 mb-6">
                  {['Hrs', 'Min', 'Sec'].map((label, i) => (
                    <div key={label} className="text-center">
                      <span className="block font-['Noto_Serif'] text-2xl">0{8+i}</span>
                      <span className="font-['Manrope'] text-[9px] uppercase tracking-widest text-stone-500">{label}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-[#570000] to-[#800000] text-white px-10 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                  Join Auction
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <div className="flex justify-between items-baseline mb-2">
              <h2 className="font-['Noto_Serif'] text-2xl italic">The Horology Suite</h2>
              <a href="#" className="font-['Manrope'] text-[10px] uppercase tracking-widest text-[#570000] underline underline-offset-4">View All</a>
            </div>
            
            {[
              { lot: '042', title: 'Vantage Chronograph', price: '$42,000 USD', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDonsnFGUbzhK6netznq2xrC2cAQAzzULDg7AgWYtuXu6RawJexQNX4zgDNZPir5Zb70OtOHrXHPqhtJli-5vV3kipK6yiAtPpFdHzpPtq6A3SECT40soSsnDvNM2hMu3Uqaqp_zQ0VEJx9CNh8DKqSJ8AHosUVOTmJ4slyTuaQy0odGHmTnC02sEAptnDNIPTDQsoYykyr-UE8rJwQHSHQxwErO0_Z5BsqjcrAsqaI-om76ojt3WUpJq4d2xCkwJoWH-vFW58SPmd2' },
              { lot: '043', title: 'Lunar Phase Gold', price: '$68,500 USD', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEVYIk74IIAxcbXv4Bi4GNasGDX5MukvxavPrwW-U0o-ufYUvMR1f437KQDK1boxeVc3WqRojls29ipgiVEFAFhmrUdWLgtaXCKmgyJNKUWCqKRBJ72r_BfxSUyw-YtZ_Na0e5se2KekiMWJmJvEU5OMOilRb9IIopK3haQclK2a5w0gmYNZQ73LV5fvChMGqV5s0CWPGMw3DaA-uz83C2cOJCwWJZHNcmNf4NRRfhBkSGQCIGTwKzcmyEw0rNv_JCRS57NTVKs-DT' },
              { lot: '044', title: 'Obsidian Stealth', price: '$15,200 USD', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkVSLZHLjU2K_H-vz-BPlvfNWqfLs9Whg_3M7s3je0_qI7aOet8cac-tjnETMwwaBaPuV3EN2XlAFVobOD9oOA7ETtuvTkHpbumZAXs2q61n6BeQWQMU5lR8Y52dzT-UzPhSBTr021xtfrNOUIEhSL6XasEXuIHFD6v1o5VbWAQigLFRhPccpmf5SVzymCoZoxsNGuyDw5J1SuYK3pC4IzZMnEhWpJhpeK08Jvf2n_OVFPHy5cghpfFwDCiMzU7cCbYSA0mKHqHfpf' }
            ].map((item) => (
              <div key={item.lot} className="flex gap-4 p-4 bg-[#f6f3f2] rounded-lg group cursor-pointer hover:bg-[#e5e2e1] transition-colors duration-300">
                <div className="w-24 h-24 overflow-hidden rounded shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-['Manrope'] text-[9px] uppercase tracking-widest text-stone-400">Lot {item.lot}</span>
                  <h3 className="font-['Noto_Serif'] text-lg leading-tight mb-1">{item.title}</h3>
                  <p className="font-['Manrope'] text-xs text-[#570000] font-bold italic">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Auction Grid */}
        <section className="mt-20">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-['Noto_Serif'] text-4xl">Ongoing Auction</h2>
            <div className="h-[1px] flex-grow bg-stone-200"></div>
            <div className="flex gap-2">
              <button className="p-2 border border-stone-200 rounded-full hover:bg-stone-50 transition-colors">
                <span className="material-symbols-outlined text-sm">tune</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group text-left">
                <div className="relative overflow-hidden mb-4 aspect-[4/5] rounded-sm bg-[#f0edec]">
                  <img 
                    src={`https://lh3.googleusercontent.com/aida-public/${['AB6AXuCO9AWtkAINSLA72bX2dbMbDbgFW5wrqju1EpVMYkbRAjEZwLTpBnE0DxwvvzYer7FtwTkQGDWqwIa5HkPLxCXmwYwGCNXO_MJNHIrcZAV2nGKYaiWS5NDAyNabNJAqt_mRJ3JwqY6g00neUNvkRIFt2Kb-jytiVe-LgEbp-vqUKgDQ0CE652O2-K0EUWdA2PyOwFLaM3tyK6ZU0y9aRKo4VyKhBn4seTsIVgK1ND2pOTg7wF77ktlAG69x9lQn0ZGSvKBRjWx0mnGC', 'AB6AXuCMh25iOqUwSwRvrY0bB3Lbz2vPLbrztBVzZZbWNlc05jRe0mqnCYdjc6JQsNqnvAQJ0Ipkk7VKI9qdaMufhJAaVBZlxBy-K3C8GaXta8XNkmfwWO8-6N980zOGa5y_FrV8UbbQYIu4IL8yfiBetco4uMqB0NJ4MCrsbBX49hQ1i5zPCXwUBcC7KPdeYID_igHMkdyscISrmsd4RbUBJAKnudy1YzCsSHcRJLGOBxNe_xd41b-PZPCyGNWunH5y-sqTek1eRXIBEWn3', 'AB6AXuBg_PHFy-u6WfGNxbTYtnconQEUfF7BFKVBxH85FBlYslqidVU_-cKY-Zq9Lyk61rVOI8Rixk_RByTHcnTGSyiulINB8WaWO6YGf7qOeVvRcyTFyeEvpscVxF_PQXPYdDM2Kn7vBHX2KqZiAtfMJwd8nC0HkKP15QHu8J603bnjF4aEn04owuygXG3Re3AKWbIJs40F0-rVFSFN33x-keOdnwbszrmkNyIbPmA52jtW7L-9EI358mq1GsY2GjqUDtTbyasDcjqm0E4H', 'AB6AXuBkM_xvCsQBWnneKUhMb3YzXXlWW6A7pzd7qhsi_6mCMb2EzEVJpblkDXlHVYOmmkELTSOdBgs7WnE6HqkYeoO70BmWRpCUVmeWqG1wypxe8l560CaamsXpMMy44ZAHyoN_fLw2TCPFfPpZzzQr7vvU-20BVUXY6zejdXt5Txz5xMtlPGTQI84T9DQbdsLbNhkW67o1JQyCsmODwbGQ_NViH7DJjnFBdGzxnH4-8pzqNUETaq_RFaPU9s_qMJc9nAqGocV32VOJanJ6', 'AB6AXuBaZC6l6RE_xcnT4VZKCVemhPHDcp0D4Z5Cjvp8u5Cyqam7iyAfoCUjdzBalbq0kNTOqHHdlhTLSOpXIwcxlahtwF0Tf47NC-SkH4Vn1XjTP9kC05gNarMiLM7xrUiAUycfpuNrm4CB1j1MhSyALJ8zNJq7DuL4egjRR8dgA-rIYHFieDsu2DWNUpVPUa0JhGYVf7utPe1EzfgHxtH5lg9eMyvs0uvag3yuX93UN_SOhdBfg0KCENdqN5DUd023RpHmHyrJrasIGwpA', 'AB6AXuDuchTyWnD8u6dGMe-q2jXqEknroJCWFn9UROKJsmr1yxSDXI8JJfgyWRadpjoTpsL9hhI2wW8EGGJTY9xastGppdLiB_CFYF4nf9gDczhg8mDgW2KCtGVbfUHffus-Vkdkbrhzvgiq5UlBX74MBXTww7flTNz8wn-dthfi0T63Mm22VtlZsa3Yd5Kewl1J5bGKYWZI0a2bg7BHqo03rZJhIO6kJLMqynDBTGKgKVJUiLFeSvuqBnMARWUD11m9MUGg0GMq3jIOAOgW'][i-1]}`} 
                    alt="Lot" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                    <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">Live Now</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-['Manrope'] text-[10px] text-stone-500 uppercase tracking-widest">Collection {i}</p>
                    <h3 className="font-['Noto_Serif'] text-xl mt-1">Masterpiece Lot {i}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-['Manrope'] text-[10px] text-stone-400">Current Bid</p>
                    <p className="font-['Noto_Serif'] text-lg text-[#570000]">${(1000 * i).toLocaleString()}</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-stone-500">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span className="font-['Manrope'] text-[11px]">2h 15m left</span>
                  </div>
                  <button className="border border-stone-200 px-6 py-2 rounded-sm font-['Manrope'] text-[10px] uppercase tracking-widest hover:bg-[#570000] hover:text-white hover:border-[#570000] transition-all duration-300">Join</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 border-t border-stone-200 bg-stone-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-7xl mx-auto text-left">
          <div className="md:col-span-1">
            <div className="font-['Noto_Serif'] text-xl text-stone-900 mb-6">The Digital Curator</div>
            <p className="font-['Manrope'] text-xs tracking-tighter text-stone-500 leading-relaxed">Defining the future of luxury acquisition through digital mastery and curated provenance.</p>
          </div>
          {['Services', 'Company'].map(group => (
            <div key={group}>
              <h4 className="font-['Manrope'] text-[10px] uppercase tracking-widest text-stone-900 mb-6">{group}</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-xs text-stone-500 hover:underline decoration-[#570000] underline-offset-4">Link One</a>
                <a href="#" className="text-xs text-stone-500 hover:underline decoration-[#570000] underline-offset-4">Link Two</a>
                <a href="#" className="text-xs text-stone-500 hover:underline decoration-[#570000] underline-offset-4">Link Three</a>
              </div>
            </div>
          ))}
          <div>
            <h4 className="font-['Manrope'] text-[10px] uppercase tracking-widest text-stone-900 mb-6">Newsletter</h4>
            <div className="flex border-b border-stone-300 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:ring-0 text-xs w-full" />
              <button className="material-symbols-outlined text-stone-400">arrow_forward</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuctionPage;
