import React, { FC } from 'react'
import MetaMaskCard from '@/components/connectorCards/MetaMaskCard'

const Home: FC = () => {
  return (
    <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
      <MetaMaskCard />
      {/* <NetworkCard /> */}
      {/* <WalletConnectV2Card />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <GnosisSafeCard /> */}
    </div>
  )
}
export default Home
