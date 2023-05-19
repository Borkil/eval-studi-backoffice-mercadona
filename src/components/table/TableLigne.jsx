import { EditButton } from "../general/button/EditButton.jsx"

export default function TableLigne({user}){
  return(
    <tr>
      <td>{user.email}</td>
      <td>{user.roles.map((role) => role)}</td>
      <td>
        <EditButton href={`/utilisateur/editer/${user.id}`} />
      </td>
    </tr>
  )
}