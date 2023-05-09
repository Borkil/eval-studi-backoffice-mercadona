import Price from "./Price.jsx"
import Percentage from "./Percentage.jsx"

export default function ListItemDealPriceDetail({product}){
  return (
    <div className="text-neutral-600">
      <Price>{product.price}</Price>
      <Percentage>{product.percentage}</Percentage>
      <Price>{product.priceDeal}</Price>
    </div>
  )
}