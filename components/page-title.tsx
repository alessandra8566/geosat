import { cn } from '@/utils/shadcn'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

interface PageTitleProps {
  title: string
  subtitle?: string
  className?: string
  downloadLink?: string
}

/**
 * @typedef {object} PageTitleProps
 * @property {string} title - 頁面的主要標題文字。支援使用星號 (*) 包裹的單字來渲染粗體。
 * 範例: "My Amazing *New* Project"
 * @property {string} [subtitle] - 頁面的副標題文字 (目前未使用，但保留在介面中)。
 * @property {string} [className] - 額外的 Tailwind CSS 類別，應用於標題文字容器上。
 */

const PageTitle = (props: PageTitleProps) => {
  const { title, className, subtitle, downloadLink } = props
  const words = title.split(' ')
  return (
    <div
      className={cn(
        'border-gradient-line 4xl:px-7.5 overflow-hidden px-5 text-white py-[5px]',
        {
          "2xl:py-0 6xl:pt-[5px]": !subtitle,
          "2xl:pb-2.5 2xl:pt-0": subtitle,
        },
        className
      )}
      style={{
        background: `
          url('/background/Header_line_H200.png') center center / cover,
          linear-gradient(90deg, #5D0000 0%, #4C4C4C 20%, #000000 99.52%)
        `,
      }}
    >
      {words.map((word, index) => {
        const isBold = word.startsWith('*') && word.endsWith('*')
        const text = isBold ? word.slice(1, -1) : word
        return (
          <span
            key={index}
            className={cn('leading-0.9em 2xl:leading-1em 2xl:text-60 text-45 6xl:text-8xl tracking-tighter', {
              [isBold ? 'font-black' : 'font-light']: true,
            })}
          >
            {text}{' '}
          </span>
        )
      })}
      {subtitle && (
        <div className="flex-start 6xl:gap-9 3xl:flex-row flex flex-col items-start gap-2 uppercase">
          <p className="-tracking-3 leading-1em 6xl:text-42 text-2xl font-light">{subtitle}</p>
          {!!downloadLink && (
            <div className="hover:border-gradient-download-btn text-0 relative rounded-[6px] border-2 border-white/30! p-px text-white/70 hover:border-none hover:font-semibold">
              <Button variant="outline" className="6xl:py-2! relative h-full cursor-pointer rounded-[6px] border-none! bg-black/50! px-4 py-0 hover:bg-black!">
                <Download className="6xl:size-5 mr-1 size-3" />
                <p className="leading-1.3em 6xl:text-base text-sm">Brochure Download</p>
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PageTitle
