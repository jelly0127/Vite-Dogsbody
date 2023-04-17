import ICON_WALLET_LOGO from '@/images/jelly.jpg'
import ICON_LINK from '@/images/link.svg'
import ICON_COPY from '@/images/icon-copy.svg'
import React, { FC, useCallback, useMemo, useState } from 'react'
import { Button, theme } from 'antd'
import ModalBox from '../Modal/Modal'

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
import { useWeb3React } from '@web3-react/core'
import { SUPPORTED_WALLETS } from '@/web3/wallet'
import { shortenAddress } from '@/tools'
import { NETWORK_CONFIG } from '@/web3/chainId'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { updateSelectedWallet } from '@/redux/reducer'
import { useLoading } from '../Loading'
import {
  getConnection,
  getHasMetaMaskExtensionInstalled,
  tryActivateConnector,
  tryDeactivateConnector,
  ConnectionType,
  switchNetwork,
} from '@/web3/connections'
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
  const hasMetaMaskExtension = getHasMetaMaskExtensionInstalled()
  const [IsWalletModal, setIsWalletModal] = useState(false)
  const [IsNetWorkModal, setNetWorkModal] = useState(false)
  const [IsWalletInfo, setIsWalletInfo] = useState(false)
  const [networkName, setNetworkName] = useState('')
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(null)
  const { account, isActive, chainId } = useWeb3React()
  const dispatch = useAppDispatch()
  const selectWallet = useAppSelector(state => state.app.selectedWallet)
  const loading = useLoading()
  const clipboard = useClipboard()

  const handleCopy = (value: string) => {
    if (clipboard.isSupported()) {
      clipboard.copy(value)
      toast({ text: 'copy success!' })
    }
  }
  const handleConnect = useCallback(
    async (Connector: ConnectionType) => {
      setIsWalletModal(false)
      await handleDisConnect(connectionType!)
      await tryActivateConnector(getConnection(Connector).connector)
      await dispatch(updateSelectedWallet({ wallet: Connector }))
      setConnectionType(Connector)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  )
  const handleDisConnect = async (Connector: ConnectionType) => {
    if (!Connector) {
      return
    }
    await dispatch(updateSelectedWallet({ wallet: 'undefined' }))
    await tryDeactivateConnector(getConnection(Connector).connector)
    setIsWalletInfo(false)
    setConnectionType(null)
  }
  useMemo(() => {
    if ((selectWallet as any) !== ('undefined' as any) && hasMetaMaskExtension) {
      handleConnect(selectWallet!)
    }

    if (chainId) {
      setNetworkName(NETWORK_CONFIG[chainId!]?.chainName ? NETWORK_CONFIG[chainId!]?.chainName : '')
    }
  }, [selectWallet, chainId, hasMetaMaskExtension, handleConnect])
  const handleSwitchNetwork = async (chainId: string) => {
    if (!account) {
      await handleShowNetwork()
      return setIsWalletModal(true)
    }
    loading.show()
    await handleShowNetwork()
    await switchNetwork(parseInt(chainId), connectionType)
      .then(() => {
        toast({ text: 'switchNetwork success!' })
      })
      .catch(err => {
        toast({ text: `${err.message || 'switchNetwork fail!'}`, type: 'error' })
      })
      .finally(() => {
        loading.hide()
      })
  }
  const handleShowNetwork = () => {
    setNetWorkModal(IsNetWorkModal => !IsNetWorkModal)
  }
  const handleShowWallet = () => {
    if (account && isActive) {
      return setIsWalletInfo(true)
    } else {
      setIsWalletModal(true)
    }
  }

  const getSupportedWallet = () => {
    return Object.keys(SUPPORTED_WALLETS).map(key => {
      const option = SUPPORTED_WALLETS[key]
      if (!hasMetaMaskExtension) {
        if (option.name === 'MetaMask') {
          return (
            <InstallStyle key={key}>
              <a className="install" href="https://metamask.io/" target="_blank" rel="noreferrer">
                <div className="install_label">
                  <div className="install_icon">
                    <img src={option.iconName} />
                  </div>
                  <span>Install MetaMask</span>
                </div>
              </a>
            </InstallStyle>
          )
        }
      }

      return (
        <WalletBox
          key={key}
          onClick={() => handleConnect(option.Wallet)}
          // style={{ backgroundColor: `${connectionType == option.Wallet ? '#f6dce6' : null}`, color: '#000' }}
          type={connectionType == option.Wallet ? 'primary' : 'default'}
        >
          <img src={option.iconName} alt="" />
          <span className="title">{option.name}</span>
        </WalletBox>
      )
    })
  }
  const getNetWorkOptions = () => {
    return (
      <SelectBox>
        <span className="title_row">Select a network</span>
        {Object.keys(NETWORK_CONFIG).map(chainId => (
          <div
            className={networkName !== NETWORK_CONFIG[parseInt(chainId)]?.chainName ? 'content' : 'content current'}
            key={chainId}
            onClick={() => {
              networkName !== NETWORK_CONFIG[parseInt(chainId)]?.chainName && handleSwitchNetwork(chainId)
            }}
          >
            <div className="netWork_row">
              <img src={NETWORK_CONFIG[parseInt(chainId)].logo} alt="" />
              <span className="netWork_row_text">{NETWORK_CONFIG[parseInt(chainId)].chainName}</span>
              {networkName === NETWORK_CONFIG[parseInt(chainId)]?.chainName && <div className="netWork_row_status" />}
            </div>
            {networkName === NETWORK_CONFIG[parseInt(chainId)]?.chainName && (
              <div className="scan_row">
                <a
                  href={NETWORK_CONFIG[parseInt(chainId)].explorer + 'address/' + `${account}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{NETWORK_CONFIG[parseInt(chainId)]?.chainName} etherscan</span>
                  <img src={ICON_LINK} alt="" />
                </a>
              </div>
            )}
          </div>
        ))}
      </SelectBox>
    )
  }
  const getWalletInfo = () => {
    return (
      <WalletInfoBox>
        <img src={ICON_WALLET_LOGO} alt="" className="user_img" />
        <div className="user_account_row" onClick={() => handleCopy(account!)}>
          {account && isActive && (
            <>
              <span className="user_account">{shortenAddress(account!)}</span>
              <img src={ICON_COPY} alt="" />
            </>
          )}
        </div>
        <div className="user_btn_row">
          <Button
            onClick={() => {
              setIsWalletInfo(false)
              setIsWalletModal(true)
            }}
          >
            Change
          </Button>
          <Button onClick={() => handleDisConnect(connectionType!)}>Disconnect</Button>
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
        <NetworkContent onClick={(e: any) => e.preventDefault()}>
          {chainId && NETWORK_CONFIG[chainId!]?.chainName ? (
            NETWORK_CONFIG[chainId!]?.chainName
          ) : (
            <div className="wrong"> wrong Network</div>
          )}
        </NetworkContent>
      </MDropdown>
      <WalletContent onClick={handleShowWallet}>
        {account && isActive ? (
          <div className="user_box">
            <img src={ICON_WALLET_LOGO} alt="" />
            <span>{shortenAddress(account!)}</span>
          </div>
        ) : (
          'Connect Wallet'
        )}
      </WalletContent>
      <ModalBox
        title={'Connect a Wallet'}
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
