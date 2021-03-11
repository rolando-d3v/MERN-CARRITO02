import React, { useState } from "react";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";
import "./dropdown.scss";

export default function Dropdown() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  const Data = [
    {
      icon: <FaIcon.FaFacebookSquare />,
      title: "Components",
      links: [
        {
          name: "Messenger",
          url: "/lopes",
          icon: <FaIcon.FaFacebookMessenger />,
        },
        { name: "Instagram", url: "/", icon: <FaIcon.FaInstagram /> },
        { name: "Wasap", url: "/", icon: <FaIcon.FaWhatsapp /> },
      ],
    },
    {
      icon: <FaIcon.FaGoogle />,
      title: "Tools",
      links: [
        { name: "Drive", url: "/", icon: <FaIcon.FaGoogleDrive /> },
        { name: "Play Store", url: "/", icon: <FaIcon.FaGooglePlay /> },
        { name: "Dropbox", url: "/", icon: <FaIcon.FaDropbox /> },
      ],
    },
    {
      icon: <FaIcon.FaMicrosoft />,
      title: "Layout",
      links: [
        { name: "Google", url: "/", icon: <FaIcon.FaGoogle /> },
        { name: "Pocket", url: "/", icon: <FaIcon.FaGetPocket /> },
        { name: "Git Hub", url: "/", icon: <FaIcon.FaGithub /> },
        { name: "Git Lap", url: "/", icon: <FaIcon.FaGitlab /> },
      ],
    },
  ];

  return (
    <div className="accordion_section">
      <div className="container">
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="headContent"
                onClick={() => toggle(index)}
                style={{ color: clicked === index && "#00a2ff" }}
              >
                <div>
                  {item.icon}
                  <h1>{item.title}</h1>
                </div>
                <span>
                  {clicked === index ? (
                    <FaIcon.FaChevronUp />
                  ) : (
                    <FaIcon.FaChevronLeft />
                  )}
                </span>
              </div>
              {clicked === index && (
                <div className="dropdown_item">
                  {item.links.map((drop, index) => (
                    <Link className="link_item" key={index} to={drop.url}>
                      {drop.icon} <span>{drop.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
