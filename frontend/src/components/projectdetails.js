let projects = [
    {
        id: 1,
        name: "Counter App",
        description:
            "A counter app to increment/decrement built with React.js shows the usecase of useState hook.",
        tags: ["react", "hooks", "useState"],
        demolink: "https://counterapp-one-lac.vercel.app/",
        repolink:
            "https://github.com/mounishvatti/LearningReact/blob/main/myapp/src/App.jsx",
        image:
            "https://www.ifixproblem.com/wp-content/uploads/2023/02/Counter-app.png",   
    },
    {   
        id: 2,
        name: "Background Color Changer",
        description:
            "A background color changer app built with React.js shows the usecase of useState hook.",
        tags: ["react", "hooks", "useState"],
        demolink: "https://background-changer-one-psi.vercel.app/",
        repolink:
            "https://github.com/mounishvatti/LearningReact/blob/main/projects/bgchanger/src/App.jsx",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNaVf4qVb9kLkidixdBTXtzsYc9EFg0mbmSL6HzvWi84rPmgmNFKNYl5PxED5ivXanRY&usqp=CAU",
    },
    {
        id: 3,
        name: "Password generator",
        description:
            "A password generator app shows the usecase of useState, useCallback, useEffect, and useRef hooks.",
        tags: ["useState", "useCallback", "useEffect", "useRef"],
        demolink: "https://passwordgenerator-six-psi.vercel.app/",
        repolink:
            "https://github.com/mounishvatti/LearningReact/tree/main/projects/pwdgenerator",
        image:
            "https://www.scaler.com/topics/images/password-generator-cpp-thumbnail.webp",
    },
    {
        id: 4,
        name: "Currency Converter",
        description:
            "A currency converter app built with React.js using custom hook and external API.",
        tags: ["useState", "useEffect", "useCallback"],
        demolink: "https://currencyconverter-green-kappa.vercel.app/",
        repolink: "https://github.com/mounishvatti/currencyconverter",
        image:
            "https://www.shutterstock.com/image-vector/currency-exchange-money-conversion-euro-600nw-2169800853.jpg",   
    },
    {
        id: 5,
        name: "SIP Calculator",
        description:
            "An SIP returns (₹) calculator app built with React.js using chart.js. Multiple options like lumpsum and topup",
        tags: ["react", "hooks", "chart.js"],
        demolink: "https://sipreturncalc.vercel.app",
        repolink: "https://github.com/mounishvatti/sipreturncalc",
        image:
            "https://www.smallcase.com/wp-content/uploads/2023/07/lumpsum-calculator-1.png",
    },
    {
        id: 6,
        name: "React Router",
        description:
            "Using React Router Dom to navigate between different pages from the address bar (routing in react).",
        tags: ["react", "react-router-dom", "github API"],
        demolink: "https://reactrouter-sigma.vercel.app",
        repolink: "https://github.com/mounishvatti/reactrouter",
        image:
            "https://www.scaler.com/topics/images/react-router-thumbnail.webp",  
    },
    {
        id: 7,
        name: "To-do App (context-API)",
        description:
            "A to-do list app built with React.js shows the usecase of context API and broswer's local storage.",
        tags: ["react", "context-api", "local-storage"],
        demolink: "https://todoapp-nu-nine-84.vercel.app",
        repolink:
            "https://github.com/mounishvatti/todoapp",
        image: "https://d12y7sg0iam4lc.cloudfront.net/s/img/marketing/top-todo-app/to-do-list.png"
    },
    {
        id: 8,
        name: "To-do App (react-redux)",
        description:
            "A to-do list app built with React.js shows the usecase of Redux, react-redux, and redux-toolkit.",
        tags: ["react", "redux", "redux-toolkit"],
        demolink: "",
        repolink:
            "https://github.com/mounishvatti/reduxtoolkittodoapp",
        image: "https://cdn.dribbble.com/userupload/6478950/file/original-0c9bd37677dd79d495694d83d79da7f8.png?resize=400x300"
    },
    {
        id: 9,
        name: "Blogging website",
        description:
            "A Blogging website built with React.js and appwrite, shows the usecase of Redux, react-redux, and redux-toolkit.",
        tags: ["react", "redux", "appwrite"],
        demolink: "https://blogscafe.vercel.app/",
        repolink:
            "https://github.com/mounishvatti/blogscafe",
        image: "https://findingtom.com/images/uploads/medium-logo/article-image-00.jpeg"
    },
    {
        id: 10,
        name: "Passwords manager",
        description:
            "A passwords manager app built with React.js to store all your passwords in a single place.",
        tags: ["react", "react-redux", "supabase"],
        demolink: "",
        repolink:
            "",
        image:
            "https://miro.medium.com/v2/resize:fit:1400/1*-1pIJfegO1srtM4ieQ1WIw.png",
    },
    {
        id: 11,
        name: "Express To-do",
        description:"A to-do list app built with React.js and express.js (frontend + backend) and postman API testing.",
        tags: ["react", "express.js", "postman"],
        demolink: "",
        repolink: "https://github.com/mounishvatti/expresstodo",
        image: "https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png"
    },
    {
        id: 12,
        name: "Auth using JWTs",
        description:"A basic authentication Login/Signup app built with HTML and express.js (frontend + backend) and postman API testing.",
        tags: ["jwt", "express.js", "postman"],
        demolink: "",
        repolink: "https://github.com/mounishvatti/authusingjwt",
        image: "https://ssojet.com/blog/navigating-the-world-of-jwt-a-comprehensive-guide/jwt.jpg"
    },
    {
        id: 13,
        name: "Course selling app",
        description: "A fullstack course selling application where users can login and purchase courses of their choice along with admin gateway.",
        tags: ["react", "express.js", "mongodb", "jwt"],
        demolink: "",
        repolink: "https://github.com/mounishvatti/cms",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
    },
    {
        id: 14,
        name: "rupay - Payments app",
        description: "A fullstack payments application where users can login and make payments to each other.",
        tags: ["next.js", "tailwind", "redux", "prisma"],
        demolink: "",
        repolink: "https://github.com/mounishvatti/rupay",
        image: "https://res.cloudinary.com/slicepay/image/upload/v1718021209/website/sliceit-v3/images/desktop/og_Image.png",
    },
    {
        id: 15,
        name: "excalidraw - Collaborative whiteboard",
        description: "A collaborative whiteboard application where users can draw different shapes",
        tags: ["turborepo", "websockets", "prisma", "tailwind"],
        demolink: "",
        repolink: "https://github.com/mounishvatti/excalidraw",
        image: "https://excalidraw.com/og-image-3.png",
    }
]

// add more projects here according to your need

// Requirements: A project should have a name, description, tags, demolink, repolink, and image 

export default projects;