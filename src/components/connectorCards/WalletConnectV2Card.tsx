import { URI_AVAILABLE } from '@web3-react/walletconnect-v2'
import { useEffect, useState } from 'react'
import React from 'React'

import { MAINNET_CHAINS } from '@/web3/chains'
import { hooks, walletConnectV2 } from '@/web3/connectors/walletConnectV2'
import { Card } from '../Wallet/Card'

const CHAIN_IDS = Object.keys(MAINNET_CHAINS).map(Number)

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function WalletConnectV2Card() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState<any>(undefined)

  // log URI when available
  useEffect(() => {
    walletConnectV2.events.on(URI_AVAILABLE, (uri: string) => {
      console.log(`uri: ${uri}`)
    })
  }, [])

  // attempt to connect eagerly on mount
  useEffect(() => {
    walletConnectV2.connectEagerly().catch(error => {
      console.debug('Failed to connect eagerly to walletconnect', error)
    })
  }, [])

  return (
    <Card
      connector={walletConnectV2}
      activeChainId={chainId}
      chainIds={CHAIN_IDS}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
    />
  )
}
