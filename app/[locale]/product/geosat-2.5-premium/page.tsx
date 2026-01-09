import Image from 'next/image'
import PageTitle from '@/components/page-title'
import PageSubtitle from '@/components/page-subtitle'
import VerticalCarousel from './vertical-carousel'
import ProductMain from '@/components/product-main'

const productsAccessories = [
  {
    title: 'GIMBAL',
    url: '/product_image09-1.png',
    hoverUrl: '/product_image09-2.png',
  },
  {
    title: 'SPEAKER',
    url: '/product_image10-1.png',
    hoverUrl: '/product_image10-2.png',
  },
  {
    title: 'SPOTLIGHT',
    url: '/product_image11-1.png',
    hoverUrl: '/product_image11-2.png',
  },
]

const productSpecs = [
  { title: '36 MIN', description: 'MAX FLIGHT TIME' },
  { title: 'IP 54', description: 'WEATHER RESISTANCE' },
  { title: '12 M/S', description: 'MAX WIND RESISTANCE' },
  { title: '10 KM', description: 'COMMUNICATION DISTANCE' },
]

const GeosatPremium = () => {
  return (
    <div>
      <PageTitle title="*GEOSAT* *2.5* PREMIUM" subtitle="BUILT TO NAVIGATE THROUGH COMPLEX SCENARIO" downloadLink="/" />
      <ProductMain src="/product01_main.png" specs={productSpecs} />
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
              <Image src="/product_image02-2.png" alt="Gimbal RGB Imaging" width={300} height={379} quality={100} className="w-full object-cover 2xl:order-1" />
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
              <Image src="/product_image03.png" alt="Gimbal RGB Imaging" width={300} height={379} quality={100} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="AUTONOMOUS MISSION" />
        <div
          className="6xl:py-18.75 6xl:px-0 flex flex-col items-center bg-cover bg-center p-0 2xl:px-5 2xl:py-5"
          style={{
            backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(98, 7, 7, 0.2) 100%),
            linear-gradient(rgba(var(--color-black-rgb), 0.3), rgba(var(--color-black-rgb), 0.3)),
            url('/background/bk02.png')
          `,
          }}
        >
          <div className="6xl:max-w-5/6 6xl:gap-7.5 flex flex-col gap-0 2xl:flex-row 2xl:gap-5">
            <div className="bg-card flex flex-1 flex-col 2xl:bg-transparent">
              <Image src="/product_image07.png" alt="Gimbal RGB Imaging" width={300} height={379} quality={100} className="order-2 w-full object-cover 2xl:order-1" />
              <div className="order-1 p-5 2xl:order-2 2xl:pt-7.5 2xl:pr-7.5 2xl:pl-1">
                <p className="title-d">GPS DENIED FLYING</p>
                <p className="title-f pt-3 text-white/80">
                  In some scenarios, for example bridge inspection or indoor inspection, where there&apos;s no GPS signal, drone can still be operable manually or autonomously. Giving pilots the
                  ability to capture information at ease.
                </p>
              </div>
            </div>
            <div className="bg-card flex flex-1 flex-col 2xl:bg-transparent">
              <Image src="/product_image08.jpg" alt="Gimbal RGB Imaging" width={300} height={379} quality={100} className="order-2 w-full object-cover 2xl:order-1" />
              <div className="order-1 p-5 2xl:order-2 2xl:pt-7.5 2xl:pr-7.5 2xl:pl-1">
                <p className="title-d">OBSTACLE AVOIDANCE</p>
                <p className="title-f pt-3 text-white/80">
                  Equipped with sensors and cutting edge algorithms, drone can seamlessly complete the mission by taking a small detour when encounter obstacles without compromising autonomous
                  mission. This allows Geosat 2.5 Premium to conduct mission in various complex environment such as indoor warehouse, power plant etc.
                </p>
              </div>
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
        <PageSubtitle title="ACCESSORIES" />
        <div
          className="flex justify-center bg-cover bg-center"
          style={{
            background: `
              linear-gradient(125.52deg, rgba(10, 10, 10, 0.7) 56.17%, rgb(54, 0, 0, 1) 89.85%),
              linear-gradient(rgba(var(--color-black-rgb), 0.1), rgba(var(--color-black-rgb), 0.1)),
              url('/background/bk03.png')
            `,
          }}
        >
          <div className="5xl:max-w-5/6 5xl:gap-17.5 5xl:pt-18.5 flex w-full flex-col justify-around gap-0 p-0 2xl:flex-row 2xl:gap-5 2xl:px-5 2xl:pt-12.5 2xl:pb-12.5">
            {productsAccessories.map((product) => (
              <div key={product.title}>
                <div className="bg-card flex flex-col 2xl:bg-black">
                  <div className="border-gradient-subtitle 2xl:border-gradient-bottom-left relative order-2 flex justify-center bg-[#101315] 2xl:order-1 2xl:bg-transparent">
                    <img
                      src={product.url}
                      alt={product.title}
                      width={350}
                      height={350}
                      className="hidden aspect-square h-full w-55 object-cover xl:w-75 2xl:block 2xl:w-full 2xl:transition-opacity 2xl:duration-300 2xl:hover:opacity-0"
                    />
                    <img
                      src={product.hoverUrl}
                      alt={`Hover ${product.title}`}
                      width={350}
                      height={350}
                      className="relative inset-0 aspect-square h-full w-55 object-cover xl:w-75 2xl:absolute 2xl:w-full 2xl:opacity-0 2xl:transition-opacity 2xl:duration-300 2xl:hover:opacity-100"
                    />
                  </div>
                  <div className="order-1 px-5 pt-5 pb-2.5 2xl:order-2 2xl:py-2">
                    <p className="title-d">{product.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeosatPremium
