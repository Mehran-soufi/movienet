import React from "react";
import UpBtn from "./UpBtn";
import MobileApp from "./MobileApp";
import CopyRight from "./CopyRight";
import Newsletter from "./Newsletter";
import Social from "./Social";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-sky-800 p-4 relative mt-10">
      <UpBtn />
      <MobileApp />
      <Newsletter/>
      <Social/>
      <CopyRight/>
    </footer>
  );
}

export default Footer;
