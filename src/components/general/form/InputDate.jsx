export default function InputDate({children, name, required}){
  return(
    <div className="mb-3 flex flex-col">
      <label htmlFor={name}>{children}</label>
      <input type="date" name={name} id={name} required={required}/>
    </div>
  )
}