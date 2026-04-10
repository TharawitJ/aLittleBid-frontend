import React, { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle potential negative scroll (iOS bounce)
      if (currentScrollY <= 0) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Add a small delta to prevent jitter
      const diff = currentScrollY - lastScrollY.current;
      if (Math.abs(diff) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinkClass = (isActive) =>
    `pb-1 transition-all duration-200 ${
      isActive
        ? "text-[#9e1b1b] border-b-2 border-[#9cff93] font-bold"
        : "text-[#5f5e5e] font-medium hover:text-white"
    }`;

  return (
    <nav
      className={`sticky top-0 w-full z-50 bg-[#fbf9f6]/80 backdrop-blur-md border-b border-[#e1bebb]/15 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-5 w-full max-w-screen-2xl mx-auto">
        <div className="text-2xl font-['Newsreader',_serif] italic font-semibold text-[#1b1c1a]">
          The Digital Curator
        </div>
        <div className="hidden md:flex items-center gap-10 font-['Newsreader',_serif] tracking-tight text-lg">
          <a
            href="#"
            className="text-[#9e1b1b] font-semibold border-b-2 border-[#9e1b1b] pb-1"
          >
            123
          </a>
          <a
            href="#"
            className="text-[#5f5e5e] hover:text-[#1b1c1a] transition-all duration-300"
          >
            Live Auctions
          </a>
          <a
            href="#"
            className="text-[#5f5e5e] hover:text-[#1b1c1a] transition-all duration-300"
          >
            Private Sales
          </a>
          <a
            href="#"
            className="text-[#5f5e5e] hover:text-[#1b1c1a] transition-all duration-300"
          >
            Artisans
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-[#efeeeb] px-4 py-2 rounded-sm group">
            <span className="material-symbols-outlined text-[#59413e] text-lg">
              search
            </span>
            <input
              type="text"
              placeholder="Search archives..."
              className="bg-transparent border-none focus:ring-0 text-sm ml-2 placeholder-[#59413e]/60"
            />
          </div>
          <div className="flex items-center gap-5 text-[#9e1b1b]">
            <button className="hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined text-2xl">
                notifications
              </span>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined text-2xl">
                favorite
              </span>
            </button>
            <button className="font-['Newsreader',_serif] italic px-6 py-1.5 border border-[#7a0009] text-[#7a0009] hover:bg-[#7a0009] hover:text-white transition-all duration-300">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
