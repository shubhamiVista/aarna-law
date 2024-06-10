import Image from 'next/image'
import React from 'react'

const OurLegacy = () => {
  return (
    <div className="flex mb-14">
      <div className="w-1/2 p-8">
        <div className="flex flex-col justify-between items-start h-full w-5/6 ml-auto">
          <h1 className="text-custom-blue text-2xl font-semibold">
            Our Legacy
          </h1>
          <h2 className="text-custom-red text-4xl font-semibold">
            Founded on over nine decades of commitment and service
          </h2>
          <p className="text-custom-gray">
            Across varied domains, industries and international borders, our
            legal services and solutions are tailor-made to represent our
            clients’ best interest without compromising on our principles of
            natural law, justice and compassion.
          </p>
          <button className="border border-custom-blue px-6 py-2 text-custom-blue hover:bg-custom-blue hover:text-white">
            Our Firm
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src="/home-page/our-legacy@2x.png"
          width={683}
          height={456}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default OurLegacy
