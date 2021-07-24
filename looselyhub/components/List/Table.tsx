import React from 'react'
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'
import Head from 'next/head'
import Styles from './Table.module.scss'
import Loading from '../Loading'
import { CSVLink } from 'react-csv'
import 'regenerator-runtime/runtime'

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <input
      className={Styles.search}
      type="text"
      name="search"
      placeholder={`Search ${count} records...`}
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
    />
  )
}

const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
  ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
  : '#EF767A'

export default function Table({ loading, data, color = primaryColor }) {
  const newRows = React.useMemo(() => createRows(), [data])
  const newHeader = React.useMemo(() => createHeader(), [data])

  function generateCSVData() {
    const result = data.map((row) => {
      const rowObj = {}
      row.forEach((column) => {
        rowObj[column.name] = column.value
      })
      return rowObj
    })
    return result
  }

  const csvData = generateCSVData()

  function createHeader() {
    if (data.length === 0) {
      return []
    }
    const result = data[0].map((columnData) => {
      return { Header: columnData.name, accessor: columnData.name }
    })
    return result
  }

  function createRows() {
    const result = data.map((rowData) => {
      const row = {}
      rowData.forEach((columnData) => {
        row[columnData.name] = columnData.value
      })
      return row
    })
    return result
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex },
  } = useTable(
    {
      columns: newHeader,
      data: newRows,
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useGlobalFilter,
    usePagination
  )

  function renderHeader() {
    return (
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={'Header'}
            style={{ backgroundColor: color }}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
    )
  }

  function renderBody() {
    return (
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} key={`row+${row.id}`}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    key={`row+${row.id}+${cell.column.id}`}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    )
  }

  function renderPagination() {
    return (
      <tr className={Styles.footerContainer}>
        <td colSpan={100}>
          <div className={Styles.pagination}>
            <button
              style={{ color: canPreviousPage ? color : '#d3d3d3' }}
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {'<<'}
            </button>{' '}
            <button
              style={{ color: canPreviousPage ? color : '#d3d3d3' }}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {'<'}
            </button>{' '}
            <button
              style={{ color: canNextPage ? color : '#d3d3d3' }}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {'>'}
            </button>{' '}
            <button
              style={{ color: canNextPage ? color : '#d3d3d3' }}
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {'>>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <span>
              | Go to page:{' '}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
                style={{ width: '100px' }}
              />
            </span>
            <CSVLink className={Styles.donwloadCSV} data={csvData}>
              Donwload CSV
            </CSVLink>
          </div>
        </td>
      </tr>
    )
  }

  return (
    <div className={Styles.mainContainer}>
      <Head>
        <title>Sign In</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <div className={Styles.tableContainer}>
        {loading ? (
          <Loading active={loading} color={color} />
        ) : (
          [
            <GlobalFilter
              key="globalfilter"
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />,
            <table key="table" {...getTableProps()}>
              {renderHeader()}
              {renderBody()}
              <tfoot style={{ backgroundColor: color }}>
                {renderPagination()}
              </tfoot>
            </table>,
          ]
        )}
      </div>
    </div>
  )
}
