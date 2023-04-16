import { toast as RMessage } from 'react-toastify'
import styled from 'styled-components'
import { MESSAGE_CONTAINER_ID } from './MessageContainer'
import SUCCESSION from './images/success.png'
import ERRORICON from './images/error.png'
import { flexRow } from '../../style'
import React from 'react'
// 主要用于交易行为的交互状态

const SuccessContent = styled.div`
  ${flexRow};
  justify-content: center;
  align-items: center;
  img {
    height: 22px;
    width: 28px;
    margin-right: 11px;
  }
`

const ErroeContent = styled.div`
  ${flexRow};
  justify-content: center;
  align-items: center;
  img {
    height: 22px;
    width: 22px;
    margin-right: 11px;
  }
`

interface Message {
  messagePromose: Promise<any> | (() => Promise<any>)
}
const message = ({ messagePromose }: Message) => {
  return RMessage.promise(
    messagePromose,
    {
      pending: 'Transaction Processing',
      success: {
        render() {
          return (
            <SuccessContent>
              <img src={SUCCESSION} />
              Success
            </SuccessContent>
          )
        },
      },
      error: {
        render() {
          return (
            <ErroeContent>
              <img src={ERRORICON} />
              Transaction Error
            </ErroeContent>
          )
        },
      },
    },
    {
      containerId: MESSAGE_CONTAINER_ID,
    }
  )
}

export default message
