import { cn } from '@/utils/shadcn'
import { Fragment } from 'react/jsx-runtime'

interface PageSubtitleProps {
  title: string
  className?: string
  border?: boolean
}

/**
 * @typedef {object} PageTitleProps
 * @property {string} title - 頁面的主要標題文字。支援使用星號 (*) 包裹的單字來渲染粗體。
 * 範例: "My Amazing *New* Project"
 * @property {string} [subtitle] - 頁面的副標題文字 (目前未使用，但保留在介面中)。
 * @property {string} [className] - 額外的 Tailwind CSS 類別，應用於標題文字容器上。
 */

const PageSubtitle = (params: PageSubtitleProps) => {
  const { className, title, border = true } = params
  const words = title.split(' ')
  return (
    <div className={cn('3xl:px-7.5 5xl:pt-12.5 group w-full px-4 pt-5', { 'border-gradient-subtitle': border }, className)}>
      <div className="border-primary title-b2 flex min-h-10 flex-wrap items-end gap-x-2 border-l-10 pl-2.5 font-light uppercase 2xl:min-h-12.5">
        {words.map((word, index) => {
          if (word === '[br]') {
            return <br key={`br-${index}`} className="2xl:hidden" />
          }
          const isBold = word.startsWith('*') && word.endsWith('*')
          const text = isBold ? word.slice(1, -1) : word
          return (
            <Fragment key={text}>
              <span className={isBold ? 'font-medium' : 'font-light'}>{text}</span>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default PageSubtitle
