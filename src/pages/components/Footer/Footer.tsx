import React, { FC } from 'react'

import ICON_PINKSALE from './imgs/Pinkswap.png'
import ICON_GEMPAD from './imgs/Gempad.svg'
import ICON_TELEGRAM from './imgs/telegram.svg'
import ICON_TWITTER from './imgs/twitter.svg'
import { FootBox, RootBox } from './FooterStyle'
import { AlinkList } from './server'
import LOGO from './imgs/weChat.jpg'

const firstBox = () => {
  return (
    <div className="first_box">
      <div className="title">特别鸣谢</div>
      <div className="img_box">
        <img src={ICON_PINKSALE} alt="" />
        <div>PinkTest</div>
      </div>
      <div className="msg">PinkTest Launchpad</div>

      <div className="img_box_second">
        <img src={ICON_GEMPAD} alt="" />
        <div>TestPAD</div>
      </div>
      <div className="msg">TestPad Launchpad</div>
    </div>
  )
}
const secondBox = () => {
  return (
    <div className="second_box">
      <div className="title">合作社区</div>
      <div className="alink">
        {AlinkList.map(item => {
          return (
            <a href={item.src} key={item.id} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
const thirdBox = () => {
  return (
    <div className="third_box">
      <div className="title">联系我们</div>
      <div className="icon_box">
        <a href="" target="_blank" rel="noreferrer">
          <img src={ICON_TELEGRAM} alt="" />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <img src={ICON_TWITTER} alt="" />
        </a>
      </div>
      <div className="icon_logo">
        <a href="" target="_blank" rel="noreferrer">
          <img src={LOGO} alt="" />
        </a>
      </div>
    </div>
  )
}
const fourthBox = () => {
  return (
    <div className="fourth_box">
      <div className="title">免责声明</div>
      <div className="msg">
        所提供的信息不得以任何方式构成您是否应投资所讨论的任何产品的建议。对于因提供或发布任何材料而采取行动或不采取行动的任何人所遭受的任何损失，我们不承担任何责任。
      </div>
      <div className="line" />
      <div className="msg">
        Copyright 2023 FIFAPP LIMITED
        <br />
        All rights reserved
        <br />
        Version: v1.0.0
      </div>
    </div>
  )
}
const Footer: FC = () => {
  return (
    <RootBox>
      <FootBox>
        {firstBox()}
        {secondBox()}
        {thirdBox()}
        {fourthBox()}
      </FootBox>
    </RootBox>
  )
}
export default Footer
