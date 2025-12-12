"use client"

import Image from "next/image"
import PageTitle from "@/components/page-title"
import PageSubtitle from "@/components/page-subtitle"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Solutions = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <PageTitle title="*SOLUTIONS*" />
      <div className="relative">
        <Image
          src="/solution_main01.png"
          alt="Main Image"
          width={1440}
          height={705}
          className="w-full object-cover object-bottom h-152"
        />
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 tracking-tight text-white text-[55px] w-225 leading-15 flex flex-col items-center">
          <div className="text-center flex items-center justify-center w-full">
            <span className="bg-main-text-gradient font-medium px-2"> REACH THE UNREACHABLE</span>
            <span className="font-light text-[40px] px-2"> & </span>
          </div>
          <div className="font-light text-left w-full">GATHER INFORMATION</div>
          <div className="font-light text-right w-full -translate-x-30">WITH A BLINK OF AN EYE</div>
        </div>
      </div>
      <div
        className="pt-6.5 pb-19 px-17.5 flex flex-col gap-2.5 overflow-hidden"
        style={{
          background: `url('/background/bk06.png') no-repeat center center / cover`,
        }}
      >
        <div data-aos="fade-right" data-aos-duration="1000">
          <PageSubtitle title="DRONE AS FIRST RESPONDER (DFR)" border={false} className="px-5" />
          <div className="border-gradient-round-bottom-right p-px mt-2.5 mx-5">
            <div className="p-7.5 flex items-center gap-5 bg-[#1F1D1D] rounded-[12px]">
              <Image
                src="/solution_image01.png"
                alt="DRONE AS FIRST RESPONDER"
                width={426}
                height={230}
              />
              <p className="text-xl font-light">In response to emergency situation or quick assessment of front line, a drone associate with cloud system provides instantly streaming back to the office for decision making. </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <PageSubtitle title="INDUSTRIAL INSPECTION" border={false} />
          <div className="border-gradient-round-bottom-left p-px mt-2.5 mx-5">
            <div className="p-7.5 flex items-center gap-5 bg-[#1F1D1D] rounded-[12px]">
              <p className="text-xl font-light">Drone offers 24/7 surveillance of all the details in complex industrial environment, making the operation more efficiency with less human power. </p>
              <Image
                src="/solution_image04.png"
                alt="INDUSTRIAL INSPECTION"
                width={426}
                height={230}
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <PageSubtitle title="MAPPING" border={false} />
          <div className="border-gradient-round-bottom-right p-px mt-2.5 mx-5">
            <div className="p-7.5 flex items-center gap-5 bg-[#1F1D1D] rounded-[12px]">
              <Image
                src="/solution_image03.png"
                alt="MAPPING"
                width={426}
                height={230}
              />
              <p className="text-xl font-light">Achieve precise, reliable mapping in a fraction of the time. Our drone solution delivers high-resolution data with intelligent flight performance, empowering every mission with clarity and efficiency. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions