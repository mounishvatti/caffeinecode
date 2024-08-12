import React from "react";
import MyCodeComponent from "/src/components/MyCodeComponent";

function Home() {
  function copyToClipboard() {
    const codeBlock = document.getElementById("codeBlock").value;
    navigator.clipboard
      .writeText(codeBlock)
      .then(() => {
        const cpbtn = document.getElementById("copyButton");
        cpbtn.innerHTML = "copied!";
        setTimeout(() => {
          cpbtn.innerHTML = "copy";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
  return (
    <>
      <div className="relative w-full pb-10">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full p-[2px] bg-gradient-to-r from-purple-300 via-purple-400 to-pink-600">
              <div className="flex w-full h-full rounded-full items-center bg-black p-2">
                <p className="text-xs font-medium md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-400 to-pink-600">
                  Create a Vite+React project
                  <span className="ml-2 cursor-pointer font-bold">→</span>
                </p>
              </div>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-white/90 md:text-4xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Vite
              </span>{" "}
              is the Next Generation Frontend Tooling
            </h1>
            <p className="mt-8 max-w-3xl text-md text-gray-200 font-mono">
              Create a Vite + React app by pasting the following command in your
              terminal.
            </p>
            <div className="mt-8 p-4">
              <div class="flex w-full items-center space-x-2 md:w-1/3">
                <textarea
                  id="codeBlock"
                  className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-md placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-mono pointer-events-none"
                  readOnly={true}
                >
                  $ npm create vite@latest
                </textarea>
                <button
                  id="copyButton"
                  type="button"
                  class="rounded-md bg-gradient-to-r font-mono from-purple-600 to-pink-700 px-3 py-2 text-sm font-semibold text-white/70 shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={copyToClipboard}
                >
                  copy
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-2 mb-20">
            <img
              className="aspect-[16/9] w-full rounded-lg bg-white/10 object-cover lg:aspect-auto lg:object-center"
              src="https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2.png"
              alt="IDE screenshot"
            />
          </div>
        </div>
        <section>
          <div className="mx-auto max-w-7xl px-2 lg:px-8">
            <div className="mb-4 max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Projects and many more
              </p>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-white/80">
                The best place to learn{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  React.js
                </span>
                {" "}is by building projects.
              </h2>
            </div>
            <hr />
            <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-9 w-9 text-gray-100"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-white/80">
                    Simply Copy &amp; Paste
                  </h3>
                  <p className="mt-3 text-base text-gray-200">
                    If you want to use the components in your project, just copy
                    and paste the code.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-9 w-9 text-gray-100"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-white/80">
                    Easy to Customize
                  </h3>
                  <p className="mt-3 text-base text-gray-200">
                    Clone the project and customize it to your liking.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-9 w-9 text-gray-100"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-white/80">
                    Made with TailwindCSS
                  </h3>
                  <p className="mt-3 text-base text-gray-200">
                    All the components are built with TailwindCSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
