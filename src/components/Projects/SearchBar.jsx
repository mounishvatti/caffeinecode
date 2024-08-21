import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2 md:w-1/3">
          <input
            className="flex h-10 w-full rounded-md border border-black/50 dark:border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-black/60 dark:placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search projects.."
          />
          <button
            type="button"
            className="rounded-md bg-pink-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
