import React from 'react'
import { Document, Font, Page } from '@react-pdf/renderer'

import { IInvoiceDetailLocalData } from 'src/@core/models/api/invoice/invoice.interface'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import InvoiceToInfo from './InvoiceToInfo/InvoiceToInfo'
import SaleInfoPdf from './SaleInfo'
import NotePdfInfo from '../components/NotePdfInfo/NotePdfInfo'
import ItemsPdfInfo from './ItemsInfo/ItemsInfo'
import { getFontRegister } from '../components/common'
import { ISetting } from 'src/views/account-settings/store'

export const InvoiceBoldPdfContext = React.createContext({})

const InvoiceBoldFormatPDF = ({
  invoice_detail,
  font,
  settingInfo
}: {
  invoice_detail: IInvoiceDetailLocalData
  font: string
  settingInfo: ISetting
}) => {
  Font.register(getFontRegister(font))

  return (
    <InvoiceBoldPdfContext.Provider value={{ invoice_detail: invoice_detail, settingInfo }}>
      <Document>
        <Page style={{ padding: '10px', fontFamily: getFontRegister(font).family }}>
          <BusinessInfo />
          <InvoiceToInfo />
          <ItemsPdfInfo />
          <SaleInfoPdf />
          <NotePdfInfo invoice_detail={invoice_detail} />
        </Page>
      </Document>
    </InvoiceBoldPdfContext.Provider>
  )
}

export default InvoiceBoldFormatPDF
