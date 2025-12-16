import { cn } from '@/utils/shadcn'
import { ProductMainProps } from '@/utils/type'
import { cva, type VariantProps } from 'class-variance-authority'

const productVariants = cva('grid grid-cols-2 absolute right-0 w-167.5 z-2', {
  variants: {
    product: {
      default: 'top-1/2 -translate-y-[54%]',
      geosat10mr: 'top-1/2 -translate-y-[10%]',
      geosat10ev: 'top-1/2 translate-y-[20%]',
    },
  },
  defaultVariants: {
    product: 'default',
  },
})

const sizeClasses = {
  default: 'h-142',
  lg: 'h-177',
} as const

const ProductMain = (params: ProductMainProps & VariantProps<typeof productVariants>) => {
  const { specs, product, src, size = 'default' } = params
  return (
    <div className="relative">
      <div
        className="absolute inset-0 top-0 left-0 z-1 h-full w-full"
        style={{
          background: 'linear-gradient(75.69deg, rgba(var(--color-black-rgb), 0) 25.29%, rgba(var(--color-black-rgb), 0.1) 65.95%)',
        }}
      />
      <img src={src} alt="Main Image" width={1456} height={816} className={cn('z-0 w-full object-cover', sizeClasses[size])} />
      <div className={productVariants({ product })}>
        {specs?.map((spec, index) => (
          <div
            key={spec.title}
            className={cn('border-l border-black px-7.5 py-5', {
              'bg-product-main-intro-r-gradient': index == 0,
              'bg-primary/75': index == 1 || index == 2,
              'bg-product-main-intro-l-gradient': index == 3,
            })}
          >
            <p className="leading-1em -tracking-3 text-[42px] font-bold text-white/80">{spec.title}</p>
            <p className="-tracking-3 text-xl leading-6.5 font-light text-white/80">{spec.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductMain
