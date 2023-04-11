import ICON_WALLET_LOGO from '@/images/jelly.jpg'
import ICON_BSC from '@/images/bsc-logo.png'
import ICON_LINK from '@/images/link.svg'
import ICON_COPY from '@/images/icon-copy.svg'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { Button, theme } from 'antd'
import ModalBox from '../Modal/Modal'

import { shortenAddress } from '@/tools/utils'
import {
  NetworkContent,
  WalletBox,
  WalletContent,
  WalletWrapper,
  SelectBox,
  MDropdown,
  WalletInfoBox,
  InstallStyle,
} from './WalletStyle'
import { useClipboard } from 'use-clipboard-copy'
import toast from '../Toast/Toast'

const { useToken } = theme

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
  const clipboard = useClipboard()
  const account = '111'
  const handleCopy = (value: string) => {
    if (clipboard.isSupported()) {
      clipboard.copy(value)
      toast({ text: 'copy success!' })
    }
  }
  // const handleConnect = useCallback((connector: any) => {
  //   activate(connector, undefined, true)
  //     .then(() => {
  //       setIsWalletModal(false)
  //       localStorage.setItem(connectorLocalStorageKey, 'injected')
  //     })
  //     .catch((error: any) => {
  //       // switch (true) {
  //       //   case error instanceof UnsupportedChainIdError:
  //       //     toast({
  //       //       text: 'Unsupported ChainId',
  //       //       type: 'error',
  //       //     })
  //       //     break
  //       //   case error instanceof NoEthereumProviderError:
  //       //     toast({
  //       //       text: 'Unsupported Network',
  //       //       type: 'error',
  //       //     })
  //       //     break
  //       //   // eslint-disable-next-line no-undef
  //       //   case error instanceof UserRejectedRequestError:
  //       //     toast({
  //       //       text: 'User rejected the request',
  //       //       type: 'error',
  //       //     })
  //       //     break
  //       //   default:
  //       //     console.log(error)
  //       // }
  //     })
  // }, [])
  // useEffect(() => {
  //   handleConnect(injected)
  // }, [])
  const handleShowNetwork = () => {
    setNetWorkModal(IsNetWorkModal => !IsNetWorkModal)
  }
  const handleShowWallet = () => {
    if (account) {
      return setIsWalletInfo(true)
    } else {
      setIsWalletModal(true)
    }
  }
  const handleDisConnect = () => {
    // if (active) {
    //   deactivate()
    return setIsWalletInfo(false)
    // }
  }
  const getSupportedWallet = () => {
    const isMetaMask = !!window.ethereum?.isMetaMask
    // return Object.keys(SUPPORTED_WALLETS).map((key, index) => {
    //   const option = SUPPORTED_WALLETS[key]
    //   if (option.connector === injected) {
    //     if (!(window.web3 || window.ethereum)) {
    //       if (option.name === 'MetaMask') {
    // return (
    //   <InstallStyle>
    //     <a className="install" href="https://metamask.io/" target="_blank" rel="noreferrer">
    //       <div className="install_label">
    //         <span>Install MetaMask</span>
    //         <div className="install_icon">
    //           <img src={} />
    //         </div>
    //       </div>
    //     </a>
    //   </InstallStyle>
    // )
    //   } else {
    //     return null // dont want to return install twice
    //   }
    // } // don't return metamask if injected provider isn't metamask
    // else if (option.name === 'MetaMask' && !isMetaMask) {
    //   return null
    // }
    // // likewise for generic
    // else if (option.name === 'Injected' && isMetaMask) {
    //   return null
    // }
    // }
    return (
      <WalletBox>
        <img src={''} alt="" />
        <span className="title">test</span>
      </WalletBox>
    )
    // })
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
        <div className="user_account_row" onClick={() => handleCopy(account)}>
          <span className="user_account">{1111}</span>
          <img src={ICON_COPY} alt="" />
        </div>
        <div className="user_btn_row">
          <Button>Change</Button>
          <Button>Disconnect</Button>
        </div>
      </WalletInfoBox>
    )
  }

  return (
    <WalletWrapper>
      <MDropdown
        open={IsNetWorkModal}
        trigger={['click']}
        onOpenChange={handleShowNetwork}
        dropdownRender={() => <div style={{ ...contentStyle, ...dropdownStyle }}>{getNetWorkOptions()}</div>}
      >
        <NetworkContent onClick={(e: any) => e.preventDefault()}>network</NetworkContent>
      </MDropdown>
      <WalletContent onClick={handleShowWallet}>
        {account ? (
          <div className="user_box">
            <img src={ICON_WALLET_LOGO} alt="" />
            <span>{account && shortenAddress(account)}</span>
          </div>
        ) : (
          'Connect Wallet'
        )}
      </WalletContent>
      <ModalBox
        title={'connect a wallet'}
        isModalOpen={IsWalletModal}
        setIsModalOpen={() => setIsWalletModal(false)}
        child={<>{getSupportedWallet()}</>}
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
