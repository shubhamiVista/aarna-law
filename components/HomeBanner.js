"use client"
import React, { useState, useRef, useEffect } from "react"
import BannerSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@components/Navbar"

function HomeBanner() {
  var setting = {
    speed: 500,
    slidesToShow: 1,
    initialSlide: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    arrow: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="text-center relative w-full mx-auto overflow-hidden md:h-screen">
      <Navbar />
      <div className="text-center">
        <BannerSlider {...setting} className="z-0">
          <div>
            <Image
              src="/home-page/home-banner-1.jpg"
              className="w-full h-auto z-0"
              width={800}
              height={150}
              alt=""
              priority
            />
          </div>
          <div>
            <Image
              src="/home-page/home-banner-2.jpg"
              className="w-full h-auto z-0"
              width={800}
              height={150}
              alt=""
              priority
            />
          </div>
          <div>
            <Image
              src="/home-page/home-banner-3.jpg"
              className="w-full h-auto z-0"
              width={800}
              height={150}
              alt=""
              priority
            />
          </div>

          {/* <div className="flex flex-col"> 
        <div className="self-center flex flex-col justify-end items-center mt-40 text-center gap-8">
          <h1 className="text-white text-[50px] font-semibold">
            Client-Centric Problem Solving
          </h1>
          <p className="text-white text-xl w-1/2">
            We are a counsel-led Indian legal advisory representing India and
            her people across the world in diverse areas of expertise.
          </p>
          <button className="bg-white text-custom-red px-6 py-2 hover:bg-custom-red hover:text-white">
            Contact Us
          </button>
        </div>
    </div> */}
        </BannerSlider>
      </div>
    </section>
  )
}

export default HomeBanner
