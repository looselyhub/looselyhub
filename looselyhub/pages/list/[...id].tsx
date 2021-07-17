import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Table from 'components/List/Table'

export default function List() {
  const router = useRouter()
  const [startLoading, setStartLoading] = useState<boolean>(false)
  const [color, setColor] = useState<string>(undefined)
  const [data, setData] = useState<Array<any>>([])
  const [loading, setLoading] = useState(true)

  async function fetchData(id: string) {
    const responseColor = await axios.get('/api/list/fetchColor', {
      params: {
        id,
      },
    })
    setColor(responseColor.data)
    setStartLoading(true)
    const response = await axios.get('/api/list/fetch', {
      params: {
        id,
      },
    })
    setLoading(false)
    setData(response.data)
  }

  useEffect(() => {
    const path = router.asPath
    const pathParts = path.split('/')
    const id = pathParts[pathParts.length - 1]
    if (id !== '[...id]' && data.length === 0) {
      fetchData(id)
    }
  }, [router])

  return (
    <div>
      {startLoading ? (
        <Table loading={loading} color={color} data={data} />
      ) : (
        <div />
      )}
    </div>
  )
}
