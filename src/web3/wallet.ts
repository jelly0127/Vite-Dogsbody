import MetamaskIcon from './images/metamask.png'
import WalletConnectIcon from './images/wallet-connect-icon.svg'
import CoinbaseWalletIcon from './images/coinbase-wallet-icon.svg'

import { ConnectionType } from './connections'

export interface WalletInfo {
  Wallet: ConnectionType
  name: string
  iconName: string
  description: string
  href: string | null
}
// 支持的钱包
export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  MetaMask: {
    Wallet: ConnectionType.INJECTED,
    name: 'MetaMask',
    iconName: MetamaskIcon,
    description: 'Easy-to-use browser extension.',
    href: null,
  },
  CoinbaseWallet: {
    Wallet: ConnectionType.COINBASE_WALLET,
    name: 'CoinbaseWallet',
    iconName: CoinbaseWalletIcon,
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
  },
  WalletConnect2: {
    Wallet: ConnectionType.WALLET_CONNECT,
    name: 'WalletConnect2',
    iconName: WalletConnectIcon,
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
  },
}
