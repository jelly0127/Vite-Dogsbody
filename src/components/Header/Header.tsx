import styled from 'styled-components'
import React from 'react'

import { flexCenter } from '../../style'
import H5_LOGO from './images/h5_logo.png'
import { Link } from 'react-router-dom'
import MORE_LOGO from './images/moreform.png'
// import { Popup } from 'antd-mobile'
import { useState } from 'react'
import ItemList from './ItemList/ItemList'
import PopupFoot from './PopupFoot/PopupFoot'
import 'animate.css'
const HeaderWrapper = styled.div`
  width: 100%;
  background: linear-gradient(113.54deg, rgba(103, 58, 194, 1) 2.91%, rgba(122, 74, 221, 1) 25.92%);
`

const H5Logo = styled.img`
  width: auto;
  min-width: 0.88rem;
  height: 40px;
  content: url('https://www.aigirl.shop/assets/images/small-logo.png');
`
const MoreLogo = styled.img`
  width: 28px;
  height: auto;
  content: url(${MORE_LOGO});
`
const RightBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
`
// const IPopup = styled(Popup)`
//   .adm-popup-body {
//     background-color: rgba(103, 58, 194, 1) !important;
//     margin-top: 0.88rem;
//     width: 100%;
//     height: 100%;
//   }
// `
const TextBox = styled.div`
  position: relative;
  height: 100%;
`
const Header: React.FC = () => {
  const [visible4, setVisible4] = useState(false)
  const HeaderContainer = () => {
    return (
      <HeaderWrapper>
        {/* <Link to="/">{<H5Logo />}</Link> */}
        {/* <RightBox>
          <MoreLogo
            onClick={() => {
              setVisible4(!visible4)
            }}
          />
          <Wallet />
        </RightBox> */}
        {/* <IPopup
          visible={visible4}
          closeOnMaskClick
          onMaskClick={() => {
            setVisible4(false)
          }}
          position="right"
        >
          {
            <TextBox className="animate__animated animate__backInRight">
              <ItemList setValue={setVisible4} value={visible4} />
              <PopupFoot />
            </TextBox>
          }
        </IPopup> */}
      </HeaderWrapper>
    )
  }

  return <HeaderContainer />
}

export default Header
