import Link from "next/link.js"

export function SectionHeader({title, href}){
  return(
      <div className="flex">
        <h2 className="font-bold text-3xl me-10">{title}</h2>
        <Link
          href={href}
          className="bg-green-600 text-white text-sm rounded-md self-center px-3 py-1 hover:bg-green-500"
        >
          Ajouter
        </Link>
      </div>

  )
}