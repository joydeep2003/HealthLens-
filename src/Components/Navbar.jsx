import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-75 backdrop-blur-lg text-gray-800 p-4 flex justify-between items-center fixed top-0 w-full z-30 transition duration-300 ease-in-out shadow-md" style={{ height: '70px' }}>

      <div className="flex items-center">
        <img src="public\logo.png" alt="HealthLens Logo" className="h-10 mr-3" />
        <a href="#home" className="text-2xl font-bold hover:text-blue-500 transition duration-300">HealthLens</a>
      </div>
      <ul className="flex space-x-4 items-center">
        <li className="text-sm md:text-base hover:text-blue-500 transition duration-300 px-4 py-2"><a href="#home">Home</a></li>
        <li className="text-sm md:text-base hover:text-blue-500 transition duration-300 px-4 py-2"><a href="#about">About</a></li>
        <li className="text-sm md:text-base hover:text-blue-500 transition duration-300 px-4 py-2"><a href="#contact">Contact</a></li>
        <li>
          <button className="text-sm md:text-base border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 px-4 py-2 rounded-full">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
