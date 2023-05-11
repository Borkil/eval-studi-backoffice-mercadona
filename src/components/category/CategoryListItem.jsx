import Link from "next/link.js"

export default function CategoryListItem({category}){
  return(
    <div>
      <div className="bg-neutral-200 text-neutral-900 text-xl text-bold">{category.label}</div>
      <div>
        <Link href={`/categorie/editer/${category.id}`} >Editer</Link>
      </div>
    </div>
  )
}