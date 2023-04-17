import styled from 'styled-components'
import { flexCenter, jellyAnimation } from '../../../style'
const RootBox = styled.div`
  height: 260px;
  width: 100%;
  ${flexCenter}
  .content_box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
  .text_box {
    height: 100px;
    width: auto;
    display: flex;
    justify-content: center;
    .text_box_title {
      font-weight: 900;
      /* font-size: ${(prop: any) => prop.theme.fontLargest}; */
      font-size: 28px;
    }
    .btn_box {
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      ${flexCenter}
      .btn_box_left {
      }
      .btn_box_right {
        margin-left: 20px;
      }
      .btn_box_left_icon {
        height: 12px;
        width: 12px;
        margin-right: 5px;
      }
      .btn_box_right_icon {
        height: 12px;
        width: 12px;
        margin-right: 5px;
      }
      button {
        width: 86px;
        height: 32px;
        border-radius: 5px;
        border: 0.5px solid ${(prop: any) => (!prop.theme.isDark ? prop.theme.grey2 : prop.theme.grey3)};

        font-weight: 500;
        font-size: ${(prop: any) => prop.theme.fontSmall};
        ${flexCenter}
        flex-direction: row;

        :hover {
          cursor: pointer;
          animation: ${jellyAnimation} 0.5s;
        }
      }
    }
  }
  .img_box {
    /* width: 500px; */
  }
`
export { RootBox }
