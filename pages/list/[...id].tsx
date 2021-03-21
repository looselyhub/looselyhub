import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataEditor from '@glideapps/glide-data-grid'
import {
  DataEditorContainer,
  GridColumn,
  GridCell,
} from '@glideapps/glide-data-grid'
import { useRouter } from 'next/router'

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
    if (id !== '[...id]') {
      fetchData(id)
    }
  }, [router])

  function getData([col, row]: readonly [number, number]): GridCell {
    const dataRow = data[row]
    const dataCol = dataRow[col]
    return {
      kind: dataCol.type,
      data: dataCol.value,
      displayData: dataCol.value,
      allowOverlay: false,
    }
  }
  function getColumns() {
    // const firstRow = data[0];
    const columns: GridColumn[] = data.map((column) => {
      return {
        title: column.title,
        width: 100,
      }
    })
    return columns
  }

  function renderGrid() {
    return (
      <DataEditorContainer width={500} height={300}>
        <DataEditor
          getCellContent={getData}
          columns={getColumns()}
          rows={data.length}
        />
      </DataEditorContainer>
    )
  }

  return (
    <div>
      {renderGrid()}
      <div id="portal" />
    </div>
  )
}
