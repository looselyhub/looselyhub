import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function AdminRoute(Component) {
  return () => {
    const router = useRouter()
    const [session, loading] = useSession()
    useEffect(() => {
      if (!loading && !session && session.role !== 'admin') {
        router.push('/')
      }
    }, [loading])
    return <Component />
  }
}
