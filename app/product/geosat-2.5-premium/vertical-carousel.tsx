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
            className="h-full w-full object-cover"
            alt="ATAK"
          />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/product_image08.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/product_image07.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
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
        <div className={cn("sticky top-0 hidden flex-1 bg-white lg:block")}>
          {content[activeCard].content ?? null}
        </div>
        <div className="div relative flex-1 flex items-center justify-center px-4 h-full">
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
