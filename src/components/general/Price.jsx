export default function Price({children, addClass}){
  return(
    <div className={`me-2 ${addClass}`}>{children} €</div>
  )
}