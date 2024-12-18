import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { NavbarMenu } from "./Navbar";
import { Link } from "react-router";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div>
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
              <li key={index} onClick={setShowMenu(false)}>
                <Link to={item.link}> {item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
