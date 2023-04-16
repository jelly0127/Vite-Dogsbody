/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import { RouteObject } from 'react-router-dom'

//懒加载
const Main = React.lazy(() => import('../pages/Main/Main'))
const Home = React.lazy(() => import('../pages/Home/Home'))
const History = React.lazy(() => import('../pages/History/History'))
const CreateWallet = React.lazy(() => import('../pages/ToolPages/CreateWallet/CreateWallet'))
const LuckyWallet = React.lazy(() => import('../pages/ToolPages/LuckyWallet/LuckyWallet'))
const Transfer = React.lazy(() => import('../pages/ToolPages/Transfer/Transfer'))
const Test = React.lazy(() => import('../pages/Test/Test'))
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'))
//懒加载格式定义
const lazyFactory = (LazyComponent: React.LazyExoticComponent<React.FC<{}>>) => {
  return (
    <React.Suspense fallback={null}>
      <LazyComponent />
    </React.Suspense>
  )
}
//使用定义的懒加载

//路由路径的基本配置
export const routes: RouteObject[] = [
  { path: '/', element: lazyFactory(Home) },
  { path: '/test', element: lazyFactory(Test) },
  { path: '/main', element: lazyFactory(Main) },
  { path: '/history', element: lazyFactory(History) },
  { path: '/wallet', element: lazyFactory(CreateWallet) },
  { path: '/address', element: lazyFactory(LuckyWallet) },
  { path: '/transfer', element: lazyFactory(Transfer) },
  { path: '*', element: lazyFactory(NotFound) },
]
//导出
export default routes
