import DealTag from "./tag/DealTag.jsx";
import SaleTag from "./tag/SaleTag.jsx";
import ArchiveTag from "./tag/ArchiveTag.jsx";
import ListItemDealPriceDetail from "./ListItemDealPriceDetail.jsx";
import Price from "./Price.jsx";
import Link from "next/link.js";
import Tag from "./tag/Tag.jsx";

export default function ProductListItem({ product }) {
  return (
    <li className="flex justify-between text-sm">
      <div className="grid gap-2  py-2">
        <div className="flex">
          <div className="me-4 font-semibold">{product.label}</div>
          <Tag supStyle={'me-4 bg-neutral-200 border-neutral-900'}>{product.category.label}</Tag>
          <div className="self-center">
            {product.isDeal ? (
              <DealTag />
            ) : product.isArchive ? (
              <ArchiveTag />
            ) : (
              <SaleTag />
            )}
          </div>
        </div>
        <div className="flex  ">
          <div className="me-4 text-neutral-400">{product.description}</div>
          {product.isDeal ? (
            <ListItemDealPriceDetail product={product} />
          ) : (
            <Price> {product.price} </Price>
          )}
        </div>
      </div>  
      <div className="bg-neutral-400">
        {product.isDeal ? <Link href={`/produit/promotion/delete/${product.id}`}>Remove Deal</Link> : <Link href={`/produit/promotion/${product.id}`}>add promo</Link> }
        
        <Link href={`/produit/editer/${product.id}`}>Editer</Link>
      </div>
    </li>
  );
}
