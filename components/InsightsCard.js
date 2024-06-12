import Image from 'next/image'
import React from 'react'

const InsightsCard = ({ cardDetails }) => {
  const { imageUrl, title, desc } = cardDetails
  return (

<div class="w-[510px] h-[535px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<Image src={imageUrl} width={1000} height={500} className="w-full" />
<div class="p-5">
            <h5 class="text-2xl text-custom-blue font-semibold">{title}</h5>
        <p class="mb-3 font-normal text-custom-gray">{desc}</p>
        <a href="#" class="border border-custom-red text-custom-red px-6 py-2 hover:bg-custom-red hover:text-white">
        View Article
        </a>
    </div>
</div>

  )
}

export default InsightsCard
