import BackBar from '../../components/BackBar/BackBar'
import CardBox from '../../components/CardBox/CardBox'
import React, { FC, useState } from 'react'
import { Radio, InputNumber, RadioChangeEvent, Button } from 'antd'
import copy from 'copy-to-clipboard'
import ExportJsonExcel from 'js-export-excel'
import ICON_COPY from '../../../images/icon-copy-light.svg'
import { BackBarBox, RootBox, TopCardBox } from './CreateWalletStyle'
import toast from '../../../components/Toast/Toast'
import { ethers } from 'ethers'
import { useLoading } from '@/components/Loading'

type WalletProps = {
  address: string | null
  privateKey: string | null
}

const CurrencyOptions = [
  { label: 'BSC', value: 'BSC' },
  { label: 'ETH', value: 'ETH' },
  { label: 'OPTIMISM', value: 'OPTIMISM' },
  { label: 'GOERLI', value: 'GOERLI' },
]

const handleCopyClick = (value: any) => {
  copy(value)
  toast({ text: 'copy success', type: 'success' })
}

const CreateWallet: FC = () => {
  const [Currency, setCurrency] = useState('BSC')
  const [WalletNum, setWalletNum] = useState(0)
  const [WalletDataList, setWalletDataList] = useState([])
  const loading = useLoading()
  const Create = async (num: number) => {
    const walletObj: Array<WalletProps> | any = []
    for (let i = 0; i < num; i++) {
      const wallet = ethers.Wallet.createRandom()
      walletObj.push({ address: '0x' + wallet.address, privateKey: wallet.privateKey })
    }
    return await setWalletDataList(walletObj)
  }
  const handleCreateWallet = async (num: number) => {
    await loading.show()
    setTimeout(async () => {
      await Create(num).finally(() => {
        loading.hide()
      })
    }, 500)
  }
  const handleExportBtnClick = () => {
    if (WalletDataList.length < 1) return
    const data: Array<WalletProps> = WalletDataList //表格内部数据
    const option: any = {}
    const dataTable = []
    if (data) {
      for (const i in data) {
        if (data) {
          const obj = {
            地址: data[i].address,
            私钥: data[i].privateKey,
          }
          dataTable.push(obj)
        }
      }
    }
    option.fileName = 'Tool Wallet' //设置excel名称
    option.datas = [
      {
        sheetData: dataTable,
        sheetName: 'sheet',
        sheetFilter: ['地址', '私钥'],
        sheetHeader: ['地址', '私钥'],
      },
    ]
    const toExcel = new ExportJsonExcel(option)
    toExcel.saveExcel()
  }

  const topCard = () => {
    const onCurrencyChange = ({ target: { value } }: RadioChangeEvent) => {
      setCurrency(value)
    }
    return (
      <TopCardBox>
        <Radio.Group
          options={CurrencyOptions}
          onChange={onCurrencyChange}
          value={Currency}
          optionType="button"
          buttonStyle="solid"
        />
        <div className="text">钱包生成全过程均在本地完成，请妥善保管您的私钥！</div>
        <div className="inputRow">
          <InputNumber className="input" placeholder="请输入生成钱包的数量" max={50} onChange={setWalletNum as any} />
          <div className="btn_box">
            <Button className="btn_box_left" onClick={() => handleCreateWallet(WalletNum)}>
              生成钱包
            </Button>
            <Button className="btn_box_right" onClick={handleExportBtnClick}>
              下载表格
            </Button>
          </div>
        </div>
      </TopCardBox>
    )
  }
  const bottomCard = () => {
    return (
      <div className="bottomCard_box">
        {WalletDataList.map((item: WalletProps, index: number) => {
          return (
            <div className="wallet_box" key={index + new Date().getTime()}>
              <div className="wallet_box_address">
                钱包{index + 1}：{item.address}
                <img src={ICON_COPY} alt="" onClick={() => handleCopyClick(item.address)} />
              </div>
              <div className="wallet_box_key">
                私钥{index + 1}：{item.privateKey}
                <img src={ICON_COPY} alt="" onClick={() => handleCopyClick(item.privateKey)} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <RootBox>
      <BackBarBox>
        <BackBar msg={'批量生成钱包'} />
        <CardBox>{topCard()}</CardBox>
        <div className="bottom_box">
          <div className="top_title">已生成 {WalletDataList.length} 个</div>
          <CardBox height={480}>{bottomCard()}</CardBox>
        </div>
      </BackBarBox>
    </RootBox>
  )
}
export default CreateWallet
