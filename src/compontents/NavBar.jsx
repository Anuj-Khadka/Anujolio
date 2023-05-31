import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/NavBar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="nav-item">
              <AiOutlineHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            <AiOutlineUser />
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-item">
            <MdOutlineWorkOutline />
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="nav-item">
            <RiBook2Line />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item">
            <BsTelephone />
          </NavLink>
        </li>
        {/* <NavLink className='nav-item'></NavLink> */}
      </ul>
    </div>
  );
};

export default NavBar;
