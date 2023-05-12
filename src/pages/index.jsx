import { Poppins } from 'next/font/google'
import LoginBtn from '@/components/login/LoginBtn.jsx'


const poppins = Poppins({ 
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'] 
})

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${poppins.className}`}>
      <h1>Page d accueil</h1>
    
      <LoginBtn/>
    </main>
  )
}
