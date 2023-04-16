import React, { FC } from 'react'

import ICON_PLANE from './imgs/plane.svg'
import ICON_LIST from './imgs/list.svg'
import { RootBox } from './TopBoxStyle'

type TopBoxProps = {
  telegramSrc: ''
  learnSrc: ''
}
const TopBox: FC<TopBoxProps> = ({ telegramSrc, learnSrc }) => {
  return (
    <RootBox>
      <div className="content_box">
        <div className="text_box">
          <div className="text_box_title">更智能的区块链科技</div>

          <div className="btn_box">
            <a href={telegramSrc} target="_blank" rel="noreferrer">
              <button className="btn_box_left">
                <img src={ICON_PLANE} alt="" className="btn_box_left_icon" />
                加入电报
              </button>
            </a>
            <a href={learnSrc} target="_blank" rel="noreferrer">
              <button className="btn_box_right">
                <img src={ICON_LIST} alt="" className="btn_box_right_icon" />
                新手教程
              </button>
            </a>
          </div>
        </div>

        {/* <div className='img_box'>
          <img src={ICON_CAT} alt="" />
      </div> */}
      </div>
    </RootBox>
  )
}
export default TopBox
