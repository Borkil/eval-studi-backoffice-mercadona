import CategoryListItem from "./CategoryListItem.jsx"

export default function CategoryList({categories}){
  return(
    <div>
      {categories.map((category) => (
        <CategoryListItem category={category} key={category.id}/>
      ))}
    </div>
  )
}