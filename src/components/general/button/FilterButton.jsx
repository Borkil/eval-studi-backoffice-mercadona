export default function FilterButton({onClick, children}){
  return(
    <button onClick={onClick} className="bg-green-50 px-3 rounded-full drop-shadow-md me-5 focus:bg-green-600 focus:text-white hover:bg-green-100">{children}</button>
  )
}