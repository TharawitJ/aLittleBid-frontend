import React from 'react';
import { NavLink } from 'react-router';
import { LogoutIcon } from '../icons';
import EditUserProfile from '../components/EditUserProfile';
import EditUserAddress from '../components/EditUserAddress';
import useUserStore from "../stores/user.store.js"

const UserProfilePage = () => {
  
  return (
    <div className="bg-surface text-on-surface min-h-screen font-body selection:bg-primary-container selection:text-white">
      <main className="pt-12 pb-20 max-w-screen-2xl mx-auto px-8 flex gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-2">
            <nav className="flex flex-col gap-1">
              <NavLink className="flex items-center gap-3 px-4 py-3 text-[#7a0009] font-semibold border-l-2 border-[#7a0009] bg-surface-container-low transition-all duration-300">
                {/* <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span> */}
                <span className="text-sm tracking-wide uppercase font-medium">Profile</span>
              </NavLink>
              <NavLink to="/activebid" className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:text-stone-900 hover:bg-surface-container-low transition-all duration-300">
                {/* <span className="material-symbols-outlined">gavel</span> */}
                <span className="text-sm tracking-wide uppercase font-medium">Bidding Activity</span>
              </NavLink>
              <NavLink to="/favorite" className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:text-stone-900 hover:bg-surface-container-low transition-all duration-300" href="#">
                {/* <span className="material-symbols-outlined">visibility</span> */}
                <span className="text-sm tracking-wide uppercase font-medium">Watchlist</span>
              </NavLink>
              <NavLink to="/seller_list_product" className="flex items-center gap-3 px-4 py-3 text-stone-600 hover:text-stone-900 hover:bg-surface-container-low transition-all duration-300" href="#">
                {/* <span className="material-symbols-outlined">sell</span> */}
                <span className="text-sm tracking-wide uppercase font-medium">Consignments</span>
              </NavLink>

              <div className="pt-8 mt-8 border-t border-outline-variant/30 flex">
                <button type="button" className="text-label uppercase items-center gap-3 px-4 py-3 text-stone-400 hover:text-dark-red transition-all duration-300 flex"><LogoutIcon className="w-5" />
                  <span className='text-sm'>Logout</span>
                </button>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <section className="flex-grow space-y-16">
          {/* Hero Profile Section */}
          <div className="flex items-start justify-between border-b border-outline-variant/20 pb-12">
            <div className="flex items-center gap-8">
              <div className="relative group">
                <div className="w-32 h-32 overflow-hidden bg-surface-variant shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    alt="Alexander Sterling"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQWXNGSz_a-rD6yGldzplUAef-8pXOgNJs6kgapTPhYWZmUF64rqW8K6B07KNWplQMPbaoHJtptuBXTSQWBf_A5TmWaRmDtDogWY94saf-YtlXpKr0dCU-zX546SF86zjsCEhU59whIQtlYFclb6TnCz4hR1gRTxiyMQFsUKwpx0MqEyMu-UfrqKAGF6V0WKg5X38Y2ua_qCK6lrLQxhaDD42AZYQi4ETBML_RzILckNG9KFfKizTA6RtEpSXGUpyQb4WLQKaP94ty"
                  />
                </div>
                <button className="bg-gray-300 text-grey/60 shadow-lg hover:scale-105 transition-transform w-full">
                  <span className="material-symbols-outlined text-sm">edit</span>
                </button>
              </div>
              <div className='flex flex-col gap-5'>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-4xl font-serif italic text-red font-headline">Alexander Sterling</h1>
                    <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm">Elite Member</span>
                  </div>
                  <p className="text-stone-500 font-light tracking-wide italic">Member since November 2019 • London, UK</p>
                </div>
                <div className="flex gap-12">
                  <div className="text-right">
                    <span className="block text-3xl font-serif text-primary font-headline">12</span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Active Bids</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-serif text-primary font-headline">47</span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Won Items</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Personal Details Card */}
            <div className="bg-surface-container-lowest p-8 rounded-sm space-y-8">
              <div className="flex justify-between items-baseline">
                <h2 className="text-xl font-serif italic font-headline text-on-surface">Personal Details</h2>
                <button type="button" className="text-xs uppercase tracking-widest text-primary font-bold hover:underline decoration-1 underline-offset-4">Edit Profile</button>
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
                    Username
                  </label>
                  <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                    username
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
              </div>

              {/* Address form */}
              <div className=''>
                <div className="flex justify-between items-baseline w-full my-10">
                  <h2 className="text-xl font-serif italic font-headline text-on-surface">Address</h2>
                  <button type="button" className="text-xs uppercase tracking-widest text-primary font-bold hover:underline decoration-1 underline-offset-4">Edit Address</button>
                </div>

                <div className='grid grid-cols-2 gap-x-8 gap-y-10'>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Label
                    </label>
                    <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                      label
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Street
                    </label>
                    <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                      street
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      City
                    </label>
                    <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                      city
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      State
                    </label>
                    <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                      state
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Postal Code
                    </label>
                    <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                      10000
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      Country
                    </label>
                    <p className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body">
                      Thailand
                    </p>
                  </div>
                </div>
              </div>

              {/* <form action="">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">First Name</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      defaultValue="Alexander"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Last Name</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      defaultValue="Sterling"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Username</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      defaultValue="Sterling"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="email"
                      defaultValue="a.sterling@curator.com"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Phone Number</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="tel"
                      defaultValue="+44 20 7946 0123"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Address</label>
                    <br />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">House No.</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      placeholder=''
                      defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Street</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">City</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Province</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Country</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      defaultValue=""
                    />
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Postal Code</label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-outline/30 py-2 px-0 text-sm focus:outline-none focus:border-primary transition-colors font-body"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div> */}
              {/* <div className='flex justify-between mt-10'>
                  <button type="button" className='text-label bg-gray-400 w-20 py-1 rounded-sm text-white font-label'>Cancle</button>
                  <button className='text-label bg-green-600/80 w-20 py-1 rounded-sm text-white font-label'>Save</button>
                </div> */}
              {/* </form> */}
            </div>

            <div className="space-y-12">
              {/* Auction Preferences */}
              <div className="bg-surface-container-low p-8 rounded-sm space-y-6">
                <h2 className="text-xl font-serif italic font-headline text-on-surface">Auction Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="block text-sm font-medium">Outbid Notifications</span>
                      <span className="block text-xs text-on-surface-variant">Instant alerts when you are no longer the highest bidder</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Preferred Currency</label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/30 py-3 px-4 text-sm pr-10 focus:ring-0 focus:border-primary">
                        <option>GBP (£) - British Pound Sterling</option>
                        <option>USD ($) - US Dollar</option>
                        <option>EUR (€) - Euro</option>
                        <option>CHF (Fr) - Swiss Franc</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              {/* <div className="bg-surface-container-low p-8 rounded-sm space-y-6">
                <h2 className="text-xl font-serif italic font-headline text-on-surface">Security</h2>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-stone-400">lock</span>
                      <span className="text-sm font-medium">Change Password</span>
                    </div>
                    <span className="material-symbols-outlined text-stone-400 group-hover:text-primary transition-colors">chevron_right</span>
                  </button>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-stone-400">verified_user</span>
                      <div className="space-y-0.5">
                        <span className="block text-sm font-medium">Two-Factor Auth</span>
                        <span className="block text-[10px] text-green-700 font-bold uppercase tracking-wider">Enabled via Authenticator App</span>
                      </div>
                    </div>
                    <button className="text-[10px] uppercase tracking-widest text-stone-500 font-bold hover:text-primary">Configure</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Sticky Save Actions */}
          <div className="pt-12 mt-12 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-stone-500">
              <span className="material-symbols-outlined text-primary/60">security</span>
              <p className="text-xs italic leading-relaxed max-w-md">Your sensitive information is encrypted using industry-standard protocols. Last login: Today at 09:12 AM from London, UK.</p>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-[10px] uppercase tracking-widest font-bold text-stone-500 hover:text-on-surface transition-colors">Discard Changes</button>
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg hover:opacity-90 transition-all active:scale-95 rounded-[2px]">
                Save Profile
              </button>
            </div>
          </div>
        </section>

        <dialog className='modal' id='openeditprofile-modal' onClose={() => navigate('/user_profile')}>
          <div className="modal-box">
            <EditUserProfile />
          </div>
        </dialog>

        <dialog className='modal' id='openeditaddress-modal' onClose={() => navigate('/user_profile')}>
          <div className="modal-box">
            <EditUserAddress />
          </div>
        </dialog>
      </main>

      {/* Footer */}
      <footer className="bg-[#efeeeb] w-full py-12 px-8 border-t border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
          <div className="text-lg font-serif italic text-stone-900 font-headline mb-6 md:mb-0">
            The Digital Curator
          </div>
          <div className="flex gap-8 mb-6 md:mb-0">
            <a className="font-body uppercase tracking-widest text-[10px] text-stone-500 hover:text-stone-900 transition-colors" href="#">Privacy Policy</a>
            <a className="font-body uppercase tracking-widest text-[10px] text-stone-500 hover:text-stone-900 transition-colors" href="#">Terms of Service</a>
            <a className="font-body uppercase tracking-widest text-[10px] text-stone-500 hover:text-stone-900 transition-colors" href="#">Shipping & Returns</a>
            <a className="font-body uppercase tracking-widest text-[10px] text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact Us</a>
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
