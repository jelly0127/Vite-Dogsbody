import { FC, ReactElement, useCallback, useMemo, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import Header from './components/Header'
import { GlobalStyle } from './style'
import { useDispatch, useSelector } from 'react-redux'
import useWindowSize from './hooks/isDesktop'
import { updateDesktop } from './redux/reducer'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style'
import React from 'react'
import { ConfigProvider } from 'antd'
import Web3ReactManager from '@/components/Web3ReactManager/index'

const App: FC = () => {
  const element = useRoutes(routes) as ReactElement
  const size = useWindowSize()
  const [Name, setName] = useState('Im jelly')
  const [IsWalletModal, setIsWalletModal] = useState(false)
  const [IsNetWorkModal, setNetWorkModal] = useState(false)

  const dispatch = useDispatch()
  const isDesktop = useSelector((state: { init: { isDesktop: boolean } }) => state.init.isDesktop)
  const isDark = useSelector((state: { init: { isDark: boolean } }) => state.init.isDark)

  useMemo(() => {
    dispatch(updateDesktop(size.isDesktop))
  }, [size.isDesktop])
  const getTheme = useCallback(() => {
    return { ...defaultTheme, isDesktop, isDark }
  }, [isDesktop, isDark])
  const ProviderData = { Name, setName, IsWalletModal, setIsWalletModal, IsNetWorkModal, setNetWorkModal }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F95997',
        },
      }}
    >
      <MyContext.Provider value={ProviderData}>
        <ThemeProvider theme={getTheme()}>
          <GlobalStyle />
          <Web3ReactManager>
            <>
              <Header />
              {element}
            </>
          </Web3ReactManager>
        </ThemeProvider>
      </MyContext.Provider>
    </ConfigProvider>
  )
}

export default App
