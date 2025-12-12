import { cn } from "@/utils/shadcn";
import { ProductMainProps } from "@/utils/type";
import { cva, type VariantProps } from "class-variance-authority";

const productVariants = cva("grid grid-cols-2 absolute right-0 w-167.5 z-2", {
  variants: {
    product: {
      default: "top-1/2 -translate-y-[54%]",
      geosat10mr: "top-1/2 -translate-y-[10%]",
      geosat10ev: "top-1/2 translate-y-[20%]",
    },
  },
  defaultVariants: {
    product: "default",
  }
})

const sizeClasses = {
  default: "h-142",
  lg: "h-177",
} as const;

const ProductMain = (params: ProductMainProps & VariantProps<typeof productVariants>) => {
  const { specs, product, src, size = "default" } = params;
  return (
    <div className="relative">
      <div
        className="absolute inset-0 top-0 left-0 w-full h-full z-1"
        style={{
          background: 'linear-gradient(75.69deg, rgba(var(--color-black-rgb), 0) 25.29%, rgba(var(--color-black-rgb), 0.1) 65.95%)'
        }}
      />
      <img
        src={src}
        alt="Main Image"
        width={1456}
        height={816}
        className={cn("w-full object-cover z-0", sizeClasses[size])}
      />
      <div className={productVariants({ product })}>
        {
          specs?.map((spec, index) => (
            <div key={index} className={cn("py-5 px-7.5 border-l border-black", {
              "bg-product-main-intro-r-gradient": index == 0,
              "bg-primary/75": index == 1 || index == 2,
              "bg-product-main-intro-l-gradient": index == 3
            })}>
              <p className="font-bold text-[42px] leading-1em text-white/80 -tracking-3">{spec.title}</p>
              <p className="text-xl font-light leading-6.5 text-white/80 -tracking-3">{spec.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductMain

