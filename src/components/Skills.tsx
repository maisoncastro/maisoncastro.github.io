import Marquee from "react-fast-marquee";

export const Skills = () => {
  const techstack = [
    "JavaScript",
    "TypeScript",
    "React",
    "NEXT.JS",
    "VITE",
    "Nuxt.JS",
    "TAILWIND",
    "MATERIAL UI",
    "RUBY",
    "GIT",
  ];

  const designstack = ["FIGMA", "PHOTOSHOP", "ILLUSTRATOR", "INDESIGN", "XD"];

  return (
    <div className="skills-section">
      <div className="skills-title">
        <span>Skills</span>
        <span>Skills</span>
      </div>
      <div className="skills-list">
        <Marquee pauseOnHover={true} speed={100}>
          <div className="stack">
            {techstack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </Marquee>
        <Marquee direction="right" pauseOnHover={true} speed={150}>
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
