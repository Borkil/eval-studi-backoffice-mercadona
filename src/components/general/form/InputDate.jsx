export default function InputDate({children, name, required}){
  return(
    <div>
      <label htmlFor={name}>{children}</label>
      <input type="date" name={name} id={name} required={required}/>
    </div>
  )
}