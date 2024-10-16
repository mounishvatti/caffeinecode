// import React from 'react'

function Blogs() {
  return (
    <>
      <div className="text-4xl text-center font-thin p-10 bg-black/90 text-white font-serif">
        Blogs
      </div>
      <div className="flex items-center justify-center">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/blog-management-illustration-download-in-svg-png-gif-file-formats--writer-manager-writing-advertisement-business-pack-illustrations-2912077.png" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold p-10">Coming Soon...</h1>
        <div>
          <p className="font-serif text-2xl">
            This page will contain all the blogs written by developers and
            community members.
          </p>
          <p className="p-4 font-sans text-2xl">
          To enroll yourself as a content writer please reach out to us at:
            <span className="font-bold underline"> blogs@caffienecode.com</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Blogs;
