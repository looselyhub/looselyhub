import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Table from 'components/List/Table'

export default function List() {
  const router = useRouter()
  const [data, setData] = useState<Array<any>>([])

  async function fetchData(id: string) {
    const response = await axios.get('/api/list/fetch', {
      params: {
        id,
      },
    })
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
      <Table data={data} />
    </div>
  )
}
