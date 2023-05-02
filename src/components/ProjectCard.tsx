const projects = [
  {
    id: 1,
    title: "NotifiQ",
    image: "https://via.placeholder.com/150",
    url: "https://notifiq.herokuapp.com/",
    stack: ["Ruby on Rails", "Javascript", "Bootstrap", "PostgreSQL", "Heroku"],
  },
  {
    id: 2,
    title: "EasyBank",
    image: "https://via.placeholder.com/150",
    url: "https://project1-blond-zeta.vercel.app/",
    stack: ["Next.JS", "TypeScript", "Material UI"],
  },
  {
    id: 3,
    title: "StealthSquad",
    image: "https://via.placeholder.com/150",
    url: "https://stealthsquad.vercel.app/",
    stack: ["Vite", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    title: "QTBotz",
    image: "https://via.placeholder.com/150",
    url: "https://qtbotz.com/",
    stack: ["Next.JS", "TypeScript", "TailwindCSS", "Heroku"],
  },
  {
    id: 5,
    title: "BlendedShades",
    image: "https://via.placeholder.com/150",
    url: "https://blendedshades.vercel.app/",
    stack: ["Next.JS", "TypeScript", "CSS"],
  },
];

export const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-title">
            <span>{project.title}</span>
          </div>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
