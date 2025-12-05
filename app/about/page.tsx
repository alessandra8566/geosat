import PageTitle from "@/components/page-title"
import PageSubtitle from "@/components/page-subtitle"

const timelines = [
  {
    year: "2004",
    event: "Geosat established"
  },
  {
    year: "2007",
    event: "Computer Best Choice Award"
  },
  {
    year: "2015",
    event: "National Industrial Innovation Award"
  },
  {
    year: "2018-2020",
    event: "Taiwan Excellence Award"
  },
  {
    year: "2020",
    event: "Smart City System Integration Output Award"
  },
  {
    year: "2023",
    event: "Start Own Drone Brand"
  },
  {
    year: "2025",
    event: "Launching Geosat 2.0"
  },
  {
    year: "2026",
    event: "Geosat 2.5 Premium, \n Geosat 10 Coming Soon"
  }
]

const About = () => {
  return (
    <div>
      <PageTitle title="*ABOUTS*" />
      <div className="relative">
        <img
          src="/about_main_01.png"
          alt="Main Image"
          width={1440}
          height={705}
          className="w-full h-152 object-cover object-bottom"
        />
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 tracking-tight text-white text-[55px] w-225 leading-15 flex flex-col items-center">
          <div className="font-light text-left w-full uppercase">WE SOAR IN THE SKY</div>
          <div className="text-center flex items-center justify-center w-full">
            <span className="bg-main-text-gradient font-medium px-2 uppercase">TO PROVIDE A DIFFERENT VIEW.</span>
          </div>
        </div>
      </div>
      <div className="pt-6.5 pb-19 px-17.5 flex flex-col gap-2.5 overflow-hidden mirror-container h-355" >
        <div>
          <PageSubtitle title="SINCE 2024, *WE'VE* *GROWN* *AND* *THRIVED*" border={false} />
          <div className="border-gradient-round-bottom-right p-px mt-2.5 mx-5">
            <div className="p-7.5 flex items-center gap-5 bg-black rounded-[12px]">
              <p className="text-3xl font-light leading-11 font-inter">Geosat was established in 2004 as a land surveying company mainly contracting government projects. We grew to be one of the biggest land surveying company within a few years and introduced drone technology in this field starting 2012. After years of service providing, we decided to bring our experience in drone and started our own drone brand in 2023. In this wave of booming drone industry, Geosat stands out to be the pioneer and leader in Taiwan drone industry.</p>
            </div>
          </div>
        </div>
        <div className="mt-22">
          <PageSubtitle title="*7,500+* *HECTARES* , ANNUAL SERVICE COVERAGE" border={false} />
          <div className="p-7.5 px-4 grid grid-cols-4 mt-2.5">
            {
              timelines.map((item, index) => (
                <div key={index} className="flex flex-col justify-center gap-1">
                  <span className="text-[50px] font-extralight flex-1 p-5 pb-1">
                    <span className=" border-gradient-timeline-bottom lg:text-nowrap pb-2 text-gradient-white-gray">{item.year}</span>
                  </span>
                  <span
                    className="text-xl font-normal flex-1 p-5 pt-1 text-white"
                    dangerouslySetInnerHTML={{ __html: item.event.replace(/\n/g, '<br />') }}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 
