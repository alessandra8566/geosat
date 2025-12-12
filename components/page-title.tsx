import { cn } from "@/utils/shadcn";

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
    <div
      className={
        cn("px-7.5 text-white border-gradient-line overflow-hidden", {
          [!!subtitle ? "pb-2.5" : "pt-[5px]"]: true
        }, className)}
      style={{
        background: `
          url('/background/Header_line_H200.png') center center / cover,
          linear-gradient(90deg, #5D0000 0%, #4C4C4C 20%, #000000 99.52%)
        ` }}
    >
      {words.map((word, index) => {
        const isBold = word.startsWith('*') && word.endsWith('*');
        const text = isBold ? word.slice(1, -1) : word;
        return (
          <span
            key={index}
            className={
              cn("text-6xl xl:text-8xl tracking-tighter", {
                [isBold ? "font-black" : "font-light"]: true
              })}
          >
            {text}
            {" "}
          </span>
        );
      })}
      {subtitle && (
        <div className="text-[42px] font-light -tracking-3 leading-1em uppercase max-w-227">
          {subtitle}
        </div>
      )}
    </div>
  )
}

export default PageTitle
