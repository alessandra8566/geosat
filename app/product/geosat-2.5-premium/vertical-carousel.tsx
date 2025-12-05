"use client";

import { cn } from "@/utils/shadcn";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";


const content: {
  title: string;
  description: string;
  content?: React.ReactNode;
}[] = [
    {
      title: "ATAK",
      description:
        "Share location, video stream and other information simultaneously with colleagues using ATAK. Through ATAK, on site information can be distribute anywhere, anytime.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/product_image04.png"
            width={300}
            height={300}
            quality={100}
            className="w-full object-cover border-gradient-bottom-left border-t-0! border-r-0!"
            alt="ATAK"
          />
        </div>
      ),
    },
    {
      title: "Pre-flight check",
      description:
        "A thorough check before flying is an guarantee for success mission. The Pre-Flight check gives the pilot a quick review on the whole status of the drone, including battery status, motor healthiness, GPS quality etc.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/product_image05.png"
            width={300}
            height={300}
            quality={100}
            className="w-full object-cover border-gradient-bottom-left border-t-0! border-r-0!"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Restricted fly zone",
      description:
        "When reaching the boundary of the self-defined or official defined fly zone, our software offers immediate warning to the pilot and swift control of the drone to avoid any possible danger. ",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/product_image06.png"
            width={300}
            height={300}
            quality={100}
            className="w-full object-cover border-gradient-bottom-left border-t-0! border-r-0!"
            alt="linear board demo"
          />
        </div>
      ),
    }
  ];
const VerticalCarousel = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });
  return (
    <div className="w-full">
      <motion.div className="relative flex h-100 justify-center gap-7.5 rounded-md">
        <div className={cn("sticky top-0 hidden flex-5 lg:block")}>
          {content[activeCard].content ?? null}
        </div>
        <div className="div relative flex-4 flex items-center justify-center px-4 h-full">
          <div className="grow relative w-full max-w-2xl h-4/5 snap-y snap-mandatory overflow-y-scroll carousel-scrollbar" ref={ref}>
            {content.map((item, index) => (
              <div key={item.title + index} className="h-full w-full flex flex-col justify-center items-start snap-center snap-always">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg mt-10 max-w-sm text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
          <div className="relative border-r border-r-[#d9d9d9cc] h-4/5 -translate-x-0.5">
            <span className="absolute -bottom-8 -right-1.5">{activeCard + 1}</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default VerticalCarousel;
