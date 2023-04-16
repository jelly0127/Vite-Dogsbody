import { Button, Input, Tooltip, Spin } from 'antd'
import React, { FC, useRef, useState } from 'react'
import BackBar from '../../components/BackBar/BackBar'
import CardBox from '../../components/CardBox/CardBox'
import ICON_WHAT from '../../../images/what-icon.svg'
import ICON_EDIT from '../../../images/edit-icon.svg'
import ICON_PLANE from '../../components/TopBox/imgs/plane.svg'
import ICON_LOOK from './imgs/look.svg'
import { BackBarBox, RootBox } from './TransferStyle'
import toast from '../../../components/Toast/Toast'
import Tables from './table'
import Details from './details'
import { DetailType } from './serve'
import { useImmer } from 'use-immer'
import { useWeb3React } from '@web3-react/core'
import { NETWORK_CONFIG } from '@/web3/chainId'
import { contractMethod, ContractMethodProp, txPromise, useContract } from '@/web3/functions'
import CONFIG from '@/config/index'
import { ABI_MAP } from '@/web3/abi'
import message from '@/components/Message'
import { ethers } from 'ethers'
const { TextArea } = Input

const Transfer: FC = () => {
  const { provider, chainId, account } = useWeb3React()
  const textAreaRef = useRef<HTMLDivElement>(null)
  const [Token, setToken] = useState('')
  const [TokenName, setTokenName] = useState('Binance Chain Native Token')
  const [Key, setKey] = useState('')
  const [Amount, setAmount] = useState('')
  const [ShowAddress, setShowAddress] = useState(false)
  const [WalletList, setWalletList] = useState<any>([])
  const [InputAddressList, setInputAddressList] = useState<any>([])
  const [ShowLoading, setShowLoading] = useState(false)
  const [ShowOrder, setShowOrder] = useState(false)
  const TransferContract = useContract(CONFIG.BSC_TESTNET, ABI_MAP.transferTest)

  const [OrderDetails, setOrderDetails] = useImmer<DetailType>({
    network: 'Binance Smart Chain Testnet',
    addressAmount: Amount,
    token: TokenName,
    transferAmount: (WalletList.length * (Amount ? Number(Amount) : 0)).toString(),
    balanceAmount: '',
    gas: '',
  })

  const handleTransfer = async () => {
    const params: ContractMethodProp = {
      contract: TransferContract!,
      method: 'transferETH',
      params: [
        ['0x3d6f05b597ffb6344fcb8e66130cd0ba92157883', '0x84c940b47cb18c50184594f81d78fff11e6553b2'],
        ethers.utils.parseEther('0.0001'), //每个账号转账的数额
        { value: ethers.utils.parseEther('0.0002') }, //所有账户转账数额的总和
      ],
      abiName: 'transferTest',
    }
    await contractMethod(params)
      .then(result => {
        message({
          messagePromose: new Promise((resolve, reject) => {
            result
              .wait()
              .then(async (res: any) => {
                const { transactionHash } = res
                await txPromise(provider!, transactionHash)
                resolve('success')
              })
              .catch((e: any) => {
                console.log(e)
                reject(e)
              })
          }),
        })
      })
      .catch((err: { reason: any }) => {
        console.log(err)
        toast({ text: err.reason || err, type: 'error' })
      })
  }

  const handleClickCheck = async () => {
    return
  }
  const handleClickDetail = async () => {
    return
  }
  const topBox = () => {
    return (
      <>
        <div className="title_row">
          <div className="line" />
          支持的网络
        </div>
        <div className="chain_box">
          <div className="chain_row"> {chainId && NETWORK_CONFIG[chainId!].chainName}</div>
          {/* <div className='chain_row left'>Mbe Chain</div> */}
        </div>
        <div className="chain_msg">请切换到对应网络使用钱包进行操作</div>

        <div className="address_row">
          <div className="address_row_left">
            <div className="address_row_text">
              <div>发送代币</div>
              <Tooltip title="输入需要发送代币合约，不填默认为当前网络原生币">
                <img src={ICON_WHAT} alt="" />
              </Tooltip>
            </div>
            <div className="address_row_input">
              <Input
                placeholder="输入需要发送代币合约，不填默认为当前网络原生币"
                onChange={(e: any) => {
                  setToken(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="address_row_right">
            <div className="address_row_text">
              <div>单个地址发送量</div>
              <Tooltip title="单个接收钱包的接收数量">
                <img src={ICON_WHAT} alt="" />
              </Tooltip>
            </div>
            <div className="address_row_input">
              <Input
                placeholder="单个接收钱包的接收数量"
                onChange={(e: any) => {
                  setAmount(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
        <div className="address_row_left">
          <div className="address_row_text">
            <div>转出账号的私钥</div>
            <Tooltip title="当前转出账号的私钥">
              <img src={ICON_WHAT} alt="" />
            </Tooltip>
          </div>
          <div className="address_row_input">
            <Input
              placeholder="当前转出账号的私钥"
              onChange={(e: any) => {
                setKey(e.target.value)
              }}
            />
          </div>
        </div>

        <div className="text_row">
          <div className="text_row_box">
            当前批量转账的代币为：
            <span className="text_row_token">{TokenName}</span>
          </div>
          <div className="text_row_box">
            当前单个地址转账的代币数量为：
            <span className="text_row_token">{Amount}</span>
          </div>
        </div>

        <div className="key_row">
          <div className="key_row_text">
            <p>*</p>
            <div className="key_row_red_text">接收代币地址</div>
            {ShowAddress && (
              <div
                className="key_row_address_text"
                onClick={() => {
                  setShowAddress(false)
                  setShowOrder(false)
                }}
              >
                <img src={ICON_EDIT} alt="" />
                编辑地址
              </div>
            )}
          </div>

          <div className="key_row_TextArea">
            {ShowAddress ? (
              <Tables data={WalletList} loading={ShowLoading} Token={Token} />
            ) : (
              <div>
                {ShowLoading ? (
                  <Spin />
                ) : (
                  <TextArea placeholder="多个地址请换行" ref={textAreaRef} defaultValue={InputAddressList} />
                )}
              </div>
            )}
          </div>
        </div>

        <div className="Detail_box">{ShowOrder ? <Details data={OrderDetails} /> : null}</div>
        <div className="btn_row">
          <div className="btn_row_box">
            <Button className="button" onClick={handleClickCheck}>
              <img src={ICON_LOOK} alt="" />
              检查订单
            </Button>
          </div>
          <div className="btn_row_box left">
            <Button className="button" onClick={handleTransfer}>
              <img src={ICON_PLANE} alt="" />
              开始执行
            </Button>
          </div>
        </div>
      </>
    )
  }
  return (
    <RootBox>
      <BackBarBox>
        <BackBar msg={'批量发送代币'} />
        <CardBox>{topBox()}</CardBox>
      </BackBarBox>
    </RootBox>
  )
}
export default Transfer
