import { cn } from "@/utils/shadcn";
import { Fragment } from "react/jsx-runtime";

interface PageSubtitleProps {
  title: string;
  className?: string;
  border?: boolean;
}

/**
 * @typedef {object} PageTitleProps
 * @property {string} title - 頁面的主要標題文字。支援使用星號 (*) 包裹的單字來渲染粗體。
 * 範例: "My Amazing *New* Project"
 * @property {string} [subtitle] - 頁面的副標題文字 (目前未使用，但保留在介面中)。
 * @property {string} [className] - 額外的 Tailwind CSS 類別，應用於標題文字容器上。
 */

const PageSubtitle = (params: PageSubtitleProps) => {
  const { className, title, border = true } = params;
  const words = title.split(" ");
  return (
    <div className={cn("px-7.5 pt-12.5 w-full", { " border-gradient-subtitle": border }, className)}>
      <div className="border-l-10 border-primary pl-2.5 text-[50px] leading-1.3em tracking-tighter font-light uppercase">
        {words.map((word, index) => {
          const isBold = word.startsWith('*') && word.endsWith('*');
          const text = isBold ? word.slice(1, -1) : word;
          return (
            <Fragment key={index}>
              <span className={isBold ? "font-medium" : "font-light"}>{text}</span>
              {index < words.length - 1 && ' '}
            </Fragment>
          );
        })}
      </div>
    </div>
  )
}

export default PageSubtitle