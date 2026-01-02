import { cn } from '@/utils/shadcn'
import { ProductMainProps } from '@/utils/type'
import { cva, type VariantProps } from 'class-variance-authority'

const productVariants = cva('grid grid-cols-2 3xl:absolute right-0 w-full 3xl:w-90 5xl:w-120 6xl:w-155 7xl:w-167.5 z-2 ', {
  variants: {
    product: {
      default: '3xl:top-1/2 3xl:-translate-y-[54%]',
      geosat10mr: '3xl:top-1/2 3xl:-translate-y-[10%]',
      geosat10ev: '3xl:top-1/2 3xl:-translate-y-[10%]',
    },
  },
  defaultVariants: {
    product: 'default',
  },
})

const ProductMain = (params: ProductMainProps & VariantProps<typeof productVariants>) => {
  const { specs, product, src } = params
  return (
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt="Main Product"
        width={1456}
        height={816}
        className={cn('z-0 object-contain 2xl:w-full', {
          'min-w-167': product === 'default' || product === undefined,
          'min-w-150': product === 'geosat10mr',
        })}
      />
      <div className={productVariants({ product })}>
        {specs?.map((spec, index) => (
          <div
            key={spec.title}
            className={cn('6xl:px-7.5 5xl:py-5 border-l border-black px-5 py-2', {
              'bg-product-main-intro-r-gradient': index == 0,
              'bg-primary/75': index == 1 || index == 2,
              'bg-product-main-intro-l-gradient': index == 3,
            })}
          >
            <p className="title-c1 text-white/80">{spec.title}</p>
            <p className="title-f text-white/80">{spec.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductMain
