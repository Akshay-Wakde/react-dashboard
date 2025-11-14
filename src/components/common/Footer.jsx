import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 p-4 mt-auto">
      <div className="text-center text-sm text-gray-500">
        &copy; {currentYear} My React Dashboard. All rights reserved. 
        <span className="ml-4 text-xs text-gray-400">
          Version 1.0.0
        </span>
      </div>
    </footer>
  );
};

export default Footer;