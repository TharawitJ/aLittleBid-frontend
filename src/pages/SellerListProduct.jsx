import React from 'react';
import useProductStore from "../stores/product.store.js"
import useUserStore from "../stores/user.store.js"

const SellerUserListProduct = () => {
  const {allProducts}=useProductStore()
  const {user}=useUserStore()

  const filterSellerProduct = allProducts.filter((p)=>p.seller === user.id)
  console.log(filterSellerProduct)
  console.log("user",user)
  // console.log()
  const inventoryItems = [
    {
      id: 1,
      title: "Reflections 04",
      category: "Timeless Horology",
      status: "Active Lot",
      priceLabel: "Current Bid",
      price: "$4,200",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz74EW1P6kdmyOLQYMJos8Vkm-vCSDif4rnmlIe6KCJ3PskZ0Yy4hC8Q0mtQgJQq3V2qfbV1MUyZrGMGAg39mnf3Dj8TQ5ps3tMpjazl1HE9YmdiTgfVPT8CN-aB4SfYAZ0dwW1SPZMgeekQrPQt9JQnIsg68nnp7zj05VxyL_xi_fhVISZLpr0pY3nfESxmWwXJNoSeLvye_n64p8rYCEvzVCiWuH8TUI5STh8EFLmbLDUQT-CLtZriVcxUdoAiFmZm5uL2OiTmmA",
      statusColor: "bg-[#7a0009]"
    },
    {
      id: 2,
      title: "Lumina Sculpt",
      category: "Modern Interiors",
      status: null,
      priceLabel: "Valuation",
      price: "$850",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN8LeV8Rxx7urt-Ok-Zi3sjjVGZurRPU7_e8iZJjEYBQE3fhUOziPr3M1LVNuZlNYKlRMsP73gLMzOtS2yEHYnpSqlEFkqXS_w7FSCRXVdlHzHJfT3nxd4sgmyru9V4YZ2uAhqeglKABu_H_b8XfuovXjzg4uAO7OMZhiNUCrW0s1lhAQ-3LlpiiVWOty23lvBuvDfEjhkIcHT9AoFBVqH84um-FjmCqpMMrONdn50PvybKkgmWHJ4Wynm7uWCJuSNyPlbrNz5ilPq",
    },
    {
      id: 3,
      title: "Ethereal Avian",
      category: "Heritage Ceramics",
      status: "Private Sale",
      priceLabel: "Price",
      price: "$12,400",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpEd0xq6_kqyVs-3ZUZqVmfuoE6A5XeEyMErQd9IMsla0ZD865IX7EPcqiK8pzQ0p-uKQgYwoZ7MgmAk2HL8vffXsvQCFd0dHVS9pnUiVYJx15FYRdw3ppBtYLu0_Dc6a1IsUHpyNuPrMPPQfyo_neXtly6wv7HcQTwRuir9e8BOX11DWoy3xn0t8BUvOidW0-tzivNQ6yM9wdB6q_KTIP6y8hiXlMrMNUftsWyAk0eyqswKi-enRfVEZOvAHSetMU183lx2LG1wsl",
      statusColor: "bg-[#4b3519]"
    },
    {
      id: 4,
      title: "Sole Archetype",
      category: "Artisanal Fashion",
      status: null,
      priceLabel: "Current Bid",
      price: "$1,100",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa-lrWyF-vxk6FOjDdKmC37jS3aCIG17GRpjIIpskFrCjOdRqq2smic7u7a6cM7x8bPv68o4StrpK0dSC2Bfduwuzi1GFdb8SzzACmjb1VurJzechE2utrLuCFXGWrWfzVX0dP3tOqX7LNcJNLDiaFfIN6F5Q2L2Wbo8z7vTaEDY6DLxYzXkf7rJ_lkTgEYy0JlluoKWaW-hw0f3iHdVIh859OyQjaMfCrw_zw5RBGggrCSSs3b6CUGwPT3a68uGhpVbuVfD9Vhq2V",
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-['Manrope']">
      <main className="max-w-[1440px] mx-auto flex min-h-screen">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col gap-4 p-6 bg-[#f5f3f0] w-64 border-r border-[#efeeeb] sticky top-[73px] h-[calc(100vh-73px)]">
          <div className="mb-8">
            <h2 className="text-sm uppercase tracking-widest text-[#9e1b1b] font-bold">Inventory</h2>
            <p className="text-xs text-[#59413e]/60 mt-1">Curating your collection</p>
          </div>
          <nav className="flex flex-col gap-2">
            {[
              { label: 'All' },
              { label: 'Active Lots' },
              { label: 'Sold' },
              // { label: 'Collectibles', icon: 'auto_awesome' }
            ].map((nav) => (
              <a 
                key={nav.label}
                href="#" 
                className={`flex items-center gap-3 p-3 rounded-sm transition-all ${
                  nav.active 
                  ? 'bg-white font-bold shadow-sm' 
                  : 'text-[#59413e] hover:bg-[#efeeeb]'
                }`}
              >
                <span className={`material-symbols-outlined ${nav.active ? 'fill-1' : ''}`}>{nav.icon}</span>
                <span className="text-xs uppercase tracking-widest">{nav.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Canvas */}
        <section className="flex-1 px-8 py-12">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <h1 className="text-5xl font-['Newsreader'] tracking-tight">Curated Inventory</h1>
              <p className="text-[#59413e] mt-4 max-w-md">
                Manage your listed items, adjust valuations, and monitor active bidding status across your private gallery.
              </p>
            </div>
            <button className="bg-gradient-to-br from-[#7a0009] to-[#9e1b1b] text-white flex items-center gap-3 px-8 py-4 rounded-sm shadow-xl shadow-[#7a0009]/10 active:scale-[0.98] transition-all uppercase tracking-widest text-xs font-bold">
              <span className="material-symbols-outlined">add</span>
              Add New Product
            </button>
          </div>

          {/* Bento Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#f5f3f0] p-4 flex items-center justify-between rounded-sm cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest text-[#59413e]">Sort By</span>
              <span className="material-symbols-outlined text-lg text-[#59413e]">filter_list</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {inventoryItems.map((item) => (
              <div key={item.id} className="group flex flex-col bg-white rounded-sm transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/5] bg-[#e4e2df] overflow-hidden rounded-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.status && (
                    <div className={`absolute top-4 left-4 ${item.statusColor || 'bg-[#7a0009]'} text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest`}>
                      {item.status}
                    </div>
                  )}
                </div>
                <div className="pt-6 pb-4 px-1">
                  <h3 className="text-lg font-['Newsreader'] italic mb-1">{item.title}</h3>
                  <p className="text-xs text-[#59413e] uppercase tracking-tighter mb-4">{item.category}</p>
                  <div className="flex justify-between items-end border-t border-[#e1bebb]/15 pt-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-[#59413e]">{item.priceLabel}</span>
                      <span className="text-xl font-['Newsreader'] text-[#7a0009]">{item.price}</span>
                    </div>
                    <button className="text-xs font-bold uppercase tracking-widest hover:text-[#7a0009] transition-colors flex items-center gap-1">
                      Edit <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#efeeeb] w-full py-12 px-8 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1440px] mx-auto">
          <div>
            <span className="text-lg font-['Newsreader']">The Digital Curator</span>
            <p className="text-xs uppercase tracking-tighter text-[#59413e] mt-2">© 2024 The Digital Curator. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Sale', 'Appraisal Services', 'Contact Us'].map((link) => (
              <a key={link} className="text-xs uppercase tracking-tighter text-[#59413e] hover:text-[#9e1b1b] transition-colors" href="#">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SellerUserListProduct;
