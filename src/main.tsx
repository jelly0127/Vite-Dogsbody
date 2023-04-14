import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import store from '@/redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
import 'antd/dist/reset.css'
import { Web3ContextProvider } from './libs/components/Web3ContextProvider'
import { Buffer } from 'buffer'

// import VConsole from 'vconsole'
// const vConsole = new VConsole()
if (window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}
// Node polyfills required by WalletConnect are no longer bundled with webpack
window.Buffer = Buffer
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Web3ContextProvider>
      <Provider store={store}>
        <Routes>
          <App />
        </Routes>
      </Provider>
    </Web3ContextProvider>
  </React.StrictMode>
)
