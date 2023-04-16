import styled from 'styled-components'
import { flexCenter } from '../../../style'
const RootBox = styled.div`
  margin-top: 60px;
  height: 100%;
  width: 100%;
  ${flexCenter}
`
const FootBox = styled.div`
  width: 1170px;
  padding: 30px 0;
  flex-direction: row;
  justify-content: space-between;
  .msg {
    margin-top: 10px;
    font-size: 14px;
    /* color: ${(prop: any) => prop.theme.grey3}; */
  }
  .first_box {
    width: calc(100% / 5);
    .img_box {
      margin-top: 20px;
      ${flexCenter}
      display: flex;
      flex-flow: row;
      width: 80px;
      height: 40px;
      border-radius: 5px;
      /* background-color: #fcf6f8; */
      border: 1px solid ${(prop: any) => prop.theme.grey7};
      font-size: ${(prop: any) => prop.theme.fontSmall};
      img {
        width: 12px;
        height: 12px;
        margin-right: 5px;
      }
    }
    .img_box_second {
      margin-top: 20px;
      ${flexCenter}
      display: flex;
      width: 80px;
      height: 40px;
      border-radius: 5px;
      background-color: #000;
      color: ${(prop: any) => prop.theme.grey2};
      font-size: ${(prop: any) => prop.theme.fontSmall};
      img {
        width: 14px;
        height: 14px;
        margin-bottom: 5px;
      }
    }
  }
  .second_box {
    width: calc(100% / 5);
    .alink {
      margin-top: 20px;
      font-size: ${(prop: any) => prop.theme.fontSmall};
      color: #789de1;
      a {
        line-height: 22px;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
  .third_box {
    width: calc(100% / 5);

    .icon_box {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      img {
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
    }
    .icon_logo {
      margin-top: 30px;
      img {
        width: 128px;
        /* height: 38px; */
      }
    }
  }
  .fourth_box {
    color: ${(prop: any) => (prop.theme.isDark ? prop.theme.grey3 : prop.theme.grey8)};

    width: calc((100% / 5) * 2);
    line-height: 22px;
    .line {
      border: 0.5px solid ${(prop: any) => prop.theme.grey3};
      margin-top: 10px;
    }
  }
`
export { RootBox, FootBox }
