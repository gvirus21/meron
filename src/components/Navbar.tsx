import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex justify-center items-center h-20 w-screen z-[99] text-black">
      <div className="flex justify-between items-center w-full max-w-[90rem] 2xl:max-w-[150rem]">
        <p className="text-lg mix-blend-difference">Meron.</p>

        <div className="flex mix-blend-difference">
          <button className="px-4 py-2 border border-black rounded-full mr-4">
            Join the community
          </button>
          <button className="px-4 py-2 border border-black rounded-full mr-4">
            Support
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
