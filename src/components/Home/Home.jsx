import React from "react";
import MyCodeComponent from "/src/components/MyCodeComponent";

function Home() {
  function copyToClipboard() {
    const codeBlock = document.getElementById('codeBlock').value;
    navigator.clipboard.writeText(codeBlock).then(() => {
      const cpbtn = document.getElementById('copyButton');
      cpbtn.innerHTML = 'Copied!';
      setTimeout(() => {
        cpbtn.innerHTML = 'Copy';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
  return (
    <>
      <div className="relative w-full pb-10">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border border-sky-300 p-2">
              <p className="text-xs font-medium md:text-sm text-sky-300">
                Create a Vite+React project
                <span className="ml-2 cursor-pointer font-bold">→</span>
              </p>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-white/90 md:text-4xl lg:text-6xl">
              <span className="text-purple-400">Vite</span> is the Next
              Generation Frontend Tooling
            </h1>
            <p className="mt-8 max-w-3xl text-md text-gray-200 font-mono">
              Create a Vite + React app by pasting the following command in your
              terminal.
            </p>
            <div className="mt-8 p-4">
              <div class="flex w-full items-center space-x-2 md:w-1/3">
                <textarea
                  id="codeBlock"
                  className="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-md placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                  readonly
                >
                 $ npm create vite@latest
                </textarea>
                <button
                  id="copyButton"
                  type="button"
                  class="rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={copyToClipboard}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white/20 p-2">
            <img
              className="aspect-[16/9] w-full rounded-lg bg-white/10 object-cover lg:aspect-auto lg:object-center"
              src="https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2.png"
              alt="IDE screenshot"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
