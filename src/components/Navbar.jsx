import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router";
import ResponsiveMenu from "./ResponsiveMenu";
import { UpdateFollower } from "react-mouse-follower";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Mens",
    link: "/mens",
  },
  {
    id: 3,
    title: "Womens",
    link: "/womens",
  },
  {
    id: 4,
    title: "Kids",
    link: "/kids",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 6,
    title: "Login",
    link: "/login",
  },
  {
    id: 7,
    title: "Register",
    link: "/register",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" py-8">
      <div className="container flex justify-between items-center">
        {/* logo-section */}
        <div>
          <img
            src={"/src/assets/logo1.png"}
            alt=""
            className="max-w-[100px] "
          />
        </div>

        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative  z-40">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <Link
                    to={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </Link>
                </UpdateFollower>
              </li>
            ))}
            <Link to="/cart">
              <button className="text-xl ps-14">
                <ShoppingCart></ShoppingCart>
              </button>
            </Link>

            <button className="text-xl ps-8">
              <FaRegUser />
            </button>
          </ul>
        </div>

        <div className="flex gap-8 md:hidden z-50">
          <Link to={"/cart"}>
            <ShoppingCart></ShoppingCart>
          </Link>

          {/* mobile hamburger menu */}
          {showMenu ? (
            <HiMenuAlt1
              className="cursor-pointer transition-all md:hidden z-50"
              onClick={toggleMenu}
              size={30}
            ></HiMenuAlt1>
          ) : (
            <HiMenuAlt2
              className="cursor-pointer transition-all md:hidden z-50"
              onClick={toggleMenu}
              size={30}
            ></HiMenuAlt2>
          )}
        </div>
      </div>

      <div>
        <ResponsiveMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        ></ResponsiveMenu>
      </div>
    </div>
  );
};

export default Navbar;
