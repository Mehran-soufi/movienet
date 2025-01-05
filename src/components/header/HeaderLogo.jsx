import React from "react";
import { RiMovie2AiFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <div>
      <p
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-2xl cursor-pointer text-fuchsia-700"
      >
        <RiMovie2AiFill />
        <span className="uppercase bg-gradient-to-r from-purple-500 to-pink-600 inline-block text-transparent bg-clip-text">
          movienet
        </span>
      </p>
    </div>
  );
}

export default HeaderLogo;
