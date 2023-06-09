import { Box, Typography } from '@mui/material'
import { useInvoiceEditStore } from '../../store'

export const AddressTab = () => {
  const { user } = useInvoiceEditStore((state: any) => state.userSelectTabStore)

  return (
    <Box marginTop={2}>
      <Typography fontSize={12} color={'#808080'}>
        {user.name}
        <br />
        {user.address}
        <br />
        {user.contact_number}
        <br />
        {user.email}
      </Typography>
    </Box>
  )
}
