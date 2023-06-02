import React from "react";
import ProjectsListing from "./micro-components/ProjectsListing";
import "../assets/css/Projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="page-title">
        <p className="page-desc tertiary">view my work</p>
        <h2>Projects</h2>
      </div>
      <div className="project-row">
        <ProjectsListing />
      </div>
    </div>
  );
};

export default Projects;
