import React from 'react';

const Payment = () => {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-['Manrope'] selection:bg-[#9e1b1b] selection:text-white">
      {/* Top Navigation */}
      <header className="bg-[#fbf9f6]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#efeeeb]">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="text-2xl font-['Newsreader'] italic font-medium">Heritage Reserve</div>
          <nav className="hidden md:flex gap-8 items-center">
            <a className="text-[#59413e] hover:text-[#7a0009] text-sm tracking-wide" href="#">Galleries</a>
            <a className="text-[#7a0009] font-semibold border-b-2 border-[#7a0009] pb-1 text-sm tracking-wide" href="#">Auctions</a>
            <a className="text-[#59413e] hover:text-[#7a0009] text-sm tracking-wide" href="#">Private Sales</a>
            <a className="text-[#59413e] hover:text-[#7a0009] text-sm tracking-wide" href="#">Valuations</a>
          </nav>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-[#59413e] cursor-pointer">shopping_bag</span>
            <span className="material-symbols-outlined text-[#59413e] cursor-pointer">person</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Order Content */}
          <div className="flex-1 space-y-12">
            {/* Breadcrumbs & Title */}
            <div className="space-y-4">
              <nav className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold text-[#59413e]/60 uppercase">
                <span>SUCCESS</span>
                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                <span className="text-[#7a0009]">ORDER SUMMARY</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-['Newsreader'] italic tracking-tight">Order Summary</h1>
              <p className="text-[#59413e] text-lg leading-relaxed max-w-xl">
                Thank you for your successful bid. Please review the acquisition details below.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#f5f3f0] p-6 flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-[#59413e]/70 uppercase">ORDER NUMBER</span>
                <span className="text-sm font-bold">#AU-77492-EE</span>
              </div>
              <div className="bg-[#f5f3f0] p-6 flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-[#59413e]/70 uppercase">DATE</span>
                <span className="text-sm font-bold">October 24, 2024</span>
              </div>
              <div className="bg-[#f5f3f0] p-6 flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-[#59413e]/70 uppercase">STATUS</span>
                <span className="text-sm font-bold text-[#9e1b1b]">PENDING PAYMENT</span>
              </div>
            </div>

            {/* Product Detail Section */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2 aspect-[4/5] bg-[#e4e2df] overflow-hidden group rounded-sm">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB5MGQKgyVyVarX-cAy3RKs_ynqVF_yqC00ExGMEiyYvBh3Ld57u6iTPvZT9nUBUyI2M44B1e6_ObWdYKX_irBx8ibk2EUalurPZ_e2UKL38HX1oZoGdDrdckqmg_PLAD6tN856NsRWeJmKM7RVaFs-nXX5SqWxwx92RouvJgrH0JN1EfdcDY9sRZcHYoz9eEOlxOx2UH2qNjEUGUx2SE9oifUmwEzJ_8r4F2c7T5QG_EGscL1dDtiB6s3e29GY7olUQypDEGhyD3L" 
                  alt="Golden Model Sculpture" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6 pt-4">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#59413e] uppercase">LOT 442</span>
                  <h2 className="text-4xl font-['Newsreader'] mt-2">Golden Model</h2>
                </div>
                <p className="text-[#59413e] leading-relaxed italic">
                  A striking exploration of contemporary abstraction and the fluidity of memory. This piece captures light through its rhythmic, curved surfaces, standing as a testament to heritage craftsmanship reimagined for the digital age.
                </p>
                <div className="pt-4 space-y-1">
                  <span className="text-[10px] font-bold tracking-widest text-[#59413e]/70 uppercase">HAMMER PRICE</span>
                  <div className="text-3xl font-['Newsreader'] text-[#4b3519]">฿45,000</div>
                </div>
              </div>
            </div>

            {/* Address & Payment cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-widest uppercase">Shipping Address</h3>
                <div className="p-6 bg-white border border-[#8d706d]/10 space-y-1 rounded-sm">
                  <p className="font-bold">Julianne V. Sterling</p>
                  <p className="text-sm text-[#59413e]">242 West 24th St, Apt 4B</p>
                  <p className="text-sm text-[#59413e]">Chelsea, NY 10011</p>
                  <p className="text-sm text-[#59413e]">United States</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-widest uppercase">Payment Method</h3>
                <div className="p-6 bg-white border border-[#8d706d]/10 flex items-start gap-4 rounded-sm">
                  <div className="w-10 h-6 bg-stone-800 rounded flex items-center justify-center text-[10px] text-white font-bold tracking-tighter">AMEX</div>
                  <div className="space-y-1">
                    <p className="font-bold">American Express Platinum</p>
                    <p className="text-sm text-[#59413e]">•••• •••• •••• 9002</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Price Breakdown */}
          <aside className="w-full lg:w-[420px]">
            <div className="sticky top-32 bg-[#9e1b1b] text-white p-10 relative overflow-hidden rounded-sm">
              <div className="relative z-10 space-y-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-['Newsreader'] italic">Price Breakdown</h2>
                  <span className="material-symbols-outlined opacity-60">description</span>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-xs opacity-70 uppercase tracking-widest">Hammer Price</span>
                    <span className="font-['Newsreader'] text-xl italic">฿45,000</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-xs opacity-70 uppercase tracking-widest">Buyer's Premium (15%)</span>
                    <span className="font-['Newsreader'] text-xl italic">฿6,750</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-xs opacity-70 uppercase tracking-widest">Shipping & Insurance</span>
                    <span className="font-['Newsreader'] text-xl italic">฿1,200</span>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] font-bold tracking-[0.3em] opacity-60 uppercase">TOTAL AMOUNT</span>
                  <div className="text-6xl font-['Newsreader'] font-light tracking-tighter">฿52,950</div>
                </div>
                <div className="space-y-4 pt-4">
                  <button className="w-full bg-white text-[#7a0009] py-5 px-8 font-bold text-xs tracking-widest uppercase flex items-center justify-between group hover:bg-[#f5f3f0] transition-colors duration-300">
                    Confirm & Pay
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                  </button>
                  <button className="w-full border border-white/30 text-white py-5 px-8 font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-colors duration-300">
                    Download Invoice
                  </button>
                </div>
                <div className="pt-4 space-y-3 opacity-60 text-[10px] leading-relaxed tracking-wider font-medium">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    <span>SECURE 256-BIT ENCRYPTION PAYMENT</span>
                  </div>
                  <p>By clicking "Confirm & Pay", you agree to our <a className="underline underline-offset-4 decoration-1" href="#">Terms of Acquisition</a> and legal policies.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#efeeeb] w-full border-t border-[#e4e2df] flex flex-col items-center py-12 px-8 mt-24">
        <div className="mb-10 text-center space-y-2">
          <div className="font-['Newsreader'] text-lg text-stone-800 tracking-[0.3em] uppercase">Aureus Auctions</div>
          <div className="text-[10px] tracking-[0.5em] text-[#59413e]/60 font-bold uppercase">The Prestigious Curator</div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-8">
          {['Terms of Sale', 'Privacy Policy', 'Auction Rules', 'Contact Curator'].map((link) => (
            <a key={link} className="text-[#59413e] text-xs tracking-widest uppercase hover:underline decoration-[#9e1b1b] underline-offset-4" href="#">{link}</a>
          ))}
        </div>
        <div className="text-[#59413e] text-[10px] tracking-widest uppercase">
          © 2024 Heritage Reserve. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Payment;
