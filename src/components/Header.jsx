import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      {/* Desktop and tablet  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt={logo} />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              About
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Services
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <p className="text-xs text-white font-semibold ">2</p>
            </div>
          </div>

          <motion.img
            whileTap={{ scale: 0.6 }}
            src={avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
            alt="user-profile"
          />
        </div>
      </div>

      {/* Mobile  */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
