function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <h3>{props.project.name}</h3>
      <p>{props.project.technologies}</p>
    </div>
  )
}

export default ProjectCard;