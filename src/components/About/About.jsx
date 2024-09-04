// import React from 'react'

function About() {
  return (
    <>
      <div className="w-full h-full dark:bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm text-black">
                About Us →
              </p>
            </div>
            <p className="text-3xl font-bold dark:text-gray-100 md:text-5xl md:leading-10">
              Made with love, right here in India
            </p>
            <p className="max-w-4xl text-base text-gray-600 dark:text-gray-400 md:text-xl font-sans">
              Lets together enrich the developer community with a platform that
              encourages collaboration and innovation. We believe that the best
              learning experience is one that is both fun and rewarding. Our
              mission is to create a community where developers can thrive and
              achieve their full potential.
            </p>
          </div>
          <div className="w-full space-y-4">
            <img
              className="h-[200px] w-full rounded-xl object-cover md:h-full"
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
              alt=""
            />
          </div>
          <div className="mt-16 flex items-center">
            <div className="space-y-6 md:w-3/4">
              <p className="text-3xl font-bold dark:text-gray-100 md:text-4xl">
                Meet our team
              </p>
              <div></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 gap-y-6 border-none py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl">
              <img
                src="https://i.pinimg.com/originals/36/f9/d9/36f9d946e73de52ff356d802e1ad5c51.jpg"
                alt="Mounish Vatti"
                className="h-[300px] w-full rounded-2xl object-cover "
              />
              <p className="text-center mt-4 w-full px-2 pb-2 text-2xl font-mono font-semibold dark:text-gray-100">
                Mounish Vatti
              </p>
              <div className="flex justify-center items-center gap-x-4 gap-y-4 mt-2">
                <button onClick={() => window.open("https://github.com/mounishvatti", "_blank")} className="bg-black text-white rounded-sm px-2 py-1 font-mono font-medium">Github</button>
                <button onClick={() => window.open("https://linkedin.com/in/mounish-vatti", "_blank")} className="bg-blue-500 text-white rounded-sm px-2 py-1 font-mono font-medium">LinkedIn</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
            <div className="space-y-6">
              <p className="text-sm font-semibold md:text-base">
                Join our team →
              </p>
              <p className="text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-200 dark:to-pink-400">
                We&#x27;re just getting started
              </p>
              <p className="text-base dark:text-gray-300 md:text-lg">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <button
                type="button"
                className="rounded-md bg-black dark:bg-white/90 px-3 py-2 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Now
              </button>
            </div>
            <div className="md:mt-o mt-10 w-full">
              <img
                src="https://www.cia.gov/the-world-factbook/static/778a257ec6e116fbb7aac018c170b3eb/29f7f/wfb-feature-world.jpg"
                alt="Getting Started"
                className="rounded-lg border border-white-200 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
