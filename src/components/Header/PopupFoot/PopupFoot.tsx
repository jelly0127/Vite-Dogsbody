import React from 'react'
import styled from 'styled-components'
import H5_LOGO from '../images/h5_logo.png'
import 'animate.css'

const RootBox = styled.div`
  position: absolute;
  padding: 10px;
  bottom: 50px;
  color: #ffffff;
  width: 100%;

  .box {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .box_img {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 44px;
    width: 80px;
    img {
      height: 100%;
      width: 44px;
      margin-right: 4px;
    }
  }
  .box_text {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    line-height: 16px;
    .box_text_title {
      font-size: 16px;
    }
    .box_text_init {
      margin-top: 5px;
      font-size: 12px;
    }
  }
`
export default function PopupFoot() {
  return (
    <RootBox>
      <div className="box">
        <div className="box_img">
          <img src={H5_LOGO} alt="" />
          TEST
        </div>
        <div className="box_text animate__animated animate__backInUp">
          <p className="box_text_title">TEST @2023</p>
          <p className="box_text_init">Decentralized platform for smart avatars</p>
        </div>
      </div>
    </RootBox>
  )
}
