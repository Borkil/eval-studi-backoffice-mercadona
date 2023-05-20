import { useSession, signIn, signOut } from "next-auth/react"



export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button onClick={() => signOut()} className='px-2 border-2 rounded-md bg-neutral-200 border-neutral-700'>Déconnexion</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()} className='px-2 border-2 rounded-md bg-green-200 border-green-700'>Connexion</button>
    </>
  )
}