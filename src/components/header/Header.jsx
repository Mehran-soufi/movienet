import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderBtn from "./HeaderBtn";
import { TiThMenuOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [scrollYHeight, setScrollYHeight] = useState(false);
  const [btnHumber, setBtnHumber] = useState(window.innerWidth > 768);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.scrollY;
      setScrollYHeight(headerHeight > 80);
    };

    const handleResize = () => {
      const headerWidth = window.innerWidth;
      setBtnHumber(headerWidth > 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menu && window.innerWidth <= 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menu]);

  const menuHanndler = () => {
    setMenu(true);
    setScrollYHeight(true);
  };

  return (
    <header
      className={`w-full p-4 fixed z-[1000] top-0 left-0 shadow-md transition-all duration-200 ease-in hover:bg-slate-900/90
${
  scrollYHeight
    ? "shadow shadow-slate-800 bg-slate-900/95 opacity-100"
    : "shadow shadow-white/20 bg-white/10 opacity-80"
}
`}
    >
      <nav className="w-11/12 mx-auto flex justify-between items-center">
        <HeaderLogo />
        {!btnHumber && (
          <button
            className="text-lg text-pink-800 flex justify-end items-center"
            onClick={menuHanndler}
          >
            <TiThMenuOutline />
          </button>
        )}
        <motion.div
          initial={{ x: "100%", y: "-100%" }}
          animate={{ x: menu ? 0 : "100%", y: menu ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 150 }}
          className={`fixed top-0 right-0 w-full h-full bg-slate-900/95 flex flex-col items-center justify-center ${
            btnHumber ? "hidden" : "block"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={() => setMenu(false)}
          >
            <FaTimes />
          </button>
          <HeaderMenu setMenu={setMenu} />
          <HeaderBtn />
        </motion.div>
        {btnHumber && (
          <menu className="flex justify-between items-center md:flex-row flex-col md:w-2/3 w-full">
            <HeaderMenu />
            <HeaderBtn />
          </menu>
        )}
      </nav>
    </header>
  );
}

export default Header;
