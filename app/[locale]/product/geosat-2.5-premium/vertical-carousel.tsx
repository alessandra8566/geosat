'use client'

import { cn } from '@/utils/shadcn'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const content: {
  title: string
  description: string
  content?: React.ReactNode
}[] = [
  {
    title: 'ATAK',
    description: 'Share location, video stream and other information simultaneously with colleagues using ATAK. <br /> Through ATAK, on site information can be distribute anywhere, anytime.',
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden text-white">
        <Image src="/product_image04.png" width={700} height={377} quality={100} className="border-gradient-bottom-left min-w-130 border-t-0! border-r-0! object-center 2xl:min-w-auto" alt="ATAK" />
      </div>
    ),
  },
  {
    title: 'Pre-flight check',
    description:
      'A thorough check before flying is an guarantee for success mission. The Pre-Flight check gives the pilot a quick review on the whole status of the drone, including battery status, motor healthiness, GPS quality etc.',
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden text-white">
        <Image
          src="/product_image05.png"
          width={700}
          height={377}
          quality={100}
          className="border-gradient-bottom-left min-w-130 border-t-0! border-r-0! object-center 2xl:w-full 2xl:min-w-auto"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Restricted fly zone',
    description:
      'When reaching the boundary of the self-defined or official defined fly zone, our software offers immediate warning to the pilot and swift control of the drone to avoid any possible danger. ',
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden text-white">
        <Image
          src="/product_image06.png"
          width={700}
          height={377}
          quality={100}
          className="border-gradient-bottom-left min-w-130 border-t-0! border-r-0! object-left 2xl:w-full 2xl:min-w-auto"
          alt="linear board demo"
        />
      </div>
    ),
  },
]
const VerticalCarousel = () => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) return index
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <div className="w-full">
      <motion.div className="6xl:h-100 4xl:h-70 6xl:gap-7.5 relative hidden h-50 justify-center gap-2.5 rounded-md 2xl:flex">
        <div className={cn('sticky top-0 hidden flex-5 lg:block')}>{content[activeCard].content ?? null}</div>
        <div className="div relative flex h-full flex-4 items-center justify-center px-4">
          <div className="carousel-scrollbar relative h-4/5 w-full max-w-2xl grow snap-y snap-mandatory overflow-y-scroll" ref={ref}>
            {content.map((item, index) => (
              <div key={item.title + index} className="flex h-full w-full snap-center snap-always flex-col items-start justify-center">
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: activeCard === index ? 1 : 0.3 }} className="title-d text-slate-100">
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="6xl:mt-10 title-f mt-2.5 max-w-sm text-slate-300"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
          <div className="relative h-4/5 -translate-x-0.5 border-r border-r-[#d9d9d9cc]">
            <span className="absolute -right-1.5 -bottom-8">{activeCard + 1}</span>
          </div>
        </div>
      </motion.div>
      <motion.div className="block 2xl:hidden">
        {content.map((item) => (
          <div key={item.title} className="bg-card">
            <div className="p-5 pb-2.5">
              <motion.h2 className="title-d text-slate-100">{item.title}</motion.h2>
              <motion.p className="6xl:mt-10 title-f mt-2.5 max-w-sm text-slate-300" dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default VerticalCarousel
