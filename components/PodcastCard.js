import { pause, play } from "@utils/Icon"
import { useState, useRef } from "react"

const PodcastCard = ({ podcastDetails }) => {
  const { formattedDate, imageUrl, title, player_link } = podcastDetails
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <li className="w-[585px] h-[177px] shadow-lg">
      <div className="flex h-full">
        <img src={imageUrl} width={201} height={150} alt="" />
        <div className="p-4 flex flex-col justify-between h-full">
          <h1
            className="text-custom-blue text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
          <div className="flex justify-between items-center w-full">
            <p className="text-custom-gray">Posted On {formattedDate}</p>
            <button
              className="bg-custom-blue text-white p-3 rounded-full hover:bg-custom-red"
              onClick={handlePlayPause}
            >
              {isPlaying ? pause : play}
            </button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={player_link} />
    </li>
  )
}

export default PodcastCard
