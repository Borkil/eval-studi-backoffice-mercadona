import ActionButton from "../general/button/ActionButton.jsx"

export default function ListUserRow({user}){
  return(
    <tr>
      <td className="text-center">{user.email}</td>
      <td className="text-center">{user.roles.map((role) => role)}</td>
      <td className="text-center">
        <ActionButton href={`/utilisateur/editer/${user.id}`} color={'bg-neutral-300'}>Editer</ActionButton>
      </td>
    </tr>
  )
}