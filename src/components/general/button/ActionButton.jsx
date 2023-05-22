import Link from "next/link.js";

export default function ActionButton({href, color, children, hover}){
  return(
    <Link href={href} className={`${color} me-2 px-2 rounded`} >{children}</Link>
  )
}