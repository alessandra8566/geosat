const ProductMainMock = ({ src, specs }: any) => (
  <div data-testid="product-main">
    <img src={src} alt="main-product" />
    <ul>
      {specs.map((s: any) => (
        <li key={s.title}>{s.title}</li>
      ))}
    </ul>
  </div>
)

export default ProductMainMock
