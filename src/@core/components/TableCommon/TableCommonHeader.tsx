import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material'
import { ChangeEvent, useContext } from 'react'
import { ITableCommonHeader } from 'src/@core/models/common'
import { useTableMutilCheckStore } from './store'
import { ITableCommon, TableCommonContext } from './TableCommon'
import { getValueObjectByPath } from 'src/@core/utils/objectResolver'

const TableCommonHeader = ({ selectedKey }: { selectedKey: string }) => {
  const { headerData, data, checkable } = useContext(TableCommonContext) as ITableCommon
  const { checkedSelected, setCheckedSelectedAll } = useTableMutilCheckStore()

  const handleCheckAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const checkedMap = new Set(checkedSelected)

      data.forEach(dataTable => {
        checkedMap.add(getValueObjectByPath(selectedKey, dataTable))
      })

      setCheckedSelectedAll(Array.from(checkedMap))
    } else {
      setCheckedSelectedAll([])
    }
  }

  return (
    <TableHead>
      <TableRow>
        {checkable && (
          <TableCell width={50}>
            <Checkbox
              indeterminate={checkedSelected.length > 0 && checkedSelected.length < data?.length}
              checked={data?.length > 0 && checkedSelected.length === data?.length}
              onChange={handleCheckAll}
            />
          </TableCell>
        )}
        {headerData.map((head: ITableCommonHeader, index: number) => {
          return (
            <TableCell
              key={`${head.field}_${index}`}
              style={{
                width: head.width ?? 'auto',
                textAlign: head.textAlign ?? 'left',
                ...head.customStyle
              }}
            >
              {head.headerName}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

export default TableCommonHeader
