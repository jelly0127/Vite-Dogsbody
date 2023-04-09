import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}
import { BigNumber, utils } from 'ethers'
import { getAddress } from 'ethers/lib/utils'
import VConsole from 'vconsole'

export const isAddress = (value: any): string | false => {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}
// 获取短地址
export const shortenAddress = (address: string, front = 6, behind = 4) => {
  // const parsed = isAddress(address)
  // if (!parsed) {
  //   throw Error(`Invalid 'address' parameter '${address}'.`)
  // }
  if (!address) {
    return 'account error'
  }
  return `${address.substring(0, front)}...${address.substring(address.length - behind)}`
}

// 10进制转换16进制
export const decimalToHex = (decimal: number) => {
  return `0x${decimal.toString(16)}`
}

export const DESKTOP_WIDTH = 768
export let isDesktop = false
if (typeof document !== 'undefined') {
  if (window.innerWidth >= DESKTOP_WIDTH) {
    isDesktop = true
  }
}
// 用于H5 端调试
// e.g. vConsole.log.log(xxx)
// export const vConsole = isDesktop ? null : new VConsole()

export const jsonToQuery = (json: any) => {
  return Object.keys(json)
    .map((key: any) => {
      return `${key}=${json[key]}`
    })
    .join('&')
}

export const queryToJson = (str: string) => {
  if (!str) {
    return {}
  }
  return str.split('&').reduce((target, next) => {
    const nextArr = next.split('=')
    // eslint-disable-next-line no-param-reassign
    target[nextArr[0]] = nextArr[1] || ''
    return target
  }, {} as Record<string, string>)
}
// ether to wai
export const parseEther = (value: number): BigNumber => {
  return utils.parseEther(String(value))
}
// wai to ether
export const formatEther = (balance: BigNumber | string): number => {
  return Number(utils.formatEther(balance))
}
// limit decimal places
export const toFloor = (num: number, decimal = 4): string => {
  const precision = Math.pow(10, decimal)
  const result = String(Math.floor(Number((num * precision).toFixed(1))) / precision)
  const resArr = String(result).split('.')
  if (resArr[1]) {
    if (resArr[1].length !== decimal) {
      return `${resArr[0]}.${resArr[1].padEnd(decimal, '0')}`
    }
    return result.toString()
  } else {
    return `${resArr[0]}.${''.padEnd(decimal, '0')}`
  }
}

export const getWETH = (WETH?: string) => {
  if (isNaN(Number(WETH))) {
    return ` - WETH `
  }
  const eth = formatEther(WETH || '0')
  const result = toFloor(eth, 5)
  return `${result} WETH`
}

export const getWETHUnit = (WETH?: string) => {
  if (isNaN(Number(WETH))) {
    return ` - WETH `
  }
  return `${WETH} WETH`
}

export const getRate = (rate?: string) => {
  const ratePre = 100
  const result = toFloor(Number(rate) / ratePre, 1)
  return `${result}%`
}

export const getDate = (timestamp: string | number, getWeek?: boolean) => {
  const [week, month, day, year] = new Date(timestamp).toDateString().split(' ')
  if (getWeek) {
    return `${week}, ${day} ${month} ${year}`
  }
  return `${month}.${day},${year}`
}
