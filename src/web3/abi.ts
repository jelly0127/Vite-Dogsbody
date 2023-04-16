import TestNFT from './abi/TestNFT.json'
import Transfer from './abi/MutilTransfer.json'
import CONFIG from '@/config/index'

export const ABI_MAP = {
  test: [...TestNFT],
  transfer: [...Transfer],
  transferTest: [...Transfer],
}

const contractMethods = (abi: any[]) => {
  return abi.reduce((pre, cur) => {
    if (cur?.name) {
      pre.push(cur.name)
    }
    return pre
  }, [] as string[])
}
// 'testNFT' | 'xxx'
export type ContractKey = keyof typeof ABI_MAP
export type ContractMethodsMap = Record<ContractKey, string[]>

export const contractAddressMap: Record<ContractKey, string> = {
  test: CONFIG.TestNFT,
  transfer: CONFIG.BSC,
  transferTest: CONFIG.BSC_TESTNET,
}

export const contractMethodMap: ContractMethodsMap = {
  test: contractMethods(ABI_MAP.test),
  transfer: contractMethods(ABI_MAP.transfer),
  transferTest: contractMethods(ABI_MAP.transferTest),
}
