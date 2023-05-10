export default function inputNumber({children, name, value, readOnly, onChange, required}){
  return(
    <div className="flex flex-col">
      <label htmlFor={name}>{children}</label>
      <input className="border-2" type="number" id={name} name={name} defaultValue={value} step='0' readOnly={readOnly} onChange={onChange} required = {required}/>
    </div>
  )
}