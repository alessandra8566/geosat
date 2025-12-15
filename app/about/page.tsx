import PageTitle from '@/components/page-title'
import PageSubtitle from '@/components/page-subtitle'

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
  return (
    <div>
      <PageTitle title="*ABOUTS*" />
      <div className="relative">
        <img src="/about_main_01.png" alt="Main Image" width={1440} height={705} className="h-152 w-full object-cover object-[10%]" />
        <div className="absolute bottom-24 left-1/2 flex w-225 -translate-x-1/2 transform flex-col items-center text-[55px] leading-15 tracking-tight text-white">
          <div className="w-full text-left font-light uppercase">WE SOAR IN THE SKY</div>
          <div className="flex w-full items-center justify-center text-center">
            <span className="bg-main-text-gradient px-2 font-medium uppercase">TO PROVIDE A DIFFERENT VIEW.</span>
          </div>
        </div>
      </div>
      <div className="mirror-container flex h-355 flex-col gap-2.5 overflow-hidden px-17.5 pt-6.5 pb-19">
        <div>
          <PageSubtitle title="SINCE 2024, *WE'VE* *GROWN* *AND* *THRIVED*" border={false} />
          <div className="border-gradient-round-bottom-right mx-5 mt-2.5 p-px">
            <div className="flex items-center gap-5 rounded-[12px] bg-black p-7.5">
              <p className="font-inter text-3xl leading-11 font-light">
                Geosat was established in 2004 as a land surveying company mainly contracting government projects. We grew to be one of the biggest land surveying company within a few years and
                introduced drone technology in this field starting 2012. After years of service providing, we decided to bring our experience in drone and started our own drone brand in 2023. In this
                wave of booming drone industry, Geosat stands out to be the pioneer and leader in Taiwan drone industry.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-22">
          <PageSubtitle title="*7,500+* *HECTARES* , ANNUAL SERVICE COVERAGE" border={false} />
          <div className="mt-2.5 grid grid-cols-4 p-7.5 px-4">
            {timelines.map((item, index) => (
              <div key={index} className="flex flex-col justify-center gap-1">
                <span className="flex-1 p-5 pb-1 text-[50px] font-extralight">
                  <span className="border-gradient-timeline-bottom text-gradient-white-gray pb-2 lg:text-nowrap">{item.year}</span>
                </span>
                <span className="flex-1 p-5 pt-1 text-xl font-normal text-white" dangerouslySetInnerHTML={{ __html: item.event.replace(/\n/g, '<br />') }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
