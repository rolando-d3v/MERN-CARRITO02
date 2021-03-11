import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { FaIndent, FaOutdent } from "react-icons/fa";
import "./sidebar.scss";
import { useContext } from "react";
import { ToggleConten } from "../../context/togleContext/TogleContext";
import Dropdown from "../dropdown/Dropdown";

const linkSidebar = [
  { name: "Home", url: '/tabla', icon: <FaIcons.FaHome /> },
  { name: "Tools", url: '/tabla', icon: <FaIcons.FaTools /> },
  { name: "Formulario", url: '/tabla', icon: <FaIcons.FaFolder /> },
  { name: "Calendario", url: '/tabla', icon: <FaIcons.FaCalendarAlt /> },
];

export default function Sidebar() {
  const { toggle, toggleState } = useContext(ToggleConten);

  return (
    <div className={`sidebar ${toggleState ? "sidebar-visible" : ""}`}>
      <div className="tooglex">
        {toggleState ? (
          <FaOutdent className="sidebar__close h2" onClick={toggle} />
        ) : (
          <FaIndent className="sidebar__close h2" onClick={toggle} />
        )}
      </div>

      <div className="header_logo">
        <div>
          <FaIcons.FaApple style={{ fontSize: "1.5rem" }} />
          <h3>Dashboar</h3>
        </div>
      </div>

      <div className="header_avatar">
        <div>
          <img src="/assets/avatar.jpg" alt="alt" />
          <span>Susan Torres</span>
        </div>
      </div>

      <div className="div_buttonx">
        <button className="buttonx">Dashboar</button>
        <button className="buttonx">theme</button>
      </div>

      <div className="div_links">
        {linkSidebar.map((li, index) => (
          <Link className="sidebar_link" key={index} to={li.url}  >
            {li.icon} {li.name}
          </Link>
        ))}
      </div>

      <Dropdown />
    </div>
  );
}
