import PageTitle from "@/components/page-title"
import ProductMain from "@/components/product-main"

const productSpecs = [
  { title: "50 MIN", description: "MAX FLIGHT TIME" },
  { title: "IP 54", description: "WEATHER RESISTANCE" },
  { title: "10 M/S", description: "MAX WIND RESISTANCE" },
  { title: "10 KM", description: "COMMUNICATION DISTANCE" },
]


const Geosat10Mr = () => {
  return (
    <div>
      <PageTitle title="*GEOSAT* *10* *MR*" subtitle="MULTIPLE PAYLOAD FOR INFINITE POSSIBILITY" />
      <ProductMain src="/product03_main.png" specs={productSpecs} product="geosat10mr" size="lg" />
    </div>
  )
}

export default Geosat10Mr