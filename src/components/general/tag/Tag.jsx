export default function Tag({children, supStyle}){
  return(
    <div className={`px-2 text-xs font-bold rounded-md border ${supStyle}`}>{children}</div>
  )
}