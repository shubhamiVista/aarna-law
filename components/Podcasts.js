import { podcasts } from '@utils/data'
import React from 'react'
import PodcastCard from './PodcastCard'

const Podcasts = () => {
  return (
    <div className="space-y-10 pb-10 flex flex-col items-center mt-[520px]">
      <h1 className="text-custom-blue text-2xl font-semibold text-center">
        Podcast
      </h1>
      <ul className="flex flex-wrap justify-center gap-3">
        {podcasts.map((item) => (
          <PodcastCard key={item.id} podcastDetails={item} />
        ))}
      </ul>
      <button className="border border-custom-blue px-6 py-2 text-custom-blue hover:bg-custom-blue hover:text-white">
        View all
      </button>
    </div>
  )
}

export default Podcasts
