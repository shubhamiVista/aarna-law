import Image from 'next/image'
import React from 'react'

const InsightsCard = ({ cardDetails }) => {
  const { imageUrl, title, desc } = cardDetails
  return (
    <li className="w-[482px] h-[535px] shadow-lg">
      <div className="flex flex-col h-full">
        <Image src={imageUrl} width={1000} height={500} className="w-full" />
        <div className="p-6 flex flex-col items-start justify-between h-full">
          <div className="space-y-4">
            <h1 className="text-2xl text-custom-blue font-semibold">{title}</h1>
            <p className="text-custom-gray">{desc}</p>
          </div>
          <button className="border border-custom-red text-custom-red px-6 py-2 hover:bg-custom-red hover:text-white">
            View Article
          </button>
        </div>
      </div>
    </li>
  )
}

export default InsightsCard
