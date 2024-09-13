import React, { useState } from "react";
import pic from "../../assets/hacker.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navList = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img
              src={pic}
              className="profile-pic"
              alt="Profile"
              loading="lazy"
            />
            <h1 className="title">
              <Link to="Home">
                Ayush<span className="highlight">Dwivedi</span>
              </Link>
              <p className="subtitle">Web Developer</p>
            </h1>
          </div>
          <div className="navbar-actions">
            <ul className="nav-list desktop-only">
              {navList.map((nav) => (
                <li className="nav-item" key={nav.id}>
                  <Link
                    to={nav.text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              onClick={() => setMenu(!menu)}
              className="menu-toggle mobile-only">
              {menu ? <IoClose size={24} /> : <AiOutlineMenuUnfold size={24} />}
            </div>
          </div>
        </div>
        {menu && (
          <div className="mobile-menu">
            <ul className="nav-list mobile-only">
              {navList.map((nav) => (
                <li className="nav-item" key={nav.id}>
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={nav.text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <hr className="divider" />
    </>
  );
}

export default Navbar;
