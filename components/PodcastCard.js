import { play } from '@utils/Icon'
import Image from 'next/image'
import React from 'react'

const PodcastCard = ({ podcastDetails }) => {
  const { title, imageUrl, desc } = podcastDetails
  return (
    <li className="w-[585px] h-[177px] shadow-lg">
      <div className="flex h-full">
        <Image src={imageUrl} width={201} height={178} />
        <div className="p-4 flex flex-col justify-between h-full">
          <h1 className="text-custom-blue text-2xl font-semibold">{title}</h1>
          <div className="flex justify-between items-center w-full">
            <p className="text-custom-gray">{desc}</p>
            <button className="bg-custom-blue text-white p-3 rounded-full hover:bg-custom-red">
              {play}
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default PodcastCard
