import CONFIG from '@/config'
import type { AddEthereumChainParameter } from '@web3-react/types'

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
}

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
}

const CELO: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Celo',
  symbol: 'CELO',
  decimals: 18,
}
const BSC_TESTNET: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'tBNB',
  symbol: 'tBNB',
  decimals: 18,
}
const BSC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'BNB',
  symbol: 'BNB',
  decimals: 18,
}

interface BasicChainInformation {
  urls: string[]
  name: string
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency']
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId]
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    }
  } else {
    return chainId
  }
}

const getInfuraUrlFor = (network: string) =>
  CONFIG.INFURA_KEY ? `https://${network}.infura.io/v3/${CONFIG.INFURA_KEY}` : undefined
const getAlchemyUrlFor = (network: string) =>
  CONFIG.ALCHEMY_KEY ? `https://${network}.alchemyapi.io/v2/${CONFIG.ALCHEMY_KEY}` : undefined

type ChainConfig = { [chainId: number]: BasicChainInformation | ExtendedChainInformation }

export const MAINNET_CHAINS: ChainConfig = {
  1: {
    urls: [getInfuraUrlFor('mainnet'), getAlchemyUrlFor('eth-mainnet'), 'https://cloudflare-eth.com'].filter(
      Boolean
    ) as string[],
    name: 'Mainnet',
  },
  // 10: {
  //   urls: [getInfuraUrlFor('optimism-mainnet'), 'https://mainnet.optimism.io'].filter(Boolean),
  //   name: 'Optimism',
  //   nativeCurrency: ETH,
  //   blockExplorerUrls: ['https://optimistic.etherscan.io'],
  // },
  // 42161: {
  //   urls: [getInfuraUrlFor('arbitrum-mainnet'), 'https://arb1.arbitrum.io/rpc'].filter(Boolean),
  //   name: 'Arbitrum One',
  //   nativeCurrency: ETH,
  //   blockExplorerUrls: ['https://arbiscan.io'],
  // },
  // 137: {
  //   urls: [getInfuraUrlFor('polygon-mainnet'), 'https://polygon-rpc.com'].filter(Boolean),
  //   name: 'Polygon Mainnet',
  //   nativeCurrency: MATIC,
  //   blockExplorerUrls: ['https://polygonscan.com'],
  // },
  // 42220: {
  //   urls: ['https://forno.celo.org'],
  //   name: 'Celo',
  //   nativeCurrency: CELO,
  //   blockExplorerUrls: ['https://explorer.celo.org'],
  // },
  97: {
    urls: ['https://data-seed-prebsc-2-s3.binance.org:8545'],
    name: 'BSC_TESTNET',
    nativeCurrency: BSC_TESTNET,
    blockExplorerUrls: ['https://explorer.celo.org'],
  },
  56: {
    urls: ['https://matic-testnet-archive-rpc.bwarelabs.com'],
    name: 'BSC',
    nativeCurrency: BSC,
    blockExplorerUrls: ['https://explorer.celo.org'],
  },
}

// export const TESTNET_CHAINS: ChainConfig = {
//   5: {
//     urls: [getInfuraUrlFor('bsc_test')].filter(Boolean),
//     name: 'Görli',
//   },
//   97: {
//     urls: [getInfuraUrlFor('BSC_TESTNET')].filter(Boolean),
//     name: 'BSC_TESTNET',
//   },
//   420: {
//     urls: [getInfuraUrlFor('optimism-goerli'), 'https://goerli.optimism.io'].filter(Boolean),
//     name: 'Optimism Goerli',
//     nativeCurrency: ETH,
//     blockExplorerUrls: ['https://goerli-explorer.optimism.io'],
//   },
//   421613: {
//     urls: [getInfuraUrlFor('arbitrum-goerli'), 'https://goerli-rollup.arbitrum.io/rpc'].filter(Boolean),
//     name: 'Arbitrum Goerli',
//     nativeCurrency: ETH,
//     blockExplorerUrls: ['https://testnet.arbiscan.io'],
//   },
//   80001: {
//     urls: [getInfuraUrlFor('polygon-mumbai')].filter(Boolean),
//     name: 'Polygon Mumbai',
//     nativeCurrency: MATIC,
//     blockExplorerUrls: ['https://mumbai.polygonscan.com'],
//   },
//   44787: {
//     urls: ['https://alfajores-forno.celo-testnet.org'],
//     name: 'Celo Alfajores',
//     nativeCurrency: CELO,
//     blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org'],
//   },
// }

export const CHAINS: ChainConfig = {
  ...MAINNET_CHAINS,
  // ...TESTNET_CHAINS,
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs
    }

    return accumulator
  },
  {}
)
