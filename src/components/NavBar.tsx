import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <hr />
      <div className="nav-bar">
        <Link to="/">Skills</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>

        <a
          className="nav-link"
          href="https://bento.me/nazimsesen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Social
        </a>
      </div>
    </>
  );
};
