import React from 'react'

function ActiveBid() {
  return (
    <div className=''>
      <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-10">
        <div className="min-w-[280px] md:min-w-[320px] group cursor-pointer snap-start bg-on-surface rounded-xl shadow-sm border border-stone-100">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Patek Heritage"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpFpbxMtXrk-gAQTJlnM-kPYDSICNwrJ_1E-rbxKyIspXOg5Nk4ECjL2O9VpcWgm-Xut2g7IAUSLSCI5y_c7Rc9shIbIVlgm3BdTCVQ9wSbdxeHX2TguhQFgohftgqge20yA1wgx6vQIsXEC0hx4a9TTW10-ZQ-Sm6PIsNMa4qz4EMzlHsXvKGhBIR31IqTHcsBLyl9lR2mC8vo8bq1zarp-rp6N6cLKMxsgj67vkdT83XGerTFOkXa3GjNgT880lh0_A_JcsEcVcq"
            />
            <div className="absolute top-4 right-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">
                status
              </span>
            </div>

            <div className="flex flex-col m-4">
              <div className=''>
                <h4 className="font-headline text-xl h-16">
                  Patek Heritage '52
                </h4>
                <p className="text-red text-lg font-semibold">$18,200</p>
              </div>

              <div className='flex justify-between items-end'>
                <div className="font-headline text-primary text-sm">
                  Time Left: 59m 18s
                </div>
                <div>
                  <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20 w-20">
                    Place Bid
                  </button>
                </div>
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
            <div className="absolute top-4 right-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">
                status
              </span>
            </div>

            <div className="flex flex-col m-4">
              <div className=''>
                <h4 className="font-headline text-xl h-16">
                  Patek Heritage '52
                </h4>
                <p className="text-red text-lg font-semibold">$18,200</p>
              </div>

              <div className='flex justify-between items-end'>
                <div className="font-headline text-primary text-sm">
                  Time Left: 59m 18s
                </div>
                <div>
                  <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20 w-20">
                    Place Bid
                  </button>
                </div>
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

            <div className="absolute top-4 right-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">
                status
              </span>
            </div>

            <div className="flex flex-col m-4">
              <div className=''>
                <h4 className="font-headline text-xl h-16">
                  Patek Heritage '52
                </h4>
                <p className="text-red text-lg font-semibold">$18,200</p>
              </div>

              <div className='flex justify-between items-end'>
                <div className="font-headline text-primary text-sm">
                  Time Left: 59m 18s
                </div>
                <div>
                  <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20 w-20">
                    Place Bid
                  </button>
                </div>
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

            <div className="absolute top-4 right-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">
                status
              </span>
            </div>

            <div className="flex flex-col m-4">
              <div className=''>
                <h4 className="font-headline text-xl h-16">
                  Patek Heritage '52
                </h4>
                <p className="text-red text-lg font-semibold">$18,200</p>
              </div>

              <div className='flex justify-between items-end'>
                <div className="font-headline text-primary text-sm">
                  Time Left: 59m 18s
                </div>
                <div>
                  <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20 w-20">
                    Place Bid
                  </button>
                </div>
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
            <div className="absolute top-4 right-4 bg-[#fcf9f8]/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
              <span className="font-['Manrope'] text-[9px] uppercase tracking-tighter">
                status
              </span>
            </div>


            <div className="flex flex-col m-4">
              <div className=''>
                <h4 className="font-headline text-xl h-16">
                  Patek Heritage '52
                </h4>
                <p className="text-red text-lg font-semibold">$18,200</p>
              </div>

              <div className='flex justify-between items-end'>
                <div className="font-headline text-primary text-sm">
                  Time Left: 59m 18s
                </div>
                <div>
                  <button className="btn material-symbols-outlined bg-gradient-to-r from-[#570000] to-[#800000] text-white px-5 py-4 rounded-sm font-['Manrope'] text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#570000]/20 w-20">
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveBid