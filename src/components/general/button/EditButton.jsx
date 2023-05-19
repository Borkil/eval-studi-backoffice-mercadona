import Link from "next/link.js"

export function EditButton({href}){
  return(
    <button className='p-2 rounded bg-neutral-200'><a href={href}>Editer</a></button>
  )
}