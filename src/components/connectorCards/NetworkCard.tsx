import { useEffect, useState } from 'react'
import React from 'React'

import { URLS } from '@/web3/chains'
import { hooks, network } from '@/web3/connectors/network'
import { Card } from '../Wallet/Card'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

const CHAIN_IDS = Object.keys(URLS).map(Number)

export default function NetworkCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState<any>(undefined)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void network.activate().catch(() => {
      console.debug('Failed to connect to network')
    })
  }, [])

  return (
    <Card
      connector={network}
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
