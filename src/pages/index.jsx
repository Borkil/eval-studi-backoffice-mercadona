import { Poppins } from 'next/font/google'
import Header from '@/components/general/Header.jsx'
import LoginForm from '@/components/login/LoginForm.jsx'
import { useSession } from 'next-auth/react'

const poppins = Poppins({ 
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'] 
})

export default function Home() {
  const { data: session } = useSession()
  return ( 
    <main className={`flex min-h-screen flex-col ${poppins.className}`}>
        {!session ? <LoginForm  /> : <p>Bienvenue</p>}
    </main>
  )
}