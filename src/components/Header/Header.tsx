import React, { useContext } from 'react'
import { Button } from 'antd'
import { Logo, RootBox, ThemeLogo, WalletLogo } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { updateDark } from '../../redux/reducer'
import { shortenAddress } from '@/utils'
import { useActiveWeb3React } from '@/hooks/useActiveWeb3React'
import Wallet from '../Wallet'
import { MyContext } from '../../MyContext'

const Header = () => {
  const { account } = useActiveWeb3React()
  const { IsWalletModal, setIsWalletModal } = useContext(MyContext)

  const dispatch = useDispatch()
  const isDark = useSelector((state: { init: { isDark: boolean } }) => state.init.isDark)
  return (
    <RootBox>
      <div className="logo_box">
        <a href="/" className="logo_box_a">
          <Logo />
          <span className="logo_box_text">Dogsbody</span>
        </a>
      </div>
      <div className="right_box">
        {/* <NetworkSelector /> */}
        {/* <Button className="right_box_network">netWork</Button> */}

        {/* <Button className="right_box_wallet" onClick={() => setIsWalletModal(true)}>
          <WalletLogo />
          <span>{shortenAddress(account as string)}</span>
        </Button> */}
        <div className="wallet_box">
          <Wallet />
        </div>
        <div className="right_box_Theme">
          <Button className="right_box_button" onClick={() => dispatch(updateDark(!isDark))}>
            <ThemeLogo />
          </Button>
        </div>
      </div>
    </RootBox>
  )
}
export default Header
