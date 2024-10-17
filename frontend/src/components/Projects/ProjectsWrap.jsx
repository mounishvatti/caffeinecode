import React from "react";
import Card from "/src/components/Card.jsx";

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
