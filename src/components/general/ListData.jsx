import ProductListItem from "./ProductListItem.jsx";

export default function ListData({allData}) {
  
  
  return (

      <ul className="divide-y divide-solid max-w-3xl container">
        {allData.map((element)=>(
          <ProductListItem product={element} key={element.id} />
        ))}  
      </ul>

  );
}
