import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { useState } from "react";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* Desktop and tablet  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt={logo} />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
          >
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
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <p className="text-xs text-white font-semibold ">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              className="w-10 min-w-[40px] p-1 h-10 min-h-[40px] rounded-full drop-shadow-xl cursor-pointer"
              alt="user-profile"
              onClick={login}
            />

            {isMenu && (
              <motion.div
                className="w-40 bg-gray-50 shadow-xl flex flex-col rounded-lg absolute  top-12 right-0"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                {user && user.email === "creative201347@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-out text-textColor text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile  */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl ml-8" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
            <p className="text-xs text-white font-semibold ">2</p>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt={logo} />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="w-10 min-w-[40px] p-1 h-10 min-h-[40px] rounded-full drop-shadow-xl cursor-pointer"
            alt="user-profile"
            onClick={login}
          />

          {isMenu && (
            <motion.div
              className="w-40 bg-gray-50 shadow-xl flex flex-col rounded-lg absolute  top-12 right-0"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              {user && user.email === "creative201347@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center justify-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <motion.ul
                className="flex flex-col justify-center gap-2  "
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
              >
                <li className="text-base px-4 pt-1 text-textColor cursor-pointer hover:text-headingColor hover:bg-gray-200    duration-100 transition-all ease-in-out">
                  Home
                </li>
                <li className="text-base px-4 pt-1 text-textColor cursor-pointer hover:text-headingColor hover:bg-gray-200   duration-100 transition-all ease-in-out">
                  Menu
                </li>
                <li className="text-base px-4 pt-1 text-textColor cursor-pointer hover:text-headingColor hover:bg-gray-200   duration-100 transition-all ease-in-out">
                  About
                </li>
                <li className="text-base px-4 pt-1 text-textColor cursor-pointer hover:text-headingColor hover:bg-gray-200   duration-100 transition-all ease-in-out">
                  Services
                </li>
              </motion.ul>

              <p
                className="px-4 py-2 flex items-center justify-center bg-gray-100 hover:bg-slate-200 gap-3 cursor-pointer transition-all ease-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
