'use client'

import Image from 'next/image'
import PageTitle from '@/components/page-title'
import PageSubtitle from '@/components/page-subtitle'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Solutions = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <PageTitle title="*SOLUTIONS*" />
      <div className="relative">
        <Image src="/solution_main01.png" alt="Main Image" width={1440} height={705} className="h-152 w-full object-cover object-bottom" />
        <div className="absolute bottom-24 left-1/2 flex w-225 -translate-x-1/2 transform flex-col items-center text-[55px] leading-15 tracking-tight text-white">
          <div className="flex w-full items-center justify-center text-center">
            <span className="bg-main-text-gradient px-2 font-medium"> REACH THE UNREACHABLE</span>
            <span className="px-2 text-[40px] font-light"> & </span>
          </div>
          <div className="w-full text-left font-light">GATHER INFORMATION</div>
          <div className="w-full -translate-x-30 text-right font-light">WITH A BLINK OF AN EYE</div>
        </div>
      </div>
      <div
        className="flex flex-col gap-2.5 overflow-hidden px-17.5 pt-6.5 pb-19"
        style={{
          background: `url('/background/bk06.png') no-repeat center center / cover`,
        }}
      >
        <div data-aos="fade-right" data-aos-duration="1000">
          <PageSubtitle title="DRONE AS FIRST RESPONDER (DFR)" border={false} className="px-5" />
          <div className="border-gradient-round-bottom-right mx-5 mt-2.5 p-px">
            <div className="flex items-center gap-5 rounded-[12px] bg-[#1F1D1D] p-7.5">
              <Image src="/solution_image01.png" alt="DRONE AS FIRST RESPONDER" width={426} height={230} />
              <p className="text-xl font-light">
                In response to emergency situation or quick assessment of front line, a drone associate with cloud system provides instantly streaming back to the office for decision making.{' '}
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <PageSubtitle title="INDUSTRIAL INSPECTION" border={false} />
          <div className="border-gradient-round-bottom-left mx-5 mt-2.5 p-px">
            <div className="flex items-center gap-5 rounded-[12px] bg-[#1F1D1D] p-7.5">
              <p className="text-xl font-light">Drone offers 24/7 surveillance of all the details in complex industrial environment, making the operation more efficiency with less human power. </p>
              <Image src="/solution_image04.png" alt="INDUSTRIAL INSPECTION" width={426} height={230} />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <PageSubtitle title="MAPPING" border={false} />
          <div className="border-gradient-round-bottom-right mx-5 mt-2.5 p-px">
            <div className="flex items-center gap-5 rounded-[12px] bg-[#1F1D1D] p-7.5">
              <Image src="/solution_image03.png" alt="MAPPING" width={426} height={230} />
              <p className="text-xl font-light">
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
