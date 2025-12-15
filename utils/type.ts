export interface ProductMainProps {
  src: string
  specs: {
    title: string
    description: string
  }[]
  size?: 'default' | 'lg'
}
