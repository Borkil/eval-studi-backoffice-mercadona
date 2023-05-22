import CategoryListItem from "./CategoryListItem.jsx"

export default function CategoryList({categories}){
  return(
    <div className="mt-5 divide-y divide-solid">
      {categories.map((category) => (
        <CategoryListItem category={category} key={category.id}/>
      ))}
    </div>
  )
}