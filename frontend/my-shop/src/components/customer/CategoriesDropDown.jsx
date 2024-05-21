import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const CategoriesDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-20">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm bg-[#76ABAE] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-950 focus:ring-white z-20"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Categories
          {/* Add an arrow icon here if needed */}
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {/* Dropdown items */}
          <div className="py-1" role="none">
            <NavLink
              to="products/all"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
              role="menuitem"
              activeClassName="bg-blue-200" // Add your active class here if needed
            >
              All
            </NavLink>
            <NavLink
              to="products/electronic"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline z-20"
              role="menuitem"
              activeClassName="bg-blue-200" // Add your active class here if needed
            >
              Electronic
            </NavLink>
            <NavLink
              to="products/food"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline z-20"
              role="menuitem"
              activeClassName="bg-blue-200" // Add your active class here if needed
            >
              Food
            </NavLink>
            <NavLink
              to="products/personalCare"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
              role="menuitem"
              activeClassName="bg-blue-200" // Add your active class here if needed
            >
              Hygene And Personal Care
            </NavLink>
            <NavLink
              to="products/personalCare"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline"
              role="menuitem"
              activeClassName="bg-blue-200" // Add your active class here if needed
            >
              Kitchen Appliances
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropDown;
