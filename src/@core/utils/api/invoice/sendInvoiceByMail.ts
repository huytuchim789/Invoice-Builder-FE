import axiosInstance from 'src/@core/common/axios'

export const sendInvoiceByMail = (data: any) => {
  return axiosInstance.post('send-email?page=0', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
