import React from "react";

const UserProfilePage = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen font-body selection:bg-primary-container selection:text-white">
      {/* 
        Note: The following fonts and icons must be included in your HTML head:
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      */}
      <main className="pt-24 pb-20 max-w-screen-2xl mx-auto px-8 flex gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-2">
            <nav className="flex flex-col gap-1">
              <a
                className="flex items-center gap-3 px-4 py-3 text-[#7a0009] font-semibold border-l-2 border-[#7a0009] bg-surface-container-low transition-all duration-300"
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  person
                </span>
                <span className="text-sm tracking-wide uppercase font-medium">
                  Profile
                </span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:text-stone-900 hover:bg-surface-container-low transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined">gavel</span>
                <span className="text-sm tracking-wide uppercase font-medium">
                  Bidding Activity
                </span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:text-stone-900 hover:bg-surface-container-low transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined">visibility</span>
                <span className="text-sm tracking-wide uppercase font-medium">
                  Watchlist
                </span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:text-stone-900 hover:bg-surface-container-low transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined">sell</span>
                <span className="text-sm tracking-wide uppercase font-medium">
                  Consignments
                </span>
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:text-stone-900 hover:bg-surface-container-low transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm tracking-wide uppercase font-medium">
                  Settings
                </span>
              </a>
              <div className="pt-8 mt-8 border-t border-outline-variant/30">
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <section className="flex-grow space-y-16">
          {/* Hero Profile Section */}
          <div className="flex items-end justify-between border-b border-outline-variant/20 pb-12">
            <div className="flex items-center gap-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-sm overflow-hidden bg-surface-variant shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    alt="Alexander Sterling"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQWXNGSz_a-rD6yGldzplUAef-8pXOgNJs6kgapTPhYWZmUF64rqW8K6B07KNWplQMPbaoHJtptuBXTSQWBf_A5TmWaRmDtDogWY94saf-YtlXpKr0dCU-zX546SF86zjsCEhU59whIQtlYFclb6TnCz4hR1gRTxiyMQFsUKwpx0MqEyMu-UfrqKAGF6V0WKg5X38Y2ua_qCK6lrLQxhaDD42AZYQi4ETBML_RzILckNG9KFfKizTA6RtEpSXGUpyQb4WLQKaP94ty"
                  />
                </div>
                <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-sm shadow-lg hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-serif italic text-on-surface font-headline">
                    Alexander Sterling
                  </h1>
                  <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm">
                    Elite Member
                  </span>
                </div>
                <p className="text-stone-500 font-light tracking-wide italic">
                  Member since November 2019 • London, UK
                </p>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="text-right">
                <span className="block text-3xl font-serif text-primary font-headline">
                  12
                </span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Active Bids
                </span>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-serif text-primary font-headline">
                  47
                </span>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Won Items
                </span>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Personal Details Card */}
            <div className="bg-surface-container-lowest p-8 rounded-sm space-y-8">
              <div className="flex justify-between items-baseline">
                <h2 className="text-xl font-serif italic font-headline text-on-surface">
                  Personal Details
                </h2>
                {/* Show modal */}
                <button className="text-xs uppercase tracking-widest text-primary font-bold hover:underline decoration-1 underline-offset-4">
                  Edit Profile
                </button>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                    First Name
                  </label>
                  <p
                    className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                    defaultValue=""
                  >
                    Alexander
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                    Last Name
                  </label>
                  <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                    Sterling
                  </p>
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                    Email Address
                  </label>
                  <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                    a.sterling@curator.com
                  </p>
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                    Phone Number
                  </label>
                  <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                    +44 20 7946 0123
                  </p>
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                    Mailing Address
                  </label>
                  <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                    14 Savile Row, Mayfair, London W1S 3JN
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Auction Preferences */}
              <div className="bg-surface-container-low p-8 rounded-sm space-y-6">
                <h2 className="text-xl font-serif italic font-headline text-on-surface">
                  Auction Preferences
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="block text-sm font-medium">
                        Outbid Notifications
                      </span>
                      <span className="block text-xs text-on-surface-variant">
                        Instant alerts when you are no longer the highest bidder
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Preferred Currency
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/30 py-3 px-4 text-sm pr-10 focus:ring-0 focus:border-primary">
                        <option>GBP (£) - British Pound Sterling</option>
                        <option>USD ($) - US Dollar</option>
                        <option>EUR (€) - Euro</option>
                        <option>CHF (Fr) - Swiss Franc</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Save Actions */}
          <div className="pt-12 mt-12 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-stone-500">
              <span className="material-symbols-outlined text-primary/60">
                security
              </span>
              <p className="text-xs italic leading-relaxed max-w-md">
                Your sensitive information is encrypted using industry-standard
                protocols. Last login: Today at 09:12 AM from London, UK.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#efeeeb] w-full py-12 px-8 border-t border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-lg font-serif italic text-stone-900 font-headline mb-6 md:mb-0">
            The Digital Curator
          </div>
          <div className="flex gap-8 mb-6 md:mb-0">
            <a
              className="font-body uppercase tracking-widest text-[10px] text-stone-500 hover:text-stone-900 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-body uppercase tracking-widest text-[10px] text-stone-500 hover:text-stone-900 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-body uppercase tracking-widest text-[10px] text-stone-500 hover:text-stone-900 transition-colors"
              href="#"
            >
              Shipping & Returns
            </a>
            <a
              className="font-body uppercase tracking-widest text-[10px] text-stone-500 hover:text-stone-900 transition-colors"
              href="#"
            >
              Contact Us
            </a>
          </div>
          <p className="font-body uppercase tracking-widest text-[10px] text-stone-500">
            © 2024 The Digital Curator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UserProfilePage;
