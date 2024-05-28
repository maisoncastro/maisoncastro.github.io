import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <hr />
      <div className="nav-bar">
        <Link to="#skills">Skills</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#contact">Contact</Link>

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
