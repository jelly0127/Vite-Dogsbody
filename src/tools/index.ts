import { BigNumber, ethers, utils } from 'ethers'
import { getAddress } from 'ethers/lib/utils'
// import VConsole from 'vconsole'

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
    return null
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

// 检测钱包地址是否有效
export const isAddressValid = (address: string) => {
  return utils.isAddress(address)
}
// 查看钱包余额
export const getBalance = async (address: string, provider: ethers.providers.Web3Provider) => {
  const balance = await provider!.getBalance(address)
  return ethers.utils.formatEther(balance)
}
//转账的 gas 费用
export const getGasCost = async (from: string, to: [any], value: string, provider: ethers.providers.Web3Provider) => {
  let gas = 0
  for (let i = 0; i < to.length; i++) {
    const gasPrice = await provider!.getGasPrice()
    const estimateGas = await provider!.estimateGas({
      from,
      to: to[i].wallet,
      value: ethers.utils.parseEther(value),
    })
    return (gas += Number(ethers.utils.formatEther(gasPrice.mul(estimateGas))))
  }
}
