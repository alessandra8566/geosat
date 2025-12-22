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
              <Image src="/product_image02-2.png" alt="Gimbal RGB Imaging" width={300} height={379} className="w-full object-cover" />
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
              <Image src="/product_image03.png" alt="Gimbal RGB Imaging" width={300} height={379} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <PageSubtitle title="AUTONOMOUS MISSION" />
        <div
          className="flex flex-col items-center bg-cover bg-center py-18.75"
          style={{
            backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(98, 7, 7, 0.2) 100%),
            linear-gradient(rgba(var(--color-black-rgb), 0.3), rgba(var(--color-black-rgb), 0.3)),
            url('/background/bk02.png')
          `,
          }}
        >
          <div className="flex max-w-5/6 gap-7.5">
            <div className="flex-1">
              <Image src="/product_image07.png" alt="Gimbal RGB Imaging" width={300} height={379} className="w-full object-cover" />
              <div className="p-5 pt-7.5 pr-7.5 pl-1">
                <p className="leading-1em text-4xl font-bold">GPS DENIED FLYING</p>
                <p className="pt-3 text-xl leading-6 font-light text-white/80">
                  In some scenarios, for example bridge inspection or indoor inspection, where there&apos;s no GPS signal, drone can still be operable manually or autonomously. Giving pilots the
                  ability to capture information at ease.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <Image src="/product_image08.jpg" alt="Gimbal RGB Imaging" width={300} height={379} className="w-full object-cover" />
              <div className="p-5 pt-7.5 pr-7.5 pl-1">
                <p className="leading-1em text-4xl font-bold">OBSTACLE AVOIDANCE</p>
                <p className="pt-3 text-xl leading-6 font-light text-white/80">
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
        <PageSubtitle title="ACCESSORIES" />
        <div
          className="flex h-131.5 justify-center bg-cover bg-center"
          style={{
            background: `
              linear-gradient(125.52deg, rgba(10, 10, 10, 0.7) 56.17%, rgb(54, 0, 0, 1) 89.85%),
              linear-gradient(rgba(var(--color-black-rgb), 0.1), rgba(var(--color-black-rgb), 0.1)),
              url('/background/bk03.png')
            `,
          }}
        >
          <div className="flex w-5/6 justify-around gap-17.5 py-20">
            {productsAccessories.map((product) => (
              <div key={product.title}>
                <div className="bg-black">
                  <div className="border-gradient-bottom-left relative">
                    <img src={product.url} alt={product.title} width={350} height={350} className="aspect-square h-full w-full object-cover transition-opacity duration-300 hover:opacity-0" />
                    <img
                      src={product.hoverUrl}
                      alt={`Hover ${product.title}`}
                      width={350}
                      height={350}
                      className="absolute inset-0 aspect-square h-full w-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                  <div className="px-5 py-2">
                    <p className="font-roboto text-3xl font-bold">{product.title}</p>
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
