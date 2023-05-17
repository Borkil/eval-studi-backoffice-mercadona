import ProductListItem from "./ProductListItem.jsx";

export default function ListData({products}) {
  
  return (
      <ul className="divide-y divide-solid max-w-3xl container">
        {products.map((element)=>(
          <ProductListItem product={element} key={element.id} />
        ))}  
      </ul>
  );
}
