import WalletIcon from './imgs/wallet_icon.svg'
import TransferIcon from './imgs/transfer_icon.svg'
import LuckyIcon from './imgs/lucky-icon.svg'
import CollectionIcon from './imgs/collection-icon.svg'
import BuyIcon from './imgs/buying.svg'
import SellIcon from './imgs/sell.svg'
interface CardData {
  title: string
  msg: string
  icon: string
  path: string
  disable: boolean
}
const CardList: Array<CardData> = [
  {
    title: '创建钱包',
    msg: '批量生成钱包',
    icon: WalletIcon,
    path: '/wallet',
    disable: false,
  },
  {
    title: '批量转账',
    msg: '一对多快速转账',
    icon: TransferIcon,
    path: '/transfer',
    disable: false,
  },
  {
    title: '靓号生成',
    msg: '生成靓号钱包',
    icon: LuckyIcon,
    path: '/address',
    disable: false,
  },
  {
    title: '批量买',
    msg: '一键批量买入',
    icon: BuyIcon,
    path: '/buy',
    disable: true,
  },
  {
    title: '批量卖',
    msg: '一键批量卖出',
    icon: SellIcon,
    path: '/sell',
    disable: true,
  },

  {
    title: '批量归集',
    msg: '归集Token',
    icon: CollectionIcon,
    path: '/collection',
    disable: true,
  },

  // {
  // title: '智能抢币',
  // msg: '更多智能的抢币服务',
  // icon: MetamaskIcon,
  // path:''
  // },

  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  //   },
  //   {
  //   title: '智能抢币',
  //   msg: '更多智能的抢币服务',
  //   icon: MetamaskIcon,
  //   path:''
  // },
]
export { CardList }
