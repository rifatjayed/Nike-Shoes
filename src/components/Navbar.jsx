import { ShoppingCart } from "lucide-react";
import { li } from "motion/react-client";
import React, { useState } from "react";
import { Link } from "react-router";

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
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="flex justify-between">
        {/* logo-section */}
        <div>
          <img src={"/src/assets/logo2.png"} alt="" className="max-w-[100px]" />
        </div>

        {/* Menu Section */}
        <div>
          <ul className="flex items-center">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="inline-block text-base font-semibold py-2 px-3 uppercase"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <Link>
              <button className="text-xl ps-14">
                <ShoppingCart></ShoppingCart>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
