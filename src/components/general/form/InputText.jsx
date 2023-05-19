

export default function InputText({children, name, value, required}){

  
  return(
    <div className="flex flex-col">
      <label htmlFor={name}>{children}</label>
      <input className="border-2" type="text" id={name} name={name} defaultValue={value} required={required ? required : false}/>
    </div>
  )
}