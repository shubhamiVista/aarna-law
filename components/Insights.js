import { leftArrow, rightArrow } from '@utils/Icon'
import { insights } from '@utils/data'
import React from 'react'
import InsightsCard from './InsightsCard'

const Insights = () => {
  return (
    <div className="flex items-center gap-10 bg-white -mt-24 ml-24 p-10">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-custom-red writing-mode-vertical-rl transform rotate-180 text-[80px] font-bold m-0 p-0">
          Insights
        </h1>
        <div className="flex gap-2">
          <button className="bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red">
            {leftArrow}
          </button>
          <button className="bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red">
            {rightArrow}
          </button>
        </div>
      </div>
      <div>
        <ul className="flex gap-3">
          {insights.map((item) => (
            <InsightsCard key={item.id} cardDetails={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Insights
