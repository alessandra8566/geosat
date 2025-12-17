export interface ProductMainProps {
  src: string
  specs: {
    title: string
    description: string
  }[]
  size?: 'default' | 'lg'
}

export interface NavProps {
  isOverlayOpen: boolean
  setOverlayOpen: (open: boolean) => void
}
