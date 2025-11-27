"use client";

import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/shadcn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    title: "GEOSAT",
    description: "Daily open air operation partner",
    url: "/index_bt05-1.jpg",
    hoverUrl: "/index_bt04-2.png",
    link: "/products/geosat"
  },
  {
    title: "GEOSAT 2.5 PREMIUM",
    description: "Built to navigate through complex scenario",
    url: "/index_bt05-1.jpg",
    hoverUrl: "/index_bt04-2.png",
    link: "/products/geosat-2-5-premium"
  },
  {
    title: "GEOSAT 10 MR",
    description: "Multiple payload and infinity possibility",
    url: "/index_bt05-1.jpg",
    hoverUrl: "/index_bt04-2.png",
    link: "/products/geosat-10-mr"
  }
]

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number>();
  return (
    <div className="flex flex-col justify-start">
      <PageTitle title="DISCOVERY YOUR *DRONE*" />
      <div className="flex w-full flex-wrap bg-white">
        <div
          className="w-1/3 bg-contain bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/index_bt01-2.png')" }}
        >
          <div className="flex flex-col justify-between p-5 pb-10 bg-card text-white/80 hover:bg-black/30 hover:text-black h-full">
            <p className="text-4xl font-bold font-roboto-condensed">SUPER DRONE FOR NEXT OSIRIS</p>
            <p className="text-xl">Next Generation Autonomous Inspection and S&R multirotor</p>
          </div>
        </div>
        <div className="grow w-2/3 bg-background">
          <Image
            src="/index_main_01.png"
            alt="Main Image"
            width={1014}
            height={540}
            className="w-full object-cover"
          />
        </div>
        <div className="w-1/3 max-h-75 2xl:max-h-96 overflow-hidden flex justify-center border-b border-black">
          <Image
            src="/index_main02.jpg"
            alt="Side Image"
            width={3840}
            height={5760}
            className="w-full rotate-y-180 object-cover object-[0%_58%]"
          />
        </div>
        <div className="grow w-2/3 flex border-b border-black">
          <div
            className="flex-1 bg-content 2xl:bg-size-[50%_auto] bg-no-repeat bg-right border-r border-black"
            style={{ backgroundImage: "url('/index_bt02-2.png')" }}
          >
            <div className="flex flex-col justify-between p-5 pb-10 bg-card text-white/80 hover:bg-black/30 hover:text-black h-full">
              <p className="text-4xl font-bold font-roboto-condensed">PROPRIETARY GCS SOFTWARE</p>
              <p className="text-xl w-60">Intuitive design for fast deployment in the field</p>
            </div>
          </div>
          <div className="bg-home-index-03 flex-1 bg-size-[60%_auto] bg-no-repeat bg-position-[right_-50%_top_70%]">
            <div className="flex flex-col justify-between p-5 pb-10 bg-card text-white/80 hover:bg-black/30 hover:text-black h-full">
              <p className="text-4xl font-bold font-roboto-condensed w-72">RECENT EVENTS HOT NEWS</p>
              <p className="text-xl w-72">Geosat presenting at CUAV with our drone family</p>
            </div>
          </div>
        </div>
      </div>
      <PageTitle title="WHY CHOOSE *GEOSAT*" className="py-2" />
      <div className="flex w-full flex-wrap">
        <div className="flex flex-col justify-between p-5 pb-10 w-1/3 bg-card text-white/80">
          <p className="text-base lg:text-xl">Geosat has been a drone service company for more than 10 years, with the knowledge of actual operation, we design drones with exellent stability and high resolution camera for all kinds of missions. </p>
          <div className="flex flex-col gap-6 xl:gap-8">
            <div>
              <p className="text-2xl font-roboto-condensed font-bold bg-page-subtitle-gradient pt-2.5 pb-1 px-2.5">DRONE PIONEER</p>
              <p className="font-thin pt-1 pb-2.5 px-2.5">Leading drone company in Taiwan with more than 10 years in drone application.</p>
            </div>
            <div>
              <p className="text-2xl font-roboto-condensed font-bold bg-page-subtitle-gradient pt-2.5 pb-1 px-2.5">RAPID SUPPORT</p>
              <p className="font-thin pt-1 pb-2.5 px-2.5">Offers quick support whenever there&apos;s a requirement</p>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <Image
            src="/index03.png"
            alt="Main Image"
            width={1014}
            height={495}
            className="w-full h-87 lg:h-125 2xl:h-163 object-cover"
          />
        </div>
      </div>
      <PageTitle title="*EXCELLENT* PRODUCTS" className="py-2" />
      <Image
        src="/index04.png"
        alt="Main Image"
        width={1014}
        height={495}
        className="w-full"
      />
      <div className="flex justify-center">
        <div className="max-w-11/12 flex gap-5 mb-20">
          {
            products.map((product, index) => (
              <div
                key={index}
                className={cn("relative w-full h-96 bg-white border-gradient-card hover:border-none", {
                  "top-10": index === 1
                })}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(undefined)}
              >
                <div className="bg-card hover:bg-black/30 hover:text-black">
                  <div className="p-5 pt-12">
                    <p className="text-4xl font-bold font-roboto-condensed">{product.title}</p>
                    <p className="text-lg">{product.description}</p>
                  </div>
                  <div className={cn("relative h-70", { "border-gradient-card-image": hoveredIndex === index })}>
                    <Image
                      src={hoveredIndex === index ? product.hoverUrl : product.url}
                      alt={product.title}
                      width={440}
                      height={280}
                      className="object-cover h-full transition-opacity duration-300"
                    />
                    <Link href={product.link} passHref>
                      <div
                        className={cn(
                          "absolute top-10 left-5 flex items-center justify-center transition-opacity duration-100",
                          hoveredIndex === index
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        )}
                      >
                        <Button className="py-3 px-4 bg-black hover:bg-black text-white font-roboto-condensed cursor-pointer" size="lg" >
                          DETAIL INFO
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}