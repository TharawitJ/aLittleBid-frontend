
/**
 * High-End Editorial Art Auction House Landing Page
 * Based on the "Digital Curator" design system.
 */
import blackwatches from '../assets/blackwatches.jpeg'
import auction_sold from '../assets/auction_sold.jpeg'
import auction from '../assets/auction.jpeg'

const HomePage = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-primary min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto bg-surface/70 backdrop-blur-md border-b-[0.5px] border-outline-variant/20">
        <div className="flex items-center gap-8">
          <span className="font-headline italic text-2xl text-primary">A little Bid</span>
          <div className="hidden md:flex gap-6">
            <a className="text-primary font-semibold border-b border-primary pb-1 font-label uppercase tracking-widest text-[10px]" href="#auctions">Auctions</a>
            <a className="text-secondary font-medium hover:text-primary transition-colors duration-300 font-label uppercase tracking-widest text-[10px]" href="#artists">Artists</a>
            <a className="text-secondary font-medium hover:text-primary transition-colors duration-300 font-label uppercase tracking-widest text-[10px]" href="#provenance">Provenance</a>
            <a className="text-secondary font-medium hover:text-primary transition-colors duration-300 font-label uppercase tracking-widest text-[10px]" href="#about">About</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">favorite</button>
          <button className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-DEFAULT font-label uppercase tracking-widest text-[10px] hover:bg-primary-container transition-all active:scale-95 duration-200">
            Sign In
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center px-6 md:px-12 overflow-hidden">
          <div className="bg-home-bg absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover grayscale-[20%] opacity-40" 
              alt="expansive minimalist white gallery room"
              src={blackwatches} 
              // src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQVBg-wYg4wLdAZPRhtJSW8vEzMsZ-1fMTy7ArmhzD_0YOMGT4ROskeYZ9A9i4MVpRpySJHhvskDZxIHXCJlh_jGQ06HHofICYvNWCJ0OZ9wN5XavhJCAjJYpoKFKeHlakqmeKumGBoPD0gz0CjdebHasEaZIUM99V7Hvf9yN9km1oaTpNfKU4QasmxogHjjcgEmC2slHjEwO7W90MRgbHtpWl1pHscL6fpd2Mw0k7ylemk_qOuuvSxEFVCJOAULWodu7YADiGB-tE" 
            />
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="font-label uppercase tracking-[0.2em] text-primary mb-4 block font-semibold">Curated Excellence</span>
            <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-tight">Join the Thrill</h1>
            <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-tight mb-8">of the Bid</h1>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-DEFAULT font-label uppercase tracking-widest text-xs hover:shadow-xl transition-all active:scale-95 duration-200">
                Register to Bid
              </button>
              <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface px-10 py-4 rounded-DEFAULT font-label uppercase tracking-widest text-xs hover:bg-surface-container-low transition-all active:scale-95 duration-200">
                Login
              </button>
            </div>
          </div>
        </section>

        {/* Ongoing Auctions (Masonry Style Grid) */}
        <section id="auctions" className="px-6 md:px-12 py-24 bg-surface">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label uppercase tracking-widest text-primary text-[10px]">Live Collection</span>
              <h2 className="font-headline text-4xl mt-2">Ongoing Auctions</h2>
            </div>
            <a className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/20 pb-1 hover:border-primary transition-all" href="#all-lots">
              View All Lots
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Large Lot Card */}
            <div className="md:col-span-7 group cursor-pointer">
              <div className="relative overflow-hidden rounded-md">
                <img 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Venetian Twilight"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDupPRUMcOEeIlF8aK4eMfOjuDbGQJRvRK_5ghbspUx3EK-Fpy5pmsRNGNe4Ss1Uii8bJEk7Y5JwfHq1Mld9JaVfXPXL0P3JopWnKewQI9pVuk_xAvRyoqRarKsAKgQbLWE0ExK35UsQ_JPtzTOKVdkfYXZTPALxZuED9Kh5-AJTNgErIsY04VdatV3b5lzHWWtiYPlaHsIAaaZpWmenU5DwD-RrUy0UjIsEm0V0V_SuKCyEcu1DDlhtC-T0vReRVt1uR5OArSVfgi9"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 flex justify-between items-center rounded-lg bg-white/70 backdrop-blur-[20px]">
                  <div>
                    <p className="font-label uppercase tracking-widest text-[10px] text-secondary mb-1">Lot 042</p>
                    <h3 className="font-headline text-xl">Venetian Twilight</h3>
                    <p className="text-primary font-bold mt-1 tracking-tight">Current: $42,500</p>
                  </div>
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Smaller Lots Column */}
            <div className="md:col-span-5 grid grid-cols-1 gap-8">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-md">
                  <img 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Patek Heritage"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpFpbxMtXrk-gAQTJlnM-kPYDSICNwrJ_1E-rbxKyIspXOg5Nk4ECjL2O9VpcWgm-Xut2g7IAUSLSCI5y_c7Rc9shIbIVlgm3BdTCVQ9wSbdxeHX2TguhQFgohftgqge20yA1wgx6vQIsXEC0hx4a9TTW10-ZQ-Sm6PIsNMa4qz4EMzlHsXvKGhBIR31IqTHcsBLyl9lR2mC8vo8bq1zarp-rp6N6cLKMxsgj67vkdT83XGerTFOkXa3GjNgT880lh0_A_JcsEcVcq"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center rounded-lg bg-white/70 backdrop-blur-[20px]">
                    <div>
                      <h4 className="font-headline text-lg">Patek Heritage '52</h4>
                      <p className="text-primary text-sm font-semibold">$18,200</p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-sm">timer</span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-md">
                  <img 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Royal Emerald Suite"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7lNWJDmFn8e4aoRcuUAZrUzCFNtp6FMAzyu9zvjxHB-SflolrRjidTePqlBdkEm212h_7lQKkw2bMUX_uJyF_ghamrOsgpEhdFdPMDhOOaLXY7vVyX7cfIryPpfl5CaBezU8yzBQkPgLClVftaTZ9taQ9UoKvUNM7DtrD9OIKhetLjsaRFfBMEIkAfTzJ8eXjgyIHAqxNtI4oesSQ84AXvPa8P5Ta6r5fIls-UDa38RnKlBgFZ_RilSVqwNdeFe-zzwoM9RciG2dR"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between items-center rounded-lg bg-white/70 backdrop-blur-[20px]">
                    <div>
                      <h4 className="font-headline text-lg">Royal Emerald Suite</h4>
                      <p className="text-primary text-sm font-semibold">$9,400</p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-sm">timer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-24 bg-surface-container-low px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'verified_user', title: 'Certified Provenance', desc: 'Every piece is meticulously vetted by our global network of curators and art historians to ensure absolute authenticity.' },
              { icon: 'gavel', title: 'Elite Bidding', desc: 'Access private viewing rooms and leverage our real-time bidding infrastructure designed for institutional security.' },
              { icon: 'local_shipping', title: 'Secure Logistics', desc: 'Climate-controlled transit and specialized white-glove delivery services spanning across six continents.' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="mb-6 inline-flex p-4 rounded-full bg-surface-container-lowest text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="font-headline text-2xl mb-3">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-6 md:mx-12 mb-24 py-20 px-8 bg-primary rounded-lg text-on-primary text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              className="w-full h-full object-cover" 
              alt="canvas texture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtjYysIZLpmbzQvMjyJQld6kQAO8U_ryRqk1wlqGIQJntomaZSrJtONPhYZWUwBeOERtCuL9dsoiqzLo-9lDq6gekzIb_-z61ffGu42_ggNELubOGtCn0ebtux_eHU9FvL8m62n57IgiheI0M1FSbG5H42epTVYi8NGbEkBB2VzjWiQ8tLuB01S1TduiCjbWocDaF2BMOVUoErEXR7eDZaqML4CEBM1hxCr59YxxzJQhGUuwVQOlKHoJGt2bArROtwyQ3CK4DuBMFE" 
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl mb-6">Ready to Join the Circle?</h2>
            <p className="text-on-primary-container mb-10 font-light opacity-90 leading-relaxed">
              Gain exclusive access to private sales, early auction previews, and invitations to gallery vernissages worldwide.
            </p>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-1 focus:ring-white/50 focus:border-white/50 rounded-DEFAULT px-6 py-4 font-body outline-none" 
                placeholder="Your professional email" 
                type="email" 
              />
              <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-DEFAULT font-label uppercase tracking-widest text-xs font-bold hover:bg-white transition-all active:scale-95 duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 w-full p-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-stone-200">
        <div className="md:col-span-1">
          <span className="font-headline italic text-xl text-stone-900">A little Bid</span>
          <p className="mt-6 text-stone-500 text-sm leading-relaxed">
            The global digital salon for fine art and rare collection, connecting discerning collectors with timeless masterpieces.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-primary font-label uppercase tracking-widest text-[10px] font-bold mb-2">Corporate</h5>
          <a className="text-stone-500 text-sm hover:text-primary transition-all" href="#">About Us</a>
          <a className="text-stone-500 text-sm hover:text-primary transition-all" href="#">Press</a>
          <a className="text-stone-500 text-sm hover:text-primary transition-all" href="#">Contact</a>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-primary font-label uppercase tracking-widest text-[10px] font-bold mb-2">Services</h5>
          <a className="text-stone-500 text-sm hover:text-primary transition-all" href="#">Authentication Process</a>
          <a className="text-stone-500 text-sm hover:text-primary transition-all" href="#">Shipping & Logistics</a>
          <a className="text-stone-500 text-sm hover:text-primary transition-all" href="#">Private Sales</a>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-primary font-label uppercase tracking-widest text-[10px] font-bold mb-2">Legal</h5>
          <a className="text-stone-500 text-sm hover:text-primary transition-all" href="#">Privacy Policy</a>
          <a className="text-stone-500 text-sm hover:text-primary transition-all" href="#">Terms of Service</a>
          <p className="mt-4 text-stone-400 text-[10px] uppercase tracking-tighter">© 2024 A little Bid. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
