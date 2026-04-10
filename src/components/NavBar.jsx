import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <>
      <nav className="top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto bg-surface/70 backdrop-blur-md border-b-[0.5px] border-outline-variant/20">
        {/* <div className="flex items-center gap-8"> */}
          <Link to='/'>
            <div className="font-headline italic text-2xl text-primary">A little Bid</div>
          </Link>
          <div className="hidden md:flex gap-15">
            <Link to='/auction'>
              <div className="text-secondary font-semibold pb-1 font-label uppercase tracking-widest text-[10px]">Auctions</div>
            </Link>
            <Link to='/products'>
              <div className="text-secondary font-medium hover:text-primary transition-colors duration-300 font-label uppercase tracking-widest text-[10px]">Products</div>
            </Link>
            <Link to='/my_order_list'>
              <div className="text-secondary font-medium hover:text-primary transition-colors duration-300 font-label uppercase tracking-widest text-[10px]">My Order</div>
            </Link>
            <Link to='/payment'>
              <div className="text-secondary font-medium hover:text-primary transition-colors duration-300 font-label uppercase tracking-widest text-[10px]">Payment</div>
            </Link>
          </div>
        {/* </div> */}
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">favorite</button>
          <button className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-DEFAULT font-label uppercase tracking-widest text-[10px] hover:bg-primary-container transition-all active:scale-95 duration-200">
            Sign In
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar;