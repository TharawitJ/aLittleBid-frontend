import React from 'react';

const ProductPage = () => {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-['Manrope'] min-h-screen">

      <main className="pt-32 pb-24 px-12 max-w-screen-2xl mx-auto">
        <section className="mb-20 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#800000] mb-4 block">Curated Selections</span>
          <h1 className="text-5xl md:text-6xl mb-8 leading-tight font-['Noto_Serif']">Masterpieces of the <br/><span className="italic">Modern Era.</span></h1>
          <div className="max-w-3xl mx-auto relative group">
            <input type="text" placeholder="Search by artist, movement, or material..." className="w-full h-16 pl-16 pr-8 bg-[#f6f3f2] border-none rounded-full focus:ring-2 focus:ring-[#570000]/20 text-lg shadow-sm outline-none" />
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-[#800000] text-3xl">search</span>
          </div>
        </section>

        <div className="flex justify-between items-end mb-12 text-left">
          <div>
            <h2 className="text-4xl font-['Noto_Serif']">All Products</h2>
            <p className="text-stone-500 mt-2">Showing 428 curated auction lots</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-stone-200 text-[10px] font-semibold uppercase tracking-widest hover:bg-stone-50 transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span> Filter
            </button>
          </div>
        </div>

        {/* Asymmetric Product Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 text-left">
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
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
