import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex bg-gray-100 justify-between h-12 items-center">
      {/* logo section  */}
      <div className="flex items-center gap-2">
        <AiFillThunderbolt className="h-8 w-8 text-blue-500" />
        <span className="text-3xl font-bold">nextPage</span>
      </div>

      {/* nav item section  */}
      <div>
        <ul className="flex gap-5 cursor-pointer">
          <li>Home</li>
          <li>Books</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
