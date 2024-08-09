// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from "./components/Card";
import "./App.css";
import Button from "./components/Button";

function App() {
  // const [count, setCount] = useState(0)

  let buttoncontent = {
    name: "View GitHub Repo",
    link: "https://github.com/mounishvatti/LearningReact"
  }

  let firstproject = {
    name: "Counter App",
    description:
      "A simple counter app to increment/decrement built with React.js shows the usecase of useState hook.",
    link: "https://counterapp-one-lac.vercel.app/",
    image:
      "https://www.ifixproblem.com/wp-content/uploads/2023/02/Counter-app.png",
  };

  let secondproject = {
    name: "Background Color Changer",
    description:
      "A simple background color changer app built with React.js shows the usecase of useState hook.",
    link: "https://background-changer-one-psi.vercel.app/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNaVf4qVb9kLkidixdBTXtzsYc9EFg0mbmSL6HzvWi84rPmgmNFKNYl5PxED5ivXanRY&usqp=CAU",
  };

  let thirdproject = {
    name: "Password generator",
    description:
      "Shows the usecase of useState, useCallback, useEffect, and useRef hooks.",
    link: "https://passwordgenerator-six-psi.vercel.app/",
    image: "https://www.scaler.com/topics/images/password-generator-cpp-thumbnail.webp",
  };

  let fourthproject = {
    name: "Currency Converter",
    description:
      "A currency converter app built with React.js using custom hook and external API.",
    link: "https://currencyconverter-green-kappa.vercel.app/",
    image: "https://www.shutterstock.com/image-vector/currency-exchange-money-conversion-euro-600nw-2169800853.jpg",
  }

  let fifthproject = {
    name: "SIP Return calculator",
    description:
      "An SIP returns (₹) calculator app built with React.js using various hooks (useState, useEffect, useCallback).",
    link: "https://sipreturncalc.vercel.app/",
    image: "https://www.smallcase.com/wp-content/uploads/2023/07/lumpsum-calculator-1.png",
  }

  return (
    <>
      <div className="pb-8 w-full">
        <h1 className="text-5xl pt-16">
          Learn{" "}
          <span id="reactname" style={{ color: "rgb(117, 194, 217)" }}>
            React.js
          </span>{" "}
          by building projects.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4 py-2 pt-10 ">
        <Card project={firstproject} />
        <Card project={secondproject} />
        <Card project={thirdproject} />
        <Card project={fourthproject} />
        <Card project={fifthproject} />
      </div>

      <div className="pt-16">
        <Button text={buttoncontent} />
      </div>
      <div>
        <p className="text-center text-md text-gray-500 p-12">
          Made with 🩵 by{" "}
          <a
            href="https://github.com/mounishvatti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500"
          >
            Mounish Vatti
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
