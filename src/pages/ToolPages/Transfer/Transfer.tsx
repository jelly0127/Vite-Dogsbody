import { Button, Input, Tooltip, Spin } from 'antd'
import React, { FC, useMemo, useRef, useState } from 'react'
import BackBar from '../../components/BackBar/BackBar'
import CardBox from '../../components/CardBox/CardBox'
import ICON_WHAT from '../../../images/what-icon.svg'
import ICON_EDIT from '../../../images/edit-icon.svg'
import ICON_PLANE from '../../components/TopBox/imgs/plane.svg'
import ICON_LOOK from './imgs/look.svg'
import { BackBarBox, RootBox } from './TransferStyle'
import toast from '../../../components/Toast/Toast'
import Tables from './Table/table'
import Details from './Detail/details'
import { DetailType } from './serve'
import { useImmer } from 'use-immer'
import { useWeb3React } from '@web3-react/core'
import { NETWORK_CONFIG } from '@/web3/chainId'
import { contractMethod, ContractMethodProp, txPromise, useContract } from '@/web3/functions'
import CONFIG from '@/config/index'
import { ABI_MAP } from '@/web3/abi'
import message from '@/components/Message'
import { ethers } from 'ethers'
import { getBalance, isAddressValid, getGasCost } from '@/tools'
const { TextArea } = Input

const Transfer: FC = () => {
  const { provider, chainId, account } = useWeb3React()
  const textAreaRef = useRef<any>(null)
  const [Amount, setAmount] = useState('')
  const [ShowAddress, setShowAddress] = useState(false)
  const [WalletList, setWalletList] = useState<any>([])
  const [InputAddressList, setInputAddressList] = useState<any>([])
  const [ShowLoading, setShowLoading] = useState(false)
  const [CheckLoading, setCheckLoading] = useState(false)
  const [SendLoading, setSendLoading] = useState(false)
  const [ShowOrder, setShowOrder] = useState(false)
  const TransferContract = useContract(CONFIG.BSC_TESTNET, ABI_MAP.transferTest)

  const [OrderDetails, setOrderDetails] = useImmer<DetailType>({
    network: NETWORK_CONFIG[chainId!]?.chainName ? NETWORK_CONFIG[chainId!].chainName : '',
    addressAmount: WalletList.length,
    token: NETWORK_CONFIG[chainId!]?.chainName ? NETWORK_CONFIG[chainId!].chainName + ' Token' : '',
    transferAmount: '',
    balanceAmount: '',
    gas: '',
  })
  useMemo(() => {
    setOrderDetails(draft => {
      draft.addressAmount = WalletList.length
      draft.transferAmount = (WalletList.length * (Amount ? Number(Amount) : 0)).toString()
    })
  }, [Amount, WalletList, setOrderDetails])

  const handleTransfer = async () => {
    const set = new Set(
      InputAddressList.split('\n').filter((i: string) => {
        return i
      })
    )
    const addressList = Array.from(set) as [string]
    if (!Amount) {
      return toast({ text: 'Input amounts please', type: 'error' })
    }
    if (WalletList.length < 1) {
      return toast({ text: 'Input address please', type: 'error' })
    }
    if (Number(OrderDetails.transferAmount) + Number(OrderDetails.gas) > Number(OrderDetails.balanceAmount)) {
      return toast({ text: 'Insufficient account balance', type: 'error' })
    }
    setSendLoading(true)
    const params: ContractMethodProp = {
      contract: TransferContract!,
      method: 'transferETH',
      params: [
        addressList,
        ethers.utils.parseEther(Amount.toString()), //每个账号转账的数额
        {
          value: ethers.utils.parseEther(OrderDetails.transferAmount.toString()),
        }, //所有账户转账数额的总和
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
                setSendLoading(false)
                reject(e)
              })
              .finally(() => {
                setSendLoading(false)
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
    const textAreaData = textAreaRef!.current!.resizableTextArea.textArea.value
    const set = new Set(
      textAreaData.split('\n').filter((i: string) => {
        return i
      })
    )
    const addressList = Array.from(set) as [string]
    const dataArray: any = []
    setInputAddressList(textAreaData)
    if (addressList.length < 1) return
    setShowLoading(true)
    for (const item of addressList) {
      if (await !isAddressValid(item)) {
        toast({ text: `${item} \n is invalid`, type: 'error' })
      } else {
        dataArray.push({
          key: item,
          wallet: item,
          balance: await getBalance(item, provider!),
        })
      }
    }
    setWalletList(dataArray)
    setShowLoading(false)

    return setShowAddress(true)
  }
  const handleClickDetail = async () => {
    setCheckLoading(true)
    await getBalance(account!, provider!)
      .then(res => {
        setOrderDetails(draft => {
          draft.balanceAmount = res
        })
      })
      .catch(err => {
        console.log(err)
      })
    await getGasCost(account as string, WalletList, Amount, provider!)
      .then((res: any) => {
        setOrderDetails(draft => {
          draft.gas = res
        })
      })
      .catch(err => {
        console.log(err)
      })
    setCheckLoading(false)
    setShowOrder(true)
  }
  const chainBox = () => {
    return (
      <div className="chain_box">
        <div className="chain_row">
          {chainId && NETWORK_CONFIG[chainId!]?.chainName ? NETWORK_CONFIG[chainId!]?.chainName : 'wrong Network'}
        </div>
      </div>
    )
  }
  const addressBox = () => {
    return (
      <div className="address_row">
        {/* <div className="address_row_left">
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
          </div> */}
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
    )
  }
  const topBox = () => {
    return (
      <>
        <div className="title_row">
          <div className="line" />
          支持的网络
        </div>
        {chainBox()}
        <div className="chain_msg">请切换到对应网络使用钱包进行操作</div>
        {addressBox()}
        <div className="text_row">
          <div className="text_row_box">
            当前批量转账的代币为：
            <span className="text_row_token">{NETWORK_CONFIG[chainId!]?.chainName} Token</span>
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
              <Tables data={WalletList} loading={ShowLoading} />
            ) : (
              <div>
                {ShowLoading ? (
                  <Spin />
                ) : (
                  <TextArea
                    placeholder="多个地址请换行"
                    onBlur={handleClickCheck}
                    ref={textAreaRef}
                    defaultValue={InputAddressList}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        <div className="Detail_box">{ShowOrder && <Details data={OrderDetails} />}</div>
        <div className="btn_row">
          <div className="btn_row_box">
            <Button className="button" onClick={handleClickDetail} loading={CheckLoading}>
              <img src={ICON_LOOK} alt="" />
              检查订单
            </Button>
          </div>
          <div className="btn_row_box left">
            <Button className="button" onClick={handleTransfer} loading={SendLoading}>
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
