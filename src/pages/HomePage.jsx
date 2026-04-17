
// import blackwatches from '../assets/blackwatches.jpeg'
// import auction_sold from '../assets/auction_sold.jpeg'
// import auction from '../assets/auction.jpeg'
import { NavLink } from 'react-router';
import WelcomeGuest from '../components/WelcomeGuest';
import WelcomeUser from '../components/WelcomeUser';

const HomePage = () => {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">

      <main className="">
        <WelcomeGuest/>
        {/* <WelcomeUser/> */}

        {/* Ongoing Auctions (Masonry Style Grid) */}
        <section id="auctions" className="px-6 md:px-12 py-24 bg-surface">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label uppercase tracking-widest text-primary text-[10px]">Live Collection</span>
              <h2 className="font-headline text-4xl mt-2 text-red">Ongoing Auctions</h2>
            </div>
            <NavLink to="/auction" className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/20 pb-1 hover:border-primary transition-all">
              View All
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Large Lot Card */}
            <div className="md:col-span-7 group cursor-pointer h-full">
              <div className="relative overflow-hidden rounded-md h-full aspect-[4/5] md:aspect-auto">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Venetian Twilight"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDupPRUMcOEeIlF8aK4eMfOjuDbGQJRvRK_5ghbspUx3EK-Fpy5pmsRNGNe4Ss1Uii8bJEk7Y5JwfHq1Mld9JaVfXPXL0P3JopWnKewQI9pVuk_xAvRyoqRarKsAKgQbLWE0ExK35UsQ_JPtzTOKVdkfYXZTPALxZuED9Kh5-AJTNgErIsY04VdatV3b5lzHWWtiYPlaHsIAaaZpWmenU5DwD-RrUy0UjIsEm0V0V_SuKCyEcu1DDlhtC-T0vReRVt1uR5OArSVfgi9"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 flex justify-between items-center rounded-lg bg-white/70 backdrop-blur-[20px]">
                  <div>
                    {/* <p className="font-label uppercase tracking-widest text-[10px] text-secondary mb-1">Lot 042</p> */}
                    <h3 className="font-headline text-xl">Venetian Twilight</h3>
                    <p className="font-label font-semibold text-red mt-1 ">Current: $42,500</p>
                    <span className='font-label text-primary text-l'>Time over: 59:18</span>
                  </div>
                  <button className="btn material-symbols-outlined text-primary hover:bg-gradient-to-r from-dark-red to-red hover:text-on-primary">JOIN</button>
                </div>
              </div>
            </div>

            {/* Smaller Lots Column */}
            <div className="md:col-span-5 flex flex-col gap-8 h-full">
              <div className="group cursor-pointer flex-1">
                <div className="relative overflow-hidden rounded-md h-full">
                  <img
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Patek Heritage"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpFpbxMtXrk-gAQTJlnM-kPYDSICNwrJ_1E-rbxKyIspXOg5Nk4ECjL2O9VpcWgm-Xut2g7IAUSLSCI5y_c7Rc9shIbIVlgm3BdTCVQ9wSbdxeHX2TguhQFgohftgqge20yA1wgx6vQIsXEC0hx4a9TTW10-ZQ-Sm6PIsNMa4qz4EMzlHsXvKGhBIR31IqTHcsBLyl9lR2mC8vo8bq1zarp-rp6N6cLKMxsgj67vkdT83XGerTFOkXa3GjNgT880lh0_A_JcsEcVcq"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center rounded-lg bg-white/70 backdrop-blur-[20px]">
                    <div>
                      <h4 className="font-headline text-lg">Patek Heritage '52</h4>
                      <p className="text-red text-sm font-semibold">$18,200</p>
                      <span className='font-label text-primary text-sm'>Time over: 59:18</span>
                    </div>
                    <button className="btn material-symbols-outlined text-primary hover:bg-gradient-to-r from-dark-red to-red hover:text-on-primary">JOIN</button>
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
                  <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center rounded-lg bg-white/70 backdrop-blur-[20px]">
                    <div>
                      <h4 className="font-headline text-lg">Royal Emerald Suite</h4>
                      <p className="text-red text-sm font-semibold">$9,400</p>
                     <span className='font-label text-primary text-sm'>Time over: 59:18</span>
                    </div>
                     <button className="btn material-symbols-outlined text-primary hover:bg-gradient-to-r from-dark-red to-red hover:text-on-primary">JOIN</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
