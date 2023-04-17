import styled from 'styled-components'
import { flexCenter } from '../../../style'

const RootBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
`
const BackBarBox = styled.div`
  width: 1170px;
  .bottom_box {
    margin-top: 20px;
    .bottomCard_box {
      position: relative;
      .top_title {
        position: fixed;
      }
    }
  }
  .wallet_box {
    margin-top: 20px;
    padding: 20px;
    /* background-color: #f6fafc; */
    /* color: #1e83bc; */

    font-size: 14px;
    img {
      margin-left: 10px;
      height: 16px;
      width: 16px;
      :hover {
        cursor: pointer;
      }
    }
    .wallet_box_address {
      flex-direction: row;
    }
    .wallet_box_key {
      margin-top: 30px;
      flex-direction: row;
    }
  }
`
const TopCardBox = styled.div`
  .text {
    /* color: ${(prop: any) => prop.theme.grey3}; */
    color: ${(prop: any) => (prop.theme.isDark ? prop.theme.grey3 : prop.theme.grey1)};

    font-size: ${(prop: any) => prop.theme.fontSmall};
    margin-top: 16px;
  }
  .inputRow {
    margin-top: 16px;
    flex-direction: row;
    .input {
      width: 180px;
      color: ${(prop: any) => prop.theme.grey1}!important;
    }
  }
  .btn_box {
    flex-direction: row;
    margin-left: 10px;
    button {
      width: 86px;
      height: 32px;
      border-radius: 5px;
      font-weight: 500;
      font-size: ${(prop: any) => prop.theme.fontSmall};
      ${flexCenter}
      border-color: unset !important;
      background-color: unset !important;
      color: ${(prop: any) => (prop.theme.isDark ? prop.theme.grey3 : prop.theme.grey1)};
    }
    .btn_box_right {
      margin-left: 10px;
    }
  }
`

export { RootBox, BackBarBox, TopCardBox }
