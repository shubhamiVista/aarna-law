import Image from 'next/image'
import React from 'react'

const Network = () => {
  return (
    <div className="flex flex-col items-center gap-10 mb-14">
      <h1 className="text-custom-blue text-2xl font-semibold">
        A Network Of 75+ Lawyers Around The World
      </h1>
      <div className="w-10/12">
        <Image
          src="/home-page/world-map.svg"
          width={1000}
          height={500}
          className="w-full"
        />
      </div>
      <button className="border border-custom-red px-6 py-2 text-custom-red hover:bg-custom-red hover:text-white">
        Contact Our Experts
      </button>
    </div>
  )
}

export default Network
