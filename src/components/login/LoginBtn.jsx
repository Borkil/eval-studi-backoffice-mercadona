import { useSession, signIn, signOut } from "next-auth/react"


export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.username} <br />
        <button onClick={() => signOut()} className='border-2 bg-neutral-200 text-xl border-neutral-900'>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} className='border-2 bg-neutral-200 text-xl border-neutral-900'>Sign in</button>
    </>
  )
}