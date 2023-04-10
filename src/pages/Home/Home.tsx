import React from 'react'
import { useEffect } from 'react'
import { injected } from '@/web3/constants/wallets'
import { useActiveWeb3React } from '@/hooks/useActiveWeb3React'
import { Button } from 'antd'
// import { UnsupportedChainIdError } from '@web3-react/core'
import { connectorLocalStorageKey } from '@/web3/connectors'

export default function Home() {
  const { account, chainId, activate, deactivate } = useActiveWeb3React()

  const handleConnect = () => {
    activate(injected, undefined, true)
      .then(() => {
        localStorage.setItem(connectorLocalStorageKey, 'injected')
      })
      .catch(error => {
        console.log(error)
        // if (error instanceof UnsupportedChainIdError) {
        //   toast.error('Unsupported ChainId', {
        //     position: toast.POSITION.TOP_LEFT,
        //     theme: 'colored',
        //   })
        // }
      })
  }

  // const getProviderName = () => {
  //   if (connector === injected) {
  //     return 'MetaMask'
  //   } else {
  //     return 'Unknown Provider'
  //   }
  // }
  // useEffect(() => {
  //   handleConnect()
  //   // console.log(666, getProviderName())
  // }, [])

  return <></>
}
