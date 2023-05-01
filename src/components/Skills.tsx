import Marquee from "react-fast-marquee";

export const Skills = () => {
  const techstack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "NEXT.JS",
    "TAILWIND CSS",
    "MATERIAL UI",
    "GIT",
    "RUBY",
  ];

  const designstack = ["FIGMA", "PHOTOSHOP", "ILLUSTRATOR", "XD"];

  return (
    <div className="skills-section">
      <div className="skills-title">
        <span>Skills</span>
        <span>Skills</span>
      </div>
      <div className="skills-list">
        <Marquee>
          <div className="stack">
            {techstack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </Marquee>
        <Marquee direction="right">
          <div className="stack">
            {designstack.map((design) => (
              <span key={design}>{design}</span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
