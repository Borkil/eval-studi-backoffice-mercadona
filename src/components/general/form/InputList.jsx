

export default function InputList({children, list, name}){``

  const listOption = []


  return(
    <div className="flex flex-col">
      <label htmlFor={name}>{children}</label>
      <input className="border-2" list='htmlList' id={name} name={name}/>
      <datalist id='htmlList'>
        {list.map((element)=><option value={element} key={element}/>)}
      </datalist>
    </div>
  )
}