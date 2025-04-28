import React from 'react';

const Navbar = () => (
  <nav className="bg-purple-700 text-white shadow-lg">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="text-xl font-bold">JK's Planner</h1>
        </div>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Contact'].map(label => (
            <li key={label} className="hover:text-purple-200 transition-colors">
              <a href="#" className="focus:outline-none focus:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;