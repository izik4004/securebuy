import React from 'react'

const Section1 = () => {
  return (
    <div className=" container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-6 z-99">
      <h3 className='py-6 text-2xl font-semibold'>Browse by category</h3>
        <div className=" border py-10 px-2 rounded-xl bg-white w-1/6 hover:bg-secondary cursor-pointer">
          <div className=" text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 text-sm font-semibold leading-5">The quick fox</h6>
           
          </div>
        </div>
       
    </div>
  )
}

export default Section1