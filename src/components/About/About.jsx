import React from 'react'

function About() {
  return (
    <>
    <div className="mx-auto max-w-7xl px-4">
    <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
      <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
        <p className="text-xs font-semibold leading-normal md:text-sm text-black">
          About the company
        </p>
      </div>
      <p className="text-3xl font-bold text-gray-100 md:text-5xl md:leading-10">
        Made with love, right here in India
      </p>
      <p className="max-w-4xl text-base text-gray-400 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
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
        <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-xs font-semibold leading-normal md:text-sm text-black">
            Join Us →
          </p>
        </div>
        <p className="text-3xl font-bold text-gray-100 md:text-4xl">
          Meet our team
        </p>
        <p className="max-w-4xl text-base text-gray-400 md:text-xl">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <div></div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-800 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          alt="Mounish Vatti"
          className="h-[300px] w-full rounded-lg object-cover "
        />
        <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-100">
          Mounish Vatti
        </p>
        <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-400">
          Aspiring Full Stack Developer
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
      <div className="space-y-6">
        <p className="text-sm font-semibold md:text-base">Join our team →</p>
        <p className="text-3xl font-bold md:text-4xl">
          We&#x27;re just getting started
        </p>
        <p className="text-base text-gray-300 md:text-lg">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <button
          type="button"
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Join Now
        </button>
      </div>
      <div className="md:mt-o mt-10 w-full">
        <img
          src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"
          alt="Getting Started"
          className="rounded-lg"
        />
      </div>
    </div>
  </div>
    </>
  )
}

export default About