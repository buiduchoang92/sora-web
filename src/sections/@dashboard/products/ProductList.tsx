// material
import Grid from '@mui/material/Grid'
import ShopProductCard from './ProductCard'

// ----------------------------------------------------------------------

interface ProductListProps {
  products: ProductProps[]
  other?: any
}
export interface ProductProps {
  id: string
  cover: string
  name: string
  price: number
  priceSale: number | null
  colors: string[]
  status: string | undefined
}

export default function ProductList({ products, ...other }: ProductListProps) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product: ProductProps) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
