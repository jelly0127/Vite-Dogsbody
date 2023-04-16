import OpIcon from './images/optimism-logo.svg'
import BscIcon from './images/bsc-logo.png'
import ETHIcon from './images/ethereum-logo.png'
export enum ChainId {
  MAINNET = 1,
  BSC_TEST = 97,
  BSC = 56,
  GIERLI = 5,
  OPTIMISM = 10,
}
//default Chains
const MAINNET_CHAIN_ID = 97
//default network url map
export const CHAIN_TO_URL_MAP = {
  // [MAINNET_CHAIN_ID]: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
  [MAINNET_CHAIN_ID]: 'https://data-seed-prebsc-2-s3.binance.org:8545',
}

export const CHAIN_IDS_TO_NAMES = {
  [ChainId.MAINNET]: 'mainnet',
  [ChainId.GIERLI]: 'Goerli Test',
  [ChainId.BSC_TEST]: 'BSC_Testnet',
  [ChainId.BSC]: 'BSC',
  [ChainId.OPTIMISM]: 'optimism',
}

export const ALL_SUPPORTED_CHAIN_IDS: ChainId[] = Object.values(ChainId).filter(
  id => typeof id === 'number'
) as ChainId[]
// 默认显示的链
export const DEFAULT_NETWORK = ChainId.BSC_TEST

export const SUPPORTED_CHAIN_IDS = [5]
interface NetworkConfig {
  [key: number]: {
    chainId: typeof SUPPORTED_CHAIN_IDS
    chainName: string
    rpcUrls: string[]
    logo: string
    explorer: string
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    }
  }
}
export const NETWORK_CONFIG: NetworkConfig = {
  // [ChainId.MAINNET]: {
  //   chainId: [ChainId.MAINNET],
  //   chainName: 'Ethereum',
  //   rpcUrls: ['https://mainnet.infura.io/v3/84842078b09946638c03157f83405213'],
  //   logo: ETHIcon,
  //   explorer: 'https://etherscan.io/',
  //   nativeCurrency: {
  //     name: 'ETH',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   },
  // },
  [ChainId.BSC]: {
    chainId: [ChainId.BSC],
    chainName: 'Binance Smart Chain',
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    logo: BscIcon,
    explorer: 'https://bscscan.com/',
    nativeCurrency: {
      name: 'tBNB',
      symbol: 'tBNB',
      decimals: 18,
    },
  },
  [ChainId.BSC_TEST]: {
    chainId: [ChainId.BSC_TEST],
    chainName: 'BSC_Testnet',
    rpcUrls: [
      'https://data-seed-prebsc-2-s3.binance.org:8545',
      'https://data-seed-prebsc-1-s3.binance.org:8545',
      'https://data-seed-prebsc-1-s2.binance.org:8545',
      'https://data-seed-prebsc-2-s1.binance.org:8545',
    ],
    logo: BscIcon,
    explorer: 'https://testnet.bscscan.com/',
    nativeCurrency: {
      name: 'tBNB',
      symbol: 'tBNB',
      decimals: 18,
    },
  },
  // [ChainId.OPTIMISM]: {
  //   chainId: [ChainId.OPTIMISM],
  //   chainName: 'Optimism',
  //   rpcUrls: ['https://mainnet.optimism.io'],
  //   logo: OpIcon,
  //   explorer: 'https://optimistic.etherscan.io/',
  //   nativeCurrency: {
  //     name: 'ETH',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   },
  // },
  // [ChainId.GIERLI]: {
  //   chainId: [ChainId.GIERLI],
  //   chainName: CHAIN_IDS_TO_NAMES[ChainId.GIERLI],
  //   rpcUrls: ['https://goerli.infura.io/v3/'],
  //   logo: OpIcon,
  //   explorer: 'https://goerli.etherscan.io',
  //   nativeCurrency: {
  //     name: 'GoerliETH',
  //     symbol: 'GoerliETH',
  //     decimals: 18,
  //   },
  // },
}
