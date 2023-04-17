import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'
import { isAddress } from '@/tools/index'
import { ABI_MAP, contractMethodMap, ContractMethodsMap, contractAddressMap } from './abi'

// account is not optional
const getSigner = (provider: JsonRpcProvider, account: string): JsonRpcSigner => {
  return provider.getSigner(account).connectUnchecked()
}
// account is optional
const getProviderOrSigner = (provider: JsonRpcProvider, account?: string): JsonRpcProvider | JsonRpcSigner => {
  return account ? getSigner(provider, account) : provider
}

// account is optional
export const getContract = (address: string, ABI: any, provider: JsonRpcProvider, account?: string): Contract => {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(provider, account) as any)
}

// returns null on errors
export const useContract = <T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null => {
  const { provider, account, chainId } = useWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !provider || !chainId) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
    if (!address) return null
    try {
      return getContract(address, ABI, provider, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, ABI, provider, chainId, withSignerIfPossible, account]) as T
}

export const useContractMethod = ({ abiName, method, params = null }: Omit<ContractMethodProp, 'contract'>) => {
  const _Contract = useContract(contractAddressMap[abiName], ABI_MAP[abiName])
  const _params: ContractMethodProp = {
    contract: _Contract!,
    method,
    params,
    abiName,
  }
  return () => contractMethod(_params)
}

export interface ContractMethodProp {
  contract: Contract
  method: string
  params: any[] | null
  abiName: keyof ContractMethodsMap
  isWait?: boolean
}
/**
 * 用于构造合约接口的方法
 * @param contract contract instance
 * @param method contract method
 * @param params params
 * @param abiName
 * @return Promise
 */
export const contractMethod = ({
  contract,
  method,
  params,
  abiName,
  isWait = false,
}: ContractMethodProp): Promise<any> => {
  if (!contractMethodMap[abiName].includes(method)) throw Error(`Invalid 'method' ${method} `)
  return new Promise((resolve, reject) => {
    const contractPromise = params?.length ? contract[method](...params) : contract[method]()
    contractPromise
      .then(async (result: any) => {
        if (isWait) {
          await result
            .wait()
            .then(() => {
              resolve(result)
            })
            .catch((err: any) => reject(err))
        } else {
          resolve(result)
        }
      })
      .catch((err: any) => reject(err))
  })
}
// 交易回调
// 一般是搭配Message 组件来使用
export const txPromise = (provider: JsonRpcProvider, txHash: string) => {
  return new Promise<void>((resolve, reject) => {
    provider
      .getTransaction(txHash)
      .then(res => {
        res
          .wait()
          .then(txRes => {
            if (txRes.status === 1) {
              resolve()
            } else {
              reject()
            }
          })
          .catch(() => reject())
      })
      .catch(() => reject())
  })
}
