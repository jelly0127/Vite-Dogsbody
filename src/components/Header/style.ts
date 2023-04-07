import { flexCenter } from '@/style'
import styled from 'styled-components'
import ICON_SUN_LIGHT from './images/icon-sun-light.svg'
import ICON_SUN_DARK from './images/icon-sun-dark.svg'
import ICON_MOON_DARK from './images/icon-moon-dark.svg'
import ICON_MOON_LIGHT from './images/icon-moon-light.svg'
import ICON_WALLET_LOGO from '../../assets/react.svg'
import ICON_LOGO from '../../../public/DOG3.svg'
const RootBox = styled.div`
  height: 48px;
  width: 100%;
  padding: 0 20px;
  border: 1px solid ${(prop: any) => prop.theme.grey3};
  color: ${(prop: any) => prop.theme.grey3};
  flex-direction: row;
  justify-content: space-between;
  button {
    ${flexCenter}
    width: 100%;
    height: 100%;
    background-color: unset;
    border: unset;
    color: ${(prop: any) => prop.theme.grey3};
  }
  .logo_box {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 180px;
  }
  .logo_box_a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .right_box_network {
    height: 36px;
    width: 60px;
    background-color: #956fe1;
  }

  .logo_box_text {
    margin-left: 10px;
  }
  .right_box {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    line-height: ${(prop: any) => prop.theme.fontNormal};
    height: 100%;
    width: 360px;
  }
  .right_box_wallet {
    flex-direction: row;
    align-items: center;
    background-color: #956fe1;
    width: 160px;
    height: 36px;
    border-radius: 20px;
    img {
      height: 28px;
      width: 28px;
      margin: 0 10px 0 5px;
    }
  }
  .right_box_Theme {
    height: 28px;
    width: 28px;
  }
`
const Logo = styled.img`
  height: 40px;
  width: 40px;
  content: url(${ICON_LOGO});
`
const WalletLogo = styled.img`
  height: 100%;
  width: 100%;
  content: url(${ICON_WALLET_LOGO});
`
const ThemeLogo = styled.img`
  height: 28px;
  width: 28px;
  content: url(${ICON_SUN_LIGHT});
  :hover {
    content: url(${ICON_SUN_DARK});
  }
`
export { RootBox, ThemeLogo, Logo, WalletLogo }
