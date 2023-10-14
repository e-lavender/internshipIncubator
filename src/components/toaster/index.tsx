import React from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const Toaster = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={false}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      icon={false}
      theme={'colored'}
    />
  )
}
