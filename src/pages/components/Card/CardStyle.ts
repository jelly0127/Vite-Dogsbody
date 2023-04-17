import styled from 'styled-components'
import { Button } from 'antd'
import { flexCenter, jellyAnimation } from '@/style'

const CardBox = styled(Button)`
  ${flexCenter}
  :hover {
    animation: ${jellyAnimation} 0.5s;
  }
  color: ${(prop: any) => prop.theme.grey1};

  max-width: 300px;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background-color: ${(prop: any) => (prop.theme.isDark ? '#f9f9f9 ' : 'none')};
  border: 1px solid ${(prop: any) => (!prop.theme.isDark ? prop.theme.grey2 : 'none')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .img_box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
    .text_box {
      align-items: flex-start;
      .text_box_top {
        color: ${(prop: any) => prop.theme.grey1};
        font-size: ${(prop: any) => prop.theme.fontNormal};
      }
      .text_box_bottom {
        color: ${(prop: any) => prop.theme.grey2};
        font-size: ${(prop: any) => prop.theme.fontSmall};
      }
    }
  }
  .right_logo {
    color: ${(prop: any) => prop.theme.grey1};
  }
  .disable_box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`
export { CardBox }
