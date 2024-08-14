import React from "react";
import Card from "/src/components/Card.jsx";
import Button from "/src/components/Button.jsx";

function Projects() {
  let firstproject = {
    name: "Counter App",
    description:
      "A counter app to increment/decrement built with React.js shows the usecase of useState hook.",
    demolink: "https://counterapp-one-lac.vercel.app/",
    repolink:
      "https://github.com/mounishvatti/LearningReact/blob/main/myapp/src/App.jsx",
    image:
      "https://www.ifixproblem.com/wp-content/uploads/2023/02/Counter-app.png",
  };

  let secondproject = {
    name: "Background Color Changer",
    description:
      "A background color changer app built with React.js shows the usecase of useState hook.",
    demolink: "https://background-changer-one-psi.vercel.app/",
    repolink:
      "https://github.com/mounishvatti/LearningReact/blob/main/projects/bgchanger/src/App.jsx",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNaVf4qVb9kLkidixdBTXtzsYc9EFg0mbmSL6HzvWi84rPmgmNFKNYl5PxED5ivXanRY&usqp=CAU",
  };

  let thirdproject = {
    name: "Password generator",
    description:
      "Shows the usecase of useState, useCallback, useEffect, and useRef hooks.",
    demolink: "https://passwordgenerator-six-psi.vercel.app/",
    repolink:
      "https://github.com/mounishvatti/LearningReact/tree/main/projects/pwdgenerator",
    image:
      "https://www.scaler.com/topics/images/password-generator-cpp-thumbnail.webp",
  };

  let fourthproject = {
    name: "Currency Converter",
    description:
      "A currency converter app built with React.js using custom hook and external API.",
    demolink: "https://currencyconverter-green-kappa.vercel.app/",
    repolink: "https://github.com/mounishvatti/currencyconverter",
    image:
      "https://www.shutterstock.com/image-vector/currency-exchange-money-conversion-euro-600nw-2169800853.jpg",
  };

  let fifthproject = {
    name: "SIP Return calculator",
    description:
      "An SIP returns (₹) calculator app built with React.js using various hooks (useState, useEffect, useCallback).",
    demolink: "https://sipreturncalc.vercel.app/",
    repolink: "https://github.com/mounishvatti/sipreturncalc",
    image:
      "https://www.smallcase.com/wp-content/uploads/2023/07/lumpsum-calculator-1.png",
  };

  let sixthproject = {
    name: "React Router",
    description:
      "Using React Router Dom to navigate between different pages from the address bar.",
    demolink: "https://reactrouter-sigma.vercel.app/",
    repolink: "https://github.com/mounishvatti/reactrouter",
    image:
      "https://miro.medium.com/v2/resize:fit:719/1*1oP_IQI1jHei58EV-V5y8A.png",
  };

  return (
    <>
      <div className="dark:bg-black/95">
        <div className="flex justify-center pb-8 w-full">
          <h1 className="text-5xl font-bold pt-16 text-center dark:text-white/90">
            Learn{" "}
            <span id="reactname" style={{ color: "rgb(117, 194, 217)" }}>
              React.js
            </span>{" "}
            by building projects.
          </h1>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/50 dark:border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-black/60 dark:placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search projects.."
            />
            <button
              type="button"
              className="rounded-md bg-pink-800 px-3 py-2 text-sm font-semibold text-white/90 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              search
            </button>
          </div>
        </div>
        <div className="mr-24 ml-24">
          <div className="flex flex-wrap justify-center pb-8 pt-12 w-full gap-12">
            <div>
              <Card project={firstproject} />
            </div>

            <div>
              <Card project={secondproject} />
            </div>
            <div>
              <Card project={thirdproject} />
            </div>
            <div>
              <Card project={fourthproject} />
            </div>
            <div>
              <Card project={fifthproject} />
            </div>
            <div>
              <Card project={sixthproject} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
