import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { ShoppingCart } from "lucide-react";
import { NavbarMenu } from "./Navbar";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router";
import ResponsiveMenu from "./ResponsiveMenu";
import { UpdateFollower } from "react-mouse-follower";

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className=" text-black py-2 bg-gray-100 z-10">
      <div className="container flex justify-between items-center">
        {/* logo-section */}
        <div>
          <img
            src={"/src/assets/logo2.png"}
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
            <div className="relative w-10 z-50">
              <ShoppingCart></ShoppingCart>
              <div className="bg-[#138695] z-40 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">
                {getTotalCartItems()}
              </div>
            </div>
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

export default Navbar2;
