import { Link } from "react-router-dom";

type ScrollToSection = (sectionId: string) => void;
type NavBarProps = {
  scrollToSection: ScrollToSection;
};
export const NavBar = ({ scrollToSection }: NavBarProps) => {
  return (
    <>
      {/* <hr /> */}
      <div className="nav-bar">
        <Link to="#skills" onClick={() => scrollToSection("skills")}>
          Skills
        </Link>
        <Link to="#projects" onClick={() => scrollToSection("projects")}>
          Projects
        </Link>
        <Link to="#contact" onClick={() => scrollToSection("contact")}>
          Contact
        </Link>

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
