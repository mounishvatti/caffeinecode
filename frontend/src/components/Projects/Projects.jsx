import React from "react";
import SearchBar from "/src/components/Projects/SearchBar.jsx";
import projects from "/src/components/projectdetails.js";
import ProjectsWrap from "/src/components/Projects/ProjectsWrap.jsx";


function Projects() {
  return (
    <>
      <div className="dark:bg-black/95 h-full w-full">
        <div className="flex justify-center pb-8 w-full">
          <h1 className="text-5xl font-bold pt-16 text-center dark:text-white/90 text-pink-100">
            Be a{" "}
            <span id="reactname" className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-pink-400">
              100xDeveloper
            </span>{" "}
            by building projects.
          </h1>
        </div>
        <SearchBar />
        <div className="mr-24 ml-24">
          <div className="flex flex-wrap justify-center pb-8 pt-12 w-full gap-12">
            < ProjectsWrap projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
