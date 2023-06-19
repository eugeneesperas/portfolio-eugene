import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#" title="Home">
        <AiOutlineHome />
      </a>
      <a href="#about" title="About">
        <AiOutlineUser />
      </a>
      <a href="#experience" title="Experience">
        <BiBook />
      </a>
      <a href="#services" title="Services">
        <RiServiceLine />
      </a>
      <a href="#contact" title="Contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
