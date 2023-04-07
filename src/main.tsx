import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import store from '@/redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Routes } from 'react-router-dom'
import 'antd/dist/reset.css'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import Web3ReactManager from '@/components/Web3ReactManager/index'
import { NetworkContextName } from '@/web3'
function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000
  return library
}
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

// import VConsole from 'vconsole'
// const vConsole = new VConsole()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ProviderNetwork getLibrary={getLibrary}>
      <Provider store={store}>
        <Web3ReactManager>
          <Routes>
            <App />
          </Routes>
        </Web3ReactManager>
      </Provider>
    </Web3ProviderNetwork>
  </Web3ReactProvider>
  // </React.StrictMode>
)
