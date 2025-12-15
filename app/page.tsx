'use client'

import PageTitle from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/shadcn'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const products = [
  {
    title: 'GEOSAT 2.0',
    description: 'Daily open air operation partner',
    url: '/index_bt04-1.png',
    hoverUrl: '/index_bt04-2.png',
    link: '/products/geosat',
  },
  {
    title: 'GEOSAT 2.5 PREMIUM',
    description: 'Built to navigate through complex scenario',
    url: '/index_bt05-1.png',
    hoverUrl: '/index_bt05-2.png',
    link: '/products/geosat-2-5-premium',
  },
  {
    title: 'GEOSAT 10 MR',
    description: 'Multiple payload and infinity possibility',
    url: '/index_bt06-1.png',
    hoverUrl: '/index_bt06-2.png',
    link: '/products/geosat-10-mr',
  },
]

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number>()
  return (
    <div className="flex flex-col justify-start">
      <PageTitle title="DISCOVERY YOUR *DRONE*" />
      <div className="flex w-full flex-wrap bg-white">
        <div className="w-106.5 max-w-1/3 bg-contain bg-right bg-no-repeat" style={{ backgroundImage: "url('/index_bt01-2.png')" }}>
          <div className="bg-card flex h-full flex-col justify-between p-5 pb-10 text-white/80 hover:bg-black/30 hover:text-black">
            <p className="leading-1em -tracking-3 text-[42px] font-bold">SUPER DRONE FOR NEXT OSIRIS</p>
            <p className="leading-1.3em text-xl">Next Generation Autonomous Inspection and S&R multirotor</p>
          </div>
        </div>
        <div className="bg-background w-2/3 grow">
          <img src="/index_main_01.png" alt="Main Image" width={1014} height={540} className="w-full object-cover" />
        </div>
        <div className="relative flex h-75 w-106.5 max-w-1/3 justify-center overflow-hidden border-b border-black">
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              background: 'linear-gradient(336.63deg, rgba(var(--color-black-rgb), 0) 35.06%, rgba(var(--color-black-rgb), 0.4) 81.86%)',
            }}
          />
          <Image src="/index_main02-2.png" alt="Side Image" width={3840} height={5760} quality={100} className="w-full object-cover object-[0%_58%]" />
        </div>
        <div className="flex w-2/3 grow border-b border-black">
          <div className="bg-content flex-1 border-r border-black bg-right bg-no-repeat 2xl:bg-size-[50%_auto]" style={{ backgroundImage: "url('/index_bt02-2.png')" }}>
            <div className="bg-card flex h-full flex-col justify-between p-5 pb-10 text-white/80 hover:bg-black/30 hover:text-black">
              <p className="leading-1em -tracking-3 text-[42px] font-bold">PROPRIETARY GCS SOFTWARE</p>
              <p className="leading-1.3em w-60 text-xl">Intuitive design for fast deployment in the field</p>
            </div>
          </div>
          <div className="bg-home-index-03 flex-1 bg-size-[60%_auto] bg-position-[right_-50%_top_70%] bg-no-repeat">
            <div className="bg-card flex h-full flex-col justify-between p-5 pb-10 text-white/80 hover:bg-black/30 hover:text-black">
              <p className="leading-1em -tracking-3 w-80 text-[42px] font-bold">RECENT EVENTS HOT NEWS</p>
              <p className="leading-1.3em w-70 text-xl">Geosat presenting at CUAV with our drone family</p>
            </div>
          </div>
        </div>
      </div>
      <PageTitle title="WHY CHOOSE *GEOSAT*" />
      <div className="flex w-full flex-wrap">
        <div className="bg-card flex w-106.5 max-w-1/3 flex-col justify-between p-5 text-white/80">
          <p className="leading-1.2em text-base lg:text-xl">
            Geosat has been a drone service company for more than 10 years, with the knowledge of actual operation, we design drones with exellent stability and high resolution camera for all kinds of
            missions.{' '}
          </p>
          <div className="flex flex-col gap-5">
            <div>
              <p className="leading-0.9em -tracking-3 bg-page-subtitle-gradient px-2.5 pt-2.5 pb-1 text-[22px] font-bold text-white">DRONE PIONEER</p>
              <p className="leading-1.2em px-2.5 pt-1 pb-2.5 text-[18px] font-light">Leading drone company in Taiwan with more than 10 years in drone application.</p>
            </div>
            <div>
              <p className="leading-0.9em -tracking-3 bg-page-subtitle-gradient px-2.5 pt-2.5 pb-1 text-[22px] font-bold text-white">RAPID SUPPORT</p>
              <p className="leading-1.2em px-2.5 pt-1 pb-2.5 text-[18px] font-light">Offers quick support whenever there&apos;s a requirement</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 grow">
          <img src="/index03.png" alt="Main Image" width={1014} height={495} className="h-125 w-full object-cover" />
        </div>
      </div>
      <PageTitle title="*EXCELLENCE* PRODUCTS" />
      <div className="flex justify-center">
        <div className="flex gap-5 px-10 py-22.5">
          {products.map((product, index) => (
            <div
              key={index}
              className={cn('border-gradient-card relative h-96 w-full bg-white hover:border-none', {
                'top-14.5': index === 1,
              })}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(undefined)}
            >
              <div className="bg-card hover:bg-black/30 hover:text-black">
                <div className="flex flex-col gap-1 p-5 pt-12.5">
                  <p className="leading-1em text-4xl font-black">{product.title}</p>
                  <p className="leading-1.3em text-xl">{product.description}</p>
                </div>
                <div className={cn('relative h-70', { 'border-gradient-card-image': hoveredIndex === index })}>
                  <Image src={hoveredIndex === index ? product.hoverUrl : product.url} alt={product.title} width={440} height={280} className="h-full object-cover transition-opacity duration-300" />
                  <Link href={product.link} passHref>
                    <div
                      className={cn(
                        'absolute top-10 left-5 flex items-center justify-center transition-opacity duration-100',
                        hoveredIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                      )}
                    >
                      <Button className="font-roboto-condensed cursor-pointer bg-black px-4 py-3 text-white hover:bg-black" size="lg">
                        DETAIL INFO
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
