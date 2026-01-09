import Image from 'next/image'
import PageTitle from '@/components/page-title'
import PageSubtitle from '@/components/page-subtitle'
import VerticalCarousel from '../geosat-2.5-premium/vertical-carousel'
import ProductMain from '@/components/product-main'

const productSpecs = [
  { title: '30 MIN', description: 'MAX FLIGHT TIME' },
  { title: 'IP 54', description: 'WEATHER RESISTANCE' },
  { title: '10 M/S', description: 'MAX WIND RESISTANCE' },
  { title: '10 KM', description: 'COMMUNICATION DISTANCE' },
]

const Geosat2 = () => {
  return (
    <div>
      <PageTitle title="*GEOSAT* *2.0*" subtitle="DAILY OPEN AIR OPERATION PARTNER" downloadLink="/" />
      <ProductMain src="/product02_main.png" specs={productSpecs} />
      <div>
        <PageSubtitle title="GIMBAL PERFORMANCE" />
        <div
          className="6xl:py-13 6xl:px-0 3xl:px-5 3xl:py-5 flex justify-center p-0"
          style={{
            background: `
              url('/background/bk07.png') no-repeat center center / cover
            `,
          }}
        >
          <div className="6xl:max-w-5/6 6xl:gap-7.5 flex flex-col 2xl:flex-row 2xl:gap-2.5">
            <div className="bg-card flex flex-col justify-between">
              <div className="bg-card flex flex-col gap-2.5 p-4">
                <p className="title-d">
                  RGB <br className="hidden 2xl:block" /> IMAGING
                </p>
                <p className="title-f text-white/80">
                  Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the
                  right decision instantly.
                </p>
              </div>
              <Image src="/product_image01.png" alt="Gimbal RGB Imaging" width={300} height={379} quality={100} className="w-full object-cover" />
            </div>
            <div className="bg-card flex flex-col justify-between">
              <div className="flex flex-col gap-2.5 p-4 2xl:order-2">
                <p className="title-d">
                  OBJECT DETECTION <br className="6xl:hidden" /> AND TRACKING
                </p>
                <p className="title-f text-white/80">
                  Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the
                  right decision instantly.
                </p>
              </div>
              <Image src="/product_image02-3.png" alt="Gimbal RGB Imaging" width={300} height={379} quality={100} className="w-full object-cover 2xl:order-1" />
            </div>
            <div className="bg-card flex flex-col justify-between">
              <div className="bg-card flex flex-col gap-2.5 p-4">
                <p className="title-d">
                  THERMAL <br />
                  IMAGING
                </p>
                <p className="title-f text-white/80">
                  Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the
                  right decision instantly.
                </p>
              </div>
              <Image src="/product_image03-3.png" alt="Gimbal RGB Imaging" width={300} height={379} quality={100} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="PROPRIETARY SOFTWARE FEATURE" />
        <div
          className="6xl:py-18.75 flex flex-col items-center bg-cover bg-center 2xl:py-12.5"
          style={{
            backgroundImage: `url('/background/bk01.png')`,
          }}
        >
          <div className="6xl:max-w-5/6 6xl:p-0 flex w-full gap-7.5 2xl:px-5">
            <VerticalCarousel />
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="Autonomous Mission" />
        <div
          className="6xl:h-217.5 6xl:py-7.5 flex h-auto flex-col items-center justify-center py-0 2xl:h-156.5 2xl:py-5"
          style={{
            background: `
              linear-gradient(180deg, rgba(var(--color-black-rgb), 0.06) 0%, rgba(98, 7, 7, 0.2) 100%),
              linear-gradient(rgba(var(--color-black-rgb), 0.4), rgba(var(--color-black-rgb), 0.4)),
              url('/background/bk08.png') center center / cover
            `,
          }}
        >
          <div className="6xl:w-full bg-card flex w-full flex-col items-center justify-center 2xl:w-151 2xl:bg-transparent">
            <Image src="/product2_image01.png" width={920} height={595} quality={100} alt="Autonomous Mission" className="order-2 2xl:order-1" />
            <div className="order-1 max-w-230 p-5 pb-2.5 2xl:order-2 2xl:pt-7.5 2xl:pr-7.5 2xl:pb-5 2xl:pl-1">
              <p className="title-d uppercase">Mission Planning</p>
              <p className="title-f pt-3">
                Design your open air mission according to your requirement. Plan every waypoint in details, whether it&apos;s changing altitude, altering flight speed or setting up different flight
                mode.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Geosat2
