'use client'

import Image from 'next/image'
import PageTitle from '@/components/page-title'
import PageSubtitle from '@/components/page-subtitle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import useIsMobile from '@/utils/hooks/use-is-mobile'
import { BREAKPOINTS } from '@/utils/constant'

const Solutions = () => {
  const isLess2xl = useIsMobile(BREAKPOINTS['2xl'])
  useEffect(() => {
    AOS.init({ disable: isLess2xl })
    AOS.refresh()
  }, [isLess2xl])

  return (
    <div>
      <PageTitle title="*SOLUTIONS*" />
      <div className="relative flex justify-center overflow-hidden">
        <Image src="/solution_main01.png" alt="Main Image" width={1440} height={705} className="w-full min-w-170" />
        <div className="title-b4 5xl:w-225 5xl:-translate-x-1/2 absolute bottom-[5%] left-1/10 flex w-75 -translate-x-[5%] flex-col items-start text-white 2xl:bottom-[15%] 2xl:left-1/2 2xl:w-125 2xl:-translate-x-[43%] 2xl:items-center">
          <div className="flex w-3/4 items-center justify-start 2xl:w-full 2xl:justify-center 2xl:text-center">
            <span className="bg-main-text-gradient px-2 font-medium"> REACH THE UNREACHABLE &</span>
          </div>
          <div className="w-full px-2 text-left font-light">GATHER INFORMATION</div>
          <div className="5xl:-translate-x-30 w-full px-2 font-light 2xl:-translate-x-18 2xl:text-right">WITH A BLINK OF AN EYE</div>
        </div>
      </div>
      <div
        className="5xl:px-17.5 5xl:pt-6.5 5xl:pb-19 flex flex-col gap-2.5 overflow-hidden 2xl:px-5 2xl:pb-15"
        style={{
          background: `url('/background/bk06.png') no-repeat center center / cover`,
        }}
      >
        <div data-aos="fade-right" data-aos-duration="1000">
          <PageSubtitle title="DRONE AS FIRST RESPONDER (DFR)" border={isLess2xl} className="3xl:px-5.5!" />
          <div className="2xl:border-gradient-round-bottom-right p-px 2xl:mx-5 2xl:mt-2.5">
            <div className="flex flex-col items-center gap-0 bg-[#1F1D1D] 2xl:flex-row 2xl:gap-5 2xl:rounded-[12px] 2xl:p-7.5">
              <Image src="/solution_image01.png" alt="DRONE AS FIRST RESPONDER" width={426} height={230} className="3xl:w-105.5 order-2 w-full 2xl:order-1 2xl:w-80" />
              <p className="title-f order-1 px-5 py-2.5 font-light 2xl:order-2 2xl:px-0 2xl:py-0">
                In response to emergency situation or quick assessment of front line, a drone associate with cloud system provides instantly streaming back to the office for decision making.{' '}
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <PageSubtitle title="INDUSTRIAL INSPECTION" border={isLess2xl} className="3xl:px-5.5!" />
          <div className="2xl:border-gradient-round-bottom-left p-px 2xl:mx-5 2xl:mt-2.5">
            <div className="flex flex-col items-center gap-0 bg-[#1F1D1D] 2xl:flex-row 2xl:gap-5 2xl:rounded-[12px] 2xl:p-7.5">
              <p className="title-f px-5 py-2.5 font-light 2xl:px-0 2xl:py-0">
                Drone offers 24/7 surveillance of all the details in complex industrial environment, making the operation more efficiency with less human power.{' '}
              </p>
              <Image src="/solution_image04.png" alt="INDUSTRIAL INSPECTION" width={426} height={230} className="3xl:w-105.5 w-full 2xl:w-80" />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <PageSubtitle title="MAPPING" border={isLess2xl} className="3xl:px-5.5!" />
          <div className="2xl:border-gradient-round-bottom-right p-px 2xl:mx-5 2xl:mt-2.5">
            <div className="flex flex-col items-center gap-0 bg-[#1F1D1D] 2xl:flex-row 2xl:gap-5 2xl:rounded-[12px] 2xl:p-7.5">
              <Image src="/solution_image03.png" alt="MAPPING" width={426} height={230} className="3xl:w-105.5 order-2 w-full 2xl:order-1 2xl:w-80" />
              <p className="title-f order-1 px-5 py-2.5 font-light 2xl:order-2 2xl:px-0 2xl:py-0">
                Achieve precise, reliable mapping in a fraction of the time. Our drone solution delivers high-resolution data with intelligent flight performance, empowering every mission with clarity
                and efficiency.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
