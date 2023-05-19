import TableLigne from "@/components/table/TableLigne.jsx"
import Link from "next/link.js"
import { useUsers } from "@/swr/user/useUsers.js"



export default function Index(){
  const {users} = useUsers();


  if (!users) return <div>Loading...</div>
  
  console.log(users)
  return(
    <section>
      <div className="flex justify-between">
            <h2 className="font-bold text-3xl">Gestion des utilisateurs</h2>
            <Link
              href="/utilisateur/ajouter"
              className="bg-green-600 text-white text-sm rounded self-center px-3 py-1"
            >
              Ajouter
            </Link>
          </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Email</th>
            <th>Rôle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableLigne user={user} key={user.id}/>
          ))}
        </tbody>
      </table>
    </section>
  )
}