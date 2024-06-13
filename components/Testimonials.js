'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import InsightSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonials } from '@utils/data'
import TestimonialsCard from './TestimonialsCard'
import { leftArrow, rightArrow } from '@utils/Icon'

const Testimonials = () => {
  const sliderRef = useRef(null)

  const NextArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickNext()}
    >
      {rightArrow}
    </div>
  )

  const PrevArrow = () => (
    <div
      className="cursor-pointer bg-custom-blue text-white text-xl p-3 rounded-full hover:bg-custom-red"
      onClick={() => sliderRef.current.slickPrev()}
    >
      {leftArrow}
    </div>
  )

  var setting = {
    speed: 400,
    slidesToShow: 2,
    initialSlide: 2,
    slidesToScroll: 1,
    fade: false,
    autoplay: false,
    arrow: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="relative mb-14">
        <div className="flex justify-end mr-40">
          <Image src="/home-page/quotes.svg" width={276} height={215} />
        </div>
        <div className="flex justify-between -mt-36">
          <div className="bg-custom-blue w-[559px] h-[437px]"></div>
          <div className="self-end text-right space-y-6 mr-28">
            <h2 className="text-custom-blue text-2xl font-semibold">
              Client’s <br /> Testimonials
            </h2>
            <div className="flex gap-2 justify-end">
              <PrevArrow />
              <NextArrow />
            </div>
          </div>
        </div>

        <div className="absolute w-3/4 flex gap-10 bottom-1/4">
          <InsightSlider ref={sliderRef} {...setting}>
            {testimonials.map((item) => (
              <TestimonialsCard key={item.id} testimonialDetails={item} />
            ))}
          </InsightSlider>
        </div>
      </div>
    </>
  )
}

export default Testimonials
