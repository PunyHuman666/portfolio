function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3 className="card-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} target="blank" className="card-link">
        Preview
      </a>
    </div>
  );
}

export default ProjectCard;
