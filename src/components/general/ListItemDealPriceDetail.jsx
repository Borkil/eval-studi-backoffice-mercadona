import Price from "./Price.jsx"
import Percentage from "./Percentage.jsx"

export default function ListItemDealPriceDetail({product}){
  return (
    <div className="flex">
      <p className="font-bold me-3 line-through">{product.price} €</p>
      <Percentage> {product.percentage}</Percentage>
      <p className="font-bold text-red-600">{product.priceDeal} €</p>
    </div>
  )
}