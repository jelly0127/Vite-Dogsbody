import React, { FC } from 'react'

import { RightOutlined } from '@ant-design/icons'
import { CardBox } from './CardStyle'
import toast from '../../../components/Toast/Toast'

type CardProps = {
  icon?: string
  title: string
  msg: string
  path: string
  disable: boolean
}
const Card: FC<CardProps> = ({ icon, title, msg, path, disable }) => {
  const isDisable = () => {
    if (disable) {
      return (
        <div className="disable_box">
          <div className="img_box">
            {icon ? <img src={icon} alt="" /> : null}
            <div className="text_box">
              <div className="text_box_top">{title}</div>
              {msg ? <div className="text_box_bottom">{msg}</div> : null}
            </div>
          </div>
          <div className="right_logo">
            <RightOutlined />
          </div>
        </div>
      )
    } else {
      return (
        <a href={path}>
          <div className="img_box">
            {icon ? <img src={icon} alt="" /> : null}
            <div className="text_box">
              <div className="text_box_top">{title}</div>
              {msg ? <div className="text_box_bottom">{msg}</div> : null}
            </div>
          </div>
          <div className="right_logo">
            <RightOutlined />
          </div>
        </a>
      )
    }
  }
  return (
    <CardBox
      onClick={() => {
        disable && toast({ text: '开发中，敬请期待...', type: 'warning' })
      }}
    >
      {isDisable()}
    </CardBox>
  )
}
export default Card
