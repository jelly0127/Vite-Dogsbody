import React from 'react'
import { Button } from 'antd'
import { Logo, RootBox, ThemeLogo, WalletLogo } from './style'

const Header = () => {
  return (
    <RootBox>
      <div className="logo_box">
        <a href="/" className="logo_box_a">
          <Logo />
          <span className="logo_box_text">Dogsbody</span>
        </a>
      </div>
      <div className="right_box">
        <Button className="right_box_network">netWork</Button>

        <Button className="right_box_wallet">
          <WalletLogo />
          <span>0x9F0E...552d</span>
        </Button>
        <div className="right_box_Theme">
          <Button className="right_box_button">
            <ThemeLogo />
          </Button>
        </div>
      </div>
    </RootBox>
  )
}
export default Header
