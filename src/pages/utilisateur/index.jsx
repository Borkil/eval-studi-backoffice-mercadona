import TableLigne from "@/components/table/TableLigne.jsx"
import Link from "next/link.js"
import { authOptions } from "../api/auth/[...nextauth].js"
import { getServerSession } from "next-auth/next"

export default function Index({users}){

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
          {users.map((user)=>(
            <TableLigne user={user} key={user.id}/>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export async function getServerSideProps(context){
  const session = await getServerSession(context.req, context.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const options = {
    method: "GET",
    headers: {
      Authorization : `Bearer ${session.user.token} `
    }
  };
  const res = await fetch(process.env.NEXT_PUBLIC_URL_API + "/user", options)
  const users = await res.json()
  return {
    props : {
      users
    }
  }
}