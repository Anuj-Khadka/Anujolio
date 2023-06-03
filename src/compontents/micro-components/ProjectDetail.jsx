import React from "react";
import ProjectsList from "../../apis/projects-api";
import { useParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsStack } from "react-icons/bs";

const ProjectDetail = () => {
  const { projectName } = useParams();

  const selectedProject = ProjectsList.find((project) => {
    return project.project_name === projectName;
  });

  if (!selectedProject) {
    return <div>Loading...</div>;
  }

  const ProjectClose = (e) => {
    history.go(-1);
  };

  const {
    project_name,
    project_image,
    project_url,
    github_link,
    project_desc,
    project_stack,
  } = selectedProject;

  return (
    <div className="single-project-item-container">
      <div className="project-item-card">
        <div className="card-inner">
          <div className="top-access">
            <div className="project-links">
              <a type="button" id="live-demo" className="project-access-links" href={project_url} target="_blank">
                Live Demo
              </a>
              <a type="button" id="github-link" className="project-access-links" href={github_link} target="_blank">
                Source Code
              </a>
            </div>
            <button className="close-btn" onClick={ProjectClose}>
              <MdOutlineClose size="1.5rem" />
            </button>
          </div>
          <div className="project-image">
            <img src={project_image} alt={project_name} />
          </div>

          <div className="project-content">
            <div className="project-name">{project_name}</div>
            <div className="project-meta">{project_desc}</div>
            <div className="project-stacks">
              <BsStack />
              <span className="stack-list tertiary">{project_stack}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
