// import React, { useContext, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { ShoppingCart } from "lucide-react";
// import { NavbarMenu } from "./Navbar";
// import { FaRegUser } from "react-icons/fa";
// import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
// import { Link } from "react-router";
// import ResponsiveMenu from "./ResponsiveMenu";
// import { UpdateFollower } from "react-mouse-follower";
// import { AuthContext } from "../Context/AuthProvider";

// const Navbar2 = () => {
//   const { user, logOut } = useContext(AuthContext);
//   // const emailName = user.email;
//   // console.log(user);
//   const [showMenu, setShowMenu] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleLogOut = () => {
//     logOut()
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const { getTotalCartItems, getTotalCartItemsAll } = useContext(ShopContext);

//   return (
//     <div className=" text-black py-2  bg-gray-100 z-10 sm:px-8 md:px-16 lg:px-28">
//       <div className="container flex justify-between items-center">
//         {/* logo-section */}
//         <div>
//           <img
//             src={"/src/assets/logo2.png"}
//             alt=""
//             className="max-w-[100px] "
//           />
//         </div>

//         {/* Menu Section */}
//         <div className="hidden md:block">
//           <ul className="flex items-center gap-4 relative  z-40">
//             {NavbarMenu.map((item, index) => (
//               <li key={index}>
//                 <UpdateFollower
//                   mouseOptions={{
//                     backgroundColor: "white",
//                     zIndex: 9999,
//                     followSpeed: 1.5,
//                     scale: 5,
//                     mixBlendMode: "difference",
//                   }}
//                 >
//                   <Link
//                     to={item.link}
//                     className="inline-block text-base font-semibold py-2 px-3 uppercase"
//                   >
//                     {item.title}
//                   </Link>
//                 </UpdateFollower>
//               </li>
//             ))}
//             <Link to="/cart">
//               <button className="text-xl ps-14">
//                 <ShoppingCart></ShoppingCart>
//               </button>
//             </Link>

//             <button className="text-xl ps-8">
//               <FaRegUser />
//             </button>

//             {user ? (
//               <>
//                 <p>{user.displayName}</p>
//                 <button
//                   onClick={handleLogOut}
//                   className="inline-block text-base font-semibold py-2 px-3 uppercase"
//                 >
//                   LogOut{" "}
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login">
//                   <button className="inline-block text-base font-semibold py-2 px-3 uppercase">
//                     LogIn{" "}
//                   </button>
//                 </Link>
//               </>
//             )}
//           </ul>
//         </div>

//         <div className="flex gap-8 md:hidden z-50">
//           <Link to={"/cart"}>
//             <div className="relative w-10 z-50">
//               <ShoppingCart></ShoppingCart>
//               {/* <div className="bg-[#138695] z-40 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">
//                 {getTotalCartItems()}
//               </div> */}
//               <div className="bg-[#138695] z-40 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">
//                 {getTotalCartItemsAll()}
//               </div>
//             </div>
//           </Link>

//           {/* mobile hamburger menu */}
//           {showMenu ? (
//             <HiMenuAlt1
//               className="cursor-pointer transition-all md:hidden z-50"
//               onClick={toggleMenu}
//               size={30}
//             ></HiMenuAlt1>
//           ) : (
//             <HiMenuAlt2
//               className="cursor-pointer transition-all md:hidden z-50"
//               onClick={toggleMenu}
//               size={30}
//             ></HiMenuAlt2>
//           )}
//         </div>
//       </div>

//       <div>
//         <ResponsiveMenu
//           showMenu={showMenu}
//           setShowMenu={setShowMenu}
//         ></ResponsiveMenu>
//       </div>
//     </div>
//   );
// };

// export default Navbar2;

import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { ShoppingCart } from "lucide-react";
import { NavbarMenu } from "./Navbar";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router";
import ResponsiveMenu from "./ResponsiveMenu";
import { UpdateFollower } from "react-mouse-follower";
import { AuthContext } from "../Context/AuthProvider";

const Navbar2 = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { getTotalCartItemsAll } = useContext(ShopContext);

  return (
    <div className="text-black py-2 bg-gray-100 z-10 sm:px-8 md:px-16 lg:px-28">
      <div className="container flex justify-between items-center">
        {/* logo-section */}
        <div>
          <img src={"/src/assets/logo2.png"} alt="" className="max-w-[100px]" />
        </div>

        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
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

            {/* Cart Icon with Quantity Badge */}
            <li>
              <Link to="/cart" className="relative">
                <ShoppingCart className="text-xl" />
                <div className="bg-[#138695] w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center rounded-full text-white text-xs font-bold">
                  {getTotalCartItemsAll()}
                </div>
              </Link>
            </li>

            {/* User Icon */}
            <li>
              <button className="text-xl">
                <FaRegUser />
              </button>
            </li>

            {/* User Authentication */}
            <li>
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">
                    {user.displayName || user.email}
                  </span>
                  <button
                    onClick={handleLogOut}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase hover:text-[#138695] transition-colors"
                  >
                    LogOut
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="inline-block text-base font-semibold py-2 px-3 uppercase hover:text-[#138695] transition-colors">
                    LogIn
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu Section */}
        <div className="flex gap-8 md:hidden z-50">
          {/* Cart Icon for Mobile */}
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} />
            <div className="bg-[#138695] w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center rounded-full text-white text-xs font-bold">
              {getTotalCartItemsAll()}
            </div>
          </Link>

          {/* Mobile hamburger menu */}
          {showMenu ? (
            <HiMenuAlt1
              className="cursor-pointer transition-all"
              onClick={toggleMenu}
              size={30}
            />
          ) : (
            <HiMenuAlt2
              className="cursor-pointer transition-all"
              onClick={toggleMenu}
              size={30}
            />
          )}
        </div>
      </div>

      {/* Responsive Menu */}
      <div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  );
};

export default Navbar2;
