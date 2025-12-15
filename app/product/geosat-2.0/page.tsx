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
          className="flex justify-center py-13"
          style={{
            background: `
              url('/background/bk07.png') no-repeat center center / cover
            `,
          }}
        >
          <div className="flex max-w-5/6 gap-7.5">
            <div className="bg-card">
              <div className="p-4">
                <p className="font-roboto-condensed leading-0.9em w-32 text-4xl font-bold">RGB IMAGING</p>
                <p className="leading-1.3em pt-3 text-lg font-light text-white/80">
                  Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the
                  right decision instantly.
                </p>
              </div>
              <Image src="/product_image01.png" alt="Gimbal RGB Imaging" width={300} height={379} className="w-full object-cover" />
            </div>
            <div className="bg-card">
              <Image src="/product_image02-3.png" alt="Gimbal RGB Imaging" width={300} height={379} className="w-full object-cover" />
              <div className="p-4">
                <p className="font-roboto-condensed leading-0.9em text-4xl font-bold">OBJECT DETECTION AND TRACKING</p>
                <p className="leading-1.3em pt-3 text-lg font-light text-white/80">
                  Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the
                  right decision instantly.
                </p>
              </div>
            </div>
            <div className="bg-card">
              <div className="p-4">
                <p className="font-roboto-condensed leading-0.9em w-32 text-4xl font-bold">THERMAL IMAGING</p>
                <p className="leading-1.3em pt-3 text-lg font-light text-white/80">
                  Gimbal camera has the ability to identify a person from 1km away through 40x zoom. High resolution images gives you the quick assessment of front line and enables you to make the
                  right decision instantly.
                </p>
              </div>
              <Image src="/product_image03-3.png" alt="Gimbal RGB Imaging" width={300} height={379} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="PROPRIETARY SOFTWARE FEATURE" />
        <div
          className="flex flex-col items-center bg-cover bg-center py-18.75"
          style={{
            backgroundImage: `url('/background/bk01.png')`,
          }}
        >
          <div className="flex w-11/12 gap-7.5 xl:w-5/6">
            <VerticalCarousel />
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="Autonomous Mission" />
        <div
          className="flex h-217.5 flex-col items-center justify-center py-7.5"
          style={{
            background: `
              linear-gradient(180deg, rgba(var(--color-black-rgb), 0.06) 0%, rgba(98, 7, 7, 0.2) 100%),
              linear-gradient(rgba(var(--color-black-rgb), 0.4), rgba(var(--color-black-rgb), 0.4)),
              url('/background/bk08.png') center center / cover
            `,
          }}
        >
          <Image src="/product2_image01.png" width={920} height={595} alt="Autonomous Mission" />
          <div className="max-w-230 p-5 pt-7.5 pr-7.5 pl-1">
            <p className="leading-1em text-4xl font-bold uppercase">Mission Planning</p>
            <p className="pt-3 text-xl leading-6 font-light">
              Design your open air mission according to your requirement. Plan every waypoint in details, whether it&apos;s changing altitude, altering flight speed or setting up different flight
              mode.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Geosat2
