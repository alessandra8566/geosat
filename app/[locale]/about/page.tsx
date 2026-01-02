'use client'

import PageTitle from '@/components/page-title'
import PageSubtitle from '@/components/page-subtitle'
import useIsMobile from '@/utils/hooks/use-is-mobile'
import { BREAKPOINTS } from '@/utils/constant'

const timelines = [
  {
    year: '2004',
    event: 'Geosat established',
  },
  {
    year: '2007',
    event: 'Computer Best Choice Award',
  },
  {
    year: '2015',
    event: 'National Industrial Innovation Award',
  },
  {
    year: '2018-2020',
    event: 'Taiwan Excellence Award',
  },
  {
    year: '2020',
    event: 'Smart City System Integration Output Award',
  },
  {
    year: '2023',
    event: 'Start Own Drone Brand',
  },
  {
    year: '2025',
    event: 'Launching Geosat 2.0',
  },
  {
    year: '2026',
    event: 'Geosat 2.5 Premium, \n Geosat 10 Coming Soon',
  },
]

const About = () => {
  const isLess2xl = useIsMobile(BREAKPOINTS['2xl'])
  return (
    <div>
      <PageTitle title="*ABOUTS*" />
      <div className="relative flex justify-end overflow-hidden">
        <img src="/about_main_01.png" alt="About Main" width={1440} height={705} className="w-full min-w-200" />
        <div className="title-b4 5xl:w-255 5xl:-translate-x-1/2 absolute bottom-[5%] left-1/10 flex w-75 -translate-x-[5%] flex-col items-start tracking-tight text-white 2xl:bottom-[15%] 2xl:left-1/2 2xl:w-125 2xl:-translate-x-[43%] 2xl:items-center">
          <div className="w-full px-2 text-left font-light uppercase">WE SOAR IN THE SKY</div>
          <div className="flex w-3/4 items-center justify-center 2xl:w-full">
            <span className="bg-main-text-gradient px-2 font-medium uppercase">TO PROVIDE A DIFFERENT VIEW.</span>
          </div>
        </div>
      </div>
      <div className="mirror-container 5xl:px-17.5 flex flex-col overflow-hidden 2xl:gap-2.5 2xl:px-6 2xl:pt-6.5 2xl:pb-19">
        <div>
          <PageSubtitle title="SINCE 2024, *WE'VE* *GROWN* *AND* *THRIVED*" border={isLess2xl} />
          <div className="2xl:border-gradient-round-bottom-right 2xl:mx-5 2xl:mt-2.5 2xl:p-px">
            <div className="flex items-center gap-5 bg-black px-7.5 py-5 2xl:rounded-[12px] 2xl:py-7.5">
              <p className="title-g">
                Geosat was established in 2004 as a land surveying company mainly contracting government projects. We grew to be one of the biggest land surveying company within a few years and
                introduced drone technology in this field starting 2012. After years of service providing, we decided to bring our experience in drone and started our own drone brand in 2023. In this
                wave of booming drone industry, Geosat stands out to be the pioneer and leader in Taiwan drone industry.
              </p>
            </div>
          </div>
        </div>
        <div className="5xl:mt-22 mt-0 bg-black 2xl:mt-2.5 2xl:bg-transparent">
          <PageSubtitle title="*7,500+* *HECTARES* , ANNUAL SERVICE COVERAGE" border={isLess2xl} />
          <div className="5xl:grid-cols-4 mt-2.5 grid grid-cols-2 items-start px-4 py-0 2xl:grid-cols-3 2xl:py-7.5">
            {timelines.map((item) => (
              <div key={item.year} className="flex flex-col justify-center">
                <span className="title-c0 basis-1 p-5 pb-1">
                  <span className="border-gradient-timeline-bottom text-gradient-white-gray pb-1 lg:text-nowrap">{item.year}</span>
                </span>
                <span className="title-f basis-1 p-5 pt-2.5 font-normal text-white" dangerouslySetInnerHTML={{ __html: item.event.replaceAll('\n', '<br />') }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
