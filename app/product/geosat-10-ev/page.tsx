import PageTitle from "@/components/page-title"
import ProductMain from "@/components/product-main"

const productSpecs = [
  { title: "90 MIN", description: "MAX FLIGHT TIME" },
  { title: "IP 55", description: "WEATHER RESISTANCE" },
  { title: "12 M/S", description: "MAX WIND RESISTANCE" },
  { title: "10 KM", description: "COMMUNICATION DISTANCE" },
]


const Geosat10Ev = () => {
  return (
    <div>
      <PageTitle title="*GEOSAT* *10* *EV*" subtitle="MULTIPLE PAYLOAD FOR INFINITE POSSIBILITY" />
      <ProductMain src="/product04_main.png" specs={productSpecs} product="geosat10ev" size="lg" />
    </div>
  )
}

export default Geosat10Ev