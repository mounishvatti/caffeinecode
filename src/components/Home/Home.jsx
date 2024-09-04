// import React from "react";
import { useState } from "react";
import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";



function Home() {
  const [isCopied, setIsCopied] = useState(false);
  function copyToClipboard() {
    setIsCopied(true);
    const codeBlock = document.getElementById("codeBlock").value;
    navigator.clipboard
      .writeText(codeBlock)
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
  }
  const handleMouseEnter = (event) => {
    event.currentTarget.play();
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.pause();
  };
  return (
    <>
      <div className="relative w-full dark:bg-black">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full p-[2px] bg-gradient-to-r from-slate-800 to-yellow-900 dark:from-slate-200 dark:to-yellow-600">
              <div className="flex w-full h-full rounded-full items-center bg-white dark:bg-black p-2">
                <p className="text-xs font-medium md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400">
                  Be the best not just better
                  <span className="ml-2 cursor-pointer font-bold">→</span>
                </p>
              </div>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight dark:text-white/90 text-black/80 md:text-4xl lg:text-6xl">
              <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-yellow-600">
                Code
              </span>{" "}
              is a part of our life and we are here to help you.
            </h1>
            <p className="mt-8 max-w-3xl text-md text-black dark:text-gray-200 font-mono">
              Create a Vite + React app by pasting the following command in your
              terminal.
            </p>
            <div className="mt-8 p-4">
              <div className="flex w-full items-center space-x-2 md:w-1/3">
                <textarea
                  id="codeBlock"
                  value={"$ npm create vite@latest"}
                  className="flex h-10 w-full rounded-md border border-black dark:border-white/30 bg-transparent px-3 py-2 text-md placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-black dark:text-white/90 pointer-events-none"
                  readOnly={true}
                >
                  $ npm create vite@latest
                </textarea>
                <button
                  id="copyButton"
                  type="button"
                  className="rounded-md font-mono bg-black px-2 py-2 text-xl dark:bg-white dark:text-black text-white  shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={copyToClipboard}
                >
                  {isCopied ? <TbCopyCheck /> : <TbCopy />}
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-100/50 dark:to-slate-200/50 p-2 mb-20">
            <video 
            src="https://www.cursor.com/videos/cpp-full-video.mp4"
            title="code editor video"
            width="100%"
            height="100%"
            loop
            playsInline
            style={{border:"none"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ></video>
          </div>
        </div>
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-2 lg:px-8">
            <div className="mb-4 max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900">
                Projects and many more
              </p>
              <h2 className="mt-6 text-4xl font-bold leading-tight dark:text-white/80">
                The best way to learn{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800">
                  MERN
                </span>
                {" "} is by building projects.
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 dark:text-gray-100"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold dark:text-white/80">
                    Simply Copy &amp; Paste
                  </h3>
                  <p className="mt-3 text-base dark:text-gray-200">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 dark:text-gray-100"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold dark:text-white/80">
                    Easy to Customize
                  </h3>
                  <p className="mt-3 text-base dark:text-gray-200">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 dark:text-gray-100"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold dark:text-white/80">
                    Made with TailwindCSS
                  </h3>
                  <p className="mt-3 text-base dark:text-gray-200">
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
