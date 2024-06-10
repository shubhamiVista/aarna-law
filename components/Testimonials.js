import { leftArrow, rightArrow } from '@utils/Icon'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="pr-40 mb-14">
      <div className="flex justify-end">
        <Image src="/home-page/quotes.svg" width={276} height={215} />
      </div>
      <div className="flex justify-between -mt-36">
        <div className="bg-custom-blue w-[559px] h-[437px]"></div>
        <div className="self-end text-right space-y-6">
          <h2 className="text-custom-blue text-2xl font-semibold">
            Client’s <br /> Testimonials
          </h2>
          <div className="flex gap-2 justify-end">
            <button className="bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red">
              {leftArrow}
            </button>
            <button className="bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red">
              {rightArrow}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
