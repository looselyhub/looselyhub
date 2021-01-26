import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function PrivateRoute(Component) {
  return () => {
    const router = useRouter()
    const [session, loading] = useSession()
    useEffect(() => {
      if (!loading && !session) {
        router.push('/')
      }
    }, [loading])
    return <Component />
  }
}
