export default function DangerFlashMessage({children}){
  return(
    <div className="border-2 border-red-500 bg-red-200 text-red-900 p-2"> {children} </div>
  )
}