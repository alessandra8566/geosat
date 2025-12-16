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
        'border-gradient-line overflow-hidden px-7.5 text-white',
        {
          [!!subtitle ? 'pb-2.5' : 'pt-[5px]']: true,
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
            className={cn('text-6xl tracking-tighter xl:text-8xl', {
              [isBold ? 'font-black' : 'font-light']: true,
            })}
          >
            {text}{' '}
          </span>
        )
      })}
      {subtitle && (
        <div className="flex-start flex max-w-6/7 items-start gap-9 uppercase">
          <p className="-tracking-3 leading-1em text-[42px] font-light">{subtitle}</p>
          {!!downloadLink && (
            <div className="hover:border-gradient-download-btn rounded-[6px] border-2 border-white/30! p-px text-white/70 hover:border-none hover:font-semibold">
              <Button variant="outline" className="relative cursor-pointer rounded-[6px] border-none! bg-black/50! px-4! py-2! hover:bg-black!">
                <Download className="mr-1 size-5" />
                <p className="leading-1.3em text-base">Brochure Download</p>
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PageTitle
