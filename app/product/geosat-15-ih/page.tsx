import PageSubtitle from "@/components/page-subtitle"
import PageTitle from "@/components/page-title"
import ProductMain from "@/components/product-main"

const productsDescription = [
  {
    title: "Harsh weather resilient",
    description: "Geosat 15 iH cruises smoothly in harsh weather condition. It can tolerate up to 14m/s wind and salty environment. ",
    url: "/product05_image01.png",
  },
  {
    title: "Extended flying range",
    description: "With a 32cc engine, Geosat iH can reach to 50km away, giving you the advantage for live view in frontline. ",
    url: "/product05_image02.png"
  },
  {
    title: "Payload with flexibility",
    description: "The aircraft can lift 3kg and multiple payloads simultaneously. Allowing the drone to conduct different missions in one flight.",
    url: "/product05_image03.jpg",
  }
]

const productSpecs = [
  { title: "180 MIN", description: "MAX FLIGHT TIME" },
  { title: "IP 54", description: "WEATHER RESISTANCE" },
  { title: "10 M/S", description: "MAX WIND RESISTANCE" },
  { title: "10 KM", description: "COMMUNICATION DISTANCE" },
]


const Geosat15Ih = () => {
  return (
    <div>
      <PageTitle title="*GEOSAT* *15* *IH*" subtitle="Longer endurance and wider range brings guarantee to border safety." />
      <ProductMain src="/product05_main.png" specs={productSpecs}/>
      <div className="p-7.5 flex gap-4">
        {
          productsDescription.map((product, index) => (
            <div key={index} className="w-full">
              <PageSubtitle title={product.title} className="px-0 *:leading-1.1em" />
              <img className="w-full" src={product.url} alt={`geosat 15 ih ${index}`} />
              <p className="pt-5 pl-2.5 text-xl font-light leading-1.1em">{product.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Geosat15Ih