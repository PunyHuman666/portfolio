import ProjectCard from "./ProjectCard";
import useFetch from "../hooks/useFetch";

function Projects() {
  const { projects, isPending, error } = useFetch(
    "http://localhost:8000/projects"
  );

  return (
    <div className="projects">
      <h2 className="projects-title">
        Feel free to check my projects or visit me on{" "}
        <a href="https://github.com/PunyHuman666" target="blank">
          GitHub
        </a>
      </h2>
      <div className="card-container">
        {error && <h3>{error}</h3>}
        {isPending && <h2 className="loading">Loading projects...</h2>}
        {projects &&
          projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              key={project.title}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
