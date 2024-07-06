import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-slate-700 text-white py-2">
      <div className="logo">
        <span className='font-bold lg:text-xl md:text-lg'>JK's Planner</span>
      </div>
      <ul className='flex gap-8 mx-10'>
        <li className='hover:font-bold transition-all duration-500'><a href="#">Home</a></li>
        <li className='hover:font-bold transition-all duration-500'><a href="#">About</a></li>
        <li className='hover:font-bold transition-all duration-500'><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;