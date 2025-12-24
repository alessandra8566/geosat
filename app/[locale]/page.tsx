'use client'

import PageTitle from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/shadcn'
import Image from 'next/image'
import { Link } from '@/lib/i18n/routing'
import { useState } from 'react'

const products = [
  {
    title: 'GEOSAT 2.0',
    description: 'Daily open air operation partner',
    url: '/index_bt04-1.png',
    hoverUrl: '/index_bt04-2.png',
    link: '/product/geosat-2.0',
  },
  {
    title: 'GEOSAT 2.5 PREMIUM',
    description: 'Built to navigate through complex scenario',
    url: '/index_bt05-1.png',
    hoverUrl: '/index_bt05-2.png',
    link: '/product/geosat-2.5-premium',
  },
  {
    title: 'GEOSAT 10 MR',
    description: 'Multiple payload and infinity possibility',
    url: '/index_bt06-1.png',
    hoverUrl: '/index_bt06-2.png',
    link: '/product/geosat-10-mr',
  },
]

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number>()
  return (
    <div className="flex flex-col justify-start">
      <PageTitle title="DISCOVERY YOUR *DRONE*" />
      <div className="flex w-full flex-wrap bg-white">
        <div className="3xl:w-106.5 3xl:max-w-1/3 3xl:order-0 order-2 w-full bg-contain bg-right bg-no-repeat" style={{ backgroundImage: "url('/index_bt01-2.png')" }}>
          <div className="bg-card 3xl:pb-10 3xl:py-5 flex h-full min-h-[200px] flex-col justify-between p-5 py-2.5 text-white/80 hover:bg-black/30 hover:text-black">
            <p className="-tracking-3 5xl:text-42 leading-1em text-32 font-bold">
              SUPER DRONE FOR <br className="xl:hidden" />
              NEXT OSIRIS
            </p>
            <p className="leading-1.3em 5xl:text-xl text-lg">Next Generation Autonomous Inspection and S&R multirotor</p>
          </div>
        </div>
        <div className="bg-background 3xl:w-2/3 3xl:order-0 order-1 w-full grow">
          <img src="/index_main_01.png" alt="Home Main" width={1014} height={540} className="w-full object-cover" />
        </div>
        <div className="5xl:h-75 3xl:w-106.5 3xl:max-w-1/3 3xl:order-0 3xl:h-58 relative order-3 flex h-auto w-full justify-center overflow-hidden border-b border-black">
          <Image src="/index_main02.png" alt="Side Image" width={3840} height={5760} quality={100} className="w-full object-cover" />
        </div>
        <div className="3xl:w-2/3 3xl:order-0 3xl:flex-row order-4 flex w-full grow flex-col border-b border-black">
          <div
            className="bg-content 3xl:w-1/2 3xl:border-r 3xl:border-b-0 w-full border-b border-black bg-right bg-no-repeat 2xl:bg-size-[50%_auto]"
            style={{ backgroundImage: "url('/index_bt02-2.png')" }}
          >
            <div className="bg-card 3xl:pb-10 3xl:py-5 flex h-full min-h-[200px] flex-col justify-between p-5 py-2.5 text-white/80 hover:bg-black/30 hover:text-black">
              <p className="-tracking-3 5xl:text-42 leading-1em text-4xl font-bold">PROPRIETARY GCS SOFTWARE</p>
              <p className="leading-1.3em 5xl:text-xl text-lg">
                Intuitive design for fast <br /> deployment in the field
              </p>
            </div>
          </div>
          <div className="bg-home-index-03 3xl:w-1/2 w-full bg-size-[60%_auto] bg-position-[right_-50%_top_70%] bg-no-repeat">
            <div className="bg-card 4xl:pb-10 3xl:py-5 flex h-full min-h-[200px] flex-col justify-between p-5 py-2.5 text-white/80 hover:bg-black/30 hover:text-black">
              <p className="-tracking-3 5xl:text-42 leading-1em text-4xl font-bold">
                RECENT EVENTS <br />
                HOT NEWS
              </p>
              <p className="leading-1.3em 5xl:text-xl text-lg">
                Geosat presenting at CUAV <br /> with our drone family
              </p>
            </div>
          </div>
        </div>
      </div>
      <PageTitle title="WHY CHOOSE *GEOSAT*" />
      <div className="flex w-full flex-col flex-wrap 2xl:flex-row">
        <div className="bg-card 5xl:gap-0 order-2 flex w-full flex-col justify-between gap-10 p-5 text-white/80 2xl:order-0 2xl:w-106.5 2xl:max-w-1/3">
          <p className="leading-1.3em 5xl:text-xl text-lg">
            Geosat has been a drone service company for more than 10 years, with the knowledge of actual operation, we design drones with exellent stability and high resolution camera for all kinds of
            missions.{' '}
          </p>
          <div className="5xl:gap-5 flex flex-col gap-3">
            <div>
              <p className="leading-0.9em -tracking-3 bg-page-subtitle-gradient text-22 px-2.5 pt-2.5 pb-1 font-bold text-white">DRONE PIONEER</p>
              <p className="leading-1em 5xl:leading-1.3em p-2.5 pt-1 text-lg font-light">Leading drone company in Taiwan with more than 10 years in drone application.</p>
            </div>
            <div>
              <p className="leading-0.9em -tracking-3 bg-page-subtitle-gradient text-22 px-2.5 pt-2.5 pb-1 font-bold text-white">RAPID SUPPORT</p>
              <p className="leading-1em 5xl:leading-1.3em p-2.5 pt-1 text-lg font-light">Offers quick support whenever there&apos;s a requirement</p>
            </div>
          </div>
        </div>
        <div className="w-full grow 2xl:w-2/3">
          <img src="/index03.png" alt="Home Main2" width={1014} height={495} className="h-75 w-full object-cover 2xl:h-125" />
        </div>
      </div>
      <PageTitle title="*EXCELLENCE* PRODUCTS" />
      <div className="flex justify-center">
        <div className="4xl:py-22.5 4xl:px-10 flex flex-col p-0 2xl:flex-row 2xl:gap-5 2xl:px-4 2xl:py-14">
          {products.map((product, index) => (
            <Link
              key={product.title}
              href={product.link}
              className={cn('border-gradient-card relative w-full bg-black hover:[border-image-source:none]', {
                '4xl:top-14.5 2xl:top-6': index === 1,
              })}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(undefined)}
            >
              <div className="bg-card text-white hover:bg-white/70 hover:text-black">
                <div className="4xl:pt-12.5 4xl:pb-5 flex flex-col gap-1 p-5 pb-2.5">
                  <p className="leading-1em text-26 4xl:text-4xl font-black">{product.title}</p>
                  <p className="leading-1.3em 4xl:text-xl text-lg">{product.description}</p>
                </div>
                <div className="relative">
                  <Image
                    src={hoveredIndex === index ? product.hoverUrl : product.url}
                    alt={product.title}
                    width={880}
                    height={560}
                    quality={100}
                    className="h-full object-cover transition-opacity duration-300"
                  />
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
