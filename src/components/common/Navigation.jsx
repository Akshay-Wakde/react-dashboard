import React from 'react';
import { NavLink } from 'react-router-dom';



const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-4 py-3 my-1 transition-colors duration-200 rounded-lg group
       ${isActive
         ? 'bg-blue-600 text-white shadow-md'
         : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
       }`
    }
  >
    
    <span className="font-medium">{label}</span>
  </NavLink>
);

const Navigation = () => {
  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200">
      {/* Logo/Brand Section */}
      <div className="flex items-center justify-center h-15 shadow-sm border-b border-gray-200">
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-wider">
          <span className="text-gray-800">MY</span>APP
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        {/* Main Links */}
        <NavItem to="/" label="Dashboard" />

        <h3 className="text-xs uppercase text-gray-400 font-semibold mt-6 mb-2 tracking-wider">
          USERS MANAGEMENT
        </h3>
        
        {/* Users Sub-Menu */}
        <div className="pl-3">
          <NavItem to="/users/list" label="List" />
          <NavItem to="/users/add" label="Add" />
          <NavItem to="/users/import"  label="Import" />
        </div>
      </nav>
      

      {/* Optional: User Profile/Settings Link at the bottom */}
    </div>
  );
};

export default Navigation;