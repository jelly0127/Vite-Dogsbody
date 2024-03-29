import styled from 'styled-components'
import { flexCenter } from '@/style'
import { Button, Dropdown } from 'antd'
import ICON_COPY from '@/images/icon-copy.svg'
import ICON_COPY_LIGHT from '@/images/icon-copy-light.svg'
const WalletWrapper = styled.div`
  width: 260px;
  height: 42px;
  margin-right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(prop: any) => (!prop.theme.isDark ? prop.theme.grey3 : prop.theme.grey8)} !important;
  button {
    border: 1px solid ${(prop: any) => (prop.theme.isDark ? 'none' : prop.theme.grey8)}!important;
  }
`
const InstallStyle = styled(Button)`
  ${flexCenter}
  height: 100%;
  .install_icon {
    width: 100%;
    ${flexCenter}
  }
  img {
    width: 28px;
    height: 28px;
  }
`
const NetworkContent = styled(Button)`
  border: 1px solid ${(prop: any) => (prop.theme.isDark ? 'none' : prop.theme.grey8)}!important;
  background: unset;
`
const WalletContent = styled(Button)`
  flex-direction: row;
  ${flexCenter}
  background: unset;
  border-radius: 20px;
  padding: 5px 10px;
  .user_box {
    flex-direction: row;
    ${flexCenter}
  }
  img {
    border-radius: 50%;
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
`
const WalletBox = styled(Button)`
  width: 100%;
  height: 42px;
  flex-direction: row;
  ${flexCenter}
  padding: 5px 10px;
  margin-top: 20px;
  img {
    height: 32px;
    width: 32px;
  }
  .title {
    width: 100%;
    height: 100%;
    ${flexCenter}
  }
`
const SelectBox = styled.div`
  width: 330px;
  padding: 10px;
  font-size: ${(prop: any) => prop.theme.fontLarge};

  .title_row {
    color: ${(prop: any) => prop.theme.grey2};
  }
  .content {
    ${flexCenter}
    padding: 10px;
    margin: 0;
    margin-top: 20px;
    height: 100%;
    width: 100%;
    border: 0.5px solid ${(prop: any) => prop.theme.grey7};
    border-radius: 10px;

    :hover {
      background: ${(prop: any) => prop.theme.grey7};
      color: ${(prop: any) => prop.theme.grey8};
      border: 0.5px solid ${(prop: any) => prop.theme.primaryColor};
      cursor: pointer;
    }
  }
  .netWork_row {
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    img {
      width: 28px;
      height: 28px;
    }
    .netWork_row_text {
      margin-left: 10px;
    }
  }
  .scan_row {
    height: 100%;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: ${(prop: any) => prop.theme.fontNormal};
    :hover {
      text-decoration: underline;
      color: ${(prop: any) => prop.theme.grey6};
    }
    img {
      width: 12px;
      height: 12px;
    }
  }
`
const MDropdown = styled(Dropdown)`
  button {
    border: 1px solid ${(prop: any) => (prop.theme.isDark ? 'none' : prop.theme.grey8)}!important;
  }
`
const WalletInfoBox = styled.div`
  ${flexCenter}
  .user_img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .user_account {
    margin-right: 10px;
  }
  .user_account_row {
    margin-top: 20px;
    flex-direction: row;
    ${flexCenter}
    img {
      height: 16px;
      width: 16px;
    }
    :hover {
      cursor: pointer;
      text-decoration: underline;
      color: ${(prop: any) => prop.theme.primaryColor};
      img {
        content: url(${ICON_COPY_LIGHT});
      }
    }
  }
  .user_btn_row {
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`
export { InstallStyle, WalletWrapper, NetworkContent, WalletBox, WalletContent, SelectBox, MDropdown, WalletInfoBox }
