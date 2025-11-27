import { cn } from "@/utils/shadcn";
import { Fragment } from "react/jsx-runtime";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * @typedef {object} PageTitleProps
 * @property {string} title - 頁面的主要標題文字。支援使用星號 (*) 包裹的單字來渲染粗體。
 * 範例: "My Amazing *New* Project"
 * @property {string} [subtitle] - 頁面的副標題文字 (目前未使用，但保留在介面中)。
 * @property {string} [className] - 額外的 Tailwind CSS 類別，應用於標題文字容器上。
 */

const PageTitle = (props: PageTitleProps) => {
  const { title, className, subtitle } = props;
  const words = title.split(" ");
  return (
    <div className="bg-page-title-gradient font-roboto-condensed">
      <div 
        className={cn("px-4 text-6xl tracking-tighter xl:text-8xl text-white bg-center bg-cover border-gradient-line", className)}
        style={{
          backgroundImage: "url('/background/Header_line_H200.png')",
        }}
      >
        {words.map((word, index) => {
          const isBold = word.startsWith('*') && word.endsWith('*');
          const text = isBold ? word.slice(1, -1) : word;
          return (
            <Fragment key={index}>
              <span className={isBold ? "font-black" : "font-light"}>{text}</span>
              {index < words.length - 1 && ' '}
            </Fragment>
          );
        })}
        { subtitle && (
          <div className="text-[42px] font-light tracking-normal">
            {subtitle}
          </div>
        ) }
      </div>
    </div>
  )
}

export default PageTitle
