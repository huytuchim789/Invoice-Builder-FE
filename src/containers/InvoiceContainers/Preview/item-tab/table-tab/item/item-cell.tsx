import { useContext } from 'react'

import { Typography } from '@mui/material'

import { ItemContext } from '../table-body'
import { IItemsData } from 'src/@core/models/api/invoice/invoice.interface'

export const ItemCell = () => {
  const { data } = useContext(ItemContext) as { data: IItemsData }

  return <Typography>{data.name}</Typography>
}
