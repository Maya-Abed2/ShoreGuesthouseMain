import { useState } from "react";
import { Link } from "react-router";
export default function Navbar() {
  const [menuName, setMenuName] = useState("Menu");
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (menuName == "Menu") {
      setMenuName("Close");
      setShowMenu(true);
    } else {
      setMenuName("Menu");
      setShowMenu(false);
    }
  }
  return (
    <div className="bg-white w-full py-3 md:py-0">
      <div className=" flex justify-between items-center border-b-1">
        <h1 className="pl-6">
          <Link to={"/"}>
            Shore Guesthouse
          </Link>
        </h1>
        <ul className="hidden md:flex space-x-12 items-center ">
          <Link to="/gallery" className="border-x-1 px-8 py-3 ">
              Gallery
          </Link>
          <Link to="/information">
            Information
          </Link>
          <a
            href="#Book"
            className="bg-black hover:bg-[#E5CBAD] duration-300  text-white py-3 px-8"
          >
            Book now
          </a>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden relative px-10  ">
          <h2 onClick={toggleMenu} className="border-l-1 pl-4 ">
            {menuName}
          </h2>
          <ul
            className={`
            bg-white fixed space-y-5 items-center right-0  w-full
            transition-all duration-300 ease-in-out
            ${showMenu ? "max-h-60 opacity-100 " : "max-h-0 opacity-0"} 
            overflow-hidden flex flex-col z-10`}
          >
            <Link to="/gallery" className="mt-4">
                Gallery
            </Link>
            <Link to="/information">
              Information
            </Link>
            <a
              href="#Book"
              className="bg-black hover:bg-[#E5CBAD] duration-300 text-white
            w-full text-center py-3 "
            >
              Book now
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
