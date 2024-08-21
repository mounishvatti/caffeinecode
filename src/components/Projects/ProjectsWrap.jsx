import React from "react";
import Card from "/src/components/Card.jsx";
import projects from "/src/components/projectdetails.js";

const ProjectsWrap = ({ projects }) => {
  return (
    <>
    {projects.map((project) => (
        <div key={project.id}>
            <Card project={project} />
        </div>
    ))}
    </>
  );
};

export default ProjectsWrap;
