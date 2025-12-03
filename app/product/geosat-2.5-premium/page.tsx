/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image"
import PageTitle from "@/components/page-title"
import PageSubtitle from "@/components/page-subtitle"
import VerticalCarousel from "./vertical-carousel"
import { useState } from "react"

const products = [
  {
    title: "GIMBAL",
    url: "/product_image09-1.png",
    hoverUrl: "/product_image09-2.png"
  },
  {
    title: "SPEAKER",
    url: "/product_image10-1.png",
    hoverUrl: "/product_image10-2.png"
  },
  {
    title: "SPOTLIGHT",
    url: "/product_image11-1.png",
    hoverUrl: "/product_image11-2.png"
  }
]

const GeosatPremium = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>();
  return (
    <div>
      <PageTitle title="*GEOSAT* *2.5* PREMIUM" subtitle="BUILT TO NAVIGATE THROUGH COMPLEX SCENARIO" />
      <div className="relative">
        <Image
          src="/product_main.png"
          alt="Main Image"
          width={1456}
          height={816}
          className="w-full object-cover h-112.5 2xl:h-150"
        />
        <div className="grid max-w-167 w-[46%] grid-cols-2 absolute top-3/12 right-0">
          <div className="py-5 px-8 bg-product-main-intro-r-gradient">
            <p className="font-bold text-[40px]">36 MIN</p>
            <p className="text-xl font-light">MAX FLIGHT TIME</p>
          </div>
          <div className="py-5 px-8 bg-primary/60">
            <p className="font-bold text-[40px]">IP 54</p>
            <p className="text-xl font-light">WATER RESISTANCE</p>
          </div>
          <div className="py-5 px-8 bg-primary/60">
            <p className="font-bold text-[40px]">12 M/S</p>
            <p className="text-xl font-light">MAX WIND RESISTANCE</p>
          </div>
          <div className="py-5 px-8 bg-product-main-intro-l-gradient">
            <p className="font-bold text-[40px]">10 KM</p>
            <p className="text-xl font-light">COMMUNICATION DISTANCE</p>
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="GIMBAL PERFORMANCE" />
        <div
          className="flex justify-center py-13"
          style={{
            background: "linear-gradient(180deg, var(--color-black) 65.41%, rgba(var(--color-primary-rgb), 0.5) 100%)"
          }}
        >
          <div className="max-w-5/6 flex gap-7.5">
            <div className="bg-card">
              <div className="p-4">
                <p className="text-4xl font-bold font-roboto-condensed w-32">RGB IMAGING</p>
                <p className="text-lg font-light text-white/80 pt-3">Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the right decision instantly.</p>
              </div>
              <Image
                src="/product_image01.png"
                alt="Gimbal RGB Imaging"
                width={300}
                height={379}
                className="w-full object-cover"
              />
            </div>
            <div className="bg-card">
              <Image
                src="/product_image02.png"
                alt="Gimbal RGB Imaging"
                width={300}
                height={379}
                className="w-full object-cover"
              />
              <div className="p-4">
                <p className="text-4xl font-bold font-roboto-condensed">OBJECT DETECTION AND TRACKING</p>
                <p className="text-lg font-light text-white/80 pt-3">Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the right decision instantly.</p>
              </div>
            </div>
            <div className="bg-card">
              <Image
                src="/product_image03-3.png"
                alt="Gimbal RGB Imaging"
                width={300}
                height={379}
                className="w-full object-bottom aspect-5/4"
              />
              <div className="p-4">
                <p className="text-4xl font-bold font-roboto-condensed w-32">THERMAL IMAGING</p>
                <p className="text-lg font-light text-white/80 pt-3">Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the right decision instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="AUTONOMOUS MISSION" />
        <div className="flex flex-col items-center py-18.75 bg-center bg-cover" style={{
          backgroundImage: `
          linear-gradient(rgba(var(--color-black-rgb), 0.3), rgba(var(--color-black-rgb), 0.3)),
          url('/background/bk02.png')
        `
        }}>
          <div className="max-w-5/6 flex gap-7.5">
            <div className="flex-1">
              <Image
                src="/product_image07.png"
                alt="Gimbal RGB Imaging"
                width={300}
                height={379}
                className="w-full object-cover"
              />
              <div className="p-5 px-1">
                <p className="text-4xl font-bold font-roboto-condensed">GPS DENIED FLYING</p>
                <p className="text-lg font-light text-white/80 pt-3">
                  In some scenarios, for example bridge inspection or indoor inspection, where there&apos;s no GPS signal, drone can still be operable manually or autonomously. Giving pilots the ability to capture information at ease.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/product_image08.jpg"
                alt="Gimbal RGB Imaging"
                width={300}
                height={379}
                className="w-full object-cover"
              />
              <div className="p-5 px-1">
                <p className="text-4xl font-bold font-roboto-condensed">OBSTACLE AVOIDANCE</p>
                <p className="text-lg font-light text-white/80 pt-3">
                  Equipped with sensors and cutting edge algorithms, drone can seamlessly complete the mission by taking a small detour when encounter obstacles without compromisiong autonomous mission. This allows Geosat 2.5 Premium to conduct mission in various complex environment such as indoor warehouse, power plant etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="PROPRIETARY SOFTWARE FEATURE" />
        <div
          className="flex flex-col items-center py-18.75 bg-center bg-cover"
          style={{
            backgroundImage: `url('/background/bk01.png')`
          }}
        >
          <div className="w-11/12 xl:w-5/6 flex gap-7.5">
            <VerticalCarousel />
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="ACCESSORIES" />
        <div
          className="flex justify-center bg-center bg-cover "
          style={{
            background: `
              linear-gradient(125.52deg, rgba(10, 10, 10, 0.7) 56.17%, rgb(54, 0, 0, 1) 89.85%),
              linear-gradient(rgba(var(--color-black-rgb), 0.1), rgba(var(--color-black-rgb), 0.1)),
              url('/background/bk03.png')
            `
          }}
        >
          <div className="w-5/6 flex justify-around py-20 gap-17.5">
            {
              products.map((product, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(undefined)}
                >
                  <div className="bg-black">
                    <div className="border-gradient-bottom-left">
                      <img
                        src={hoveredIndex === index ? product.hoverUrl : product.url}
                        alt={product.title}
                        width={350}
                        height={350}
                        className="aspect-square"
                      />
                    </div>
                    <div className="px-5 py-2">
                      <p className="text-3xl font-bold font-roboto">{product.title}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeosatPremium