

export default function InputFloat({children, name}){
  return(
    <div className="flex flex-col">
      <label htmlFor={name}>{children}</label>
      <input className="border-2" type="number" id={name} name={name} step="0.01" />
    </div>
  )
}