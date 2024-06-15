import DataTable from 'react-data-table-component'
import { Spinner } from '@chakra-ui/react'

type DictionaryOf<T> = { [key: string]: T }

type TableProps = {
  columns: DictionaryOf<any>[]
  data: any
  title?: string
  paginationHandler?: Function
  perPage?: number
  isLoading?: boolean
  customStyles?: DictionaryOf<any>
  onSelectedRowsChange?: any
  handleClearRows?: any
  totalRows?: number
  withCustomedPagination?: boolean
  handlePageChange?: (page: number) => void
  handlePerRowsChange?: (newPerPage: number, page: number) => void
  selectableRows?: boolean
}

const Table = ({
  columns,
  data,
  title,
  paginationHandler,
  isLoading,
  onSelectedRowsChange,
  handlePerRowsChange,
  handlePageChange,
  customStyles,
  withCustomedPagination,
  totalRows,
  selectableRows = true
}: TableProps) => {
  return (
    <DataTable
      paginationComponentOptions={{ noRowsPerPage: true }}
      responsive
      columns={columns}
      data={data}
      title={title}
      pagination={!withCustomedPagination ? true : false}
      paginationServer
      paginationTotalRows={totalRows}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handlePerRowsChange}
      onSelectedRowsChange={onSelectedRowsChange}
      progressPending={isLoading}
      selectableRows={selectableRows}
      progressComponent={
        <div className="py-10">
          <Spinner />
        </div>
      }
      customStyles={customStyles}
    />
  )
}

export default Table
