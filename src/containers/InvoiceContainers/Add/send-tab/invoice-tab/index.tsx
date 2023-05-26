import React from 'react'

import { Typography } from '@mui/material'

import { UserSelect } from './user-select'
import { AddressTab } from './address-tab'
import { DrawerNewCustomer } from './drawer-tab'

export const InvoiceTab = () => {
  return (
    <React.Fragment>
      <Typography>Invoice To:</Typography>
      <UserSelect />
      <AddressTab />
      <DrawerNewCustomer />
    </React.Fragment>
  )
}