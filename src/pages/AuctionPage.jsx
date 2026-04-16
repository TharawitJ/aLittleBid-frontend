import React from 'react';

const AuctionPage = () => {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] min-h-screen">
      <main className="pt-8 pb-20 px-12 max-w-[1920px] mx-auto">
        <div className='flex items-center'>
          <div className='font-headline text-4xl text-red my-8 mr-6'>Populars</div>
          <div className="h-[1px] flex-grow bg-stone-200"></div>
        </div>
        {/* Hero Section & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 w-full px-4 md:px-8">
          {/* Main Hero */}
          {/* <div className="lg:col-span-8 group cursor-pointer relative overflow-hidden rounded-2xl shadow-xl h-full md:h-full">
            <div className="relative w-full h-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvgXMAB9rXZppdIyVFwnbyl0aZ1xuGdRyWrsI2Hi7htMsLJYlQfR592QAxC86WPGVIGhmZhNC8nPb7iqAx1b-eBsIhGfcsO94JMDxObkKctdlUfobrLqW0Kq4W-1pKvFQfQvzVDGvHs4MXapVj-uKodykXRnzDcygV6n9QyyhVsdVIDLi292kyP8F_WqdyIGCG_N__aZkNkfS7VM9pU60qM_SKUzdbdMmh_I08MZe1LeMt_9MkPHdGIRx5UPgClsTvSAOMTF1THQKv"
                alt="Luxury watch detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div> */}
          {/* Editorial Glass Overlay */}
          {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/70 backdrop-blur-[24px] flex flex-col md:flex-row justify-between items-end md:items-center">
              <div className="max-w-xl text-left mx-2"> */}
          {/* <span className="font-['Manrope'] text-[10px] uppercase tracking-[0.2em] text-[#570000] mb-2 block font-semibold">Premium Lot 041</span> */}
          {/* <h1 className="font-['Noto_Serif'] text-5xl md:text-2xl text-black mb-4 leading-tight">Golden Model <span className="italic">Signature</span></h1>
                <p className="font-['Manrope'] text-dark-red text-bold text-3xl max-w-md">$40000</p>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col items-center">
                <div className="flex gap-4 mb-6">
                  {['Hrs', 'Min', 'Sec'].map((label, i) => (
                    <div key={label} className="text-center">
                      <span className="block font-['Noto_Serif'] text-2xl">0{8 + i}</span>
                      <span className="font-['Manrope'] text-[9px] uppercase tracking-widest text-stone-500">{label}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-[#570000] to-[#800000] text-white px-10 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                  Join Auction
                </button>
              </div>
            </div>
          </div> */}

          {/* Sidebar */}
          {/* <div className="lg:col-span-4 flex flex-col gap-6 text-left">
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
          </div> */}

          {/* Smaller Lots Column */}
          <div className="md:col-span-6 h-full flex flex-row overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
            <div className="group cursor-pointer flex-1">
              <div className="relative overflow-hidden rounded-md h-full">
                <img
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Patek Heritage"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpFpbxMtXrk-gAQTJlnM-kPYDSICNwrJ_1E-rbxKyIspXOg5Nk4ECjL2O9VpcWgm-Xut2g7IAUSLSCI5y_c7Rc9shIbIVlgm3BdTCVQ9wSbdxeHX2TguhQFgohftgqge20yA1wgx6vQIsXEC0hx4a9TTW10-ZQ-Sm6PIsNMa4qz4EMzlHsXvKGhBIR31IqTHcsBLyl9lR2mC8vo8bq1zarp-rp6N6cLKMxsgj67vkdT83XGerTFOkXa3GjNgT880lh0_A_JcsEcVcq"
                />
                {/* <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center rounded-lg bg-white/70 backdrop-blur-[20px]"></div> */}
                <div className='flex justify-between items-center m-3'>
                  <div>
                    <h4 className="font-headline text-lg">Patek Heritage '52</h4>
                    <p className="text-red text-sm font-semibold">$18,200</p>
                    <span className='font-headline text-primary text-sm'>Time Over: 59m 18s</span>
                  </div>
                  <div>
                    <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">JOIN</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer flex-1">
              <div className="relative overflow-hidden rounded-md h-full">
                <img
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Royal Emerald Suite"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7lNWJDmFn8e4aoRcuUAZrUzCFNtp6FMAzyu9zvjxHB-SflolrRjidTePqlBdkEm212h_7lQKkw2bMUX_uJyF_ghamrOsgpEhdFdPMDhOOaLXY7vVyX7cfIryPpfl5CaBezU8yzBQkPgLClVftaTZ9taQ9UoKvUNM7DtrD9OIKhetLjsaRFfBMEIkAfTzJ8eXjgyIHAqxNtI4oesSQ84AXvPa8P5Ta6r5fIls-UDa38RnKlBgFZ_RilSVqwNdeFe-zzwoM9RciG2dR"
                />
                {/* <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center rounded-lg bg-white/70 backdrop-blur-[20px]"></div> */}
                <div className='flex justify-between items-center m-3'>
                  <div>
                    <h4 className="font-headline text-lg">Patek Heritage '52</h4>
                    <p className="text-red text-sm font-semibold">$18,200</p>
                    <span className='font-headline text-primary text-sm'>Time Over: 59m 18s</span>
                  </div>
                  <div>
                    <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">JOIN</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Auction Grid */}
        <section className="mt-20">
          <div className='flex flex-col gap-2 mb-12'>
            <div className="flex items-center gap-6">
              <h2 className="font-['Noto_Serif'] text-4xl text-red">Ongoing Auction</h2>
              <div className="h-[1px] flex-grow bg-stone-200"></div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 bg-dark-red text-white tracking-widest ">Categories</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-white text-dark-red rounded-box z-1 w-40 p-2 shadow-sm">
                  <li><a>Electronics</a></li>
                  <li><a>Toys</a></li>
                  <li><a>Collectibles</a></li>
                  <li><a>Home and living</a></li>
                </ul>
              </div>
              {/* <div className="flex gap-2">
              <button className="p-2 border border-stone-200 rounded-full hover:bg-stone-50 transition-colors">
              <span className="material-symbols-outlined text-sm"></span>
              </button>
              </div> */}
            </div>
            <div className='text-label text-s text-primary ml-1'>Time Over: less than 1 hour</div>
          </div>

          {/* <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  </div> */}
          {/* <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center rounded-xl bg-white/70 backdrop-blur-[20px]">
                    <div>
                      <h4 className="font-headline text-lg">Patek Heritage '52</h4>
                      <p className="text-red text-sm font-semibold">$18,200</p>
                      <span className='font-label text-primary text-sm'>Time over: 59:18</span>
                    </div>
                    <button className="btn material-symbols-outlined text-primary hover:bg-gradient-to-r from-dark-red to-red hover:text-on-primary">JOIN</button>
                  </div> */}
          {/* <div className='bg-base-300 rounded-b-3xl px-5 py-4'>
                    <div className="flex justify-between items-start">
                      <div className='flex flex-col gap-3'> */}
          {/* <p className="font-['Manrope'] text-[10px] text-stone-500 uppercase tracking-widest">Collection {i}</p> */}
          {/* <h3 className="font-['Noto_Serif'] text-xl mt-1">Masterpiece Lot {i}</h3> */}
          {/* <div>
                        <span className="font-['Noto_Serif'] text-[14px] text-red font-semibold">Current Bid </span>
                        <p className="font-['Noto_Serif'] text-lg text-red text-xl">${(1000 * i).toLocaleString()}</p>
                        </div> */}
          {/* </div>
                      <div className="text-center">
                        <span className="font-['Noto_Serif'] text-[14px] text-red font-semibold">Current Bid </span>
                        <p className="font-['Noto_Serif'] text-lg text-red text-xl">${(1000 * i).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-stone-500">
                        <span className="material-symbols-outlined text-sm text-primary">Time over: 40m 15s</span> */}
          {/* <span className="font-['Manrope'] text-[11px]"></span> */}
          {/* </div>
                      <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </section>

        {/* Asymmetric Product Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 text-left">
          {[
            { cat: 'Horology', title: 'Patek Philippe Nautilus', price: '$124,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAab-LYdPJSgC7hQNOR9TGu6dsPEbTfVW-E-3uaIrFj7yYPs6_-ma7InV3JqnW86lz8ErR7ce1qwfqxJIHRVRI7Pa05roiqhNjr1r6mqsTL2t2HIxrjBS1fGtSaXWyTmNIE7e6zz-eQH1Be1IPnZuYG0M6wdTURCMZw-tXOKkfIzHHLoiqeimjQBaAaqOVtnZQns2kfxqBv6bnIDha9D0tfqMQCVYp0rmXvHzGfOKPdH_cxY_6_lVpzYpIJ8Zkh2npJcWs45RRDI3yA' },
            { cat: 'Jewelry', title: 'Emerald Teardrop Earrings', price: '$45,000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuAvm231iZr8vdySwn-kOte7I8FAZWRf2jZRJkTU8vDYgXT3E9mZGbYFV9_CAgoW6N6XLV15_OHLq06GyCMtN-3m6Jv2skc2A0d7g0wRFi0ITn8-TEMrEsrZxdNb-sEaizWSQ4T5g7t5BLzDsrqzZkuSWOKPcEA20CeRV-lD33sBnIgp8cUssEmNGamSEKA_et0tRwgUINpvfweDHNgvZ5Ztmhlx1McOG-JLoqD3IckFZ4I3OJ7oc5fw8PVy6tNSGkZWDRdUuYwaLa', shift: true },
            { cat: 'Design', title: 'Brutalist Alabaster Vessel', price: '$8,200', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgMOZMmzVNrDz1n4_Y5rdr1efWWp2BraAsv5xYqoW7kg9mWdx_UwxsYkxHwgVqs4I3pIKE-2_7BkqdrNrRjum_NLj_mBIwtTlLt943SCKE2yD606kQOZHLNcnnSCt3q7rrwBcddrnFZEDj0kxiGHqkwn7nx1qNwgq3JLBx-Ys3SEzv0--LZq5t_oOOl9PXcuzAtbueKCwW12TH7332Xig3N-MuWUxtdFnFC5p44AuyQHijUsyH7Zr3uqJFBbtXpO9N82ftUSQr2fO' }
          ].map((product, i) => (
            <div key={i} className={`flex flex-col gap-6 ${product.shift ? 'md:mt-12' : ''}`}>
              <div className="relative overflow-hidden group aspect-[4/5] bg-[#f0edec] rounded-2xl">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold uppercase">Lot #{(812 + i)}</span>
                  <span className="material-symbols-outlined text-[#570000]">favorite</span>
                </div>
              </div>

              <div className='flex justify-between items-start'>
                <div className='mx-3'>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1 block">{product.cat}</span>
                  <h3 className="text-xl mb-4 font-['Noto_Serif']">{product.title}</h3>
                  {/* <div className="flex justify-between items-center"> */}
                    {/* <div> */}
                      {/* <p className="text-[10px] text-stone-400 uppercase tracking-widest">Current Bid</p>
                      <p className="text-xl font-bold text-[#800000]">{product.price}</p> */}
                      <span className='text-primary'>Time Over: 50m 30s</span>
                    {/* </div> */}
                  {/* </div> */}
                </div>

                <div className='text-center mx-3'>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">Current Bid</p>
                  <p className="text-xl font-bold text-[#800000]">{product.price}</p>
                  {/* <span className='text-primary'>Time Over: 50m 30s</span> */}
                </div>
              </div>

              <button className="bg-[#570000] text-white text-[14px] font-semibold uppercase tracking-widest px-8 py-3 hover:bg-[#800000] transition-colors">Join</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default AuctionPage;
