import React from 'react';

// Replace with actual icons
const BellIcon = () => <svg className="w-6 h-6 text-gray-500 hover:text-blue-600 transition duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.87 5.201 7 6.395 7 7.5V14.158c0 .873-.284 1.72-.803 2.44L4 17h5m0 0a2 2 0 114 0m-4 0h4"></path></svg>;


const Header = () => {
  return (
    <header className="flex justify-between items-center h-15 px-6 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
      
      {/* Left: Search Bar */}
      <div className="relative w-96">
      
      </div>

      {/* Right: User Menu & Notifications */}
      <div className="flex items-center space-x-4">
        
        {/* Notifications Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition duration-150 relative">
          <BellIcon />
          {/* Badge for unread notifications */}
          <span className="absolute top-1 right-1 block w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* User Dropdown */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img 
            className="object-cover w-10 h-10 rounded-full border-2 border-blue-500" 
            src="" // Replace with actual avatar URL
            alt="User Avatar"
          />
          <div className="text-left hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;