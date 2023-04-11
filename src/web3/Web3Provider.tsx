import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import type { Network } from '@web3-react/network'
import type { WalletConnect } from '@web3-react/walletconnect'
import type { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'
import React, { ReactNode } from 'React'
import { coinbaseWallet, hooks as coinbaseWalletHooks } from '@/web3/connectors/coinbaseWallet'
import { hooks as metaMaskHooks, metaMask } from '@/web3/connectors/metaMask'
import { hooks as networkHooks, network } from '@/web3/connectors/network'
import { hooks as walletConnectHooks, walletConnect } from '@/web3/connectors/walletConnect'
import { hooks as walletConnectV2Hooks, walletConnectV2 } from '@/web3/connectors/walletConnectV2'
import { getName } from '../tools/utils'

const connectors: [MetaMask | WalletConnect | WalletConnectV2 | CoinbaseWallet | Network, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [walletConnectV2, walletConnectV2Hooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
]

// function Child() {
//   const { connector, isActivating } = useWeb3React()
//   console.log(`Connector is: `, connector)
//   console.log(`Priority Connector is: ${getName(connector)}`)
//   console.log(`isActivating:`, isActivating)
//   return null
// }

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <Web3ReactProvider connectors={connectors}>
      {/* <Child></Child> */}
      {children}
    </Web3ReactProvider>
  )
}
