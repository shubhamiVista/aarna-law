import Image from 'next/image'
import React from 'react'

const InsightsCard = ({ cardDetails }) => {
  const { imageUrl, title, desc } = cardDetails
  return (
    <div class="w-[510px] h-[535px] bg-white border z-20 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <Image src={imageUrl} width={1000} height={500} className="w-full" />
      <div class="p-5 flex flex-col items-start flex-grow">
        <h5 class="text-2xl text-custom-blue font-semibold flex-grow">
          {title}
        </h5>
        <p class="mb-3 font-normal text-custom-gray flex-grow">{desc}</p>
        <button class="border border-custom-red text-custom-red px-6 py-2 hover:bg-custom-red hover:text-white">
          View Article
        </button>
      </div>
    </div>
  )
}

export default InsightsCard
