export default function TableLigne({user}){
  return(
    <tr>
      <td>{user.email}</td>
      <td>{user.roles.map((role) => role)}</td>
    </tr>
  )
}