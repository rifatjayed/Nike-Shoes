import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { NavbarMenu } from "./Navbar";
import { Link } from "react-router";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white/50 backdrop:blur-md px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <div className="flex items-center">
          <FaUserCircle size={50}></FaUserCircle>
          <div>
            <h1>Hellow User</h1>
            <h1 className="text-sm text-slate-500"> Premium User</h1>
          </div>
        </div>

        <nav>
          <ul>
            {NavbarMenu.map((item, index) => (
              <li key={index} onClick={() => setShowMenu(false)}>
                <Link
                  to={item.link}
                  className=" inline-block text-base font-semibold py-2 px-3 uppercase"
                >
                  {" "}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
