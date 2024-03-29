import axiosInstance from 'src/@core/common/axios'
import { ICardInfo, ICardProps, IUnSubcribeResponseData } from 'src/@core/models/api/payment/card.interface'

export const addPayment = async (payment: ICardProps) => {
  const { data } = (await axiosInstance.post('billing/create-payment-method', payment)) as { data: ICardInfo }

  return data
}

export const getCard = async () => {
  const { data } = (await axiosInstance.get('billing/check-card')) as { data: ICardInfo }

  return data.data
}

export const detachCard = async () => {
  const { data } = (await axiosInstance.post('billing/detach-payment')) as { data: { message: string } }

  return data
}

export const subcribeProPlan = async () => {
  const { data } = (await axiosInstance.post('billing/subscribe')) as { data: { message: string } }

  return data
}

export const unSubcribeProPlan = async () => {
  const { data } = (await axiosInstance.post('billing/cancel-subscription')) as { data: { message: string } }

  return data
}

export const checkSubcribe = async () => {
  const { data } = (await axiosInstance.get('billing/check-subscription')) as { data: IUnSubcribeResponseData }

  return data
}

export const payInvoices = async (invoiceCodes: string[]) => {
  const { data } = await axiosInstance.post(
    'invoices/pay-invoice',
    { invoice_codes: invoiceCodes }
    // {
    //   onUploadProgress: progressEvent => {
    //     const { loaded, total } = progressEvent
    //     console.log(progressEvent)

    //     if (total) {
    //       const percent = Math.round((loaded * 100) / total)
    //       // Handle the progress value
    //     }
    //   }
    // }
  )
  return data
}
