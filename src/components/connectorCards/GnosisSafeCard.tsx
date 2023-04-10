import { useEffect, useState } from 'react'

import { gnosisSafe, hooks } from '@/web3/connectors/gnosisSafe'
import { Card } from '../Wallet/Card'
import React from 'React'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function GnosisSafeCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState<any>(undefined)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void gnosisSafe.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to gnosis safe')
    })
  }, [])

  return (
    <Card
      connector={gnosisSafe}
      activeChainId={chainId}
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
