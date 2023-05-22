import { useUsers } from "@/swr/user/useUsers.js"
import ListUserRow from "./ListUserRow.jsx";

export default function ListUser(){
  const {users} = useUsers();
  if (!users) return <div>Loading...</div>
  return(
    <div>
      <table className="w-full divide-y divide-solid">
        <thead>
          <tr>
            <th className="bg-neutral-100 items-center">Email</th>
            <th className="bg-neutral-100 items-center">Rôle</th>
            <th className="bg-neutral-100 items-center">Action</th>
          </tr>
        </thead>
        <tbody className="w-full divide-y divide-solid">
          {users.map((user) => (
            <ListUserRow user={user} key={user.id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}