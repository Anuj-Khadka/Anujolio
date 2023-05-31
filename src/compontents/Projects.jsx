import React from 'react'
import ProjectsList from "../apis/projects-api.json"

const Projects = () => {
  fetch(ProjectsList)
  .then(response=> console.log(response))
  .catch(error => console.log("eooror", error))
  return (
    <div>
      Projects
    </div>
  )
}

export default Projects