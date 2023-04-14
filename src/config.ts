// Sets if the example should run locally or on chain
export enum Chain {
  POLYGON,
  MAINNET,
}

// Inputs that configure this example to run
interface ExampleConfig {
  chain: Chain
  rpc: {
    polygon: string
    mainnet: string
  }
}

// Example Configuration
export const CurrentConfig: ExampleConfig = {
  chain: Chain.MAINNET,
  rpc: {
    polygon: 'https://matic-testnet-archive-rpc.bwarelabs.com',
    mainnet: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
  },
}
