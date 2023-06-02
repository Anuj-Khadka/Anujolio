import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectsList from "../../apis/projects-api";

const ProjectDetail = () => {
  const allProjects = ProjectsList.map((project) => {
    const {
      project_name,
      project_image,
      project_url,
      project_type,
      github_link,
    } = project;
    return (
      <div className="project-item-container button" key={project_name}>
        <Link to={`/project/${project_name}`}>
          <div className="project-card">
            <div className="project-img-container">
              <img src={project_image} alt={project_name} />
            </div>
            {/* <div className="project-desc-container"> */}
              <div className="folio-list__item-text">
                <p className="tertiary">{project_type}</p>
                <h3 className="folio-list__item-title">{project_name}</h3>
              </div>
            {/* </div> */}
              <a
                className="folio-list__proj-link"
                href={github_link}
                target="_blank"
                title="project link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
          </div>
        </Link>
      </div>
    );
  });

  return <>{allProjects}</>;
};

export default ProjectDetail;
