'use client'
import React, { useState, useRef, useEffect } from 'react'
import InsightSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Link from 'next/link'
import InsightsCard from './InsightsCard'
import { leftArrow, rightArrow } from '@utils/Icon'
import { insights } from '@utils/data'

function HomeBanner() {
  const sliderRef = useRef(null)

  const NextArrow = ({ onClick }) => (
    <div
      className="transform -translate-y-1/2 right-4 z-10 cursor-pointer"
      onClick={() => sliderRef.current.slickNext()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <g
          id="Group_49400"
          data-name="Group 49400"
          transform="translate(-1167 -1988)"
        >
          <circle
            id="Ellipse_133"
            data-name="Ellipse 133"
            cx="24"
            cy="24"
            r="24"
            transform="translate(1167 1988)"
            fill="#1d1d1d"
          />
          <g
            id="Group_13142"
            data-name="Group 13142"
            transform="translate(-69.769 -3315.449)"
          >
            <g
              id="Group_158"
              data-name="Group 158"
              transform="translate(1248.88 5318.561)"
            >
              <path
                id="Path_96"
                data-name="Path 96"
                d="M0,0H12.534V12.605"
                transform="translate(8.913 0) rotate(45)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )

  const PrevArrow = () => (
    <div
      className=" transform -translate-y-1/2 left-4 z-10 cursor-pointer"
      onClick={() => sliderRef.current.slickPrev()}
    >
      <svg
        id="Group_49401"
        data-name="Group 49401"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <circle
          id="Ellipse_133"
          data-name="Ellipse 133"
          cx="24"
          cy="24"
          r="24"
          fill="#1d1d1d"
        />
        <g
          id="Group_13142"
          data-name="Group 13142"
          transform="translate(18.112 15.112)"
        >
          <g id="Group_158" data-name="Group 158" transform="translate(0)">
            <path
              id="Path_96"
              data-name="Path 96"
              d="M0,12.605H12.534V0"
              transform="translate(17.776 8.913) rotate(135)"
              fill="none"
              stroke="#fff"
              stroke-width="2"
            />
          </g>
        </g>
      </svg>
    </div>
  )

  var setting = {
    speed: 400,
    slidesToShow: 2,
    initialSlide: 2,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
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
    <div className="flex items-center gap-10 bg-white -mt-24 ml-24 p-10 z-50">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-custom-red writing-mode-vertical-rl transform rotate-180 text-[80px] font-bold m-0 p-0">
          Insights
        </h1>
        <div className="flex gap-2">
          <PrevArrow />
          <NextArrow />
        </div>
      </div>
      <div class="px-4 mx-auto max-w-screen-xl text-center overflow-hidden">
        <InsightSlider ref={sliderRef} {...setting} className="z-0 gap-4">
          {insights.map((item) => (
            <InsightsCard key={item.id} cardDetails={item} />
          ))}
        </InsightSlider>
      </div>
    </div>
  )
}

export default HomeBanner
