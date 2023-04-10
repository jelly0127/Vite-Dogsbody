import { useEffect, useState } from 'react'
import React from 'React'
import { coinbaseWallet, hooks } from '@/web3/connectors/coinbaseWallet'
import { Card } from '../Wallet/Card'

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function CoinbaseWalletCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState<any>(undefined)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void coinbaseWallet.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to coinbase wallet')
    })
  }, [])

  return (
    <Card
      connector={coinbaseWallet}
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
