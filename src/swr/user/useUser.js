import { useSession } from "next-auth/react"
import useSWR from 'swr'
import { fetchWithToken } from "../fetcher/fetchWithToken.js";


export function useUser (id) {
  const url = process.env.NEXT_PUBLIC_URL_API + "/user/" + id;
  const { data: session, status } = useSession()
  const { data, error, isLoading } = useSWR(session ? [url, session.user.token] : null, ([url, token]) => fetchWithToken(url, token))
 
  return {
    user: data,
    error : error,
    isLoading : isLoading,
    session: session
  }
}