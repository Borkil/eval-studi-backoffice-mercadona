import { useSession } from "next-auth/react"
import useSWR from 'swr'
import { fetchWithToken } from "../fetcher/fetchWithToken.js";

export function useUsers () {
  const url = process.env.NEXT_PUBLIC_URL_API + "/user";
  const { data: session, status } = useSession()
  const { data, error, isLoading } = useSWR(session ? [url, session.user.token] : null, ([url, token]) => fetchWithToken(url, token))
 
  return {
    users: data,
    error : error,
    isLoading,
    session: session
  }
}