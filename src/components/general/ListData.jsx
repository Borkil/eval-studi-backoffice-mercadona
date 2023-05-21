import ProductListItem from "./ProductListItem.jsx";

export default function ListData({products}) {
  
  return (
      <ul className="divide-y divide-solid">
        {products.map((element)=>(
          <ProductListItem product={element} key={element.id} />
        ))}  
      </ul>
  );
}
