import { View, StyleSheet } from '@react-pdf/renderer'

import TableHeaderPdf from '../../components/TableHeaderPdf'
import { TableBodyPdf } from '../../components/TableBodyPdf'
import { useContext } from 'react'
import { IInvoiceDetailLocalData } from 'src/@core/models/api/invoice/invoice.interface'
import { InvoiceLightPdfContext } from '../LightFormat'

const itemsInfostyle = StyleSheet.create({
  content: {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    borderTop: '1px solid #808080'
  }
})

const ItemsPdfInfo = () => {
  const { invoice_detail } = useContext(InvoiceLightPdfContext) as { invoice_detail: IInvoiceDetailLocalData }

  return (
    <View style={itemsInfostyle.content}>
      <TableHeaderPdf />
      <TableBodyPdf invoice_detail={invoice_detail} />
    </View>
  )
}

export default ItemsPdfInfo
