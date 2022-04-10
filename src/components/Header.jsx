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
    <header className="fixed z-50 w-screen p-3 px-4 bg-primary md:p-6 md:px-16">
      {/* Desktop and tablet  */}
      <div className="items-center justify-between hidden w-full h-full md:flex">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="object-cover w-8" alt={logo} />
          <p className="text-xl font-bold text-headingColor">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
          >
            <li
              className="text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor"
              onClick={() => setIsMenu(false)}
            >
              Home
            </li>
            <li
              className="text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor"
              onClick={() => setIsMenu(false)}
            >
              Menu
            </li>
            <li
              className="text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor"
              onClick={() => setIsMenu(false)}
            >
              About
            </li>
            <li
              className="text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor"
              onClick={() => setIsMenu(false)}
            >
              Services
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="ml-8 text-2xl text-textColor" />
            <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg ">
              <p className="text-xs font-semibold text-white">2</p>
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
                className="absolute right-0 flex flex-col w-40 rounded-lg shadow-xl bg-gray-50 top-12"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                {user && user.email === "creative201347@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="flex items-center gap-3 px-4 py-2 text-base transition-all ease-out cursor-pointer hover:bg-slate-100 text-textColor"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="flex items-center gap-3 px-4 py-2 text-base transition-all ease-out cursor-pointer hover:bg-slate-100 text-textColor"
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
      <div className="flex items-center justify-between w-full h-full md:hidden ">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="ml-8 text-2xl text-textColor" />
          <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg ">
            <p className="text-xs font-semibold text-white ">2</p>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="object-cover w-8" alt={logo} />
          <p className="text-xl font-bold text-headingColor">City</p>
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
              className="absolute right-0 flex flex-col w-40 rounded-lg shadow-xl bg-gray-50 top-12"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              {user && user.email === "creative201347@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className="flex items-center justify-center gap-3 px-4 py-2 text-base transition-all ease-out cursor-pointer hover:bg-slate-200 text-textColor"
                    onClick={() => setIsMenu(false)}
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <motion.ul
                className="flex flex-col justify-center gap-2 "
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
              >
                <li
                  className="px-4 pt-1 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor hover:bg-gray-200"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="px-4 pt-1 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor hover:bg-gray-200"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="px-4 pt-1 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor hover:bg-gray-200"
                  onClick={() => setIsMenu(false)}
                >
                  About
                </li>
                <li
                  className="px-4 pt-1 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor hover:bg-gray-200"
                  onClick={() => setIsMenu(false)}
                >
                  Services
                </li>
              </motion.ul>

              <p
                className="flex items-center justify-center gap-3 px-4 py-2 text-base transition-all ease-out bg-gray-100 cursor-pointer hover:bg-slate-200 text-textColor"
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
