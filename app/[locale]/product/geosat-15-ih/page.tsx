'use client'

import PageSubtitle from '@/components/page-subtitle'
import PageTitle from '@/components/page-title'
import ProductMain from '@/components/product-main'
import { BREAKPOINTS } from '@/utils/constant'
import useIsMobile from '@/utils/hooks/use-is-mobile'
import { cn } from '@/utils/shadcn'

const productsDescription = [
  {
    title: 'Harsh weather resilient',
    description: 'Geosat 15 iH cruises smoothly in harsh weather condition. It can tolerate up to 14m/s wind and salty environment. ',
    url: '/product05_image01.png',
  },
  {
    title: 'Extended flying range',
    description: 'With a 32cc engine, Geosat iH can reach to 50km away, giving you the advantage for live view in frontline. ',
    url: '/product05_image02.png',
  },
  {
    title: 'Payload with flexibility',
    description: 'The aircraft can lift 3kg and multiple payloads simultaneously. Allowing the drone to conduct different missions in one flight.',
    url: '/product05_image03.jpg',
  },
]

const productSpecs = [
  { title: '180 MIN', description: 'MAX FLIGHT TIME' },
  { title: 'IP 54', description: 'WEATHER RESISTANCE' },
  { title: '10 M/S', description: 'MAX WIND RESISTANCE' },
  { title: '10 KM', description: 'COMMUNICATION DISTANCE' },
]

const Geosat15Ih = () => {
  const isLess5xl = useIsMobile(BREAKPOINTS['5xl'])
  const isLess2xl = useIsMobile(BREAKPOINTS['2xl'])
  return (
    <div>
      <PageTitle data-testid="page-title" title="*GEOSAT* *15* *IH*" subtitle="Longer endurance and wider range brings guarantee to border safety." downloadLink="/brochure/geosat-15-ih.pdf" />
      <ProductMain src="/product05_main.png" specs={productSpecs} />
      <div className="5xl:flex-row flex flex-col gap-4 p-0 2xl:p-7.5">
        {productsDescription.map((product, index) => (
          <div key={product.title} className="w-full">
            <PageSubtitle title={product.title} className="[&>div]:7xl:text-50 [&>div]:4xl:text-4xl 2xl:px-0!" border={!isLess5xl || isLess2xl} />
            <div className="5xl:block 5xl:h-auto 5xl:gap-0 bg-card flex h-auto w-full flex-col gap-0 overflow-hidden 2xl:h-47.5 2xl:flex-row 2xl:gap-2.5 2xl:bg-transparent">
              <img
                className={cn('2xl:border-gradient-bottom-left 5xl:border-none order-2 w-full min-w-0 basis-1/2 border-none object-cover object-[50%_30%] 2xl:order-0', {
                  '2xl:order-1': index % 2 === 1,
                })}
                src={product.url}
                alt={`geosat 15 ih ${product.title}`}
              />
              <p className="5xl:pt-5 5xl:pl-2.5 title-f flex basis-1/2 items-center justify-center p-5 pb-2.5 font-light 2xl:pr-0 2xl:pl-4">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Geosat15Ih
