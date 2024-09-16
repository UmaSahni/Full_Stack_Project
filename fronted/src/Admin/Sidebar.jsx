import React, { useState } from "react";
import "./sidebar.css";
import { IoHome } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { FaUserCircle, FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const menulist = [
    {
      path: "/admin",
      name: "Dashborad",
      icon: <IoHome />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <IoMdAnalytics />,
    },
    {
      path: "/purchase",
      name: "Purchase",
      icon: <FaUserCircle />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaInfoCircle />,
    },
  ];

  return (
    <div>
      <div className="container">
       
        <div style={{ width: isOpen ? "15.2rem" : "3.5rem" }} className="sidebar">
          
          
          <div className="top_section">
            <h1 style={{display : isOpen ? "block" : "none"}} >Logo</h1>
            <div
              style={{ margin: isOpen ? "2rem" : "0rem" }}
              onClick={() => setIsOpen(!isOpen)}
              className="bar"
            >
              <FaBars />
            </div>
          </div>

          {menulist.map((el, i) => {
            return (
              <NavLink
              
                to={el.path}
                key={i}
                className={"link"}
                activeclassName="active"
              >
                <div className="icon">{el.icon}</div>
                <div  className="link_text">{el.name}</div>
              </NavLink>
            );
          })}
        </div>

        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
