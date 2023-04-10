import CONFIG from '@/config'
import { initializeConnector } from '@web3-react/core'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { MAINNET_CHAINS } from '../chains'

export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2>(
  actions =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: CONFIG.WALLET_CONNECT_PROJECT_ID,
        chains: Object.keys(MAINNET_CHAINS).map(Number),
        showQrModal: true,
      },
    })
)
