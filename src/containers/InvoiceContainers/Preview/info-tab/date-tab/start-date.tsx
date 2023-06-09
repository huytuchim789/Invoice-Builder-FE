import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { useContext } from 'react'

import { Grid, Typography } from '@mui/material'

import { IInvoiceDetailData } from 'src/@core/models/api/invoice/invoice.interface'
import { InvoiceDetailContext } from '../..'

dayjs.extend(utc)

export const StartDate = () => {
  const { invoice_detail } = useContext(InvoiceDetailContext) as { invoice_detail: IInvoiceDetailData }

  return (
    <Grid container alignItems='center' marginTop={3} justifyContent='space-between'>
      <Grid item lg={4} md={12}>
        <Typography>Date Issued:</Typography>
      </Grid>

      <Grid item lg={8} md={12}>
        <Typography>{invoice_detail.created_date}</Typography>
      </Grid>
    </Grid>
  )
}
