import React, { useRef } from "react";

const AuctionPage = () => {
  // Populars sort by count users bid or bidding counts
  // Ongoing Auction change to sort product by lesser time's left

  const scrollRef = useRef(null)

  const scroll = (direction) => {
  if (scrollRef.current) {
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo = direction === 'left' ? -clientWidth : clientWidth;
    scrollRef.current.scrollBy({ left: scrollTo, behavior: 'smooth' });
  }
};

  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] min-h-screen">
      <main className=" pb-20 px-12 max-w-[1920px] mx-auto">
        <div className="flex items-center">
          <div className="font-headline text-4xl text-red my-8 mr-6">
            Populars
          </div>
          <div className="h-[1px] flex-grow bg-stone-200"></div>
        </div>
        {/* Hero Section & Sidebar Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-24 w-full px-4 md:px-8">
          {/* Main Hero */}
          <div className="lg:col-span-5 group cursor-pointer relative overflow-hidden rounded-2xl shadow-xl h-full md:h-full">
            <div className="relative w-full h-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvgXMAB9rXZppdIyVFwnbyl0aZ1xuGdRyWrsI2Hi7htMsLJYlQfR592QAxC86WPGVIGhmZhNC8nPb7iqAx1b-eBsIhGfcsO94JMDxObkKctdlUfobrLqW0Kq4W-1pKvFQfQvzVDGvHs4MXapVj-uKodykXRnzDcygV6n9QyyhVsdVIDLi292kyP8F_WqdyIGCG_N__aZkNkfS7VM9pU60qM_SKUzdbdMmh_I08MZe1LeMt_9MkPHdGIRx5UPgClsTvSAOMTF1THQKv"
                alt="Luxury watch detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Editorial Glass Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/70 backdrop-blur-[24px] flex flex-col md:flex-row justify-between items-end md:items-center">
              <div className="max-w-xl text-left mx-2">
                <span className="font-['Manrope'] text-[10px] uppercase tracking-[0.2em] text-[#570000] mb-2 block font-semibold">
                  Premium Lot 041
                </span>
                <h1 className="font-['Noto_Serif'] text-5xl md:text-2xl text-black mb-4 leading-tight">
                  Golden Model <span className="italic">Signature</span>
                </h1>
                <p className="font-['Manrope'] text-dark-red text-bold text-3xl max-w-md">
                  $40000
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col items-center">
                <div className="flex gap-4 mb-6">
                  {["Hrs", "Min", "Sec"].map((label, i) => (
                    <div key={label} className="text-center">
                      <span className="block font-['Noto_Serif'] text-2xl">
                        0{8 + i}
                      </span>
                      <span className="font-['Manrope'] text-[9px] uppercase tracking-widest text-stone-500">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-[#570000] to-[#800000] text-white px-10 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                  Join Auction
                </button>
              </div>
            </div>
          </div>

          {/* Smaller Lots Column */}
          <div className="lg:col-span-7 flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory no-scrollbar">
            <div className="min-w-[280px] md:min-w-[320px] group cursor-pointer snap-start bg-on-surface rounded-xl shadow-sm border border-stone-100">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Patek Heritage"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpFpbxMtXrk-gAQTJlnM-kPYDSICNwrJ_1E-rbxKyIspXOg5Nk4ECjL2O9VpcWgm-Xut2g7IAUSLSCI5y_c7Rc9shIbIVlgm3BdTCVQ9wSbdxeHX2TguhQFgohftgqge20yA1wgx6vQIsXEC0hx4a9TTW10-ZQ-Sm6PIsNMa4qz4EMzlHsXvKGhBIR31IqTHcsBLyl9lR2mC8vo8bq1zarp-rp6N6cLKMxsgj67vkdT83XGerTFOkXa3GjNgT880lh0_A_JcsEcVcq"
                />

                <div className="flex justify-between items-center m-6">
                  <div>
                    <h4 className="font-headline text-xl my-2">
                      Patek Heritage '52
                    </h4>
                    <p className="text-red text-lg font-semibold my-2">$18,200</p>
                    <span className="font-headline text-primary text-sm">
                      Time Left: 59m 18s
                    </span>
                  </div>
                  <div>
                    <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                      JOIN
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-[280px] md:min-w-[320px] group cursor-pointer snap-start bg-on-surface rounded-xl shadow-sm border border-stone-100">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Royal Emerald Suite"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7lNWJDmFn8e4aoRcuUAZrUzCFNtp6FMAzyu9zvjxHB-SflolrRjidTePqlBdkEm212h_7lQKkw2bMUX_uJyF_ghamrOsgpEhdFdPMDhOOaLXY7vVyX7cfIryPpfl5CaBezU8yzBQkPgLClVftaTZ9taQ9UoKvUNM7DtrD9OIKhetLjsaRFfBMEIkAfTzJ8eXjgyIHAqxNtI4oesSQ84AXvPa8P5Ta6r5fIls-UDa38RnKlBgFZ_RilSVqwNdeFe-zzwoM9RciG2dR"
                />

                <div className="flex justify-between items-center m-6">
                  <div>
                    <h4 className="font-headline text-xl my-2">
                      Patek Heritage '52
                    </h4>
                    <p className="text-red text-lg font-semibold my-2">$18,200</p>
                    <span className="font-headline text-primary text-sm">
                      Time Left: 59m 18s
                    </span>
                  </div>
                  <div>
                    <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                      JOIN
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-[200px] md:min-w-[320px] group cursor-pointer snap-start bg-on-surface rounded-xl shadow-sm border border-stone-100">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Royal Emerald Suite"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7lNWJDmFn8e4aoRcuUAZrUzCFNtp6FMAzyu9zvjxHB-SflolrRjidTePqlBdkEm212h_7lQKkw2bMUX_uJyF_ghamrOsgpEhdFdPMDhOOaLXY7vVyX7cfIryPpfl5CaBezU8yzBQkPgLClVftaTZ9taQ9UoKvUNM7DtrD9OIKhetLjsaRFfBMEIkAfTzJ8eXjgyIHAqxNtI4oesSQ84AXvPa8P5Ta6r5fIls-UDa38RnKlBgFZ_RilSVqwNdeFe-zzwoM9RciG2dR"
                />

                <div className="flex justify-between items-center m-6">
                  <div>
                    <h4 className="font-headline text-xl my-2">
                      Patek Heritage '52
                    </h4>
                    <p className="text-red text-lg font-semibold my-2">$18,200</p>
                    <span className="font-headline text-primary text-sm">
                      Time Left: 59m 18s
                    </span>
                  </div>
                  <div>
                    <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                      JOIN
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-[200px] md:min-w-[320px] group cursor-pointer snap-start bg-on-surface rounded-xl shadow-sm border border-stone-100">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Royal Emerald Suite"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7lNWJDmFn8e4aoRcuUAZrUzCFNtp6FMAzyu9zvjxHB-SflolrRjidTePqlBdkEm212h_7lQKkw2bMUX_uJyF_ghamrOsgpEhdFdPMDhOOaLXY7vVyX7cfIryPpfl5CaBezU8yzBQkPgLClVftaTZ9taQ9UoKvUNM7DtrD9OIKhetLjsaRFfBMEIkAfTzJ8eXjgyIHAqxNtI4oesSQ84AXvPa8P5Ta6r5fIls-UDa38RnKlBgFZ_RilSVqwNdeFe-zzwoM9RciG2dR"
                />

                <div className="flex justify-between items-center m-6">
                  <div>
                    <h4 className="font-headline text-xl my-2">
                      Patek Heritage '52
                    </h4>
                    <p className="text-red text-lg font-semibold my-2">$18,200</p>
                    <span className="font-headline text-primary text-sm">
                      Time Left: 59m 18s
                    </span>
                  </div>
                  <div>
                    <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20">
                      JOIN
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
  <button onClick={() => scroll('left')} className="p-3 border border-stone-300 hover:bg-stone-100 transition-colors">
    <span className="material-symbols-outlined">arrow_back</span>
  </button>
  <button onClick={() => scroll('right')} className="p-3 border border-stone-300 hover:bg-stone-100 transition-colors">
    <span className="material-symbols-outlined">arrow_forward</span>
  </button>
</div>
          </div>
        </div>

        {/* Timeout */}
        <section className="mt-20">
          <div className="flex flex-col gap-2 mb-12">
            <div className="flex items-center gap-6">
              <h2 className="font-['Noto_Serif'] text-4xl text-red">Timeout</h2>
              <div className="h-[1px] flex-grow bg-stone-200"></div>
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
                  <li>
                    <a>Electronics</a>
                  </li>
                  <li>
                    <a>Toys</a>
                  </li>
                  <li>
                    <a>Collectibles</a>
                  </li>
                  <li>
                    <a>Home and living</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-label text-s text-primary ml-1">
              Time Left: less than 1 hour
            </div>
          </div>
            <div className="text-l font-semibold uppercase tracking-widest text-stone-600 mb-10 block">
              Category :
            </div>
        </section>

        {/* Asymmetric Product Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 text-left">
          {[
            {
              cat: "Horology",
              title: "Patek Philippe Nautilus",
              price: "$124,000",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAab-LYdPJSgC7hQNOR9TGu6dsPEbTfVW-E-3uaIrFj7yYPs6_-ma7InV3JqnW86lz8ErR7ce1qwfqxJIHRVRI7Pa05roiqhNjr1r6mqsTL2t2HIxrjBS1fGtSaXWyTmNIE7e6zz-eQH1Be1IPnZuYG0M6wdTURCMZw-tXOKkfIzHHLoiqeimjQBaAaqOVtnZQns2kfxqBv6bnIDha9D0tfqMQCVYp0rmXvHzGfOKPdH_cxY_6_lVpzYpIJ8Zkh2npJcWs45RRDI3yA",
            },
            {
              cat: "Jewelry",
              title: "Emerald Teardrop Earrings",
              price: "$45,000",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuAvm231iZr8vdySwn-kOte7I8FAZWRf2jZRJkTU8vDYgXT3E9mZGbYFV9_CAgoW6N6XLV15_OHLq06GyCMtN-3m6Jv2skc2A0d7g0wRFi0ITn8-TEMrEsrZxdNb-sEaizWSQ4T5g7t5BLzDsrqzZkuSWOKPcEA20CeRV-lD33sBnIgp8cUssEmNGamSEKA_et0tRwgUINpvfweDHNgvZ5Ztmhlx1McOG-JLoqD3IckFZ4I3OJ7oc5fw8PVy6tNSGkZWDRdUuYwaLa",
              shift: true,
            },
            {
              cat: "Design",
              title: "Brutalist Alabaster Vessel",
              price: "$8,200",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARgMOZMmzVNrDz1n4_Y5rdr1efWWp2BraAsv5xYqoW7kg9mWdx_UwxsYkxHwgVqs4I3pIKE-2_7BkqdrNrRjum_NLj_mBIwtTlLt943SCKE2yD606kQOZHLNcnnSCt3q7rrwBcddrnFZEDj0kxiGHqkwn7nx1qNwgq3JLBx-Ys3SEzv0--LZq5t_oOOl9PXcuzAtbueKCwW12TH7332Xig3N-MuWUxtdFnFC5p44AuyQHijUsyH7Zr3uqJFBbtXpO9N82ftUSQr2fO",
            },
          ].map((product, i) => (
            <div
              key={i}
              className={`flex flex-col gap-6 ${product.shift ? "md:mt-12" : ""}`}
            >
              <div className="relative overflow-hidden group aspect-[4/5] bg-[#f0edec] rounded-2xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold uppercase">
                    Lot #{812 + i}
                  </span>
                  <span className="material-symbols-outlined text-[#570000]">
                    favorite
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div className="mx-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-1 block">
                    {product.cat}
                  </span>
                  <h3 className="text-xl mb-4 font-['Noto_Serif']">
                    {product.title}
                  </h3>

                  <span className="text-primary">Time Left: 50m 30s</span>
                </div>

                <div className="text-center mx-3">
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                    Current Bid
                  </p>
                  <p className="text-xl font-bold text-[#800000]">
                    {product.price}
                  </p>
                </div>
              </div>

              <button className="bg-[#570000] text-white text-[14px] font-semibold uppercase tracking-widest px-8 py-3 hover:bg-[#800000] transition-colors">
                Join
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default AuctionPage;
