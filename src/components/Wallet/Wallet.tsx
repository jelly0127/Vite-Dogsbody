import { useActiveWeb3React } from '@/hooks/useActiveWeb3React'
import { SUPPORTED_WALLETS } from '@/web3/constants/wallets'
import { injected } from '@/web3/constants/wallets'
import ICON_MATEMASK from '@/images/wallet-metamask.png'
import ICON_WALLET_LOGO from '@/images/jelly.jpg'
import ICON_BSC from '@/images/bsc-logo.png'
import ICON_LINK from '@/images/link.svg'
import ICON_COPY from '@/images/icon-copy.svg'
import React, { FC, useState } from 'react'
import { Button, theme } from 'antd'
import ModalBox from '../Modal/Modal'

import { shortenAddress } from '@/utils'
import {
  NetworkContent,
  WalletBox,
  WalletContent,
  WalletWrapper,
  SelectBox,
  MDropdown,
  WalletInfoBox,
} from './WalletStyle'
import { useClipboard } from 'use-clipboard-copy'
const { useToken } = theme

// const getOptions = () => {
//   const isMetaMask = !!window.ethereum?.isMetaMask
//   const isCoinbaseWallet = !!window.ethereum?.isCoinbaseWallet
//   return Object.keys(SUPPORTED_WALLETS).map((key, index) => {
//     console.log('key', key)

//     const option = SUPPORTED_WALLETS[key]
// if (option.getProviderName()) {
// console.log('option.connector', option.name['MetaMask' as any])
// }
//   })
// }
const dropdownStyle = {
  // width: '300px',
}
const Wallet: FC = () => {
  const { token } = useToken()
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
    padding: '10px',
  }
  const [IsWalletModal, setIsWalletModal] = useState(false)
  const [IsNetWorkModal, setNetWorkModal] = useState(false)
  const [IsWalletInfo, setIsWalletInfo] = useState(false)
  const { account, deactivate, activate } = useActiveWeb3React()
  const clipboard = useClipboard()
  const handleCopy = (value: string) => {
    if (clipboard.isSupported()) {
      clipboard.copy(value)
    }
  }

  const getSupportedWallet = () => {
    return (
      <WalletBox onClick={() => setIsWalletInfo(true)}>
        <img src={ICON_MATEMASK} alt="" />
        <span className="title">MetaMask</span>
      </WalletBox>
    )
  }
  const getNetWorkOptions = () => {
    return (
      <SelectBox>
        <span className="title_row">Select a network</span>
        <div className="content">
          <div className="netWork_row">
            <img src={ICON_BSC} alt="" />
            <span className="netWork_row_text">BSC_Testnet</span>
          </div>
          <div className="scan_row">
            <span>BSC_Testnet etherscan</span>
            <a href="">
              <img src={ICON_LINK} alt="" />
            </a>
          </div>
        </div>
      </SelectBox>
    )
  }
  const getWalletInfo = () => {
    return (
      <WalletInfoBox>
        <img src={ICON_WALLET_LOGO} alt="" className="user_img" />
        <div className="user_account_row" onClick={() => handleCopy(account!)}>
          <span className="user_account">{shortenAddress(account as string)}</span>
          <img src={ICON_COPY} alt="" />
        </div>
        <div className="user_btn_row">
          <Button>Change</Button>
          <Button onClick={deactivate}>Disconnect</Button>
        </div>
      </WalletInfoBox>
    )
  }
  return (
    <WalletWrapper>
      <MDropdown
        trigger={['click']}
        dropdownRender={() => <div style={{ ...contentStyle, ...dropdownStyle }}>{getNetWorkOptions()}</div>}
      >
        <NetworkContent onClick={(e: any) => e.preventDefault()}>network</NetworkContent>
      </MDropdown>
      <WalletContent onClick={() => setIsWalletModal(true)}>
        <img src={ICON_WALLET_LOGO} alt="" />
        <span>{account && shortenAddress(account)}</span>
      </WalletContent>
      <ModalBox
        title={'connect a wallet'}
        isModalOpen={IsWalletModal}
        setIsModalOpen={() => setIsWalletModal(false)}
        child={getSupportedWallet()}
      />
      <ModalBox
        width={400}
        isModalOpen={IsWalletInfo}
        setIsModalOpen={() => setIsWalletInfo(false)}
        child={getWalletInfo()}
      />
    </WalletWrapper>
  )
}
export default Wallet
