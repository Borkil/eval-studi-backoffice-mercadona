import Link from "next/link.js"

export default function NavBrand({children}){
  return(
    <Link href="/"><h1 className="text-3xl text-green-600 font-bold">{children}</h1></Link>
  )
}