/// <reference types="vite/client" />
declare module 'styled-components'
interface Window {
  ethereum?: {
    // value that is populated and returns true by the Coinbase Wallet mobile dapp browser
    isCoinbaseWallet?: true
    isMetaMask?: true
    autoRefreshOnNetworkChange?: boolean
    isBraveWallet?: true
  }
}
