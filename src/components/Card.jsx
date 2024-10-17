// import React from 'react'
import PropTypes from "prop-types";
const Card = ({ project }) => {
  const tags = project.tags;
  //console.log(tags);
  return (
    <div
      className="w-[300px] rounded-xl dark:bg-black/85 bg-black/30 border border-white/20 dark:border-white/20"
    >
      <img
        src={project.image}
        alt={project.name}
        className="h-[200px] w-full rounded-t-xl object-cover"
      />
      <div className="p-4">
        <h1 className="text-center text-lg font-semibold text-white dark:text-purple-100">
          {project.name}{" "}
        </h1>
        <p className="mt-3 text-sm text-gray-200 font dark:text-gray-300 text-center">{project.description}</p>
        <div className="flex justify-center mt-4">
          <span
            className="mb-2 mr-2 inline-block rounded-full px-3 py-1 text-[10px] font-semibold text-white dark:text-gray-900 bg-gray-700 dark:bg-purple-100"
          >
            #{tags[0]}
          </span>
          <span
            className="mb-2 mr-2 inline-block rounded-full px-3 py-1 text-[10px] font-semibold text-white dark:text-gray-900 bg-gray-700 dark:bg-purple-100"
          >
            #{tags[1]}
          </span>
          <span
            className="mb-2 mr-2 inline-block rounded-full px-3 py-1 text-[10px] font-semibold text-white dark:text-gray-900 bg-gray-700 dark:bg-purple-100"
          >
            #{tags[2]}
          </span>
        </div>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => window.open(project.demolink, "_blank")}
            type="button"
            className="duration-300 mt-4 w-full rounded-xl bg-green-800 dark:bg-gray-500/20 px-2 py-1.5 text-sm font-semibold text-white/90 dark:text-white/80 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Live demo
          </button>
          <button
            onClick={() => window.open(project.repolink, "_blank")}
            type="button"
            className="duration-300 mt-4 w-full rounded-xl bg-purple-900 dark:bg-purple-500/50 px-2 py-1.5 text-sm font-semibold text-white/90 dark:text-white/80 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            GitHub repo
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Card;
