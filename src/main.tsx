import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import store from '@/redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
import 'antd/dist/reset.css'
import Web3Provider from './web3/Web3Provider'
// import VConsole from 'vconsole'
// const vConsole = new VConsole()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3Provider></Web3Provider>
      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>
)
