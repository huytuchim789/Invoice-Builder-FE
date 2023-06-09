import React from 'react'

import { EndDate } from './end-date'
import { StartDate } from './start-date'
import { InvoiceId } from './invoice-id'

export const DateTab = () => {
  return (
    <React.Fragment>
      <InvoiceId />
      <StartDate />
      <EndDate />
    </React.Fragment>
  )
}
