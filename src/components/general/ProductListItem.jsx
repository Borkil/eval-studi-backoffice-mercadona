import DealTag from "./tag/DealTag.jsx";
import SaleTag from "./tag/SaleTag.jsx";
import ArchiveTag from "./tag/ArchiveTag.jsx";
import ListItemDealPriceDetail from "./ListItemDealPriceDetail.jsx";
import Price from "./Price.jsx";

export default function ProductListItem({ product }) {
  return (
    <li className="flex justify-between text-sm">
      <div className="grid gap-2  py-2">
        <div className="flex">
          <div className="me-4 font-semibold text-m">{product.label}</div>
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
            <Price product={product} />
          )}
        </div>
      </div>
      <div className="bg-neutral-400">
        <button>view</button>
        <button>edit</button>
      </div>
    </li>
  );
}
