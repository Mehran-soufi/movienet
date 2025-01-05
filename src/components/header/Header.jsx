import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderBtn from "./HeaderBtn";
import { TiThMenuOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [hover, setHover] = useState(false);
  const [scrollYHeight, setScrollYHeight] = useState(false);
  const [btnHumber, setBtnHumber] = useState(window.innerWidth > 768);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.scrollY;
      if (headerHeight > 80) {
        setScrollYHeight(true);
      } else {
        setScrollYHeight(false);
      }
    };

    const handleResize = () => {
      const headerWidth = window.innerWidth;
      if (headerWidth > 768) {
        setBtnHumber(true);
      } else {
        setBtnHumber(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Clean up the event listeners on component unmount
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

  return (
    <header
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`w-full p-4 fixed z-[1000] top-0 left-0 shadow-md transition-all duration-200 ease-in
${hover ? "bg-slate-900/80 opacity-100" : "bg-white/10 opacity-80"}
${
  scrollYHeight
    ? "border-b border-slate-400 bg-slate-900/80 opacity-100"
    : "border-b border-transparent"
}
`}
    >
      <nav className="w-11/12 mx-auto flex justify-between items-center">
        <HeaderLogo />
        {!btnHumber && (
          <button
            className="w-1/2 flex justify-end items-center"
            onClick={() => setMenu(!menu)}
          >
            <TiThMenuOutline />
          </button>
        )}
        <motion.div
          initial={{ x: "100%", y: "-100%" }}
          animate={{ x: menu ? 0 : "100%", y: menu ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 150 }}
          className={`fixed top-0 right-0 w-full h-full bg-slate-800 z-[10000] flex flex-col items-center justify-center ${
            btnHumber ? "hidden" : "block"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setMenu(false)}
          >
            <FaTimes size={24} />
          </button>
          <HeaderMenu setMenu={setMenu} />
          <HeaderBtn />
        </motion.div>
        {btnHumber && (
          <menu className="flex justify-between items-center md:flex-row flex-col md:w-2/3 w-full">
            <HeaderMenu setMenu={setMenu} />
            <HeaderBtn />
          </menu>
        )}
      </nav>
    </header>
  );
}

export default Header;
