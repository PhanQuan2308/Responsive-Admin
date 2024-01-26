import React, { useState } from "react";
import Logo from "../../imgs/4.png";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons"; // Correct import statement

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh <span>o</span>ps
        </span>
      </div>
      <div className="menu ">
        {SidebarData.map((item) => (
          <div
            className={
              selected === item.heading ? "menuItem active" : "menuItem"
            }
            key={item.heading}
            onClick={() => setSelected(item.heading)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
