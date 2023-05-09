

export default function InputText({children, name}){

  
  return(
    <div className="flex flex-col">
      <label htmlFor={name}>{children}</label>
      <input className="border-2" type="text" id={name} name={name} />
    </div>
  )
}