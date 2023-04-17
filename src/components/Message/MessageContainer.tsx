import React from 'react'
import { ToastContainer as Container } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
  margin-top: 100px;
  align-items: center;
  font-size: ${(prop: any) => prop.theme.fontNormal};
  .Toastify__toast-icon {
    display: none;
  }
  .Toastify__toast {
    flex-direction: row;
    padding: 0;
    min-height: 36px;
  }
  .Toastify__toast-body {
    width: 236px;
    padding: 5px;
    text-align: center;
    flex-direction: row;
    font-weight: 500;
    font-size: ${(prop: any) => prop.theme.fontNormal};
    line-height: 24px;
  }
  .Toastify__toast--default {
    width: 236px;
    border: 1px solid ${(prop: any) => prop.theme.primaryColor};
    color: ${(prop: any) => prop.theme.primaryColor};
  }
  .Toastify__toast--error {
    width: 225px;
    border: 2px solid #ff0806;
    color: #ff0806;
  }
  .Toastify__toast--success {
    border: 2px solid #48b452;
    color: #48b452;
    width: 143px;
  }
`
export const MESSAGE_CONTAINER_ID = 'message'
// 按需处理 https://fkhadra.github.io/react-toastify/introduction
const MessageContainer: React.FC = () => {
  return (
    <StyledContainer
      enableMultiContainer
      containerId={MESSAGE_CONTAINER_ID}
      position="top-right"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      autoClose={5000}
      pauseOnFocusLoss
      closeButton={false}
      draggable
      pauseOnHover
    />
  )
}

export default MessageContainer
